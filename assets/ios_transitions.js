/* Zero-Gap Pre-Paint Directional Page & Tab Transitions (runs synchronously in <head>)
 *  - Eliminates blank frame gaps (no e.preventDefault() delay; uses native @view-transition + link prefetch)
 *  - Eliminates 1-frame FOUC snap (sets html[data-flow-dir] & GPU @keyframes BEFORE <body> paints Frame 0)
 *  - Preserves directional choreography: from-right (Next), from-left (Prev/Back), from-down (Drill-down),
 *    from-up (Overview return), and matrix (cold-open of 2D hubs only).
 */
(function () {
  if (window.__CPG_ZERO_GAP_FLOW__) return;
  window.__CPG_ZERO_GAP_FLOW__ = true;

  var STORAGE_KEY = 'cpg-nav-direction';
  var docEl = document.documentElement;

  /* 1. Ensure theme class + matching html background exist BEFORE Frame 0 paints (prevents dark/light flash) */
  try {
    var savedTheme = localStorage.getItem('deck-theme') || 'light';
    if (savedTheme === 'dark') {
      docEl.classList.add('theme-dark');
      docEl.classList.remove('theme-light');
    } else {
      docEl.classList.add('theme-light');
      docEl.classList.remove('theme-dark');
    }
  } catch (e) {}

  var reduceMotion = false;
  try { reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}

  /* 2. Determine incoming flow direction synchronously BEFORE <body> parses */
  var initialMode = '';
  try {
    initialMode = sessionStorage.getItem(STORAGE_KEY) || '';
    sessionStorage.removeItem(STORAGE_KEY);
  } catch (e) {}

  if (!initialMode) {
    var pathNow = window.location.pathname || '';
    var isHub = (pathNow.endsWith('/index.html') || pathNow.endsWith('/') || pathNow.indexOf('personas/index.html') >= 0 || pathNow.endsWith('/personas'));
    initialMode = isHub ? 'matrix' : 'from-down';
  }

  if (!reduceMotion) {
    docEl.setAttribute('data-flow-dir', initialMode);
  }

  /* 3. Inject Pre-Paint GPU CSS Keyframes + Cross-Document View Transition rules synchronously into <head> */
  var TARGETS = [
    '.hero > *', '.start', '.track', '.tile',
    '.hero-grid > *', '.top-row > *', '.m-card', '.flow-card',
    '.cheese-canvas', '.slice-card', '.chart-card', '.sq-card',
    '.coex-box', '.thumb', '.stage-grid > *', '.cards > .card', '.cta-row',
    '.p-hero > *', '.sp-tab', '.per-card',
    '.est-cell', '.board-shell', '.drawer', '.pw-card', '.rt-card',
    '.hero-card', '.bstrip', '.how-strip', '.ag-card',
    '.ab-hero', '.lv-strip', '.arch-stage', '.tech-box',
    '.hb-pane', '.hb-base',
    '.ar-lane', '.ar-card',
    '.mc-plot', '.mc-side > *',
    '.gv-lane', '.gv-low > *',
    '.sf-core', '.sf-list > *', '.sf-stage',
    '.card', '.thesis-card', '.kpi-card', '.arch-card', '.panel', '.flow-bar', '.flow-step', '.ab-kpi', '.kpi-box', '.demo-box', '.spine-card', '.b-row', '.deck-footer',
    '#citeGrid > article', 'main > section > article', '#plan100 > div'
  ];

  function scopedSelector(dir) {
    return TARGETS.map(function (s) { return 'html[data-flow-dir="' + dir + '"] ' + s; }).join(',\n');
  }

  var staggerRules = '';
  for (var n = 1; n <= 12; n++) {
    var dMs = (n - 1) * 28;
    staggerRules += 'html[data-flow-dir] :is(' + TARGETS.join(', ') + '):nth-child(' + n + ') { animation-delay: ' + dMs + 'ms; }\n';
  }

  var css = [
    'html.theme-light { background-color: #F0F5FE; }',
    'html.theme-dark { background-color: #121317; }',
    '@view-transition { navigation: auto; }',
    'header.executive-top-nav, header.masthead, header.mast { view-transition-name: cpg-top-bar; }',
    'aside.floating-dock { view-transition-name: cpg-bottom-dock; }',
    '::view-transition-old(root), ::view-transition-new(root) { mix-blend-mode: normal; }',
    '::view-transition-old(root) { animation: cpgVtFadeOut 95ms ease-out both; z-index: 2; }',
    '::view-transition-new(root) { animation: none; z-index: 1; }',
    '::view-transition-old(cpg-top-bar), ::view-transition-new(cpg-top-bar),',
    '::view-transition-old(cpg-bottom-dock), ::view-transition-new(cpg-bottom-dock) { animation-duration: 60ms; mix-blend-mode: normal; }',
    '@keyframes cpgVtFadeOut { from { opacity: 1; } to { opacity: 0; } }',

    '@keyframes cpgEnterRight {',
    '  from { opacity: 0; transform: translate3d(48px, 0, 0); }',
    '  to   { opacity: 1; transform: translate3d(0, 0, 0); }',
    '}',
    '@keyframes cpgEnterLeft {',
    '  from { opacity: 0; transform: translate3d(-48px, 0, 0); }',
    '  to   { opacity: 1; transform: translate3d(0, 0, 0); }',
    '}',
    '@keyframes cpgEnterDown {',
    '  from { opacity: 0; transform: translate3d(0, 32px, 0); }',
    '  to   { opacity: 1; transform: translate3d(0, 0, 0); }',
    '}',
    '@keyframes cpgEnterUp {',
    '  from { opacity: 0; transform: translate3d(0, -28px, 0); }',
    '  to   { opacity: 1; transform: translate3d(0, 0, 0); }',
    '}',
    '@keyframes cpgEnterMatrix {',
    '  from { opacity: 0; transform: translate3d(0, 18px, 0) scale(0.95); }',
    '  to   { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }',
    '}',

    scopedSelector('from-right') + ' { animation: cpgEnterRight 290ms cubic-bezier(0.22, 1, 0.36, 1) both; will-change: transform, opacity; }',
    scopedSelector('from-left')  + ' { animation: cpgEnterLeft 290ms cubic-bezier(0.22, 1, 0.36, 1) both; will-change: transform, opacity; }',
    scopedSelector('from-down')  + ' { animation: cpgEnterDown 290ms cubic-bezier(0.22, 1, 0.36, 1) both; will-change: transform, opacity; }',
    scopedSelector('from-up')    + ' { animation: cpgEnterUp 280ms cubic-bezier(0.22, 1, 0.36, 1) both; will-change: transform, opacity; }',
    scopedSelector('matrix')     + ' { animation: cpgEnterMatrix 310ms cubic-bezier(0.22, 1, 0.36, 1) both; will-change: transform, opacity; }',
    staggerRules,
    '.card, .thesis-card, .arch-card, .panel, .kpi-box, .ab-kpi, .demo-box, .spine-card { transition: transform 240ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 240ms cubic-bezier(0.22, 1, 0.36, 1), border-color 200ms ease; }',
    '.card:hover, .thesis-card:hover, .arch-card:hover, .kpi-box:hover, .ab-kpi:hover, .demo-box:hover, .spine-card:hover { transform: translateY(-3px); box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08); }',
    '@media (prefers-reduced-motion: reduce) { html[data-flow-dir] * { animation: none !important; transition: none !important; } }'
  ].join('\n');

  var styleEl = document.createElement('style');
  styleEl.id = 'cpg-zero-gap-css';
  styleEl.textContent = css;
  (document.head || docEl).appendChild(styleEl);

  /* Clear data-flow-dir once initial entrance finishes & keep SVG connector lines locked to cards every frame */
  function scheduleFlowCleanup() {
    var startTs = performance.now();
    function syncConnectors(now) {
      if (document.getElementById('treeSvg') || document.getElementById('lines')) {
        window.dispatchEvent(new Event('resize'));
        if (window.__redrawPillarLines) window.__redrawPillarLines();
      }
      if (now - startTs < 660) requestAnimationFrame(syncConnectors);
    }
    requestAnimationFrame(syncConnectors);

    setTimeout(function () {
      docEl.removeAttribute('data-flow-dir');
      window.dispatchEvent(new Event('resize'));
      if (window.__redrawPillarLines) window.__redrawPillarLines();
    }, 680);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', scheduleFlowCleanup);
  } else {
    scheduleFlowCleanup();
  }

  /* 4. Slide Order & Instant Zero-Delay Direction Tagging on Click (NO e.preventDefault() stall!) */
  var SLIDE_ORDER = [
    '00_executive_story.html',
    '01_capital_reality.html',
    '02_value_chain_flows.html',
    '03_swiss_cheese.html',
    '04_talent_velocity_squeeze.html',
    '05_plug_is_an_agent.html',
    'demo_stage.html',
    '06_one_to_many.html',
    'personas/index.html',
    '08_how_agents_are_built.html',
    '09_agent_architecture.html',
    '10_model_choice.html',
    '11_governance.html',
    '10_surfaces.html',
    '12_structural_resilience.html',
    '13_proof_and_cases.html',
    '14_why_google_gartner.html',
    '15_100_days_pov.html'
  ];

  function slideIndexOf(urlPath) {
    var p = String(urlPath || '');
    for (var i = 0; i < SLIDE_ORDER.length; i++) {
      if (p.indexOf(SLIDE_ORDER[i]) >= 0) return i;
    }
    return -1;
  }

  function inferNavDirection(link, destUrl) {
    var explicit = link.getAttribute('data-nav-dir');
    if (explicit) return explicit;

    var id = (link.id || '').toLowerCase();
    var txt = (link.textContent || '').trim().toLowerCase();
    var dstPath = destUrl.pathname;
    var curPath = window.location.pathname;

    if (id === 'docknext' || txt.indexOf('next ') >= 0 || txt.indexOf('start briefing') >= 0 || txt.indexOf('watch live demo') >= 0) {
      return 'from-right';
    }
    if (id === 'dockprev' || txt.indexOf('prev ') >= 0 || txt.indexOf('back ') >= 0 || link.textContent.indexOf('\u2190') >= 0 || link.textContent.indexOf('\u25C0') >= 0) {
      return 'from-left';
    }
    if ((dstPath.endsWith('/index.html') || dstPath.endsWith('/')) && dstPath.indexOf('/personas') < 0) {
      return 'from-up';
    }
    if (link.classList.contains('sw-chip') && curPath.indexOf('agent_blueprint.html') >= 0) {
      var chips = [].slice.call(document.querySelectorAll('.sw-chip'));
      var curChip = document.querySelector('.sw-chip.is-on');
      var curI = chips.indexOf(curChip), nextI = chips.indexOf(link);
      if (curI >= 0 && nextI >= 0 && nextI !== curI) {
        return nextI > curI ? 'from-right' : 'from-left';
      }
    }
    var curS = slideIndexOf(curPath);
    var dstS = slideIndexOf(dstPath);
    if (curS >= 0 && dstS >= 0 && curS !== dstS) {
      return dstS > curS ? 'from-right' : 'from-left';
    }
    if (dstPath.indexOf('pillar.html') >= 0 || dstPath.indexOf('dossier.html') >= 0 || dstPath.indexOf('agent_blueprint.html') >= 0 || dstPath.indexOf('personas/index.html') >= 0) {
      return 'from-down';
    }
    return 'from-right';
  }

  /* Record direction synchronously at click capture — let native browser navigation start at 0ms! */
  document.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var link = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    if (!link || link.target === '_blank' || link.hasAttribute('download')) return;
    var rawHref = link.getAttribute('href') || '';
    if (!rawHref || rawHref.charAt(0) === '#' || rawHref.indexOf('javascript:') === 0) return;

    var dest;
    try { dest = new URL(link.href, window.location.href); } catch (err) { return; }
    if (dest.origin !== window.location.origin) return;
    var mode = inferNavDirection(link, dest);
    try { sessionStorage.setItem(STORAGE_KEY, mode); } catch (err2) {}
  }, true);

  /* 5. Prefetch Next/Prev & hovered internal HTML links so navigation over SSH tunnel is ~0ms instant */
  var prefetched = {};
  function prefetchUrl(href) {
    if (!href || prefetched[href]) return;
    var u;
    try { u = new URL(href, window.location.href); } catch (e) { return; }
    if (u.origin !== window.location.origin) return;
    var clean = u.origin + u.pathname;
    if (prefetched[clean]) return;
    prefetched[clean] = true;
    var l = document.createElement('link');
    l.rel = 'prefetch';
    l.href = clean;
    (document.head || docEl).appendChild(l);
  }

  document.addEventListener('pointerover', function (e) {
    var link = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    if (link && link.target !== '_blank') prefetchUrl(link.href);
  }, { passive: true });

  document.addEventListener('DOMContentLoaded', function () {
    ['#dockNext', '#dockPrev', 'a[href*="01_capital"]', 'a[href*="pillar.html"]', 'a[href*="dossier.html"]'].forEach(function (sel) {
      var el = document.querySelector(sel);
      if (el && el.href) prefetchUrl(el.href);
    });
  });

  /* 6. Smooth In-Page Directional Helper (for Sub-Pillar tabs, Persona chips, & Barrier toggles) */
  function triggerInPageFlow(scope, mode) {
    if (reduceMotion || !scope) return;
    var children = [].slice.call(scope.children || []);
    if (!children.length) children = [scope];
    var dx = mode === 'from-right' ? 36 : (mode === 'from-left' ? -36 : 0);
    var dy = mode === 'from-down' ? 24 : (mode === 'from-up' ? -22 : 0);

    children.slice(0, 12).forEach(function (el, idx) {
      if (!el || !el.animate) return;
      el.getAnimations().forEach(function (a) { a.cancel(); });
      var anim = el.animate([
        { opacity: 0, transform: 'translate3d(' + dx + 'px, ' + dy + 'px, 0)' },
        { opacity: 1, transform: 'translate3d(0, 0, 0)' }
      ], {
        duration: 250,
        delay: idx * 24,
        easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
        fill: 'backwards'
      });
      anim.onfinish = function () { el.style.opacity = ''; el.style.transform = ''; };
    });
  }

  window.triggerDirectionalFlow = triggerInPageFlow;
  window.triggerIosMatrixEnter = function (scope, mode) { triggerInPageFlow(scope, mode || 'from-down'); };
})();
