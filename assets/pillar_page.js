/* Shared renderer for the 6 Supply Chain Pillar pages + Live Demo Cockpits */
window.SC_DEMOS = {
  planning: {
    title: "S&OP Digital War-Room · Live Agent Simulation",
    scenario: "Alert: Tier-1 Snack Plant Line 3 unplanned maintenance (48h) + Diwali regional POS surge (+22% in North Zone).",
    steps: [
      { agent: "Demand Sensing Agent", source: "BigQuery POS + Weather API", text: "Detected +22% POS velocity inflection in North Zone 9 days ahead of baseline statistical forecast." },
      { agent: "Consensus & Gap Agent", source: "SAP IBP + Plant Capacity", text: "Identified 42,000 case shortfall across 4 flagship SKUs; Line 3 outage impacts 68% of A-class grocery orders." },
      { agent: "Digital War-Room Agent", source: "Co-Packer Contracts + SLAs", text: "Evaluated 3 mitigation scenarios: Co-packer shift (+₹18/case, 98.4% OTIF) vs. Inter-DC transfer (94.1% OTIF) vs. Rationing." }
    ],
    decision: "Recommended Action: Shift 28,000 cases to Jaipur Co-Packer + rebalance 14,000 cases from West DC. Protects 98.4% OTIF and saves ₹1.4Cr margin.",
    kpis: ["OTIF Protected: 98.4%", "Margin Saved: ₹1.4 Cr", "Scenario Time: 42 sec"]
  },
  procurement: {
    title: "Disruption Sensing & PO Expediting · Live Agent Simulation",
    scenario: "Alert: Port congestion at Nhava Sheva delays Imported Barrier Film (PO #45092) by 11 days; EDI 856 flagged.",
    steps: [
      { agent: "Disruption Sensing Agent", source: "AIS Port Feeds + SAP Ariba", text: "Flagged vessel delay 14 days prior to plant run-out; 3 packaging plants face line starvation in 9 days." },
      { agent: "PO Expediting Agent", source: "EDI 855/856 + Vendor Portal", text: "Negotiated split-shipment: 40% air-bridge from secondary qualified vendor + 60% ocean reroute." },
      { agent: "Contract Leakage Agent", source: "Contract PDFs + Spend Ledger", text: "Verified force-majeure clause and applied Tier-2 volume rebate credit of ₹6.2L to offset expedite cost." }
    ],
    decision: "Recommended Action: Authorize 40% split-PO #45092-B with secondary qualified supplier (BRC-certified) to prevent plant downtime.",
    kpis: ["Warning Lead: 14 days", "Downtime Avoided: 72 hrs", "Rebate Recovered: ₹6.2L"]
  },
  manufacturing: {
    title: "Changeover Optimizer & Defect Triager · Live Agent Simulation",
    scenario: "Alert: Line 2 packaging sealer halt + 14 SKU allergen/non-allergen weekly schedule awaiting CIP optimization.",
    steps: [
      { agent: "Changeover Optimizer", source: "MES Schedule + Allergen Matrix", text: "Re-sequenced 14 SKUs from allergen-free to peanut/dairy runs, eliminating 3 full CIP washdown cycles (-21% downtime)." },
      { agent: "Disruption Re-sequencer", source: "SCADA/PLC + WIP Buffers", text: "Detected Line 2 halt; re-routed 4.2 tons of perishable dough WIP to idle Line 5 within 2 minutes 15 seconds." },
      { agent: "Visual Defect Triager", source: "Line Camera Frames + QA Spec", text: "Inspected 1,200 frames/min; flagged 2 micro-crimped seal drifts early, preventing a 4-pallet QA hold." }
    ],
    decision: "Recommended Action: Commit optimized allergen run sequence to MES and approve Line 5 WIP transfer.",
    kpis: ["Sanitation Cut: -21%", "WIP Reroute: 2m 15s", "Scrap Prevented: 4 Pallets"]
  },
  warehousing: {
    title: "Multi-Echelon Inventory Rebalancer · Live Agent Simulation",
    scenario: "Alert: East DC has 18 days excess of Beverage SKU-88 (DTE 45 days) while Central DC projects stock-out in 4 days.",
    steps: [
      { agent: "Safety Stock Agent", source: "MEIO Tables + Lead-Time Log", text: "Recalibrated Central DC dynamic buffer (+12%) due to monsoon transit variance." },
      { agent: "SLOB Disposition Agent", source: "WMS Batch Expiry + Run-Rate", text: "Flagged Batch #B992 at 60% shelf-life threshold in East DC; high write-off risk if left stationary." },
      { agent: "Inter-Facility Rebalancer", source: "Network On-Hand + STO Rates", text: "Matched East DC surplus to Central DC demand deficit; net-positive transfer yields +₹14.8L margin recovery." }
    ],
    decision: "Recommended Action: Trigger automated Stock Transfer Order (STO #8821) for 1,800 cases East DC → Central DC.",
    kpis: ["Working Cap Freed: 14%", "Expiry Saved: ₹14.8L", "Regional OOS: 0%"]
  },
  distribution: {
    title: "CPG Dispatch & OTIF War-Room · Live Agent Simulation",
    scenario: "Alert: CFA West stock shortfall on flagship biscuit SKUs + NH-48 closure impacting 4 Modern Trade (Blinkit/DMart) slot deliveries.",
    steps: [
      { agent: "Fair-Share Allocation Agent", source: "CFA ATP Inventory + WD Run-Rates", text: "Executed proportional fair-share split across 38 Wholesale Dealers while protecting 100% of Tier-1 MT/Q-Comm POs." },
      { agent: "MT / Q-Comm Slot & OTIF Copilot", source: "Retailer EDI Portals + SAP Orders", text: "Detected 90-min transit delay on Blinkit dark-store truck; proactively secured revised 4:30 PM dock slot to avoid OTIF penalty." },
      { agent: "Dynamic Rerouter", source: "Google Maps API + City Curfew DB", text: "Recalculated 6 multi-drop distributor & MT routes around NH-48 closure and municipal no-entry hours, saving 8.5% fuel." }
    ],
    decision: "Recommended Action: Post fair-share WD allocations to SAP, confirm Blinkit dock reschedule, and push Maps detours to driver tablets.",
    kpis: ["MT OTIF Protected: 99.1%", "Fuel Saved: 8.5%", "Penalty Avoided: ₹3.8L"]
  },
  reverse: {
    title: "Return Fraud & Circularity Cockpit · Live Agent Simulation",
    scenario: "Alert: High-value electronics/apparel return claim flagged + 320 cases short-dated dairy (DTE 3 days) at Metro stores.",
    steps: [
      { agent: "Return Fraud Sentinel", source: "Return Photos + Pack-Out Video", text: "Multimodal vision detected mismatched serial tag & weight variance (420g vs 890g outbound); blocked auto-refund." },
      { agent: "Dynamic Markdown Agent", source: "DTE Inventory + Hourly POS + ESL", text: "Triggered 35% automated Electronic Shelf Label (ESL) markdown across 18 Metro stores; cleared 94% before expiry." },
      { agent: "RTI Balance Reconciler", source: "RFID Gate Scans + CHEP Ledger", text: "Detected 410 hoarded reusable totes at 3 wholesale nodes and scheduled dynamic backhaul milk-run pickup." }
    ],
    decision: "Recommended Action: Hold fraudulent claim #RET-904 for manual QA, commit ESL markdowns, and dispatch backhaul milk-run.",
    kpis: ["Fraud Blocked: ₹84,000", "Scrap Cut: -32%", "Backhaul Fill: +36%"]
  }
};

window.renderPillarPage = function (pillarId, prevUrl, nextUrl) {
  var pillar = window.SUPPLY_CHAIN_DATA.pillars.find(function (p) { return p.id === pillarId; });
  if (!pillar) return;
  var demo = window.SC_DEMOS[pillarId];

  initDeckChrome({ root: '../', prev: prevUrl, next: nextUrl });

  var main = document.getElementById('pillarMain');
  main.className = 'page-wrap ' + pillar.cssClass;

  var totalAgents = pillar.subprocesses.reduce(function (a, s) { return a + s.items.length; }, 0);

  var html =
    '<div class="page-kick"><i></i>Pillar ' + pillar.num + ' · ' + pillar.lifecycle + '</div>' +
    '<h1 class="page-h1">' + pillar.title + '</h1>' +
    '<p class="page-lede"><b>' + pillar.subtitle + ':</b> ' + pillar.tagline + ' Featuring <b>' + pillar.subprocesses.length + ' sub-processes</b> and <b>' + totalAgents + ' specialized personas &amp; Gemini Enterprise agents</b>.</p>' +
    '<div class="kpi-strip">' +
      pillar.kpis.map(function (k) { return '<div class="kpi-box"><b>' + k.val + '</b><span>' + k.lbl + '</span></div>'; }).join('') +
    '</div>';

  pillar.subprocesses.forEach(function (sub, idx) {
    html +=
      '<section id="sub-' + idx + '" style="margin-top:34px;">' +
        '<div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;">' +
          '<span class="badge-pill badge-solid">0' + (idx + 1) + '</span>' +
          '<h2 style="margin:0;font:600 22px var(--font-display);">' + sub.name + '</h2>' +
        '</div>' +
        '<div class="sub-grid">' +
          sub.items.map(function (item) {
            return (
              '<div class="card card-top-accent">' +
                '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">' +
                  '<span style="font:600 11px var(--font-mono);color:var(--text-muted);">' + item.id + '</span>' +
                '</div>' +
                '<h3 style="margin:0 0 6px;font:600 17px/1.25 var(--font-display);"><a href="../pages/persona_dossier.html?id=' + encodeURIComponent(item.id) + '" style="color:inherit;text-decoration:none;">' + item.persona + ' &rarr;</a></h3>' +
                '<p style="margin:0 0 14px;font-size:13.5px;line-height:1.45;color:var(--text-muted);">' + item.mandate + '</p>' +
                '<div style="padding:11px 12px;border-radius:10px;background:color-mix(in srgb, var(--tc) 8%, var(--surface-sunk));border:1px solid color-mix(in srgb, var(--tc) 25%, transparent);margin-bottom:10px;">' +
                  '<div style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap;">' +
                    '<a href="../pages/agent_details.html?agent=' + encodeURIComponent(item.agent) + '&persona=' + encodeURIComponent(item.id) + '" style="font:600 13.5px var(--font-display);color:var(--ti);text-decoration:none;">⚡ ' + item.agent + ' &rarr;</a>' +
                    ((function(){ var lr=(window.SC_LIVE_AGENT_MAP||{})[(item.agent||'').toLowerCase()]; return lr ? '<span style="display:inline-flex;align-items:center;gap:8px;"><a href="../pages/demo_stage.html?agent='+encodeURIComponent(lr.id)+'" style="font:600 11px var(--font-mono);color:var(--text-muted);text-decoration:none;">&#9654; Demo</a><a href="'+lr.geUrl+'" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:5px;font:700 9.5px/1 var(--font-mono);letter-spacing:.06em;text-transform:uppercase;color:#FFF;background:var(--g-green);border-radius:999px;padding:4px 8px;box-shadow:0 0 0 3px rgba(0,175,87,.16);text-decoration:none;">Live &#8599;</a></span>' : ''; })()) +
                  '</div>' +
                  '<div style="font:500 12.5px var(--font-body);margin-top:4px;"><b>Impact:</b> ' + item.impact + '</div>' +
                '</div>' +
                '<div style="display:flex;flex-wrap:wrap;gap:6px;">' +
                  item.sources.map(function (s) { return '<span style="font:500 11px var(--font-mono);padding:3px 8px;border-radius:6px;background:var(--surface-sunk);border:1px solid var(--border-subtle);">' + s + '</span>'; }).join('') +
                '</div>' +
                (item.dayJourney ? (
                  '<div style="margin-top:14px;padding-top:12px;border-top:1px solid var(--border-subtle);">' +
                    '<a href="javascript:void(0)" class="journey-link" data-persona-id="' + item.id + '" style="display:inline-flex;align-items:center;gap:6px;font:600 13px var(--font-display);color:var(--ti);text-decoration:none;">' +
                      '📅 View Agentic Journey in a Day (Morning → Evening) →' +
                    '</a>' +
                  '</div>'
                ) : '') +
              '</div>'
            );
          }).join('') +
        '</div>' +
      '</section>';
  });

  // Live Demo War-Room
  html +=
    '<section id="demo" style="margin-top:46px;">' +
      '<div class="card card-top-accent" style="padding:26px;">' +
        '<div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;margin-bottom:14px;">' +
          '<div>' +
            '<span class="badge-pill badge-solid">▶ Live Demo War-Room</span>' +
            '<h2 style="margin:8px 0 4px;font:600 22px var(--font-display);">' + demo.title + '</h2>' +
          '</div>' +
          '<button id="runDemoBtn" class="btn-cta" style="border:none;cursor:pointer;">▶ Run Agentic Simulation</button>' +
        '</div>' +
        '<div style="padding:12px 16px;border-radius:12px;background:var(--surface-sunk);border:1px solid var(--border-subtle);font:500 13.5px var(--font-body);margin-bottom:18px;">' +
          '<b>Trigger Event:</b> ' + demo.scenario +
        '</div>' +
        '<div id="demoTrace" style="display:grid;gap:12px;"></div>' +
        '<div id="demoDecision" style="display:none;margin-top:16px;padding:16px;border-radius:12px;background:color-mix(in srgb, var(--tc) 10%, var(--surface));border:1px solid var(--tc);">' +
          '<div style="font:600 14px var(--font-display);color:var(--ti);margin-bottom:6px;">Human-in-the-Loop Approval Ready</div>' +
          '<div style="font-size:14px;line-height:1.5;margin-bottom:12px;">' + demo.decision + '</div>' +
          '<div style="display:flex;flex-wrap:wrap;gap:10px;align-items:center;">' +
            demo.kpis.map(function (k) { return '<span class="badge-pill">' + k + '</span>'; }).join('') +
            '<button id="approveDemoBtn" class="btn-cta" style="margin-left:auto;border:none;cursor:pointer;">✓ Approve &amp; Execute</button>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</section>';

  main.innerHTML = html;

  var traceEl = document.getElementById('demoTrace');
  var decEl = document.getElementById('demoDecision');
  var runBtn = document.getElementById('runDemoBtn');
  var appBtn = document.getElementById('approveDemoBtn');

  function runSimulation() {
    traceEl.innerHTML = '';
    decEl.style.display = 'none';
    runBtn.disabled = true;
    runBtn.textContent = 'Running agents...';
    demo.steps.forEach(function (st, i) {
      setTimeout(function () {
        var row = document.createElement('div');
        row.style.cssText = 'padding:12px 16px;border-radius:12px;background:var(--surface-sunk);border:1px solid var(--border-subtle);';
        row.innerHTML =
          '<div style="display:flex;justify-content:space-between;font:600 12px var(--font-mono);color:var(--ti);margin-bottom:4px;">' +
            '<span>STEP ' + (i + 1) + ' · ⚡ ' + st.agent + '</span>' +
            '<span style="color:var(--text-muted);">Grounded: ' + st.source + '</span>' +
          '</div>' +
          '<div style="font-size:13.5px;line-height:1.45;">' + st.text + '</div>';
        traceEl.appendChild(row);
        if (i === demo.steps.length - 1) {
          decEl.style.display = 'block';
          runBtn.disabled = false;
          runBtn.textContent = '↻ Re-run Simulation';
        }
      }, (i + 1) * 450);
    });
  }

  runBtn.addEventListener('click', runSimulation);
  appBtn.addEventListener('click', function () {
    appBtn.textContent = '✓ Executed in ERP / Control Tower';
    appBtn.style.background = 'var(--g-green)';
  });
  // Auto-populate first step or run on load for instant presenter readiness
  runSimulation();

  // Day-in-the-Life Agentic Journey Modal (for personas with dayJourney)
  var journeyOverlay = document.createElement('div');
  journeyOverlay.id = 'journeyModalBg';
  journeyOverlay.style.cssText = 'position:fixed;inset:0;background:rgba(18,19,23,.58);backdrop-filter:blur(4px);z-index:120;display:none;align-items:center;justify-content:center;padding:20px;';
  journeyOverlay.innerHTML =
    '<div class="' + pillar.cssClass + '" style="background:var(--surface);border:1px solid var(--border-subtle);border-radius:20px;max-width:720px;width:100%;max-height:88vh;overflow-y:auto;padding:26px;box-shadow:var(--shadow-lg);position:relative;">' +
      '<button id="journeyModalClose" style="position:absolute;right:18px;top:18px;border:1px solid var(--border-subtle);background:var(--surface-sunk);color:var(--text);border-radius:999px;width:32px;height:32px;cursor:pointer;font-weight:700;">✕</button>' +
      '<div id="journeyModalBody"></div>' +
    '</div>';
  document.body.appendChild(journeyOverlay);

  var personaLookup = {};
  pillar.subprocesses.forEach(function (sub) {
    sub.items.forEach(function (it) { personaLookup[it.id] = { item: it, sub: sub.name }; });
  });

  main.querySelectorAll('.journey-link').forEach(function (lnk) {
    lnk.addEventListener('click', function (e) {
      e.preventDefault();
      var entry = personaLookup[lnk.dataset.personaId];
      if (!entry || !entry.item.dayJourney) return;
      var it = entry.item;
      var body = document.getElementById('journeyModalBody');
      body.innerHTML =
        '<span class="badge-pill">' + it.id + ' · ' + entry.sub + '</span>' +
        '<h2 style="margin:10px 0 4px;font:600 22px var(--font-display);">' + it.persona + '</h2>' +
        '<p style="color:var(--text-muted);margin:0 0 18px;font-size:14px;">' + it.mandate + '</p>' +
        '<div style="font:600 11px var(--font-mono);text-transform:uppercase;letter-spacing:1px;color:var(--ti);margin-bottom:12px;">Agentic Journey in a Day · Built with Gemini Enterprise</div>' +
        '<div style="display:grid;gap:12px;">' +
          it.dayJourney.map(function (step) {
            return (
              '<div style="padding:14px 16px;border-radius:14px;background:var(--surface-sunk);border:1px solid var(--border-subtle);border-left:4px solid var(--tc);">' +
                '<div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px;margin-bottom:6px;">' +
                  '<span style="font:600 12px var(--font-mono);color:var(--text);">' + step.time + '</span>' +
                '</div>' +
                '<div style="font:600 15px var(--font-display);color:var(--ti);margin-bottom:4px;">⚡ ' + step.agent + '</div>' +
                '<div style="font-size:13.5px;line-height:1.5;color:var(--text);">' + step.desc + '</div>' +
              '</div>'
            );
          }).join('') +
        '</div>';
      journeyOverlay.style.display = 'flex';
    });
  });

  document.getElementById('journeyModalClose').addEventListener('click', function () {
    journeyOverlay.style.display = 'none';
  });
  journeyOverlay.addEventListener('click', function (e) {
    if (e.target === journeyOverlay) journeyOverlay.style.display = 'none';
  });
};
