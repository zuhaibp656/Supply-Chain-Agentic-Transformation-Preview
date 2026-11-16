/* ============================================================================
 * Supply Chain Agentic Transformation — Master Data Corpus
 * Source: Supply Chain Process - Consolidated (6 Pillars, 20 Sub-processes,
 *         60 Personas, 60 Gemini Enterprise Agents)
 * ============================================================================ */

window.SUPPLY_CHAIN_DATA = {
  pillars: [
    {
      id: "planning",
      num: "01",
      title: "Planning & Strategy",
      subtitle: "Supply Chain Planning & Strategy",
      lifecycle: "Core Planning Lifecycle",
      tagline: "Demand signals and strategic S&OP alignment.",
      color: "var(--g-blue)",
      ink: "var(--blue-ink)",
      cssClass: "p-blue",
      page: "pillars/01_planning.html",
      demoTitle: "S&OP Digital War-Room",
      demoDesc: "Live demand-supply reconciliation & OTIF scenario simulation",
      kpis: [
        { val: "7–14d", lbl: "Earlier demand shift detection" },
        { val: "90-day", lbl: "NPI launch forecast error cut" },
        { val: "Days → Hrs", lbl: "IBP pre-read & claim cycle" }
      ],
      subprocesses: [
        {
          name: "Demand Forecasting",
          items: [
            {
              id: "SC-01",
              persona: "Demand Planner / Forecaster",
              mandate: "Synthesizes POS velocity, weather anomalies, and macro trends.",
              impact: "Detects demand shifts 7–14 days earlier",
              agent: "Demand Sensing Agent",
              buildMode: "Low-Code Agent Studio",
              sources: ["BigQuery POS", "Weather API", "SAP IBP"],
              promptHint: "Correlate regional POS velocity with 14-day weather & promo calendars to flag SKU-level demand inflections.",
              tmAndDAgents: [
                {
                  name: "Demand Sensing Agent",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-first",
                  impact: "Detects demand shifts 7–14 days earlier",
                  sources: ["BigQuery POS", "Weather API", "SAP IBP"],
                  dailyTask: "Scans overnight regional secondary sales, monsoon anomalies, and local festival calendars every morning at 08:00 AM.",
                  desc: "Synthesizes secondary POS velocity, monsoon/weather anomalies, and festive calendars to detect regional demand shifts 7–14 days earlier.",
                  promptHint: "Correlate regional POS velocity with 14-day weather & festival calendars to flag branch-level demand inflections."
                },
                {
                  name: "Secondary-to-Primary Translation Agent",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-first",
                  impact: "Cuts WD-to-CFA bullwhip distortion by 18%",
                  sources: ["DMS Secondary", "WD Closing Stock", "CFA Indents"],
                  dailyTask: "Reconciles Wholesale Dealer closing stock & secondary depletion against primary indents before morning CFA allocation.",
                  desc: "Bridges Wholesale Dealer (WD) secondary depletion and closing stock with CFA primary indents to eliminate bullwhip distortion.",
                  promptHint: "Compare WD closing stock days-on-hand against trailing 14-day secondary velocity to normalize primary indent spikes."
                },
                {
                  name: "Trade Scheme & Promo Lift Forecaster",
                  mode: "No-Code Gemini Gem",
                  prio: "prio-next",
                  impact: "+12% incremental trade scheme ROI",
                  sources: ["Scheme Circulars", "Historical Promo Lift", "Margin Tables"],
                  dailyTask: "Simulates GT/MT scheme uplift and post-promo pantry-loading dip prior to monthly trade circular release.",
                  desc: "Models incremental volume lift and post-scheme pantry-loading dip for GT & MT trade promotions before scheme circular release.",
                  promptHint: "Estimate net incremental volume and post-scheme dip for proposed GT slab discounts using historical branch elasticity."
                },
                {
                  name: "Channel-Mix & Q-Comm Spike Predictor",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "Protects 98.5%+ Q-Comm & MT OTIF",
                  sources: ["Q-Comm Dark Stores", "MT POS", "GT Beat Sales"],
                  dailyTask: "Separates Blinkit/Zepto/MT dark-store flash spikes from steady General Trade baseline demand for branch replenishment.",
                  desc: "Separates General Trade, Modern Trade, and Quick Commerce dark-store velocity spikes for accurate branch-level replenishment.",
                  promptHint: "Decompose branch demand into GT, MT, and Q-Comm signals so dark-store promo spikes do not distort GT safety stock."
                },
                {
                  name: "Forecast Bias & CFA Stock-Out Sentinel",
                  mode: "No-Code Gemini Gem",
                  prio: "",
                  impact: "20% fewer regional CFA stock-outs",
                  sources: ["SAP IBP Bias", "CFA ATP", "ASM Alerts"],
                  dailyTask: "Flags persistent SKU-branch over/under-forecasting and pushes proactive alerts to ASMs & CS&L before safety-stock breach.",
                  desc: "Flags recurring SKU-branch forecast bias and alerts ASMs & CS&L before regional CFAs breach safety stock.",
                  promptHint: "Identify top 10 SKU-CFA pairs with >15% 4-week forecast bias and alert CS&L with recommended STO adjustments."
                }
              ]
            },
            {
              id: "SC-02",
              persona: "Commercial Planning Lead",
              mandate: "Identifies unmodeled drivers across eCommerce and retail channels.",
              impact: "Replaces black-box variance models",
              agent: "Forecast Reconciliation",
              buildMode: "No-Code Gemini Gem",
              sources: ["Channel BI", "Google Sheets", "E-Comm Feeds"],
              promptHint: "Explain forecast-vs-actual variance by decomposing price, distribution, and digital promo drivers.",
              tmAndDAgents: [
                {
                  name: "Forecast Reconciliation",
                  mode: "No-Code Gemini Gem",
                  prio: "prio-next",
                  impact: "Replaces black-box variance models",
                  sources: ["Channel BI", "Google Sheets", "E-Comm Feeds"],
                  dailyTask: "Executes core Commercial Planning Lead workflow: Identifies unmodeled drivers across eCommerce and retail channels.",
                  desc: "Identifies unmodeled drivers across eCommerce and retail channels.",
                  promptHint: "Explain forecast-vs-actual variance by decomposing price, distribution, and digital promo drivers."
                },
                {
                  name: "Channel Forecast Consensus Agent",
                  mode: "No-Code Gemini Gem",
                  prio: "prio-first",
                  impact: "4–6% lower GT/MT forecast error",
                  sources: ["DMS Secondary", "MT POS", "SAP IBP"],
                  dailyTask: "Reconciles General Trade, Modern Trade, and Q-Comm channel projections before weekly commercial review.",
                  desc: "Identifies unmodeled drivers across GT, MT, and e-B2B channels and aligns commercial plans with primary supply.",
                  promptHint: "Highlight top SKU-channel gaps between ASM secondary targets and SAP IBP statistical baseline."
                },
                {
                  name: "Branch Revenue & Volume Bridge Bot",
                  mode: "No-Code Gemini Gem",
                  prio: "prio-next",
                  impact: "Saves 6 hrs/week in S&OP prep",
                  sources: ["Branch P&L", "Trade Spend", "IBP Consensus"],
                  dailyTask: "Auto-generates branch-wise volume, mix, and realization bridges ahead of weekly TM&D commercial huddles.",
                  desc: "Builds variance bridges across branch volume, pack mix, and realization to spotlight commercial risks early.",
                  promptHint: "Summarize branch-level revenue vs volume variance drivers for the current month."
                },
                {
                  name: "Regional Festive & Seasonality Calibrator",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "Cuts festive stock-outs by 16%",
                  sources: ["Regional Calendars", "DMS Secondary", "SAP IBP"],
                  dailyTask: "Adjusts branch-level commercial plans for regional festivals, harvest cycles, and school reopening spikes.",
                  desc: "Aligns regional commercial phasing with local festival calendars and branch secondary run-rates.",
                  promptHint: "Calibrate next 6 weeks of branch commercial targets for regional festivals across East, West, North, and South."
                },
                {
                  name: "WD Opening-to-Closing Stock Sanity Bot",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Eliminates phantom channel inventory",
                  sources: ["WD Closing Stock", "Primary Billing", "Secondary Sales"],
                  dailyTask: "Audits distributor stock-in-trade norms to flag artificial quarter-end channel stuffing risks.",
                  desc: "Monitors Wholesale Dealer inventory-days vs secondary depletion to keep commercial plans grounded.",
                  promptHint: "Flag branches where WD days-on-hand grew >25% without matching secondary off-take."
                }
              ]
            },
            {
              id: "SC-03",
              persona: "Brand & Innovation Manager",
              mandate: "Matches launch packaging and attributes to historical lookalikes.",
              impact: "Cuts 90-day launch forecast errors",
              agent: "NPI Demand Profiler",
              buildMode: "No-Code Gemini Gem",
              sources: ["PLM Specs", "Historical NPI DB", "Drive Decks"],
              promptHint: "Match new SKU attributes (pack size, flavor, price tier) to top 5 historical launches to generate Day 1–90 curve.",
              tmAndDAgents: [
                {
                  name: "NPI Demand Profiler",
                  mode: "No-Code Gemini Gem",
                  prio: "prio-next",
                  impact: "Cuts 90-day launch forecast errors",
                  sources: ["PLM Specs", "Historical NPI DB", "Drive Decks"],
                  dailyTask: "Executes core Brand & Innovation Manager workflow: Matches launch packaging and attributes to historical lookalikes.",
                  desc: "Matches launch packaging and attributes to historical lookalikes.",
                  promptHint: "Match new SKU attributes (pack size, flavor, price tier) to top 5 historical launches to generate Day 1–90 curve."
                },
                {
                  name: "NPI Launch Readiness Tracker",
                  mode: "No-Code Gemini Gem",
                  prio: "prio-next",
                  impact: "20% faster NPD shelf-readiness",
                  sources: ["PLM", "Artwork Portal", "Plant Trials"],
                  dailyTask: "Tracks packaging artwork sign-offs, FSSAI label approvals, and pilot plant readiness across launch gates.",
                  desc: "Monitors cross-functional NPD launch milestones from formulation freeze to first CFA dispatch.",
                  promptHint: "Flag any delayed packaging or regulatory sign-offs threatening next month's NPI launch date."
                },
                {
                  name: "Cannibalization & Halo Sentinel",
                  mode: "No-Code Gemini Gem",
                  prio: "",
                  impact: "Cuts post-launch forecast bias by 15%",
                  sources: ["POS Velocity", "Panel Data", "SAP IBP"],
                  dailyTask: "Measures early repeat-purchase velocity and sibling SKU cannibalization during the first 8 weeks post-launch.",
                  desc: "Tracks post-launch repeat rates and parent-SKU cannibalization to recalibrate rolling production plans.",
                  promptHint: "Compare actual Week 1-4 repeat velocity of new SKUs against historical lookalike curves."
                },
                {
                  name: "Regional Pilot Store Velocity Monitor",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "2x faster post-launch course correction",
                  sources: ["MT POS", "Q-Comm Velocity", "Test Markets"],
                  dailyTask: "Tracks daily repeat-rate and trial velocity in launch test cities against category benchmarks.",
                  desc: "Monitors early test-market velocity to guide scale-up vs pack/price tweaks before national rollout.",
                  promptHint: "Compare Week 1–3 repeat velocity in pilot cities against top-quartile category launches."
                },
                {
                  name: "Competitive Pack & Claim Benchmark Gem",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Saves 4 hrs/week in launch prep",
                  sources: ["Market Scans", "Shelf Audits", "Pack Specs"],
                  dailyTask: "Synthesizes competitor pack-price ladders, claims, and gram-weight shifts ahead of brand reviews.",
                  desc: "Keeps brand teams updated on competitor SKU launches, price-point gaps, and packaging innovations.",
                  promptHint: "Summarize recent competitor pack-price changes in our core biscuit and snack segments."
                }
              ]
            }
          ]
        },
        {
          name: "Trade Promotion",
          items: [
            {
              id: "SC-04",
              persona: "Trade Marketing Manager",
              mandate: "Simulates price elasticity, shelf lift, and incremental spend return.",
              impact: "Prevents break-even trade leakage",
              agent: "Promo ROI Simulator",
              buildMode: "Low-Code Agent Studio",
              sources: ["TPM System", "BigQuery POS", "Margin Tables"],
              promptHint: "Simulate net incremental margin and cannibalization for proposed trade scheme slabs before circular approval.",
              tmAndDAgents: [
                {
                  name: "Promo ROI Simulator",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-first",
                  impact: "Prevents break-even trade leakage",
                  sources: ["TPM System", "BigQuery POS", "Margin Tables"],
                  dailyTask: "Executes core Trade Marketing Manager workflow: Simulates price elasticity, shelf lift, and incremental spend return.",
                  desc: "Simulates price elasticity, shelf lift, and incremental spend return.",
                  promptHint: "Simulate net incremental margin and cannibalization for proposed trade scheme slabs before circular approval."
                },
                {
                  name: "Trade Scheme Circular & Slab Auditor",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-first",
                  impact: "+10% scheme budget efficiency",
                  sources: ["Scheme Engine", "DMS Claims", "Branch Targets"],
                  dailyTask: "Validates GT/MT scheme slabs against margin guardrails and checks for overlapping branch-level discounts.",
                  desc: "Audits proposed trade scheme structures for slab cannibalization, margin dilution, and channel conflict.",
                  promptHint: "Flag overlapping GT and MT trade schemes in the same territory that erode net realization."
                },
                {
                  name: "Retail Display & Visibility Compliance Bot",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "18% higher end-cap & POSM compliance",
                  sources: ["Field Rep Photos", "Retailer Audits", "Trade Spend"],
                  dailyTask: "Verifies outlet display photos from field force apps against contracted visibility and chiller-share norms.",
                  desc: "Uses multimodal vision on field rep outlet photos to score POSM, end-cap, and planogram execution.",
                  promptHint: "Audit submitted outlet display photos for contracted shelf share and flag non-compliant stores."
                },
                {
                  name: "GT Slab Elasticity & Margin Guardrail Bot",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "+140 bps GT scheme net realization",
                  sources: ["DMS Secondary", "Slab Elasticity", "Margin Tables"],
                  dailyTask: "Tests proposed General Trade quantity-discount slabs against historical retailer uplift and net margin.",
                  desc: "Prevents over-discounting on inelastic hero SKUs while targeting slabs toward high-elasticity packs.",
                  promptHint: "Simulate margin impact of shifting 3% GT slab discount to combo-pack display incentives."
                },
                {
                  name: "MT / Q-Comm Co-Op Ad & Visibility ROI Tracker",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "15% higher digital/retail media ROAS",
                  sources: ["Q-Comm Ads", "MT POS", "Promo Spend"],
                  dailyTask: "Correlates Blinkit/Zepto banner spends and MT end-cap fees with daily SKU off-take lift.",
                  desc: "Measures incremental sales lift per rupee of Modern Trade and Quick Commerce visibility spend.",
                  promptHint: "Rank Q-Comm and MT visibility investments by incremental margin ROI over the last 30 days."
                }
              ]
            },
            {
              id: "SC-05",
              persona: "Key Account Manager (KAM)",
              mandate: "Creates customized sell-in story decks and joint promotional calendars.",
              impact: "Aligns buyer margins and volume goals",
              agent: "JBP Negotiation Agent",
              buildMode: "No-Code Gemini Gem",
              sources: ["Account P&L", "Drive Templates", "Category Trends"],
              promptHint: "Draft a Joint Business Plan narrative showing retailer gross margin uplift and category growth share.",
              tmAndDAgents: [
                {
                  name: "JBP Negotiation Agent",
                  mode: "No-Code Gemini Gem",
                  prio: "prio-next",
                  impact: "Aligns buyer margins and volume goals",
                  sources: ["Account P&L", "Drive Templates", "Category Trends"],
                  dailyTask: "Executes core Key Account Manager (KAM) workflow: Creates customized sell-in story decks and joint promotional calendars.",
                  desc: "Creates customized sell-in story decks and joint promotional calendars.",
                  promptHint: "Draft a Joint Business Plan narrative showing retailer gross margin uplift and category growth share."
                },
                {
                  name: "MT / Q-Comm OTIF & Fill-Rate Defender",
                  mode: "No-Code Gemini Gem",
                  prio: "prio-first",
                  impact: "Protects 98.5% key-account OTIF",
                  sources: ["Retailer POs", "CFA ATP", "ASN Portal"],
                  dailyTask: "Reviews incoming DMart, Reliance, Blinkit, and Zepto POs every morning against CFA stock and slot cutoffs.",
                  desc: "Flags key-account short-ship risks before dispatch cutoff and coordinates priority stock allocation.",
                  promptHint: "List key-account POs due within 48 hours that face <95% fill rate at assigned CFAs."
                },
                {
                  name: "Key Account Margin & Terms Monitor",
                  mode: "No-Code Gemini Gem",
                  prio: "",
                  impact: "2–3% stronger net JBP margin",
                  sources: ["JBP Contracts", "TOT Rebates", "Invoice ERP"],
                  dailyTask: "Tracks Terms of Trade (TOT) slab achievement, listing fees, and promo co-funding across top MT/Q-Comm banners.",
                  desc: "Monitors real-time TOT rebate accruals and promotional funding burn against annual JBP agreements.",
                  promptHint: "Summarize YTD JBP volume attainment and TOT rebate accrual status by key account."
                },
                {
                  name: "Retailer Range & New-SKU Listing Tracker",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "30% faster key-account assortment rollout",
                  sources: ["MT Assortment", "Store POS", "KAM Plan"],
                  dailyTask: "Tracks store-level distribution build for newly listed SKUs across Modern Trade chains.",
                  desc: "Identifies contracted MT stores that have not yet placed their initial PO for newly listed SKUs.",
                  promptHint: "List contracted MT stores with zero POs for our newly launched SKUs over the last 14 days."
                },
                {
                  name: "Short-Shelf-Life Rejection & Penalty Preventer",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Cuts MT gate rejections by 45%",
                  sources: ["CFA Batch Age", "MT Min-Life", "ASN Portal"],
                  dailyTask: "Verifies every allocated key-account lot meets the retailer's 65%–75% minimum remaining shelf-life rule.",
                  desc: "Blocks non-compliant aged batches before dispatch to prevent costly MT DC gate rejections.",
                  promptHint: "Audit today's open MT dispatches against each banner's minimum remaining shelf-life SLA."
                }
              ]
            },
            {
              id: "SC-06",
              persona: "Revenue / Trade Finance Lead",
              mandate: "Audits scanned proof-of-performance circulars and invoices via OCR.",
              impact: "Resolves claim disputes in hours",
              agent: "Deduction Audit Agent",
              buildMode: "Multimodal + Agent Studio",
              sources: ["Scanned Invoices", "SAP Claims", "Scheme PDFs"],
              promptHint: "Extract claim line items from scanned distributor receipts and cross-verify against approved scheme dates.",
              tmAndDAgents: [
                {
                  name: "Deduction Audit Agent",
                  mode: "Multimodal + Agent Studio",
                  prio: "prio-next",
                  impact: "Resolves claim disputes in hours",
                  sources: ["Scanned Invoices", "SAP Claims", "Scheme PDFs"],
                  dailyTask: "Executes core Revenue / Trade Finance Lead workflow: Audits scanned proof-of-performance circulars and invoices via OCR.",
                  desc: "Audits scanned proof-of-performance circulars and invoices via OCR.",
                  promptHint: "Extract claim line items from scanned distributor receipts and cross-verify against approved scheme dates."
                },
                {
                  name: "WD & MT Claim Settlement Copilot",
                  mode: "Multimodal + Agent Studio",
                  prio: "prio-first",
                  impact: "50% faster distributor claim cycle",
                  sources: ["DMS Claims", "SAP FI", "Scheme Master"],
                  dailyTask: "Matches Wholesale Dealer and Modern Trade credit-note requests against approved scheme circulars and secondary sales.",
                  desc: "Automates claim eligibility checks across WD secondary invoices and MT deduction advices.",
                  promptHint: "Identify duplicate or out-of-window WD scheme claims queued for credit-note approval."
                },
                {
                  name: "Unbilled Trade Accrual & Leakage Watcher",
                  mode: "Multimodal + Agent Studio",
                  prio: "prio-next",
                  impact: "Recovers 1.5–2.5% trade spend leakage",
                  sources: ["GL Accruals", "Deduction Logs", "TOT Agreements"],
                  dailyTask: "Reconciles open customer deductions and unredeemed scheme provisions to prevent quarter-end surprises.",
                  desc: "Continuously audits trade spend accruals against settled credit notes to surface invalid deductions.",
                  promptHint: "Rank open MT/WD trade deductions older than 30 days without matching scheme approval."
                },
                {
                  name: "Distributor Credit-Limit & Overdue Early Warning",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "Cuts blocked primary indents by 35%",
                  sources: ["SAP AR", "WD Indents", "Collection Logs"],
                  dailyTask: "Flags Wholesale Dealers approaching credit limits before morning primary billing waves run.",
                  desc: "Coordinates proactive collections or temporary limit approvals so high-velocity WDs never miss dispatch.",
                  promptHint: "List priority WDs with open indents today that will breach credit limits without collection clearance."
                },
                {
                  name: "Secondary-to-Claim Ratio Anomaly Sentinel",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Prevents 1–2% trade claim over-payouts",
                  sources: ["DMS Secondary", "Claim Portal", "Branch Norms"],
                  dailyTask: "Compares each distributor's monthly scheme claim % against branch benchmarks and secondary sales.",
                  desc: "Surfaces outlier claim ratios across territories for targeted trade finance verification.",
                  promptHint: "Flag distributors whose scheme claim % of secondary sales exceeded branch norm by >300 bps."
                }
              ]
            }
          ]
        },
        {
          name: "S&OP / IBP",
          items: [
            {
              id: "SC-07",
              persona: "S&OP / Supply Planning Dir.",
              mandate: "Reconciles unconstrained demand with factory plant bottleneck limits.",
              impact: "Highlights margin-dilutive imbalances",
              agent: "Consensus & Gap Agent",
              buildMode: "Low-Code Agent Studio",
              sources: ["SAP APO/IBP", "Plant Capacity", "Demand Plan"],
              promptHint: "Identify plant line overloads in the 12-week horizon and rank rebalancing options by contribution margin.",
              tmAndDAgents: [
                {
                  name: "Consensus & Gap Agent",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-first",
                  impact: "Highlights margin-dilutive imbalances",
                  sources: ["SAP APO/IBP", "Plant Capacity", "Demand Plan"],
                  dailyTask: "Executes core S&OP / Supply Planning Dir. workflow: Reconciles unconstrained demand with factory plant bottleneck limits.",
                  desc: "Reconciles unconstrained demand with factory plant bottleneck limits.",
                  promptHint: "Identify plant line overloads in the 12-week horizon and rank rebalancing options by contribution margin."
                },
                {
                  name: "Pre-S&OP Constraint & Gap Summarizer",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-first",
                  impact: "Cuts S&OP cycle prep by 60%",
                  sources: ["SAP IBP", "Plant Capacity", "RCCP"],
                  dailyTask: "Compiles demand-vs-capacity imbalances across plants and co-packers before weekly S&OP alignment.",
                  desc: "Synthesizes constrained supply gaps, line utilization bottlenecks, and inventory coverage into executive briefs.",
                  promptHint: "List top 10 SKU families where constrained supply falls short of consensus demand over the next 6 weeks."
                },
                {
                  name: "Scenario Trade-Off & Margin Simulator",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "+150 bps gross margin protection",
                  sources: ["IBP Scenarios", "Contribution Margin", "Freight Matrix"],
                  dailyTask: "Evaluates overtime shifts, inter-plant sourcing swaps, and priority SKU allocation trade-offs.",
                  desc: "Simulates cost and service impacts of alternate sourcing and overtime production plans during supply crunches.",
                  promptHint: "Compare overtime cost vs inter-region freight cost to close next month's capacity gap."
                },
                {
                  name: "Co-Packer & Alternate Line Surge Allocator",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "Protects 97%+ peak-season fill rate",
                  sources: ["Plant RCCP", "Co-Packer Cap", "SAP IBP"],
                  dailyTask: "Reallocates peak demand spikes between internal plants and regional co-packers weekly.",
                  desc: "Balances internal line utilization with external tolling capacity to close regional supply gaps.",
                  promptHint: "Allocate next month's 15% festive volume surge across plants and qualified co-packers."
                },
                {
                  name: "Master Schedule Stability & Freeze Monitor",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Cuts costly mid-week schedule churn by 30%",
                  sources: ["SAP MPS", "Demand Edits", "Changeover Log"],
                  dailyTask: "Tracks late demand overrides inside the 2-week frozen production window and quantifies changeover loss.",
                  desc: "Enforces MPS time-fence discipline while highlighting true high-margin exceptions.",
                  promptHint: "Quantify changeover hours lost this week due to inside-fence demand changes."
                }
              ]
            },
            {
              id: "SC-08",
              persona: "Supply Chain VP / COO",
              mandate: "Evaluates co-packer shifts and allocation trade-offs during supply outages.",
              impact: "Rapid OTIF impact scenario brief",
              agent: "Digital War-Room Agent",
              buildMode: "Low-Code Agent Studio",
              sources: ["Control Tower", "Co-Packer Contracts", "Customer SLAs"],
              promptHint: "Model 3 allocation scenarios during a Tier-1 plant outage, quantifying OTIF % and margin impact per customer tier.",
              tmAndDAgents: [
                {
                  name: "Digital War-Room Agent",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-first",
                  impact: "Rapid OTIF impact scenario brief",
                  sources: ["Control Tower", "Co-Packer Contracts", "Customer SLAs"],
                  dailyTask: "Executes core Supply Chain VP / COO workflow: Evaluates co-packer shifts and allocation trade-offs during supply outages.",
                  desc: "Evaluates co-packer shifts and allocation trade-offs during supply outages.",
                  promptHint: "Model 3 allocation scenarios during a Tier-1 plant outage, quantifying OTIF % and margin impact per customer tier."
                },
                {
                  name: "Daily Supply Chain Control Tower Brief",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-first",
                  impact: "Same-day executive visibility",
                  sources: ["OTIF KPIs", "Plant OEE", "Inventory DOH"],
                  dailyTask: "Delivers a 08:00 AM mobile brief covering national OTIF, plant OEE anomalies, and critical stock-out risks.",
                  desc: "Consolidates plant, depot, and logistics exceptions into a single prioritized daily executive scorecard.",
                  promptHint: "Generate today's 5-bullet COO brief covering service level, stock-out risks, and freight disruptions."
                },
                {
                  name: "Working Capital & Service Trade-Off Radar",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "5–8% inventory cash release",
                  sources: ["SAP IBP", "Working Capital", "Fill Rate"],
                  dailyTask: "Highlights where excess safety stock can be trimmed without risking A-class SKU fill rates.",
                  desc: "Balances working capital targets against customer service SLAs across regions and product categories.",
                  promptHint: "Identify categories with >45 days of finished-goods cover alongside <95% fill rate elsewhere."
                },
                {
                  name: "Network Risk & Plant Contingency Simulator",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "3x faster crisis response decisions",
                  sources: ["Plant Network", "CFA Stock", "Lane Rates"],
                  dailyTask: "Simulates alternate plant-to-CFA sourcing paths during monsoon floods, strikes, or line outages.",
                  desc: "Provides instant cost-and-service contingency plans when major manufacturing or transit hubs are disrupted.",
                  promptHint: "Simulate CFA coverage and freight cost if Plant West goes offline for 5 days."
                },
                {
                  name: "Quarterly Board & Townhall KPI Narrative Bot",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Saves 8 hrs per executive review",
                  sources: ["OTIF", "Cost-to-Serve", "ESG Metrics"],
                  dailyTask: "Synthesizes quarterly service, inventory, freight, and sustainability trends into board-ready talking points.",
                  desc: "Turns multi-system supply chain KPIs into concise executive narratives with root-cause citations.",
                  promptHint: "Draft a 6-slide executive supply chain KPI summary covering OTIF, working capital, and freight."
                }
              ]
            },
            {
              id: "SC-09",
              persona: "IBP Lead / Chief Planning Off.",
              mandate: "Generates pre-read decks and tracks sign-offs across cross-functional leads.",
              impact: "Reduces deck preparation by days",
              agent: "Executive Copilot",
              buildMode: "No-Code Gemini Gem",
              sources: ["Google Workspace", "S&OP Scorecards", "Action Logs"],
              promptHint: "Synthesize Finance, Sales, and Ops inputs into an executive S&OP pre-read highlighting unresolved risks.",
              tmAndDAgents: [
                {
                  name: "Executive Copilot",
                  mode: "No-Code Gemini Gem",
                  prio: "prio-next",
                  impact: "Reduces deck preparation by days",
                  sources: ["Google Workspace", "S&OP Scorecards", "Action Logs"],
                  dailyTask: "Executes core IBP Lead / Chief Planning Off. workflow: Generates pre-read decks and tracks sign-offs across cross-functional leads.",
                  desc: "Generates pre-read decks and tracks sign-offs across cross-functional leads.",
                  promptHint: "Synthesize Finance, Sales, and Ops inputs into an executive S&OP pre-read highlighting unresolved risks."
                },
                {
                  name: "IBP Action Tracker & Sign-Off Nudger",
                  mode: "No-Code Gemini Gem",
                  prio: "prio-next",
                  impact: "100% on-time IBP gate closure",
                  sources: ["IBP Workflow", "Workspace", "ERP Snapshots"],
                  dailyTask: "Tracks pending demand, supply, and finance sign-offs and nudges owners ahead of IBP lock dates.",
                  desc: "Automates IBP calendar governance, decision logging, and cross-functional assumption sign-offs.",
                  promptHint: "List overdue IBP review tasks and draft concise follow-up reminders for functional leads."
                },
                {
                  name: "Financialized IBP Variance Explainer",
                  mode: "No-Code Gemini Gem",
                  prio: "",
                  impact: "Eliminates manual spreadsheet prep",
                  sources: ["IBP Plan", "AOP Budget", "Standard Cost"],
                  dailyTask: "Translates volume plan changes into revenue, COGS, and working capital deltas against Annual Operating Plan.",
                  desc: "Bridges physical supply plans to financial AOP metrics for monthly leadership reviews.",
                  promptHint: "Explain the COGS and working capital impact of this month's consensus plan update vs AOP."
                },
                {
                  name: "Assumption Drift & Forecast Bias Auditor",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "Improves IBP forecast accountability",
                  sources: ["IBP History", "Actual Sales", "Override Log"],
                  dailyTask: "Tracks which commercial or supply assumptions caused the largest IBP plan vs actual misses.",
                  desc: "Scores historical IBP assumption accuracy by function to eliminate recurring optimism bias.",
                  promptHint: "Rank top 5 manual IBP overrides over the last 3 cycles by forecast accuracy impact."
                },
                {
                  name: "Portfolio Profitability & Capacity Trade-Off Bot",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "+100 bps mix-adjusted EBITDA",
                  sources: ["SKU Margin", "Line Hours", "IBP Demand"],
                  dailyTask: "Ranks constrained-line SKUs by contribution margin per machine-hour ahead of IBP reconciliation.",
                  desc: "Guides IBP leaders to prioritize high-margin SKUs when manufacturing capacity is tight.",
                  promptHint: "Rank SKUs on constrained Line 4 by contribution margin per machine-hour."
                }
              ]
            }
          ]
        },
        {
          name: "Portfolio & SKU",
          items: [
            {
              id: "SC-10",
              persona: "Category Manager",
              mandate: "Scores velocity, plant changeover cost, and shelf revenue yield.",
              impact: "Unlocks tail working capital",
              agent: "SKU Pruning Agent",
              buildMode: "No-Code Gemini Gem",
              sources: ["SKU P&L", "Changeover Matrix", "POS Velocity"],
              promptHint: "Flag bottom-decile SKUs where changeover downtime and working capital exceed net contribution margin.",
              tmAndDAgents: [
                {
                  name: "SKU Pruning Agent",
                  mode: "No-Code Gemini Gem",
                  prio: "prio-next",
                  impact: "Unlocks tail working capital",
                  sources: ["SKU P&L", "Changeover Matrix", "POS Velocity"],
                  dailyTask: "Executes core Category Manager workflow: Scores velocity, plant changeover cost, and shelf revenue yield.",
                  desc: "Scores velocity, plant changeover cost, and shelf revenue yield.",
                  promptHint: "Flag bottom-decile SKUs where changeover downtime and working capital exceed net contribution margin."
                },
                {
                  name: "GT/MT Assortment & Tail-SKU Advisor",
                  mode: "No-Code Gemini Gem",
                  prio: "prio-next",
                  impact: "8–12% working capital reduction",
                  sources: ["DMS Sales", "MT POS", "Changeover Cost"],
                  dailyTask: "Scores slow-moving SKUs across General Trade and Modern Trade outlets for rationalization or channel restriction.",
                  desc: "Identifies low-velocity tail SKUs whose manufacturing changeover and depot holding costs exceed net margin.",
                  promptHint: "Rank bottom 15% SKUs by gross margin after changeover and depot holding cost across GT and MT."
                },
                {
                  name: "Pack-Price Architecture & Mix Optimizer",
                  mode: "No-Code Gemini Gem",
                  prio: "",
                  impact: "+90 bps category gross margin",
                  sources: ["Channel Mix", "Price Ladders", "Elasticity"],
                  dailyTask: "Monitors LUP/multipack/family-pack mix shifts across urban MT and rural GT territories.",
                  desc: "Analyzes pack-size margin contribution and recommends optimal assortment mix by channel.",
                  promptHint: "Compare net contribution per ton across ₹5/₹10 GT packs vs large MT family packs."
                },
                {
                  name: "Regional Outlet Penetration & White-Space Bot",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "+5% core SKU distribution reach",
                  sources: ["DMS Outlet Map", "GT Beat Sales", "Category Index"],
                  dailyTask: "Identifies high-potential GT and MT outlets buying peer SKUs that haven't stocked hero variants.",
                  desc: "Pinpoints outlet-level assortment white spaces for TM&D field sales teams.",
                  promptHint: "List top 500 GT outlets by category turnover missing our top-3 hero SKUs."
                },
                {
                  name: "Promo-to-Baseline Cannibalization Tracker",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Protects core-SKU gross margin",
                  sources: ["MT POS", "DMS Sales", "Promo Log"],
                  dailyTask: "Measures how promotional multipacks cannibalize full-price core packs across channels.",
                  desc: "Tracks net category incrementality vs intra-brand pack cannibalization.",
                  promptHint: "Measure cannibalization of 100g core packs during last month's multipack promotion."
                }
              ]
            },
            {
              id: "SC-11",
              persona: "Lifecycle / Materials Mgr",
              mandate: "Orchestrates transition buffers to sync packaging and formulation cuts.",
              impact: "Eliminates stranded write-offs",
              agent: "PIPO Run-Out Agent",
              buildMode: "Low-Code Agent Studio",
              sources: ["BOM Master", "Packing Inventory", "Open POs"],
              promptHint: "Synchronize Phase-In/Phase-Out cutover dates so old packaging film depletes to zero before new artwork launch.",
              tmAndDAgents: [
                {
                  name: "PIPO Run-Out Agent",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-first",
                  impact: "Eliminates stranded write-offs",
                  sources: ["BOM Master", "Packing Inventory", "Open POs"],
                  dailyTask: "Executes core Lifecycle / Materials Mgr workflow: Orchestrates transition buffers to sync packaging and formulation cuts.",
                  desc: "Orchestrates transition buffers to sync packaging and formulation cuts.",
                  promptHint: "Synchronize Phase-In/Phase-Out cutover dates so old packaging film depletes to zero before new artwork launch."
                },
                {
                  name: "Artwork & RM/PM Obsolescence Sentinel",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "Cuts packaging write-offs by 35%",
                  sources: ["BOM Master", "PM Inventory", "Artwork ECN"],
                  dailyTask: "Checks open packaging material POs and plant stock before engineering change cutovers.",
                  desc: "Prevents stranded laminates, cartons, and pre-printed wrappers during pack-change or regulatory transitions.",
                  promptHint: "Calculate days of old-artwork laminate stock remaining and flag excess POs to freeze."
                },
                {
                  name: "Transition Buffer & Depot Flush Tracker",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Zero transition stock-outs",
                  sources: ["CFA Stock", "Open STOs", "SAP MRP"],
                  dailyTask: "Monitors old-SKU depletion at CFAs to time new-SKU first dispatches cleanly.",
                  desc: "Synchronizes phase-out depletion with phase-in production across depots to avoid dual-SKU clutter.",
                  promptHint: "List CFAs still holding >14 days of phase-out SKU inventory ahead of new-pack cutover."
                },
                {
                  name: "Minimum-Order-Quantity (MOQ) Stranded-Stock Bot",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "Cuts vendor PM write-off claims by 30%",
                  sources: ["Vendor MOQs", "Laminate Stock", "PIPO Dates"],
                  dailyTask: "Flags packaging MOQs that exceed remaining phase-out volume before artwork cutover.",
                  desc: "Prevents buyers from ordering full-MOQ printed films right before a planned pack transition.",
                  promptHint: "Identify open printed-film POs whose MOQ exceeds remaining demand before PIPO cutover."
                },
                {
                  name: "Regulatory & Statutory Cutover Compliance Tracker",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "100% on-time statutory label compliance",
                  sources: ["Legal Gazette", "Artwork PLM", "Plant Runs"],
                  dailyTask: "Tracks statutory MRP, weight, or nutrition label change deadlines across every active SKU.",
                  desc: "Synchronizes legal compliance dates with packaging runs and depot depletion.",
                  promptHint: "List SKUs with upcoming statutory label deadlines lacking approved print cylinders."
                }
              ]
            },
            {
              id: "SC-12",
              persona: "Commercial Finance Director",
              mandate: "Calculates net-net margin across Club, Grocery, and eCommerce packs.",
              impact: "Re-engineers MOQ and pack rules",
              agent: "Cost-to-Serve Diagnostic",
              buildMode: "No-Code Gemini Gem",
              sources: ["ERP Freight", "Channel Rebates", "Pack Specs"],
              promptHint: "Compare true cost-to-serve per case across Club, GT, and eCommerce channels and recommend minimum order rules.",
              tmAndDAgents: [
                {
                  name: "Cost-to-Serve Diagnostic",
                  mode: "No-Code Gemini Gem",
                  prio: "prio-next",
                  impact: "Re-engineers MOQ and pack rules",
                  sources: ["ERP Freight", "Channel Rebates", "Pack Specs"],
                  dailyTask: "Executes core Commercial Finance Director workflow: Calculates net-net margin across Club, Grocery, and eCommerce packs.",
                  desc: "Calculates net-net margin across Club, Grocery, and eCommerce packs.",
                  promptHint: "Compare true cost-to-serve per case across Club, GT, and eCommerce channels and recommend minimum order rules."
                },
                {
                  name: "Channel Cost-to-Serve & Freight Leakage Bot",
                  mode: "No-Code Gemini Gem",
                  prio: "prio-next",
                  impact: "+120 bps channel net margin",
                  sources: ["Freight Bills", "CFA Handling", "Channel P&L"],
                  dailyTask: "Breaks down primary freight, CFA handling, and secondary delivery cost per case across GT, MT, and Q-Comm.",
                  desc: "Uncovers margin-eroding small-drop deliveries, expedited freights, and high-return lanes by channel.",
                  promptHint: "Identify top 10 customer-lane combinations where freight and handling exceed 12% of net sales."
                },
                {
                  name: "SKU Standard-to-Actual Cost Variance Agent",
                  mode: "No-Code Gemini Gem",
                  prio: "",
                  impact: "Real-time COGS variance alerts",
                  sources: ["SAP CO-PA", "Plant Yields", "RM Prices"],
                  dailyTask: "Flags plant yield losses, overtime spikes, and commodity cost variances against standard SKU costs.",
                  desc: "Tracks manufacturing and material price variances daily to protect gross margin targets.",
                  promptHint: "Summarize top 5 SKUs with unfavorable BOM yield or conversion cost variance this week."
                },
                {
                  name: "Small-Drop & Minimum-Order Freight Penalty Bot",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "Cuts uneconomic small-drop deliveries 25%",
                  sources: ["WD Invoices", "Freight Bills", "Drop Size"],
                  dailyTask: "Identifies customers and routes with chronic sub-optimal drop sizes driving high freight-to-sales.",
                  desc: "Quantifies margin dilution from frequent small indents to guide minimum-order-value rules.",
                  promptHint: "List distributors and MT DCs with average drop size <40% of truckload capacity."
                },
                {
                  name: "Working Capital Cash-Conversion Tracker",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "3–5 days faster cash conversion",
                  sources: ["DIO", "DPO", "DSO"],
                  dailyTask: "Monitors inventory days, payables, and receivables across categories to spot cash traps.",
                  desc: "Provides daily cash-conversion visibility linking supply chain inventory to finance targets.",
                  promptHint: "Summarize DIO, DSO, and DPO trends by category and highlight biggest cash-release levers."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "procurement",
      num: "02",
      title: "Sourcing & Procurement",
      subtitle: "Strategic Procurement",
      lifecycle: "Procurement Lifecycle Spine",
      tagline: "Tier vendor networks and EDI order routing.",
      color: "var(--g-purple)",
      ink: "var(--purple-ink)",
      cssClass: "p-purple",
      page: "pillars/02_procurement.html",
      demoTitle: "Disruption Sensing & Expediting",
      demoDesc: "Multi-tier risk radar & autonomous PO split-shipment",
      kpis: [
        { val: "2–3 wks", lbl: "Advance disruption warning" },
        { val: "<48 hrs", lbl: "Supplier onboarding cycle" },
        { val: "~70%", lbl: "Standard PO delays resolved" }
      ],
      subprocesses: [
        {
          name: "Supplier Network",
          items: [
            {
              id: "SC-13",
              persona: "Procurement Dir. / Risk Mgr",
              mandate: "Monitors multi-tier supply feeds, port delays, and vendor financials.",
              impact: "2–3 week advance disruption warning",
              agent: "Disruption Sensing Agent",
              buildMode: "Low-Code Agent Studio",
              sources: ["Port/AIS Feeds", "Supplier News", "SAP Ariba"],
              promptHint: "Scan global port congestion, weather alerts, and Tier-2 vendor filings to flag at-risk raw material shipments.",
              tmAndDAgents: [
                {
                  name: "Disruption Sensing Agent",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-first",
                  impact: "2–3 week advance disruption warning",
                  sources: ["Port/AIS Feeds", "Supplier News", "SAP Ariba"],
                  dailyTask: "Executes core Procurement Dir. / Risk Mgr workflow: Monitors multi-tier supply feeds, port delays, and vendor financials.",
                  desc: "Monitors multi-tier supply feeds, port delays, and vendor financials.",
                  promptHint: "Scan global port congestion, weather alerts, and Tier-2 vendor filings to flag at-risk raw material shipments."
                },
                {
                  name: "Supplier Financial & Geopolitical Alert Agent",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-first",
                  impact: "48-hr earlier disruption response",
                  sources: ["News Feeds", "Port AIS", "Vendor Credit"],
                  dailyTask: "Scans global port congestion, weather alerts, and vendor credit events against critical tier-1/tier-2 BOMs.",
                  desc: "Continuously monitors supplier risk signals and maps affected plants and SKUs before stock-outs occur.",
                  promptHint: "Check all single-sourced packaging and ingredient vendors for port delays or regional disruptions."
                },
                {
                  name: "Alternate Vendor & Spec Qualification Copilot",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "30% faster dual-sourcing",
                  sources: ["Approved Vendor List", "QA Specs", "Lead Times"],
                  dailyTask: "Identifies pre-qualified backup suppliers and available capacity when primary vendors face delays.",
                  desc: "Accelerates emergency allocation shifts to approved secondary suppliers with minimal QA friction.",
                  promptHint: "List pre-approved backup vendors and lead times for our top 5 bottleneck raw materials."
                },
                {
                  name: "Single-Source BOM Vulnerability Mapper",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "100% visibility into tier-1 chokepoints",
                  sources: ["BOM Tree", "Vendor Share", "Revenue At Risk"],
                  dailyTask: "Maps revenue-at-risk across every single-sourced flavor, enzyme, and specialty laminate.",
                  desc: "Quantifies daily EBITDA exposure for single-sourced materials to prioritize qualification.",
                  promptHint: "Rank top 15 single-sourced ingredients and films by weekly finished-goods revenue at risk."
                },
                {
                  name: "Weather & Monsoon Freight Disruption Predictor",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Pre-positions buffer stock 72h early",
                  sources: ["Weather API", "Inbound Lanes", "Vendor Hubs"],
                  dailyTask: "Correlates severe monsoon/cyclone forecasts with key vendor-to-plant inbound corridors.",
                  desc: "Triggers early inbound dispatch pull-forwards before highway closures hit.",
                  promptHint: "Flag inbound raw material shipments transiting flood-alert corridors over the next 72 hours."
                }
              ]
            },
            {
              id: "SC-14",
              persona: "Procurement Operations Lead",
              mandate: "Parses BRC/ISO audits, food-safety filings, and tax registrations.",
              impact: "Cuts onboarding from weeks to <48h",
              agent: "Onboarding & Qual. Agent",
              buildMode: "Multimodal + Gem",
              sources: ["Audit PDFs", "ISO Certs", "Vendor Portal"],
              promptHint: "Verify completeness and expiry of BRC, FSSAI/FDA, and GST/tax filings from uploaded supplier onboarding packets.",
              tmAndDAgents: [
                {
                  name: "Onboarding & Qual. Agent",
                  mode: "Multimodal + Gem",
                  prio: "prio-next",
                  impact: "Cuts onboarding from weeks to <48h",
                  sources: ["Audit PDFs", "ISO Certs", "Vendor Portal"],
                  dailyTask: "Executes core Procurement Operations Lead workflow: Parses BRC/ISO audits, food-safety filings, and tax registrations.",
                  desc: "Parses BRC/ISO audits, food-safety filings, and tax registrations.",
                  promptHint: "Verify completeness and expiry of BRC, FSSAI/FDA, and GST/tax filings from uploaded supplier onboarding packets."
                },
                {
                  name: "Vendor Compliance & Audit Expiry Sentinel",
                  mode: "Multimodal + Gem",
                  prio: "prio-next",
                  impact: "Zero expired supplier certifications",
                  sources: ["SAP Ariba", "ISO/FSSAI Docs", "Vendor Portal"],
                  dailyTask: "Flags upcoming ISO, FSSAI, BRC, and tax certificate expirations and sends automated renewal requests.",
                  desc: "Monitors vendor compliance documents continuously to eliminate manual audit chasing.",
                  promptHint: "List active vendors whose food-safety or statutory certificates expire within 45 days."
                },
                {
                  name: "Supplier Scorecard & SLA Briefing Agent",
                  mode: "Multimodal + Gem",
                  prio: "",
                  impact: "Saves 5 hrs/week on QBR prep",
                  sources: ["GRN OTIF", "QA Rejections", "PO History"],
                  dailyTask: "Compiles vendor OTIF, rejection PPM, and price variance scorecards ahead of supplier review meetings.",
                  desc: "Automates vendor performance scorecards from ERP receipt and quality inspection logs.",
                  promptHint: "Generate a QBR performance summary for our top 10 packaging suppliers."
                },
                {
                  name: "Vendor Master Data & Bank-Change Fraud Guard",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-first",
                  impact: "Zero payment-diversion fraud risk",
                  sources: ["SAP Vendor Master", "GST/PAN", "Bank Audit"],
                  dailyTask: "Audits daily vendor master bank-account and tax-ID edits for anomalies or unverified approvals.",
                  desc: "Protects procurement operations from duplicate vendor creation and bank-detail tampering.",
                  promptHint: "Audit all vendor bank-account or GSTIN changes submitted in the last 7 days."
                },
                {
                  name: "Purchase Requisition (PR) Routing & SLA Copilot",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "40% faster PR-to-PO cycle time",
                  sources: ["SAP PRs", "Approval Matrix", "Catalogs"],
                  dailyTask: "Checks incoming PRs for missing specs or cost-center codes and routes them to right buyers.",
                  desc: "Eliminates PR bounce-backs and speeds up routine indirect and direct PO issuance.",
                  promptHint: "List open PRs stuck >48 hours and identify missing specification or approval steps."
                }
              ]
            },
            {
              id: "SC-15",
              persona: "Chief Sustainability Officer",
              mandate: "Standardizes chain-of-custody certificates (RSPO/FSC) and packaging LCAs.",
              impact: "Automates Scope 3 disclosure audits",
              agent: "ESG & Scope 3 Auditor",
              buildMode: "No-Code Gemini Gem",
              sources: ["RSPO/FSC Certs", "LCA Databases", "Spend Ledger"],
              promptHint: "Audit supplier sustainability certificates and compute Scope 3 emissions factors across direct material categories.",
              tmAndDAgents: [
                {
                  name: "ESG & Scope 3 Auditor",
                  mode: "No-Code Gemini Gem",
                  prio: "prio-next",
                  impact: "Automates Scope 3 disclosure audits",
                  sources: ["RSPO/FSC Certs", "LCA Databases", "Spend Ledger"],
                  dailyTask: "Executes core Chief Sustainability Officer workflow: Standardizes chain-of-custody certificates (RSPO/FSC) and packaging LCAs.",
                  desc: "Standardizes chain-of-custody certificates (RSPO/FSC) and packaging LCAs.",
                  promptHint: "Audit supplier sustainability certificates and compute Scope 3 emissions factors across direct material categories."
                },
                {
                  name: "Scope 3 & Packaging EPR Data Collector",
                  mode: "No-Code Gemini Gem",
                  prio: "prio-next",
                  impact: "65% less manual ESG reporting effort",
                  sources: ["Supplier LCAs", "EPR Filings", "Freight Logs"],
                  dailyTask: "Aggregates supplier emission factors, recycled-content declarations, and freight tonne-km for ESG audits.",
                  desc: "Automates Scope 3 emissions tracking and plastic EPR compliance documentation across suppliers.",
                  promptHint: "Summarize Scope 3 data completeness and missing recycled-content declarations by vendor tier."
                },
                {
                  name: "Deforestation & RSPO/FSC Chain Auditor",
                  mode: "No-Code Gemini Gem",
                  prio: "",
                  impact: "100% traceable palm/paper sourcing",
                  sources: ["RSPO/FSC Certs", "Batch GRNs", "Origin Maps"],
                  dailyTask: "Verifies RSPO and FSC chain-of-custody certificates against incoming raw material and carton lots.",
                  desc: "Validates sustainability certifications on every inbound batch to ensure audit readiness.",
                  promptHint: "Flag any inbound paperboard or palm-derived lots missing valid chain-of-custody certificates."
                },
                {
                  name: "Plastic EPR Credit & Recycler Reconciliation Bot",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "100% audit-ready EPR credit filings",
                  sources: ["CPCB Portal", "Sales Weight", "Recycler Certs"],
                  dailyTask: "Reconciles monthly sold plastic packaging tonnage against registered recycler EPR certificates.",
                  desc: "Automates state-by-state plastic Extended Producer Responsibility compliance tracking.",
                  promptHint: "Compare YTD plastic packaging put-on-market vs verified EPR recycling credits by category."
                },
                {
                  name: "Supplier Decarbonization Roadmap Tracker",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Accelerates Scope 3 net-zero targets",
                  sources: ["Vendor Targets", "RE100", "Emission Factors"],
                  dailyTask: "Tracks top-50 supplier renewable-energy adoption and emission-intensity reductions quarterly.",
                  desc: "Monitors supplier climate commitments against corporate Scope 3 reduction milestones.",
                  promptHint: "Identify top 20 high-emission suppliers lacking verified renewable energy transition plans."
                }
              ]
            }
          ]
        },
        {
          name: "Material & Packaging",
          items: [
            {
              id: "SC-16",
              persona: "Category Sourcing Mgr (Direct)",
              mandate: "Correlates CBOT/Platts feedstocks with depletion to advise hedging.",
              impact: "Optimizes forward-contract windows",
              agent: "Commodity Index Advisor",
              buildMode: "Low-Code Agent Studio",
              sources: ["CBOT/Platts Feeds", "ERP Depletion", "Contract Book"],
              promptHint: "Compare spot feedstock indices against 6-month coverage requirements to recommend forward-buy tranches.",
              tmAndDAgents: [
                {
                  name: "Commodity Index Advisor",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-first",
                  impact: "Optimizes forward-contract windows",
                  sources: ["CBOT/Platts Feeds", "ERP Depletion", "Contract Book"],
                  dailyTask: "Executes core Category Sourcing Mgr (Direct) workflow: Correlates CBOT/Platts feedstocks with depletion to advise hedging.",
                  desc: "Correlates CBOT/Platts feedstocks with depletion to advise hedging.",
                  promptHint: "Compare spot feedstock indices against 6-month coverage requirements to recommend forward-buy tranches."
                },
                {
                  name: "Commodity Price Shock & Coverage Simulator",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-first",
                  impact: "2–4% raw material cost avoidance",
                  sources: ["CBOT / NCDEX", "Open Contracts", "MRP Demand"],
                  dailyTask: "Correlates daily spot/futures commodity moves with forward MRP coverage to recommend contract extensions.",
                  desc: "Simulates landed cost impact of commodity swings and advises optimal forward cover windows.",
                  promptHint: "Evaluate current forward cover vs spot price momentum for edible oils, sugar, and resin."
                },
                {
                  name: "Import Parity & Customs Duty Watchdog",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Protects landed-cost margins",
                  sources: ["FX Rates", "Port Tariffs", "Vendor Quotes"],
                  dailyTask: "Compares domestic vs imported landed costs factoring FX movements, ocean freight, and duty changes.",
                  desc: "Tracks import parity economics daily to guide domestic vs import sourcing splits.",
                  promptHint: "Compare landed plant cost of imported vs domestic resin grades at today's FX and freight rates."
                },
                {
                  name: "Crop & Harvest Yield Supply Outlook Agent",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "Earlier agri-commodity buying signals",
                  sources: ["Mandi Arrivals", "Monsoon Data", "Agri Reports"],
                  dailyTask: "Synthesizes regional mandi arrivals, rainfall deficits, and crop acreage for wheat, sugar, and edible oils.",
                  desc: "Turns agricultural supply signals into actionable forward-buying windows.",
                  promptHint: "Summarize wheat and palm oil harvest arrival trends and 60-day price outlook."
                },
                {
                  name: "Make-vs-Buy & Tolling Margin Analyzer",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "1.5% lower semi-finished cost",
                  sources: ["Commodity Spot", "Conversion Cost", "Vendor Quotes"],
                  dailyTask: "Compares buying refined/processed ingredients vs raw procurement plus external tolling.",
                  desc: "Evaluates processing spreads daily to optimize raw-vs-processed sourcing mix.",
                  promptHint: "Compare spot cost of refined oil vs crude oil + external refining tolling."
                }
              ]
            },
            {
              id: "SC-17",
              persona: "Strategic Sourcing Lead",
              mandate: "Deconstructs packaging specs (resin weight, corrugate, conversion energy).",
              impact: "Fact-based margin leverage in RFPs",
              agent: "Dynamic Should-Cost Agent",
              buildMode: "No-Code Gemini Gem",
              sources: ["CAD/Spec Sheets", "Resin Indices", "RFP Quotes"],
              promptHint: "Build a bottom-up should-cost model from resin weight, corrugate flute grade, and regional conversion rates.",
              tmAndDAgents: [
                {
                  name: "Dynamic Should-Cost Agent",
                  mode: "No-Code Gemini Gem",
                  prio: "prio-next",
                  impact: "Fact-based margin leverage in RFPs",
                  sources: ["CAD/Spec Sheets", "Resin Indices", "RFP Quotes"],
                  dailyTask: "Executes core Strategic Sourcing Lead workflow: Deconstructs packaging specs (resin weight, corrugate, conversion energy).",
                  desc: "Deconstructs packaging specs (resin weight, corrugate, conversion energy).",
                  promptHint: "Build a bottom-up should-cost model from resin weight, corrugate flute grade, and regional conversion rates."
                },
                {
                  name: "RFQ Bid Normalization & Negotiation Copilot",
                  mode: "No-Code Gemini Gem",
                  prio: "prio-next",
                  impact: "3–5% faster sourcing negotiations",
                  sources: ["Vendor Quotes", "Should-Cost", "Historical Spend"],
                  dailyTask: "Normalizes multi-vendor RFQ spreadsheets across incoterms, payment terms, and tooling amortization.",
                  desc: "Benchmarks incoming vendor bids against should-cost models to highlight negotiation levers.",
                  promptHint: "Compare incoming corrugate and laminate quotes against our indexed should-cost benchmark."
                },
                {
                  name: "Raw Material Index Pass-Through Auditor",
                  mode: "No-Code Gemini Gem",
                  prio: "",
                  impact: "Eliminates delayed price rollbacks",
                  sources: ["Index Clauses", "PO Prices", "Platts/ICIS"],
                  dailyTask: "Checks whether supplier invoice prices automatically stepped down when underlying resin or paper indices fell.",
                  desc: "Audits formula-based supplier contracts to ensure timely downward price resets.",
                  promptHint: "Identify active formula contracts overdue for a quarterly index price downward adjustment."
                },
                {
                  name: "Packaging Conversion Cost & Tooling Estimator",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "5–8% savings on custom molds & dies",
                  sources: ["Tooling Specs", "Machine Rates", "Vendor Quotes"],
                  dailyTask: "Deconstructs injection-molding, blow-molding, and print-cylinder quotes into cycle time and resin cost.",
                  desc: "Provides clean engineering should-cost baselines before tooling PO negotiations.",
                  promptHint: "Benchmark vendor cylinder and mold amortization quotes against industry cycle-time norms."
                },
                {
                  name: "Regional Vendor Consolidation & Freight Bundler",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "4% lower inbound packaging freight",
                  sources: ["Plant Locations", "Vendor Hubs", "Inbound Spend"],
                  dailyTask: "Identifies opportunities to source cartons and films from vendors closer to regional plants.",
                  desc: "Balances unit packaging price against inbound freight distance across plants.",
                  promptHint: "Identify carton SKUs currently shipped >500 km that can be localized near regional plants."
                }
              ]
            },
            {
              id: "SC-18",
              persona: "Packaging R&D Engineer",
              mandate: "Evaluates PCR resins and barrier materials against line runnability & taxes.",
              impact: "Mitigates EPR and landfill taxation",
              agent: "Sustainable Packaging Agent",
              buildMode: "No-Code Gemini Gem",
              sources: ["EPR Regulations", "Material Trials", "Line Speed Logs"],
              promptHint: "Evaluate PCR resin alternatives against moisture barrier thresholds and state-level EPR plastic tax liabilities.",
              tmAndDAgents: [
                {
                  name: "Sustainable Packaging Agent",
                  mode: "No-Code Gemini Gem",
                  prio: "prio-next",
                  impact: "Mitigates EPR and landfill taxation",
                  sources: ["EPR Regulations", "Material Trials", "Line Speed Logs"],
                  dailyTask: "Executes core Packaging R&D Engineer workflow: Evaluates PCR resins and barrier materials against line runnability & taxes.",
                  desc: "Evaluates PCR resins and barrier materials against line runnability & taxes.",
                  promptHint: "Evaluate PCR resin alternatives against moisture barrier thresholds and state-level EPR plastic tax liabilities."
                },
                {
                  name: "Line Trial & Barrier Spec Compatibility Agent",
                  mode: "No-Code Gemini Gem",
                  prio: "prio-next",
                  impact: "25% faster sustainable pack trials",
                  sources: ["Spec Library", "Line OEE", "Shelf-Life Lab"],
                  dailyTask: "Matches candidate recyclable mono-material films against historical sealing temperature and WVTR/OTR lab results.",
                  desc: "Predicts packaging line runnability and barrier shelf-life risks before scheduling costly plant trials.",
                  promptHint: "Compare moisture barrier and seal-strength test results for candidate mono-PE laminate specs."
                },
                {
                  name: "EPR Tax & Light-Weighting Optimizer",
                  mode: "No-Code Gemini Gem",
                  prio: "",
                  impact: "Cuts resin usage & EPR fees by 8%",
                  sources: ["EPR Rules", "BOM Weights", "Drop-Test Logs"],
                  dailyTask: "Identifies SKUs where carton GSM or bottle gram-weight can be reduced without transit damage.",
                  desc: "Models packaging weight reductions against transit damage rates and statutory EPR fee slabs.",
                  promptHint: "Rank top 10 high-volume SKUs by potential resin/corrugate light-weighting savings."
                },
                {
                  name: "Shelf-Life Extension & Moisture Barrier Advisor",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "+30 days shelf life in humid zones",
                  sources: ["Lab WVTR", "Monsoon Claims", "Film Specs"],
                  dailyTask: "Correlates regional humidity damage claims with laminate barrier specs to recommend targeted upgrades.",
                  desc: "Matches packaging barrier grades to regional climate zones instead of over-specifying nationally.",
                  promptHint: "Identify coastal/monsoon territories with elevated sogginess claims needing higher WVTR films."
                },
                {
                  name: "Case-Pack & Pallet Ti-Hi Cube Optimizer",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "6–9% more cases per FTL truck",
                  sources: ["Carton Dims", "Pallet Ti-Hi", "Truck Cube"],
                  dailyTask: "Simulates secondary carton dimension tweaks to maximize pallet layer density and truck cube.",
                  desc: "Reduces primary freight cost per unit by eliminating wasted air in shipper cartons and pallets.",
                  promptHint: "Simulate shipper dimension adjustments for top 10 SKUs to improve 32ft FTL cube fill."
                }
              ]
            }
          ]
        },
        {
          name: "Contract & PO Mgmt",
          items: [
            {
              id: "SC-19",
              persona: "Commercial Sourcing / Legal",
              mandate: "Reconciles live spend against negotiated rebate tiers and volume discount scales.",
              impact: "Recovers missed rebates & surcharges",
              agent: "Contract Leakage Agent",
              buildMode: "Low-Code Agent Studio",
              sources: ["Contract PDFs", "SAP Spend", "Credit Notes"],
              promptHint: "Compare YTD cumulative PO volume against supplier contract rebate tiers and draft recovery claims.",
              tmAndDAgents: [
                {
                  name: "Contract Leakage Agent",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-first",
                  impact: "Recovers missed rebates & surcharges",
                  sources: ["Contract PDFs", "SAP Spend", "Credit Notes"],
                  dailyTask: "Executes core Commercial Sourcing / Legal workflow: Reconciles live spend against negotiated rebate tiers and volume discount scales.",
                  desc: "Reconciles live spend against negotiated rebate tiers and volume discount scales.",
                  promptHint: "Compare YTD cumulative PO volume against supplier contract rebate tiers and draft recovery claims."
                },
                {
                  name: "Rebate Tier & Volume Threshold Tracker",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "Captures 100% earned volume rebates",
                  sources: ["Contract Tiers", "YTD Spend", "ERP POs"],
                  dailyTask: "Monitors YTD spend against annual supplier rebate thresholds and alerts buyers near tier breakpoints.",
                  desc: "Tracks contract volume tiers in real time so buyers capture maximum negotiated rebates.",
                  promptHint: "List suppliers within 10% of the next annual volume rebate tier before quarter-end."
                },
                {
                  name: "Off-Contract Maverick Spend Detector",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Cuts maverick spend by 40%",
                  sources: ["SAP POs", "Catalog Rates", "Cost Centers"],
                  dailyTask: "Flags non-catalog PRs/POs issued above contracted rate cards or to non-preferred vendors.",
                  desc: "Audits daily purchase orders to redirect off-contract spend back to preferred agreements.",
                  promptHint: "Summarize this week's non-catalog POs that exceeded contracted unit rates."
                },
                {
                  name: "Contract Renewal & Auto-Escalation Sentinel",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "Zero unwanted auto-renewals",
                  sources: ["CLM Repository", "Expiry Dates", "CPI Clauses"],
                  dailyTask: "Alerts sourcing leads 90 days before supplier contract expirations or automatic price-escalation dates.",
                  desc: "Prevents silent contract rollovers and gives category teams time to re-tender.",
                  promptHint: "List supplier contracts expiring or triggering CPI escalation within the next 90 days."
                },
                {
                  name: "Payment Terms & Early-Pay Discount Optimizer",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Improves DPO & treasury yield",
                  sources: ["AP Terms", "Treasury Rate", "Vendor Invoices"],
                  dailyTask: "Flags inconsistent payment terms across the same vendor and evaluates dynamic discounting offers.",
                  desc: "Harmonizes vendor payment terms and captures risk-free early-payment discounts where accretive.",
                  promptHint: "Find vendors billed on multiple different payment terms across plants."
                }
              ]
            },
            {
              id: "SC-20",
              persona: "Buyer / Procurement Coord.",
              mandate: "Monitors EDI 855/856 delay feeds and orchestrates supplier split-shipments.",
              impact: "Resolves ~70% of standard PO delays",
              agent: "PO Expediting Agent",
              buildMode: "Low-Code Agent Studio",
              sources: ["EDI 855/856", "Plant Run Schedule", "Vendor Email"],
              promptHint: "Detect unacknowledged or delayed ASNs impacting next week's production run and draft split-shipment requests.",
              tmAndDAgents: [
                {
                  name: "PO Expediting Agent",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-first",
                  impact: "Resolves ~70% of standard PO delays",
                  sources: ["EDI 855/856", "Plant Run Schedule", "Vendor Email"],
                  dailyTask: "Executes core Buyer / Procurement Coord. workflow: Monitors EDI 855/856 delay feeds and orchestrates supplier split-shipments.",
                  desc: "Monitors EDI 855/856 delay feeds and orchestrates supplier split-shipments.",
                  promptHint: "Detect unacknowledged or delayed ASNs impacting next week's production run and draft split-shipment requests."
                },
                {
                  name: "Material Shortage & Line-Stop Risk Radar",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-first",
                  impact: "Zero preventable line-stops",
                  sources: ["SAP MRP", "Open POs", "Plant Schedule"],
                  dailyTask: "Cross-checks next 7 days of plant production schedules against inbound RM/PM ETA and QA release status.",
                  desc: "Spots inbound material delays early and recommends air/express split-shipments or schedule swaps.",
                  promptHint: "List all raw/packaging materials with <3 days plant cover and unconfirmed vendor ASNs."
                },
                {
                  name: "Automated Vendor Follow-Up & ASN Bot",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Saves 2 hrs/day in chasing emails",
                  sources: ["Open POs", "Vendor Email", "Gate Schedule"],
                  dailyTask: "Sends automated confirmation nudges for unacknowledged POs and overdue ASNs.",
                  desc: "Automates routine vendor expediting communications and updates ERP delivery dates.",
                  promptHint: "Draft concise expediting follow-ups for POs due within 72 hours missing ASN confirmation."
                },
                {
                  name: "Open-PO Aging & Ghost-Order Cleaner",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "Cleaner MRP & accurate ATP",
                  sources: ["SAP ME2N", "GRN Logs", "Open POs"],
                  dailyTask: "Identifies stale partially-delivered POs that distort MRP supply signals and asks buyers to close them.",
                  desc: "Keeps ERP open-order books clean so planners don't rely on phantom inbound stock.",
                  promptHint: "List open POs past delivery date by >30 days with <10% balance remaining to close."
                },
                {
                  name: "Import Customs & Port Clearance Tracker",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Cuts port demurrage by 40%",
                  sources: ["CHA Feeds", "Bill of Entry", "Container GPS"],
                  dailyTask: "Tracks Bill of Entry filing, customs exam holds, and container free-time expiry at ports.",
                  desc: "Coordinates customs brokers and transporters to clear imported inputs before demurrage kicks in.",
                  promptHint: "Flag imported containers within 48 hours of port free-time expiry."
                }
              ]
            },
            {
              id: "SC-21",
              persona: "Accounts Payable Lead",
              mandate: "Diagnoses price/quantity discrepancies across POs, GRNs, and carrier invoices.",
              impact: "Prevents vendor holds & saves discounts",
              agent: "Three-Way Match Dispute",
              buildMode: "Multimodal + Agent Studio",
              sources: ["SAP PO/GRN", "Invoice PDFs", "Rate Cards"],
              promptHint: "Pinpoint the exact root cause of 3-way match blocks (price variance vs short GRN) and route for rapid clearance.",
              tmAndDAgents: [
                {
                  name: "Three-Way Match Dispute",
                  mode: "Multimodal + Agent Studio",
                  prio: "prio-next",
                  impact: "Prevents vendor holds & saves discounts",
                  sources: ["SAP PO/GRN", "Invoice PDFs", "Rate Cards"],
                  dailyTask: "Executes core Accounts Payable Lead workflow: Diagnoses price/quantity discrepancies across POs, GRNs, and carrier invoices.",
                  desc: "Diagnoses price/quantity discrepancies across POs, GRNs, and carrier invoices.",
                  promptHint: "Pinpoint the exact root cause of 3-way match blocks (price variance vs short GRN) and route for rapid clearance."
                },
                {
                  name: "GRN-to-Invoice Quantity & Rate Reconciler",
                  mode: "Multimodal + Agent Studio",
                  prio: "prio-first",
                  impact: "70% faster invoice exception clearing",
                  sources: ["SAP MIRO", "PO Master", "GRN Logs"],
                  dailyTask: "Auto-classifies blocked invoices by root cause (short GRN, price variance, missing tax code) and routes fixes.",
                  desc: "Pinpoints exact PO/GRN/invoice mismatches and drafts resolution requests for buyers or vendors.",
                  promptHint: "Group today's blocked AP invoices by root cause and highlight those blocking vendor payments."
                },
                {
                  name: "Duplicate Invoice & GST Credit Sentinel",
                  mode: "Multimodal + Agent Studio",
                  prio: "",
                  impact: "Eliminates duplicate payouts & tax loss",
                  sources: ["AP Ledger", "GST Portal", "Vendor Invoices"],
                  dailyTask: "Scans incoming vendor invoices for near-duplicate amounts/dates and missing GST e-invoice matches.",
                  desc: "Prevents duplicate payments and protects input tax credit compliance before payment runs.",
                  promptHint: "Flag invoices in the pending payment run with missing GST match or potential duplicate numbers."
                },
                {
                  name: "GR/IR Clearing & Month-End Accrual Helper",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "3x faster month-end AP close",
                  sources: ["SAP GR/IR", "Open Receipts", "Unbilled POs"],
                  dailyTask: "Reconciles aged Goods Receipt / Invoice Receipt balances ahead of monthly financial close.",
                  desc: "Surfaces unbilled receipts and unreceived invoices so finance closes cleanly on Day 2.",
                  promptHint: "Summarize aged GR/IR balances >60 days requiring write-off or vendor invoice follow-up."
                },
                {
                  name: "Vendor Payment-Status Self-Service Bot",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "70% fewer vendor inquiry emails",
                  sources: ["AP Ledger", "Payment Run", "Vendor Portal"],
                  dailyTask: "Answers supplier invoice-status and TDS/withholding queries automatically with UTR/payment dates.",
                  desc: "Eliminates routine AP helpdesk tickets from suppliers checking payment status.",
                  promptHint: "Draft status replies for today's vendor payment inquiries using live SAP clearing dates."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "manufacturing",
      num: "03",
      title: "Manufacturing & Production",
      subtitle: "Intelligent Shop Floor",
      lifecycle: "Manufacturing Operations Lifecycle",
      tagline: "Optimized runs and zero-defect QA protocols.",
      color: "var(--g-green)",
      ink: "var(--green-ink)",
      cssClass: "p-green",
      page: "pillars/03_manufacturing.html",
      demoTitle: "Changeover & Defect Triager",
      demoDesc: "Allergen run sequencing & high-speed visual QA inspection",
      kpis: [
        { val: "15–25%", lbl: "Sanitation downtime cut" },
        { val: "<3 min", lbl: "WIP line reallocation" },
        { val: "60–80%", lbl: "Faster batch release review" }
      ],
      subprocesses: [
        {
          name: "Production Scheduling",
          items: [
            {
              id: "SC-22",
              persona: "Master Production Scheduler",
              mandate: "Sequences allergen, kosher, and packaging runs to minimize washdowns.",
              impact: "Cuts sanitation downtime by 15–25%",
              agent: "Changeover Optimizer",
              buildMode: "Low-Code Agent Studio",
              sources: ["MES Schedule", "Allergen Matrix", "Open Orders"],
              promptHint: "Sequence weekly SKU runs from allergen-free to allergen-containing to minimize full CIP washdown cycles.",
              tmAndDAgents: [
                {
                  name: "Changeover Optimizer",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-first",
                  impact: "Cuts sanitation downtime by 15–25%",
                  sources: ["MES Schedule", "Allergen Matrix", "Open Orders"],
                  dailyTask: "Executes core Master Production Scheduler workflow: Sequences allergen, kosher, and packaging runs to minimize washdowns.",
                  desc: "Sequences allergen, kosher, and packaging runs to minimize washdowns.",
                  promptHint: "Sequence weekly SKU runs from allergen-free to allergen-containing to minimize full CIP washdown cycles."
                },
                {
                  name: "Finite Schedule & Rush-Order Inserter",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-first",
                  impact: "15% higher schedule adherence",
                  sources: ["SAP PP", "CFA Stock-Outs", "Line Matrix"],
                  dailyTask: "Re-sequences daily plant runs when urgent CFA or key-account stock-out orders arrive mid-week.",
                  desc: "Balances urgent replenishment priorities against allergen/format changeover penalties.",
                  promptHint: "Insert urgent CFA replenishment orders into this week's line schedule with minimum changeover loss."
                },
                {
                  name: "RM/PM Availability Check Before Freeze",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Cuts mid-shift starved runs by 50%",
                  sources: ["BOM", "Plant Warehouse", "QA Hold"],
                  dailyTask: "Verifies every scheduled batch has 100% QA-released ingredients and laminates before locking the shift plan.",
                  desc: "Prevents scheduling production runs that lack QA-cleared raw or packaging materials.",
                  promptHint: "Audit tomorrow's frozen production schedule for any BOM component still under QA hold."
                },
                {
                  name: "Campaign Batch-Size & Shelf-Life Balancer",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "10% fewer changeover & expiry losses",
                  sources: ["SAP PP", "Demand Rate", "Shelf-Life"],
                  dailyTask: "Optimizes campaign run lengths so long runs don't create aged stock for slow-moving SKUs.",
                  desc: "Balances setup efficiency against finished-goods freshness across A/B/C velocity tiers.",
                  promptHint: "Recommend optimal campaign batch sizes for C-class SKUs to avoid >30 days plant aging."
                },
                {
                  name: "Allergen & CIP Washdown Sequencing Optimizer",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Saves 4–6 line hours/week",
                  sources: ["Allergen Matrix", "CIP Times", "Run Queue"],
                  dailyTask: "Sequences non-allergen to allergen runs (e.g., plain to nut/dairy) to cut full CIP washdowns.",
                  desc: "Minimizes wet-clean changeover downtime while upholding strict food allergen protocols.",
                  promptHint: "Sequence this week's 18 SKU runs on Line 2 to minimize full allergen CIP washdowns."
                }
              ]
            },
            {
              id: "SC-23",
              persona: "Shop Floor / Shift Lead",
              mandate: "Detects machine halts and re-routes perishable WIP to alternate lines.",
              impact: "Line reallocation in <3 minutes",
              agent: "Disruption Re-sequencer",
              buildMode: "Low-Code Agent Studio",
              sources: ["SCADA/PLC Alerts", "Line Specs", "WIP Buffers"],
              promptHint: "On Line-2 filler halt, identify compatible lines with idle capacity to absorb perishable WIP within 15 minutes.",
              tmAndDAgents: [
                {
                  name: "Disruption Re-sequencer",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-first",
                  impact: "Line reallocation in <3 minutes",
                  sources: ["SCADA/PLC Alerts", "Line Specs", "WIP Buffers"],
                  dailyTask: "Executes core Shop Floor / Shift Lead workflow: Detects machine halts and re-routes perishable WIP to alternate lines.",
                  desc: "Detects machine halts and re-routes perishable WIP to alternate lines.",
                  promptHint: "On Line-2 filler halt, identify compatible lines with idle capacity to absorb perishable WIP within 15 minutes."
                },
                {
                  name: "Shift Handover & Downtime Logger Gem",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-first",
                  impact: "Saves 30 mins per shift handover",
                  sources: ["SCADA / PLC", "Operator Notes", "OEE Log"],
                  dailyTask: "Summarizes shift output, micro-stops, scrap reasons, and pending maintenance into a clean handover brief.",
                  desc: "Captures structured shift performance and downtime context for incoming supervisors.",
                  promptHint: "Generate a concise Shift-B to Shift-C handover summary with top 3 downtime causes."
                },
                {
                  name: "Line Speed & Scrap Anomaly Coach",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "2–3% OEE uplift on bottleneck lines",
                  sources: ["Line Telemetry", "Weight Checkers", "Reject Logs"],
                  dailyTask: "Alerts floor leads when wrapper rejects, seal defects, or micro-stoppages trend above shift baseline.",
                  desc: "Detects subtle line speed degradation and packaging scrap spikes during live runs.",
                  promptHint: "Highlight packaging lines showing >2% film waste or elevated micro-stops in the last 4 hours."
                },
                {
                  name: "Emergency Maintenance Dispatch & Spares Bot",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "20% faster Mean Time To Repair",
                  sources: ["CMMS", "Spares Store", "Fault Codes"],
                  dailyTask: "Looks up machine fault codes, past repair fixes, and spare-part bin locations the moment a line stops.",
                  desc: "Equips shift technicians with instant troubleshooting history and spares availability.",
                  promptHint: "Pull last 3 repair logs and spare seal bin locations for Wrapper #4 fault code E-112."
                },
                {
                  name: "WIP Hold & Rework Routing Advisor",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Cuts perishable WIP scrap by 25%",
                  sources: ["WIP Sensors", "Line Status", "QA Rules"],
                  dailyTask: "Calculates remaining safe hold-time for dough/batter/mix WIP during unplanned stops and routes rework.",
                  desc: "Prevents mid-process food waste by redirecting stranded WIP to alternate lines before spoilage.",
                  promptHint: "Recommend alternate packaging lines for 800 kg of stranded WIP before 45-min hold limit."
                }
              ]
            },
            {
              id: "SC-24",
              persona: "Plant Operations Manager",
              mandate: "Maps shift skill certifications and fatigue constraints to line speeds.",
              impact: "Prevents certified skill bottlenecks",
              agent: "Labor & Line Balancing",
              buildMode: "No-Code Gemini Gem",
              sources: ["HRMS Rosters", "Skill Matrix", "Shift Plan"],
              promptHint: "Verify every scheduled high-speed packaging shift has certified operators and flag overtime fatigue risks.",
              tmAndDAgents: [
                {
                  name: "Labor & Line Balancing",
                  mode: "No-Code Gemini Gem",
                  prio: "prio-next",
                  impact: "Prevents certified skill bottlenecks",
                  sources: ["HRMS Rosters", "Skill Matrix", "Shift Plan"],
                  dailyTask: "Executes core Plant Operations Manager workflow: Maps shift skill certifications and fatigue constraints to line speeds.",
                  desc: "Maps shift skill certifications and fatigue constraints to line speeds.",
                  promptHint: "Verify every scheduled high-speed packaging shift has certified operators and flag overtime fatigue risks."
                },
                {
                  name: "Multi-Line Shift Roster & Skill Matcher",
                  mode: "No-Code Gemini Gem",
                  prio: "prio-next",
                  impact: "12% lower overtime & idle labor",
                  sources: ["HR Roster", "Skill Matrix", "Run Plan"],
                  dailyTask: "Matches certified operators and relief crews to planned high-speed lines at the start of each shift.",
                  desc: "Optimizes operator deployment across active lines while honoring safety and skill certifications.",
                  promptHint: "Recommend optimal crew re-allocation across Lines 1–6 given today's absenteeism."
                },
                {
                  name: "Daily Plant OEE & Conversion Cost Pulse",
                  mode: "No-Code Gemini Gem",
                  prio: "",
                  impact: "Real-time plant cost visibility",
                  sources: ["Plant OEE", "Power/Fuel", "Labor Hours"],
                  dailyTask: "Tracks daily cases produced per labor-hour and utility intensity across all plant shifts.",
                  desc: "Surfaces shift-level conversion cost variances and labor productivity gaps daily.",
                  promptHint: "Compare yesterday's cases-per-labor-hour and energy intensity across all active lines."
                },
                {
                  name: "Safety Near-Miss & Shift Walk Audit Copilot",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "100% timely safety hazard closure",
                  sources: ["EHS Logs", "Shift Photos", "LOTO Checklist"],
                  dailyTask: "Logs voice/photo near-miss observations from floor walks and tracks corrective action closure.",
                  desc: "Simplifies shop-floor EHS reporting and ensures lockout/tagout compliance.",
                  promptHint: "Summarize open shop-floor safety observations and overdue LOTO audit items for today."
                },
                {
                  name: "Contractor & Temp-Labor Attendance Reconciler",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Eliminates biometric billing leakage",
                  sources: ["Biometric Gate", "Shift Roster", "Contractor Bills"],
                  dailyTask: "Reconciles daily biometric gate punches against planned shift headcount and contractor invoices.",
                  desc: "Automates shift labor attendance verification and flags unscheduled overtime.",
                  promptHint: "Compare yesterday's biometric shift punches against approved line crew allocations."
                }
              ]
            }
          ]
        },
        {
          name: "Capacity Planning",
          items: [
            {
              id: "SC-25",
              persona: "Supply Chain Ops Director",
              mandate: "Assesses CIP utilities, boiler loads, and cold storage holding limits.",
              impact: "Flags facility constraints 3–6 mos out",
              agent: "Bottleneck Diagnostic",
              buildMode: "No-Code Gemini Gem",
              sources: ["Utility Telemetry", "Cold Storage Cap", "IBP Volume"],
              promptHint: "Overlay 6-month peak seasonal production against plant boiler, water CIP, and blast-chiller limits.",
              tmAndDAgents: [
                {
                  name: "Bottleneck Diagnostic",
                  mode: "No-Code Gemini Gem",
                  prio: "prio-next",
                  impact: "Flags facility constraints 3–6 mos out",
                  sources: ["Utility Telemetry", "Cold Storage Cap", "IBP Volume"],
                  dailyTask: "Executes core Supply Chain Ops Director workflow: Assesses CIP utilities, boiler loads, and cold storage holding limits.",
                  desc: "Assesses CIP utilities, boiler loads, and cold storage holding limits.",
                  promptHint: "Overlay 6-month peak seasonal production against plant boiler, water CIP, and blast-chiller limits."
                },
                {
                  name: "Cross-Plant Capacity & Transfer Optimizer",
                  mode: "No-Code Gemini Gem",
                  prio: "prio-next",
                  impact: "8% better network asset utilization",
                  sources: ["Plant OEE", "Co-Packer Cap", "Freight Rates"],
                  dailyTask: "Identifies underutilized regional plants to absorb overflow demand from congested sites.",
                  desc: "Rebalances multi-plant production loads factoring line speeds, utilities, and outbound freight.",
                  promptHint: "Recommend which regional plants can absorb next month's 12% seasonal demand surge."
                },
                {
                  name: "Preventive Maintenance vs Demand Conflict Bot",
                  mode: "No-Code Gemini Gem",
                  prio: "",
                  impact: "Prevents peak-season capacity crunch",
                  sources: ["PM Calendar", "Demand Peak", "Buffer Stock"],
                  dailyTask: "Checks planned boiler, chiller, and line maintenance shutdowns against upcoming promotional peaks.",
                  desc: "Aligns plant maintenance windows with low-demand weeks and pre-build inventory buffers.",
                  promptHint: "Flag any planned line shutdowns overlapping with next month's festive pre-build window."
                },
                {
                  name: "Cold-Room & Plant FG Staging Overflow Radar",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "Zero production halts from full docks",
                  sources: ["Plant FG Store", "Primary Dispatch", "Line Output"],
                  dailyTask: "Alerts ops directors when plant finished-goods bays approach 90% capacity due to delayed primary trucks.",
                  desc: "Coordinates urgent primary dispatch pulls before plant storage congestion slows lines.",
                  promptHint: "Flag plants where projected 48-hour output exceeds available FG staging + outbound truck plan."
                },
                {
                  name: "Multi-Site Yield & Giveaway Benchmarker",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "1% material yield recovery",
                  sources: ["Plant Yields", "BOM Norms", "Scrap Logs"],
                  dailyTask: "Compares actual vs standard ingredient and film yield across sister plants running identical SKUs.",
                  desc: "Highlights best-in-class plant yields to replicate process settings across the network.",
                  promptHint: "Compare laminate waste % and dough yield across all plants producing SKU Family X."
                }
              ]
            },
            {
              id: "SC-26",
              persona: "External Sourcing / CMO Lead",
              mandate: "Models internal conversion costs against co-packer tolling agreements.",
              impact: "Optimizes net gross margin per case",
              agent: "Co-Packer Allocation",
              buildMode: "Low-Code Agent Studio",
              sources: ["CMO Rate Cards", "Plant Conversion", "Freight Matrix"],
              promptHint: "Compare delivered cost per case (conversion + inbound + outbound freight) between internal plants and CMOs.",
              tmAndDAgents: [
                {
                  name: "Co-Packer Allocation",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-first",
                  impact: "Optimizes net gross margin per case",
                  sources: ["CMO Rate Cards", "Plant Conversion", "Freight Matrix"],
                  dailyTask: "Executes core External Sourcing / CMO Lead workflow: Models internal conversion costs against co-packer tolling agreements.",
                  desc: "Models internal conversion costs against co-packer tolling agreements.",
                  promptHint: "Compare delivered cost per case (conversion + inbound + outbound freight) between internal plants and CMOs."
                },
                {
                  name: "Co-Packer RM/PM Reconciliation Agent",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "Cuts tolling material loss by 25%",
                  sources: ["CMO GRNs", "BOM Yield", "Scrap Claims"],
                  dailyTask: "Reconciles company-supplied ingredients and packaging against co-packer finished-goods output.",
                  desc: "Tracks yield variance and scrap claims across external co-packers to prevent material leakage.",
                  promptHint: "Audit monthly BOM consumption vs FG receipts across all active co-packers."
                },
                {
                  name: "CMO Schedule Adherence & Dispatch Tracker",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "15% better co-packer OTIF",
                  sources: ["CMO Portal", "Open POs", "CFA Receipts"],
                  dailyTask: "Monitors co-packer daily production completions against scheduled CFA replenishment dates.",
                  desc: "Flags delayed CMO batches early so planners can adjust CFA allocations.",
                  promptHint: "List co-packer batches running >24 hours behind schedule for priority CFAs."
                },
                {
                  name: "Co-Packer Quality Audit & Hygiene Tracker",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "Consistent external QA standards",
                  sources: ["QA Audits", "LIMS", "Consumer Claims"],
                  dailyTask: "Tracks co-packer GMP audit scores, pest-control logs, and batch defect PPM alongside internal plants.",
                  desc: "Ensures external manufacturing partners maintain identical food-safety and quality compliance.",
                  promptHint: "Summarize quarterly GMP audit findings and open CAPAs across all active co-packers."
                },
                {
                  name: "Co-Packer Tolling Invoice & Rate Auditor",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Eliminates tolling over-billing",
                  sources: ["Tolling Rates", "CMO GRNs", "AP Invoices"],
                  dailyTask: "Verifies co-packer conversion-fee invoices against contracted slab rates and verified good output.",
                  desc: "Audits tolling bills for slab-rate accuracy and deducts excess scrap beyond agreed tolerances.",
                  promptHint: "Audit this month's co-packer tolling invoices against contracted slab rates and GRN output."
                }
              ]
            },
            {
              id: "SC-27",
              persona: "VP Manufacturing Engineering",
              mandate: "Simulates multi-year volume trends to test high-speed line expansions.",
              impact: "Delivers defensible board CapEx ROI",
              agent: "CapEx Simulator",
              buildMode: "No-Code Gemini Gem",
              sources: ["5-Yr Demand Plan", "OEM Quotes", "OEE Benchmarks"],
              promptHint: "Stress-test payback period and IRR of a new high-speed line under conservative and upside volume scenarios.",
              tmAndDAgents: [
                {
                  name: "CapEx Simulator",
                  mode: "No-Code Gemini Gem",
                  prio: "prio-next",
                  impact: "Delivers defensible board CapEx ROI",
                  sources: ["5-Yr Demand Plan", "OEM Quotes", "OEE Benchmarks"],
                  dailyTask: "Executes core VP Manufacturing Engineering workflow: Simulates multi-year volume trends to test high-speed line expansions.",
                  desc: "Simulates multi-year volume trends to test high-speed line expansions.",
                  promptHint: "Stress-test payback period and IRR of a new high-speed line under conservative and upside volume scenarios."
                },
                {
                  name: "Automation & Line Retrofit ROI Modeler",
                  mode: "No-Code Gemini Gem",
                  prio: "prio-next",
                  impact: "2x faster CapEx business cases",
                  sources: ["Line OEE", "Labor Cost", "Vendor Quotes"],
                  dailyTask: "Builds payback and IRR models for end-of-line case packers, palletizers, and vision systems.",
                  desc: "Evaluates engineering CapEx proposals using live plant downtime, labor, and scrap baselines.",
                  promptHint: "Model 3-year IRR for auto-case-packing retrofit on high-volume biscuit/snack lines."
                },
                {
                  name: "Energy & Utilities Intensity Benchmarker",
                  mode: "No-Code Gemini Gem",
                  prio: "",
                  impact: "5–7% plant utility cost savings",
                  sources: ["Sub-Meters", "Steam/Chiller", "Output Logs"],
                  dailyTask: "Benchmarks kWh and steam per ton across similar lines to pinpoint inefficient compressors or ovens.",
                  desc: "Identifies utility waste across plants and quantifies energy-saving engineering upgrades.",
                  promptHint: "Rank plants by kWh per ton produced and highlight top energy-efficiency opportunities."
                },
                {
                  name: "New-Line Commissioning & Ramp-Up Tracker",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "20% faster vertical ramp to rated OEE",
                  sources: ["FAT/SAT Logs", "Ramp Curve", "Vendor SLAs"],
                  dailyTask: "Tracks daily commissioning punch-list items and OEE ramp vs vendor performance guarantees.",
                  desc: "Accelerates new line stabilization and documents vendor SLA shortfalls during commissioning.",
                  promptHint: "Compare Week 1–6 OEE ramp on the new line against contracted vendor performance curve."
                },
                {
                  name: "Equipment Lifecycle & Obsolete-Spares Radar",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Prevents multi-week breakdown waits",
                  sources: ["Asset Registry", "OEM EOL", "Spares Stock"],
                  dailyTask: "Flags aging PLCs, drives, and critical motors approaching OEM end-of-life without spares cover.",
                  desc: "Guides multi-year engineering replacement CapEx before obsolete components halt lines.",
                  promptHint: "List critical packaging-line PLCs and drives flagged as OEM end-of-life with zero spares."
                }
              ]
            }
          ]
        },
        {
          name: "Quality & Compliance",
          items: [
            {
              id: "SC-28",
              persona: "QA Manager / Line Inspector",
              mandate: "Inspects high-speed video frames for crimped seals, lot codes, and labels.",
              impact: "Prevents full pallet scrap & holds",
              agent: "Visual Defect Triager",
              buildMode: "Multimodal Vision",
              sources: ["Line Camera Frames", "QA Spec Book", "MES Hold Log"],
              promptHint: "Inspect captured package images for seal crimping defects, smeared date codes, or skewed labels.",
              tmAndDAgents: [
                {
                  name: "Visual Defect Triager",
                  mode: "Multimodal Vision",
                  prio: "prio-next",
                  impact: "Prevents full pallet scrap & holds",
                  sources: ["Line Camera Frames", "QA Spec Book", "MES Hold Log"],
                  dailyTask: "Executes core QA Manager / Line Inspector workflow: Inspects high-speed video frames for crimped seals, lot codes, and labels.",
                  desc: "Inspects high-speed video frames for crimped seals, lot codes, and labels.",
                  promptHint: "Inspect captured package images for seal crimping defects, smeared date codes, or skewed labels."
                },
                {
                  name: "In-Process Weight & Seal Drift Sentinel",
                  mode: "Multimodal Vision",
                  prio: "prio-first",
                  impact: "Cuts giveaway & seal rejects by 30%",
                  sources: ["Checkweighers", "Vision Cam", "SPC Logs"],
                  dailyTask: "Monitors real-time checkweigher trends and seal integrity alerts across high-speed packaging lines.",
                  desc: "Flags mean-weight drift or intermittent seal defects before batches fail finished-goods QA.",
                  promptHint: "Identify lines with >1.5% overfill giveaway or rising seal-reject counts in today's run."
                },
                {
                  name: "QA Hold Release & Disposition Copilot",
                  mode: "Multimodal Vision",
                  prio: "",
                  impact: "40% faster QA lot release",
                  sources: ["LIMS", "Micro Logs", "WMS Hold"],
                  dailyTask: "Tracks lab test completion for held lots and drafts disposition recommendations for QA sign-off.",
                  desc: "Eliminates finished-goods dispatch delays caused by slow manual QA hold clearance.",
                  promptHint: "List finished-goods lots on QA hold whose lab results cleared and are awaiting ERP release."
                },
                {
                  name: "Incoming Raw Material COA & Lab Verifier",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "50% faster incoming QA clearance",
                  sources: ["Vendor COAs", "Spec Limits", "LIMS"],
                  dailyTask: "Extracts moisture, peroxide value, and micro parameters from vendor Certificate of Analysis PDFs.",
                  desc: "Auto-compares incoming ingredient COA values against internal specs to speed up lab release.",
                  promptHint: "Parse today's incoming flour and oil COA PDFs and flag any borderline spec values."
                },
                {
                  name: "Metal Detector & X-Ray Calibration Auditor",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "100% CCP audit compliance",
                  sources: ["CCP Logs", "Test Piece Scans", "Shift QA"],
                  dailyTask: "Verifies hourly metal-detector and X-ray test-piece checks are logged for every active food line.",
                  desc: "Catches missed Critical Control Point (CCP) verifications in real time during shifts.",
                  promptHint: "Audit today's shift CCP verification logs for any missed hourly metal-detector checks."
                }
              ]
            },
            {
              id: "SC-29",
              persona: "Regulatory Compliance Lead",
              mandate: "Parses BPR and COA documents to flag pasteurization & CCP deviations.",
              impact: "60–80% faster batch release review",
              agent: "Batch Record Auditor",
              buildMode: "Multimodal + Agent Studio",
              sources: ["Batch Prod Records", "Vendor COAs", "HACCP Limits"],
              promptHint: "Audit scanned Batch Production Records against CCP temperature and hold-time limits prior to QA sign-off.",
              tmAndDAgents: [
                {
                  name: "Batch Record Auditor",
                  mode: "Multimodal + Agent Studio",
                  prio: "prio-next",
                  impact: "60–80% faster batch release review",
                  sources: ["Batch Prod Records", "Vendor COAs", "HACCP Limits"],
                  dailyTask: "Executes core Regulatory Compliance Lead workflow: Parses BPR and COA documents to flag pasteurization & CCP deviations.",
                  desc: "Parses BPR and COA documents to flag pasteurization & CCP deviations.",
                  promptHint: "Audit scanned Batch Production Records against CCP temperature and hold-time limits prior to QA sign-off."
                },
                {
                  name: "Label & FSSAI/Regulatory Claims Checker",
                  mode: "Multimodal + Agent Studio",
                  prio: "prio-next",
                  impact: "Zero regulatory label recalls",
                  sources: ["Artwork PDFs", "FSSAI Rules", "BOM Allergens"],
                  dailyTask: "Cross-checks packaging artwork nutrition panels, allergen declarations, and MRP/net-weight text against BOMs.",
                  desc: "Uses multimodal document inspection to verify regulatory compliance on every artwork revision.",
                  promptHint: "Verify allergen, ingredient order, and nutritional claims on the new artwork PDF against SAP BOM."
                },
                {
                  name: "Mock Recall & Traceability Drill Agent",
                  mode: "Multimodal + Agent Studio",
                  prio: "",
                  impact: "Traceability in <5 mins vs 4 hrs",
                  sources: ["SAP Batch", "CFA Dispatch", "WD Invoices"],
                  dailyTask: "Traces any raw material lot forward through plant batches, CFAs, and wholesale dealers instantaneously.",
                  desc: "Provides instant end-to-end batch genealogy for regulatory audits and quality holds.",
                  promptHint: "Trace ingredient lot #X forward to all finished batches, CFAs, and billed distributors."
                },
                {
                  name: "FSSAI / Legal Metrology Change Radar",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "Zero missed regulatory deadlines",
                  sources: ["FSSAI Gazette", "Legal Metrology", "SKU Master"],
                  dailyTask: "Monitors food-safety and packaging-law notifications and maps impacted SKUs and artworks.",
                  desc: "Translates new regulatory circulars into SKU-level compliance action checklists.",
                  promptHint: "Map latest FSSAI labeling notification against our active beverage and snack SKUs."
                },
                {
                  name: "HACCP & Environmental Swab Trend Sentinel",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Proactive hygiene intervention",
                  sources: ["LIMS Swabs", "Zone Map", "Sanitation Log"],
                  dailyTask: "Tracks environmental pathogen and allergen swab trends across plant zones to spot early drift.",
                  desc: "Detects subtle sanitation drift before finished-product batches are affected.",
                  promptHint: "Highlight plant zones showing rising APC/yeast swab counts over the last 4 weeks."
                }
              ]
            },
            {
              id: "SC-30",
              persona: "Continuous Improvement Lead",
              mandate: "Correlates consumer complaints with ingredient lots and machine telemetry.",
              impact: "Speeds 5-Why investigation closures",
              agent: "RCA & CAPA Copilot",
              buildMode: "No-Code Gemini Gem",
              sources: ["Complaint Logs", "Lot Genealogy", "CAPA Archive"],
              promptHint: "Trace a cluster of consumer quality complaints back to common raw material lots, shifts, and line parameters.",
              tmAndDAgents: [
                {
                  name: "RCA & CAPA Copilot",
                  mode: "No-Code Gemini Gem",
                  prio: "prio-next",
                  impact: "Speeds 5-Why investigation closures",
                  sources: ["Complaint Logs", "Lot Genealogy", "CAPA Archive"],
                  dailyTask: "Executes core Continuous Improvement Lead workflow: Correlates consumer complaints with ingredient lots and machine telemetry.",
                  desc: "Correlates consumer complaints with ingredient lots and machine telemetry.",
                  promptHint: "Trace a cluster of consumer quality complaints back to common raw material lots, shifts, and line parameters."
                },
                {
                  name: "Consumer Complaint & Lot Correlation Bot",
                  mode: "No-Code Gemini Gem",
                  prio: "prio-next",
                  impact: "50% faster defect root-cause isolation",
                  sources: ["CRM Complaints", "Batch Logs", "Transit Data"],
                  dailyTask: "Clusters consumer freshness, breakage, and packaging complaints by plant line, shift, and transit lane.",
                  desc: "Pinpoints whether quality complaints stem from manufacturing shifts, packaging lots, or transit heat.",
                  promptHint: "Cluster last 30 days of freshness complaints by plant batch, CFA, and transit duration."
                },
                {
                  name: "CAPA Effectiveness & Kaizen Tracker",
                  mode: "No-Code Gemini Gem",
                  prio: "",
                  impact: "35% fewer repeat quality incidents",
                  sources: ["CAPA Log", "Line Audits", "Defect PPM"],
                  dailyTask: "Verifies whether closed corrective actions actually sustained lower defect rates over the next 60 days.",
                  desc: "Monitors post-CAPA defect trends and flags recurring issues for engineering escalation.",
                  promptHint: "Audit CAPAs closed 60 days ago and flag any lines where defect PPM has crept back up."
                },
                {
                  name: "OEE Loss-Tree & Micro-Stop Pareto Builder",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "Focuses CI teams on top 20% losses",
                  sources: ["SCADA Logs", "Downtime Codes", "Shift OEE"],
                  dailyTask: "Builds weekly plant loss-trees separating changeover, breakdown, speed loss, and micro-stops.",
                  desc: "Automates Lean/TPM loss-tree analysis across plants without manual spreadsheet crunching.",
                  promptHint: "Generate a 30-day OEE loss-tree Pareto for Plant North showing top 5 speed-loss drivers."
                },
                {
                  name: "Best-Practice Replication & SOP Recommender",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Accelerates cross-plant CI scaling",
                  sources: ["Kaizen Library", "Plant KPIs", "SOP Docs"],
                  dailyTask: "Matches a plant's recurring bottleneck with proven Kaizen fixes already implemented at sister sites.",
                  desc: "Connects CI engineers with verified internal solutions from across the manufacturing network.",
                  promptHint: "Search our Kaizen library for proven fixes to vertical form-fill-seal jaw sticking."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "warehousing",
      num: "04",
      title: "Inventory & Warehousing",
      subtitle: "Dynamic Fulfillment",
      lifecycle: "Inventory & DC Lifecycle Spine",
      tagline: "Multi-node staging and enterprise visibility.",
      color: "var(--g-teal, #0097A7)",
      ink: "#00796B",
      cssClass: "p-teal",
      page: "pillars/04_warehousing.html",
      demoTitle: "Multi-Echelon Rebalancer",
      demoDesc: "Dynamic safety stock, SLOB disposition & DC slotting",
      kpis: [
        { val: "10–18%", lbl: "Working capital reduction" },
        { val: "15–30%", lbl: "Picker transit time saved" },
        { val: "<24 hrs", lbl: "Sellable return restocking" }
      ],
      subprocesses: [
        {
          name: "Positioning & Optimization",
          items: [
            {
              id: "SC-31",
              persona: "Inventory Optimization Lead",
              mandate: "Recalibrates multi-echelon buffers using live lead-time and demand variance.",
              impact: "Cuts working capital by 10–18%",
              agent: "Safety Stock Agent",
              buildMode: "Low-Code Agent Studio",
              sources: ["MEIO Tables", "Supplier Lead Times", "Service SLAs"],
              promptHint: "Recompute dynamic safety stock targets per DC node based on trailing 30-day lead-time volatility.",
              tmAndDAgents: [
                {
                  name: "Safety Stock Agent",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-first",
                  impact: "Cuts working capital by 10–18%",
                  sources: ["MEIO Tables", "Supplier Lead Times", "Service SLAs"],
                  dailyTask: "Executes core Inventory Optimization Lead workflow: Recalibrates multi-echelon buffers using live lead-time and demand variance.",
                  desc: "Recalibrates multi-echelon buffers using live lead-time and demand variance.",
                  promptHint: "Recompute dynamic safety stock targets per DC node based on trailing 30-day lead-time volatility."
                },
                {
                  name: "CFA & WD Safety Stock Norm Recalibrator",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-first",
                  impact: "10–14% lower depot working capital",
                  sources: ["SAP IBP", "CFA Lead Times", "WD Demand"],
                  dailyTask: "Recalculates dynamic min/max safety stock norms across regional CFAs and key Wholesale Dealers weekly.",
                  desc: "Adjusts CFA and distributor safety buffers based on live plant transit variability and secondary velocity.",
                  promptHint: "Recommend updated safety-stock days for top 50 SKUs across regional CFAs."
                },
                {
                  name: "Freshness vs Service-Level Buffer Balancer",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Cuts short-shelf-life write-offs by 22%",
                  sources: ["Shelf-Life Rules", "CFA DOH", "MT Min-Life"],
                  dailyTask: "Flags food/perishable SKUs where current safety stock norms risk breaching Modern Trade minimum-life norms.",
                  desc: "Optimizes inventory targets for shelf-life-sensitive SKUs so depots never age out past MT acceptance.",
                  promptHint: "Identify perishable SKUs with >60% shelf-life consumed while still sitting in CFA safety stock."
                },
                {
                  name: "ABC-XYZ Segmentation & Policy Tuner",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "Higher service on A-class SKUs",
                  sources: ["SKU Revenue", "Demand CV", "SAP IBP"],
                  dailyTask: "Re-classifies SKUs quarterly by revenue velocity (ABC) and demand volatility (XYZ) to tune service targets.",
                  desc: "Ensures working capital is concentrated on high-velocity/high-margin SKUs rather than slow tail items.",
                  promptHint: "Re-run ABC-XYZ classification across all CFAs and flag SKUs that shifted tiers."
                },
                {
                  name: "Transit-Time Variability & Lead-Time Updater",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Eliminates stale ERP planning lead times",
                  sources: ["TMS Actuals", "SAP MRP", "Lane History"],
                  dailyTask: "Compares ERP static lane lead times against actual 90-day plant-to-CFA transit durations.",
                  desc: "Prevents chronic stock-outs caused by understated monsoon or highway transit times in SAP.",
                  promptHint: "List plant-to-CFA lanes where actual P90 transit time exceeds SAP planned lead time by >1 day."
                }
              ]
            },
            {
              id: "SC-32",
              persona: "Inventory Controller / Buyer",
              mandate: "Analyzes shelf-life risk and triggers promotional bundles or liquidations.",
              impact: "Prevents expired stock write-offs",
              agent: "SLOB Disposition Agent",
              buildMode: "No-Code Gemini Gem",
              sources: ["WMS Batch Expiry", "Run-Rate", "Promo Playbook"],
              promptHint: "Flag inventory batches approaching 60% shelf-life threshold and recommend targeted wholesale bundle clearances.",
              tmAndDAgents: [
                {
                  name: "SLOB Disposition Agent",
                  mode: "No-Code Gemini Gem",
                  prio: "prio-next",
                  impact: "Prevents expired stock write-offs",
                  sources: ["WMS Batch Expiry", "Run-Rate", "Promo Playbook"],
                  dailyTask: "Executes core Inventory Controller / Buyer workflow: Analyzes shelf-life risk and triggers promotional bundles or liquidations.",
                  desc: "Analyzes shelf-life risk and triggers promotional bundles or liquidations.",
                  promptHint: "Flag inventory batches approaching 60% shelf-life threshold and recommend targeted wholesale bundle clearances."
                },
                {
                  name: "Near-Expiry Depot Lot Early-Warning Agent",
                  mode: "No-Code Gemini Gem",
                  prio: "prio-first",
                  impact: "25–35% lower expiry write-offs",
                  sources: ["WMS Batch Age", "CFA Stock", "Sales Velocity"],
                  dailyTask: "Scans all CFA and plant batches within 90/60/45 days of expiry against trailing depletion rates.",
                  desc: "Flags slow-moving batches early enough to trigger secondary redistribution or trade schemes.",
                  promptHint: "List all CFA batches with <60 days shelf life whose projected depletion exceeds expiry."
                },
                {
                  name: "Non-Moving Stock & Promo Bundle Advisor",
                  mode: "No-Code Gemini Gem",
                  prio: "",
                  impact: "Recovers 40%+ salvage value",
                  sources: ["SLOB List", "Scheme Engine", "Channel Mix"],
                  dailyTask: "Recommends GT/MT combo-pack or trade-scheme clearance options for slow-moving depot inventory.",
                  desc: "Matches trapped depot stock with high-velocity outlets and secondary clearance channels.",
                  promptHint: "Suggest targeted trade clearance schemes for top 15 SLOB SKUs by depot value."
                },
                {
                  name: "Blocked & Quality-Hold Stock Aging Tracker",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "40% faster release or write-off",
                  sources: ["WMS Hold Bins", "QA Status", "Batch Value"],
                  dailyTask: "Tracks inventory sitting in blocked/quarantine bins across CFAs and escalates aged holds daily.",
                  desc: "Prevents saleable or salvageable stock from silently expiring inside depot hold cages.",
                  promptHint: "List blocked/hold inventory >15 days old across all CFAs ranked by value at risk."
                },
                {
                  name: "Slow-Moving Depot-to-Depot Transfer Finder",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Saves 25% of potential write-offs",
                  sources: ["CFA Aged Stock", "Regional Velocity", "Freight Cost"],
                  dailyTask: "Matches slow-moving stock in one CFA with high-velocity demand in another region before expiry.",
                  desc: "Evaluates whether lateral transfer freight is justified to rescue aging regional stock.",
                  promptHint: "Find regional CFAs with high demand for aged SKUs sitting >45 days in East depots."
                }
              ]
            },
            {
              id: "SC-33",
              persona: "Replenishment Planner",
              mandate: "Generates automated inter-DC and store transfers to balance localized gluts.",
              impact: "Eliminates regional out-of-stocks",
              agent: "Inter-Facility Rebalancer",
              buildMode: "Low-Code Agent Studio",
              sources: ["Network On-Hand", "Transfer Rates", "Regional POS"],
              promptHint: "Match surplus inventory in Neighboring DCs against projected stock-outs and draft net-positive STOs.",
              tmAndDAgents: [
                {
                  name: "Inter-Facility Rebalancer",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-first",
                  impact: "Eliminates regional out-of-stocks",
                  sources: ["Network On-Hand", "Transfer Rates", "Regional POS"],
                  dailyTask: "Executes core Replenishment Planner workflow: Generates automated inter-DC and store transfers to balance localized gluts.",
                  desc: "Generates automated inter-DC and store transfers to balance localized gluts.",
                  promptHint: "Match surplus inventory in Neighboring DCs against projected stock-outs and draft net-positive STOs."
                },
                {
                  name: "CFA-to-WD Daily Replenishment Recommender",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-first",
                  impact: "+4% WD in-stock availability",
                  sources: ["WD Closing Stock", "CFA ATP", "Secondary Run-Rate"],
                  dailyTask: "Generates recommended primary replenishment indents for Wholesale Dealers based on secondary depletion.",
                  desc: "Replaces reactive distributor ordering with data-driven daily replenishment proposals.",
                  promptHint: "Generate today's suggested primary replenishment indents for WDs with <4 days stock cover."
                },
                {
                  name: "Inter-CFA Stock Balancing & STO Copilot",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Cuts emergency stock-outs by 30%",
                  sources: ["CFA Inventory", "Open Indents", "Lane Rates"],
                  dailyTask: "Identifies neighboring CFAs with surplus stock to cover acute regional shortages via lateral transfers.",
                  desc: "Evaluates lateral CFA-to-CFA transfer economics vs waiting for next plant production run.",
                  promptHint: "Find nearest surplus CFAs to cover acute A-class SKU shortages in West/South depots."
                },
                {
                  name: "Allocation Fair-Share Pre-Check for WDs",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "Protects broad retail coverage",
                  sources: ["CFA ATP", "WD Indents", "Coverage Norms"],
                  dailyTask: "Flags SKU-CFA combinations where open distributor indents exceed available stock so rationing triggers early.",
                  desc: "Prevents first-come-first-served depletion from starving smaller Wholesale Dealers.",
                  promptHint: "List SKUs at CFA South where today's open WD indents exceed available ATP."
                },
                {
                  name: "In-Transit Stock & Pipeline Visibility Bot",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Cuts duplicate emergency indents",
                  sources: ["Open STOs", "Truck GPS", "CFA ATP"],
                  dailyTask: "Incorporates live GPS ETAs of inbound plant trucks into daily depot replenishment calculations.",
                  desc: "Gives replenishment planners true pipeline visibility so arriving stock isn't double-ordered.",
                  promptHint: "Show today's CFA stock-out SKUs that have inbound plant FTLs arriving within 12 hours."
                }
              ]
            }
          ]
        },
        {
          name: "Warehouse Operations",
          items: [
            {
              id: "SC-34",
              persona: "DC Operations Mgr / IE Lead",
              mandate: "Evaluates co-pick affinity matrices to recommend fast-pick zone re-slotting.",
              impact: "Reduces picker transit time by 15–30%",
              agent: "Dynamic Slotting Agent",
              buildMode: "No-Code Gemini Gem",
              sources: ["WMS Pick Logs", "DC Floor Map", "SKU Cube/Weight"],
              promptHint: "Analyze top co-picked SKU pairs and recommend golden-zone re-slotting to minimize picker travel distance.",
              tmAndDAgents: [
                {
                  name: "Dynamic Slotting Agent",
                  mode: "No-Code Gemini Gem",
                  prio: "prio-next",
                  impact: "Reduces picker transit time by 15–30%",
                  sources: ["WMS Pick Logs", "DC Floor Map", "SKU Cube/Weight"],
                  dailyTask: "Executes core DC Operations Mgr / IE Lead workflow: Evaluates co-pick affinity matrices to recommend fast-pick zone re-slotting.",
                  desc: "Evaluates co-pick affinity matrices to recommend fast-pick zone re-slotting.",
                  promptHint: "Analyze top co-picked SKU pairs and recommend golden-zone re-slotting to minimize picker travel distance."
                },
                {
                  name: "Fast-Mover Slotting & Pick-Path Optimizer",
                  mode: "No-Code Gemini Gem",
                  prio: "prio-next",
                  impact: "15–20% higher pick productivity",
                  sources: ["WMS Picks", "Seasonality", "Rack Map"],
                  dailyTask: "Re-scores SKU pick frequency weekly to move festive/seasonal fast movers to golden-zone bays.",
                  desc: "Continuously optimizes warehouse slotting to reduce picker travel distance and congestion.",
                  promptHint: "Recommend top 20 SKU re-slotting moves based on last 14 days of order affinity."
                },
                {
                  name: "Dock & Staging Congestion Predictor",
                  mode: "No-Code Gemini Gem",
                  prio: "",
                  impact: "25% smoother peak-shift throughput",
                  sources: ["Inbound ASNs", "Wave Plan", "Bay Capacity"],
                  dailyTask: "Forecasts hourly staging lane utilization and flags inbound/outbound dock overlaps before shift start.",
                  desc: "Balances dock schedules and staging lanes to prevent pallet bottlenecks during peak waves.",
                  promptHint: "Identify hours tomorrow where inbound plant receipts and outbound waves exceed staging capacity."
                },
                {
                  name: "Pallet-Space Utilization & Overflow Forecaster",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "15% less costly overflow warehousing",
                  sources: ["WMS Occupancy", "Inbound Plan", "Seasonal Peak"],
                  dailyTask: "Projects 14-day warehouse pallet occupancy against rack capacity ahead of festive stock builds.",
                  desc: "Gives DC managers early lead time to optimize honeycombing or book temporary overflow bays.",
                  promptHint: "Project daily pallet occupancy at our top 5 CFAs over the next 21 days."
                },
                {
                  name: "Forklift & MHE Fleet Utilization Tracker",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "12% higher MHE productivity",
                  sources: ["MHE Telemetry", "Put-Away Logs", "Shift Plan"],
                  dailyTask: "Monitors reach-truck and pallet-jack utilization and battery-swap bottlenecks across shifts.",
                  desc: "Balances material handling equipment across inbound and outbound zones.",
                  promptHint: "Identify shifts with highest forklift idle/queue time at dock staging."
                }
              ]
            },
            {
              id: "SC-35",
              persona: "Inbound Receiving Supervisor",
              mandate: "Parses scanned BOLs and pallet photos to reconcile open ASN variances.",
              impact: "Dock turnaround in minutes vs. hours",
              agent: "Dock-to-Stock Agent",
              buildMode: "Multimodal + Agent Studio",
              sources: ["BOL Scans", "Pallet Photos", "WMS ASN"],
              promptHint: "Compare uploaded Bill of Lading and pallet count photos against open ASN lines to flag short/overages.",
              tmAndDAgents: [
                {
                  name: "Dock-to-Stock Agent",
                  mode: "Multimodal + Agent Studio",
                  prio: "prio-next",
                  impact: "Dock turnaround in minutes vs. hours",
                  sources: ["BOL Scans", "Pallet Photos", "WMS ASN"],
                  dailyTask: "Executes core Inbound Receiving Supervisor workflow: Parses scanned BOLs and pallet photos to reconcile open ASN variances.",
                  desc: "Parses scanned BOLs and pallet photos to reconcile open ASN variances.",
                  promptHint: "Compare uploaded Bill of Lading and pallet count photos against open ASN lines to flag short/overages."
                },
                {
                  name: "ASN Discrepancy & Short-Receipt Triager",
                  mode: "Multimodal + Agent Studio",
                  prio: "prio-next",
                  impact: "60% faster dock-to-stock posting",
                  sources: ["WMS GRN", "Carrier BOL", "Plant Dispatch"],
                  dailyTask: "Reconciles inbound truck seal, pallet count, and damaged-case photos against plant dispatch notes.",
                  desc: "Automates inbound variance documentation so clean stock posts to available-to-promise immediately.",
                  promptHint: "Summarize today's inbound receipt variances and auto-draft plant/carrier discrepancy notes."
                },
                {
                  name: "FEFO Put-Away & Batch Segregation Guide",
                  mode: "Multimodal + Agent Studio",
                  prio: "",
                  impact: "Zero FEFO picking violations",
                  sources: ["Batch Expiry", "WMS Bins", "MT Norms"],
                  dailyTask: "Directs forklift operators to segregate fresh plant batches from older stock for strict FEFO rotation.",
                  desc: "Enforces batch-date segregation at put-away to protect Modern Trade freshness compliance.",
                  promptHint: "Flag any mixed-date bin locations created during today's inbound put-away."
                },
                {
                  name: "Inbound Carrier Detention & Gate-Wait Tracker",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "35% lower inbound unloading detention",
                  sources: ["Gate Logs", "Unloading Time", "Carrier SLA"],
                  dailyTask: "Tracks plant-to-CFA truck gate-in to dock-out unloading duration to prevent carrier detention claims.",
                  desc: "Prioritizes inbound unloading slots for trucks nearing free-time thresholds.",
                  promptHint: "Flag inbound trucks currently at CFA gates waiting >2 hours for an unloading bay."
                },
                {
                  name: "Damaged-in-Transit Evidence Capture Gem",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "100% documented carrier OS&D claims",
                  sources: ["Dock Photos", "GRN Variance", "BOL Scans"],
                  dailyTask: "Guides receiving clerks to capture photo, batch, and quantity proof on damaged pallets before truck release.",
                  desc: "Ensures clean evidence packages for carrier claims while posting clean pallets immediately.",
                  promptHint: "Verify all today's damaged inbound receipts have signed LR remarks and batch photos attached."
                }
              ]
            },
            {
              id: "SC-36",
              persona: "DC Shift Floor Lead",
              mandate: "Balances picker lines dynamically to protect carrier pickup cutoff times.",
              impact: "Prevents missed dispatch windows (OTIF)",
              agent: "Wave Fulfillment Copilot",
              buildMode: "Low-Code Agent Studio",
              sources: ["WMS Wave Queue", "Labor Active", "Dock Schedule"],
              promptHint: "Alert shift lead when Wave-3 pick velocity risks missing the 4:00 PM carrier cutoff and suggest labor shift.",
              tmAndDAgents: [
                {
                  name: "Wave Fulfillment Copilot",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-first",
                  impact: "Prevents missed dispatch windows (OTIF)",
                  sources: ["WMS Wave Queue", "Labor Active", "Dock Schedule"],
                  dailyTask: "Executes core DC Shift Floor Lead workflow: Balances picker lines dynamically to protect carrier pickup cutoff times.",
                  desc: "Balances picker lines dynamically to protect carrier pickup cutoff times.",
                  promptHint: "Alert shift lead when Wave-3 pick velocity risks missing the 4:00 PM carrier cutoff and suggest labor shift."
                },
                {
                  name: "Cutoff-Aware Wave Prioritization Copilot",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-first",
                  impact: "99%+ on-time dispatch cutoff",
                  sources: ["WMS Waves", "Truck ETAs", "Picker Rates"],
                  dailyTask: "Re-sequences open pick waves dynamically based on arriving truck readiness and billing cutoffs.",
                  desc: "Balances picker assignments across zones so priority MT and WD trucks depart on schedule.",
                  promptHint: "Identify open pick waves at risk of missing the 17:00 truck departure cutoff."
                },
                {
                  name: "Pick-Error & Short-Pick Root-Cause Bot",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "45% fewer customer short-pick claims",
                  sources: ["Scan Logs", "Cycle Counts", "Claims"],
                  dailyTask: "Analyzes daily short-picks to trigger targeted cycle counts on suspect bin locations.",
                  desc: "Catches bin inventory inaccuracies immediately after short-picks to prevent repeat misses.",
                  promptHint: "List the top 10 bin locations with repeated short-picks this week for immediate cycle count."
                },
                {
                  name: "Cycle-Count Priority & Inventory Accuracy Bot",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "99.5%+ bin inventory accuracy",
                  sources: ["WMS Variances", "Fast Movers", "Cycle Logs"],
                  dailyTask: "Generates daily targeted cycle-count lists focused on high-velocity bins and recent short-picks.",
                  desc: "Keeps warehouse bin accuracy high without disrupting full-day shipping operations.",
                  promptHint: "Generate today's 25-bin cycle count list prioritized by short-pick frequency and SKU value."
                },
                {
                  name: "Temp Picker Onboarding & Productivity Coach",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "20% faster peak-season picker ramp",
                  sources: ["WMS Pick Rates", "Error Logs", "Zone Map"],
                  dailyTask: "Tracks lines-per-hour and scan-error rates for seasonal pickers to guide floor coaching.",
                  desc: "Helps floor leads pair new pickers with optimal zones during festive volume spikes.",
                  promptHint: "Identify pickers with >2% mis-pick rate this week for targeted zone coaching."
                }
              ]
            }
          ]
        },
        {
          name: "Omnichannel Visibility",
          items: [
            {
              id: "SC-37",
              persona: "Store Operations / Omni Lead",
              mandate: "Identifies shrinkage anomalies when on-hand stock stops scanning at POS.",
              impact: "Triggers targeted floor cycle counts",
              agent: "Phantom Inventory Sensor",
              buildMode: "Low-Code Agent Studio",
              sources: ["POS Zero-Sales", "Store On-Hand", "BOPIS Cancels"],
              promptHint: "Detect high-velocity SKUs with positive book inventory but zero POS scans for 72h to trigger cycle counts.",
              tmAndDAgents: [
                {
                  name: "Phantom Inventory Sensor",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-first",
                  impact: "Triggers targeted floor cycle counts",
                  sources: ["POS Zero-Sales", "Store On-Hand", "BOPIS Cancels"],
                  dailyTask: "Executes core Store Operations / Omni Lead workflow: Identifies shrinkage anomalies when on-hand stock stops scanning at POS.",
                  desc: "Identifies shrinkage anomalies when on-hand stock stops scanning at POS.",
                  promptHint: "Detect high-velocity SKUs with positive book inventory but zero POS scans for 72h to trigger cycle counts."
                },
                {
                  name: "MT / Retail Shelf Out-of-Stock Predictor",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-first",
                  impact: "35% fewer lost retail sales",
                  sources: ["MT POS", "Store On-Hand", "Planogram"],
                  dailyTask: "Detects zero-scan anomalies on fast-moving SKUs across Modern Trade stores to trigger shelf replenishment.",
                  desc: "Identifies phantom inventory and backroom-to-shelf gaps at retail stores before sales are lost.",
                  promptHint: "Flag MT stores where top-20 SKUs show >0 book stock but zero POS scans for 48 hours."
                },
                {
                  name: "Promo Display Execution & Stock-Check Bot",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "+15% promo on-shelf availability",
                  sources: ["Promo Calendar", "Store Inventory", "POS"],
                  dailyTask: "Verifies promotional stores hold sufficient backroom stock 72 hours before weekend flyers go live.",
                  desc: "Prevents advertised promotional items from running out on Day 1 at key retail outlets.",
                  promptHint: "Check store-level stock cover for all SKUs featured in this weekend's MT promo circular."
                },
                {
                  name: "MT Planogram & Facing Compliance Auditor",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "+8% shelf-share visibility",
                  sources: ["Shelf Photos", "Planogram", "MT Stores"],
                  dailyTask: "Scores store shelf photos from merchandisers against contracted eye-level facings and adjacency rules.",
                  desc: "Uses multimodal vision to audit Modern Trade shelf compliance across hundreds of outlets.",
                  promptHint: "Audit submitted MT store shelf photos for missing hero-SKU facings."
                },
                {
                  name: "Store-Level Shrinkage & Pilferage Pattern Bot",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Cuts high-value SKU shrink by 20%",
                  sources: ["Cycle Counts", "POS Sales", "Store Audits"],
                  dailyTask: "Detects recurring inventory shrink clusters on high-value personal care and premium food SKUs.",
                  desc: "Flags stores with abnormal book-vs-physical adjustments for loss-prevention follow-up.",
                  promptHint: "Rank top 15 MT outlets by unexplained negative inventory adjustments over 60 days."
                }
              ]
            },
            {
              id: "SC-38",
              persona: "Omnichannel Fulfillment Dir.",
              mandate: "Selects lowest-cost fulfillment nodes based on store labor and parcel zones.",
              impact: "Lowers parcel costs & split rates",
              agent: "SFS / BOPIS Sourcing",
              buildMode: "Low-Code Agent Studio",
              sources: ["DOM Rules", "Parcel Rate Zones", "Store Capacity"],
              promptHint: "Optimize ship-from-store vs. DC routing to avoid split shipments and minimize Zone 4+ parcel surcharges.",
              tmAndDAgents: [
                {
                  name: "SFS / BOPIS Sourcing",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-first",
                  impact: "Lowers parcel costs & split rates",
                  sources: ["DOM Rules", "Parcel Rate Zones", "Store Capacity"],
                  dailyTask: "Executes core Omnichannel Fulfillment Dir. workflow: Selects lowest-cost fulfillment nodes based on store labor and parcel zones.",
                  desc: "Selects lowest-cost fulfillment nodes based on store labor and parcel zones.",
                  promptHint: "Optimize ship-from-store vs. DC routing to avoid split shipments and minimize Zone 4+ parcel surcharges."
                },
                {
                  name: "Q-Comm Dark-Store Inventory & Split Router",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-first",
                  impact: "12% lower dark-store stock-outs",
                  sources: ["Dark Store Stock", "Order Velocity", "CFA ATP"],
                  dailyTask: "Monitors micro-fulfillment and Q-Comm dark-store buffer depletion to trigger rapid intra-city top-ups.",
                  desc: "Protects 10-minute delivery availability by predicting dark-store SKU burn rates by hour.",
                  promptHint: "Flag Q-Comm dark stores projected to stock out of top-10 impulse SKUs before evening peak."
                },
                {
                  name: "e-B2B & Direct-to-Retailer Order Promiser",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "98%+ next-day B2B fulfillment",
                  sources: ["e-B2B Orders", "WD / CFA Stock", "Van Capacity"],
                  dailyTask: "Routes incoming retailer app orders to the optimal Wholesale Dealer or micro-depot with stock and van capacity.",
                  desc: "Balances fulfillment cost and next-day delivery promises across distributor and company nodes.",
                  promptHint: "Re-route unfulfilled e-B2B retailer orders to nearest alternate WD with available stock."
                },
                {
                  name: "Quick-Commerce Assortment & Pack-Size Tuner",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "+11% Q-Comm basket conversion",
                  sources: ["Q-Comm POS", "Search Trends", "Dark Store Cap"],
                  dailyTask: "Recommends high-velocity impulse and multipack SKUs suited for constrained Q-Comm dark-store racks.",
                  desc: "Optimizes limited dark-store shelf slots for maximum revenue per cubic foot.",
                  promptHint: "Rank our SKUs by dark-store velocity per cubic foot across Blinkit and Zepto."
                },
                {
                  name: "Last-Mile Delivery SLA & Rider Wait Monitor",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Protects e-B2B next-day promise",
                  sources: ["Dispatch Logs", "Drop GPS", "WD Vans"],
                  dailyTask: "Tracks e-B2B retailer order-to-delivery cycle times across company and distributor last-mile vans.",
                  desc: "Identifies pin-codes with chronic next-day delivery misses for route rebalancing.",
                  promptHint: "List pin-codes where e-B2B next-day delivery OTIF dropped below 92% this week."
                }
              ]
            },
            {
              id: "SC-39",
              persona: "Reverse Logistics Lead",
              mandate: "Evaluates item condition scans to triage restock, vendor return, or liquidation.",
              impact: "Restocks sellable returns within 24h",
              agent: "Returns Triage Agent",
              buildMode: "Multimodal Vision",
              sources: ["Return Photos", "Grade Rules", "Resale Value"],
              promptHint: "Inspect return item photos and immediately route Grade-A items back to sellable pick bins.",
              tmAndDAgents: [
                {
                  name: "Returns Triage Agent",
                  mode: "Multimodal Vision",
                  prio: "prio-next",
                  impact: "Restocks sellable returns within 24h",
                  sources: ["Return Photos", "Grade Rules", "Resale Value"],
                  dailyTask: "Executes core Reverse Logistics Lead workflow: Evaluates item condition scans to triage restock, vendor return, or liquidation.",
                  desc: "Evaluates item condition scans to triage restock, vendor return, or liquidation.",
                  promptHint: "Inspect return item photos and immediately route Grade-A items back to sellable pick bins."
                },
                {
                  name: "WD & MT Damage Return Pre-Approval Bot",
                  mode: "Multimodal Vision",
                  prio: "prio-next",
                  impact: "50% faster return credit turnaround",
                  sources: ["Damage Photos", "WD Claims", "Return Policy"],
                  dailyTask: "Classifies distributor and retail damage-return photos to auto-approve eligible credits or field destruction.",
                  desc: "Eliminates unnecessary reverse haulage of unsaleable damaged FMCG packs via photo verification.",
                  promptHint: "Triage today's WD damage return requests into reverse-pickup vs verified on-site destruction."
                },
                {
                  name: "Return Root-Cause & Pack-Damage Tracker",
                  mode: "Multimodal Vision",
                  prio: "",
                  impact: "20% lower transit damage rate",
                  sources: ["Return Reasons", "Transit Lanes", "Case Specs"],
                  dailyTask: "Correlates crushed-carton and leakage returns with specific transport lanes, loaders, and shipper specs.",
                  desc: "Turns reverse logistics claims into actionable packaging and loading improvements.",
                  promptHint: "Rank top 5 SKU-lane pairs generating crushed-case or leakage returns this month."
                },
                {
                  name: "Field Destruction & GST Reversal Audit Bot",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "100% tax-compliant damage disposal",
                  sources: ["Photo Proof", "GST Rules", "WD Credits"],
                  dailyTask: "Verifies witness/photo destruction logs for damaged FMCG stock destroyed at distributor premises.",
                  desc: "Prevents costly reverse haulage while maintaining strict financial and tax audit trails.",
                  promptHint: "Audit pending WD field-destruction claims for missing timestamped photo/video proof."
                },
                {
                  name: "Seasonal & Festive Unsold Return Predictor",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Cuts post-festive returns by 30%",
                  sources: ["Festive Sell-In", "Secondary POS", "WD Stock"],
                  dailyTask: "Monitors post-festival sell-through in GT/MT to trigger early inter-branch pulls before expiry.",
                  desc: "Prevents festive gift-pack gluts from turning into post-season reverse write-offs.",
                  promptHint: "Flag distributors holding >21 days of seasonal gift-pack stock 2 weeks post-festival."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "distribution",
      num: "05",
      title: "Distribution & Logistics",
      subtitle: "CPG Route-to-Market & Fulfillment",
      lifecycle: "Plant → CFA/Depot → WD/MT → Retail Trade",
      tagline: "Primary linehauls, CFA allocation, distributor fulfillment & fleet governance.",
      color: "var(--g-yellow)",
      ink: "#B06000",
      cssClass: "p-amber",
      page: "pillars/05_distribution.html",
      demoTitle: "CPG Dispatch & OTIF War-Room",
      demoDesc: "CFA-to-WD fair-share allocation, MT slot compliance & dynamic rerouting",
      kpis: [
        { val: "12–18%", lbl: "Higher primary FTL cube fill" },
        { val: "98.5%", lbl: "MT & Q-Comm OTIF compliance" },
        { val: "3–7%", lbl: "Overbilled freight recovered" }
      ],
      subprocesses: [
        {
          name: "Primary Logistics & Plant Dispatch (Factory → CFA / Depot)",
          items: [
            {
              id: "SC-40",
              persona: "Primary Transport Planner",
              mandate: "Consolidates factory-to-CFA stock transfers into full truckloads (FTL) & rail rakes via cube/weight modeling.",
              impact: "12–18% higher primary FTL fill rate",
              agent: "Load Consolidation Agent",
              buildMode: "Low-Code Agent Studio",
              sources: ["SAP STOs", "Lane Rate Cards", "SKU Cube/Weight"],
              promptHint: "Group open plant-to-depot stock transfer orders into multi-SKU FTL loads maximizing cubic and payload utilization.",
              dayJourney: [
                { time: "Morning (08:00–10:00)", agent: "Overnight STO & Load Consolidation Agent", mode: "Low-Code Agent Studio", desc: "Ingests overnight SAP plant production outputs and groups partial CFA indents into optimal 32ft/40ft FTL linehauls." },
                { time: "Midday (11:00–15:00)", agent: "Rake & Multimodal Switch Copilot", mode: "No-Code Gemini Gem", desc: "Evaluates road vs. rail rake lead times when highway congestion spikes, recommending urgent road diversions for A-class SKUs." },
                { time: "Evening (16:00–19:00)", agent: "EOD Dispatch & Carrier Tender Agent", mode: "Low-Code + OpenAPI", desc: "Auto-tenders finalized primary loads to contracted transporters via TMS webhook and flags unaccepted lanes." }
              ],
              tmAndDAgents: [
                {
                  name: "Overnight STO & Load Consolidation Agent",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-first",
                  impact: "12–18% higher primary FTL fill rate",
                  sources: ["SAP STOs", "SKU Cube/Weight", "TMS"],
                  dailyTask: "Morning (08:00–10:00): Ingests overnight SAP plant production outputs and groups partial CFA indents into optimal 32ft/40ft FTL linehauls.",
                  desc: "Ingests overnight SAP plant production outputs and groups partial CFA indents into optimal 32ft/40ft FTL linehauls.",
                  promptHint: "Execute Overnight STO & Load Consolidation Agent workflow: Ingests overnight SAP plant production outputs and groups partial CFA indents into optimal 32ft/40ft FTL linehauls."
                },
                {
                  name: "Rake & Multimodal Switch Copilot",
                  mode: "No-Code Gemini Gem",
                  prio: "prio-next",
                  impact: "Protects A-class CFA stock during delays",
                  sources: ["Rail/Road Feeds", "Highway Traffic", "A-Class SKUs"],
                  dailyTask: "Midday (11:00–15:00): Evaluates road vs. rail rake lead times when highway congestion spikes, recommending urgent road diversions for A-class SKUs.",
                  desc: "Evaluates road vs. rail rake lead times when highway congestion spikes, recommending urgent road diversions for A-class SKUs.",
                  promptHint: "Execute Rake & Multimodal Switch Copilot workflow: Evaluates road vs. rail rake lead times when highway congestion spikes, recommending urgent road diversions for A-class SKUs."
                },
                {
                  name: "EOD Dispatch & Carrier Tender Agent",
                  mode: "Low-Code + OpenAPI",
                  prio: "",
                  impact: "95%+ same-day carrier tender acceptance",
                  sources: ["TMS Webhook", "Transporter Portal", "Lane Cards"],
                  dailyTask: "Evening (16:00–19:00): Auto-tenders finalized primary loads to contracted transporters via TMS webhook and flags unaccepted lanes.",
                  desc: "Auto-tenders finalized primary loads to contracted transporters via TMS webhook and flags unaccepted lanes.",
                  promptHint: "Execute EOD Dispatch & Carrier Tender Agent workflow: Auto-tenders finalized primary loads to contracted transporters via TMS webhook and flags unaccepted lanes."
                },
                {
                  name: "Lane Rate-Card & Spot-vs-Contract Optimizer",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "4–6% primary freight savings",
                  sources: ["Lane Contracts", "Spot Quotes", "SAP STOs"],
                  dailyTask: "Compares contracted transporter rates against live spot bids on surge lanes before tendering.",
                  desc: "Prevents expensive ad-hoc spot premiums when primary lanes spike.",
                  promptHint: "Identify primary lanes this week where spot freight exceeded contract rates by >12%."
                },
                {
                  name: "Plant-to-CFA Direct-to-WD Bypass Advisor",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Saves CFA handling + 2 days lead time",
                  sources: ["Large WD Indents", "Plant Stock", "FTL Rates"],
                  dailyTask: "Spots full-truckload distributor indents that can ship direct from plant, bypassing CFA double-handling.",
                  desc: "Cuts depot handling cost and transit time for high-volume Wholesale Dealers.",
                  promptHint: "Find today's WD indents >12 tons eligible for direct plant-to-WD FTL dispatch."
                }
              ]
            },
            {
              id: "SC-41",
              persona: "Plant Yard & Dispatch Lead",
              mandate: "Parses truck GPS, gate-in scans, and loading bay queues to eliminate detention and line starvation.",
              impact: "Cuts plant truck detention by 40%",
              agent: "Yard Disruption & Detention Sentinel",
              buildMode: "Low-Code Agent Studio",
              sources: ["GPS / FASTag Feeds", "YMS Gate Logs", "Bay Matrix"],
              promptHint: "Detect inbound FTL delays >45 mins and dynamically reassign plant loading bay slots to prevent idle crews.",
              dayJourney: [
                { time: "Morning (07:30–09:30)", agent: "Inbound Gate & Bay Scheduler Gem", mode: "No-Code Gemini Gem", desc: "Sequences morning truck arrivals against plant shift readiness and pre-assigns staging bays before gate-in." },
                { time: "Midday (10:30–15:00)", agent: "Yard Disruption & Detention Sentinel", mode: "Low-Code Agent Studio", desc: "Monitors dwell-time alerts at loading docks; triggers Google Chat escalations if any trailer exceeds 90-minute turnaround." },
                { time: "Evening (16:00–18:30)", agent: "E-Way Bill & Gate-Out Reconciler", mode: "Multimodal + Agent Studio", desc: "Verifies physical seal numbers against SAP e-Way Bills and logs final gate-out timestamps for carrier SLA scoring." }
              ],
              tmAndDAgents: [
                {
                  name: "Inbound Gate & Bay Scheduler Gem",
                  mode: "No-Code Gemini Gem",
                  prio: "prio-next",
                  impact: "25% faster morning bay turnaround",
                  sources: ["YMS Gate Logs", "Plant Shift Plan", "Bay Matrix"],
                  dailyTask: "Morning (07:30–09:30): Sequences morning truck arrivals against plant shift readiness and pre-assigns staging bays before gate-in.",
                  desc: "Sequences morning truck arrivals against plant shift readiness and pre-assigns staging bays before gate-in.",
                  promptHint: "Execute Inbound Gate & Bay Scheduler Gem workflow: Sequences morning truck arrivals against plant shift readiness and pre-assigns staging bays before gate-in."
                },
                {
                  name: "Yard Disruption & Detention Sentinel",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-first",
                  impact: "Cuts plant truck detention by 40%",
                  sources: ["GPS / FASTag", "Dock Sensors", "Google Chat"],
                  dailyTask: "Midday (10:30–15:00): Monitors dwell-time alerts at loading docks; triggers Google Chat escalations if any trailer exceeds 90-minute turnaround.",
                  desc: "Monitors dwell-time alerts at loading docks; triggers Google Chat escalations if any trailer exceeds 90-minute turnaround.",
                  promptHint: "Detect inbound FTL delays >45 mins and dynamically reassign plant loading bay slots to prevent idle crews."
                },
                {
                  name: "E-Way Bill & Gate-Out Reconciler",
                  mode: "Multimodal + Agent Studio",
                  prio: "",
                  impact: "Zero e-Way Bill / seal mismatch dispatches",
                  sources: ["SAP e-Way Bill", "Seal Scans", "Carrier SLA"],
                  dailyTask: "Evening (16:00–18:30): Verifies physical seal numbers against SAP e-Way Bills and logs final gate-out timestamps for carrier SLA scoring.",
                  desc: "Verifies physical seal numbers against SAP e-Way Bills and logs final gate-out timestamps for carrier SLA scoring.",
                  promptHint: "Execute E-Way Bill & Gate-Out Reconciler workflow: Verifies physical seal numbers against SAP e-Way Bills and logs final gate-out timestamps for carrier SLA scoring."
                },
                {
                  name: "Driver Check-In & Multilingual Kiosk Assistant",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "50% faster gate entry processing",
                  sources: ["Gate Kiosk", "LR Scans", "Driver App"],
                  dailyTask: "Guides drivers in regional languages on bay assignments, PPE rules, and loading readiness.",
                  desc: "Eliminates yard communication delays and paperwork errors at busy plant gates.",
                  promptHint: "Summarize average driver gate-in to bay-docking time by shift and transporter."
                },
                {
                  name: "Vehicle Fitness & Safety Checklist Auditor",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Zero unsafe or leaking truck dispatches",
                  sources: ["Gate Inspection", "Tarpaulin Check", "Floor Photos"],
                  dailyTask: "Verifies truck floor cleanliness, odor-free condition, and waterproof tarpaulin checks before food loading.",
                  desc: "Prevents transit rain damage and contamination by enforcing pre-load vehicle QA.",
                  promptHint: "List transporters with repeated pre-load vehicle hygiene or tarpaulin rejections this month."
                }
              ]
            },
            {
              id: "SC-42",
              persona: "Cold-Chain & Transit QA Lead",
              mandate: "Monitors reefer IoT telemetry and ambient humidity across food, dairy, and beverage primary lanes.",
              impact: "Prevents perishable FMCG spoilage",
              agent: "Cold-Chain Thermal Auditor",
              buildMode: "Low-Code Agent Studio",
              sources: ["Reefer IoT", "Thermal Curves", "Carrier SLAs"],
              promptHint: "Monitor real-time trailer temperature telemetry, alert drivers on thermal excursions, and compile QA hold logs.",
              dayJourney: [
                { time: "Morning (08:00–10:00)", agent: "Pre-Cooling & Reefer Readiness Gem", mode: "No-Code Gemini Gem", desc: "Audits pre-trip reefer set-point logs (-18°C / +4°C) across all scheduled chilled/frozen dispatches before loading." },
                { time: "Midday (10:30–15:30)", agent: "Live Thermal Excursion Sentinel", mode: "Low-Code Agent Studio", desc: "Detects mid-transit temperature spikes >2°C, sends WhatsApp alerts to drivers, and locates nearest emergency cold-storage hub." },
                { time: "Evening (16:00–18:30)", agent: "Transit QA Release & Claim Copilot", mode: "Multimodal + Agent Studio", desc: "Generates batch-level thermal compliance certificates for receiving CFAs or auto-drafts carrier spoilage claims." }
              ],
              tmAndDAgents: [
                {
                  name: "Pre-Cooling & Reefer Readiness Gem",
                  mode: "No-Code Gemini Gem",
                  prio: "prio-next",
                  impact: "100% pre-cooled dispatch compliance",
                  sources: ["Reefer IoT", "Pre-Trip Logs", "Dispatch Plan"],
                  dailyTask: "Morning (08:00–10:00): Audits pre-trip reefer set-point logs (-18°C / +4°C) across all scheduled chilled/frozen dispatches before loading.",
                  desc: "Audits pre-trip reefer set-point logs (-18°C / +4°C) across all scheduled chilled/frozen dispatches before loading.",
                  promptHint: "Execute Pre-Cooling & Reefer Readiness Gem workflow: Audits pre-trip reefer set-point logs (-18°C / +4°C) across all scheduled chilled/frozen dispatches before loading."
                },
                {
                  name: "Live Thermal Excursion Sentinel",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-first",
                  impact: "Prevents perishable FMCG spoilage",
                  sources: ["Live Thermal IoT", "WhatsApp Alerts", "Cold-Hub Map"],
                  dailyTask: "Midday (10:30–15:30): Detects mid-transit temperature spikes >2°C, sends WhatsApp alerts to drivers, and locates nearest emergency cold-storage hub.",
                  desc: "Detects mid-transit temperature spikes >2°C, sends WhatsApp alerts to drivers, and locates nearest emergency cold-storage hub.",
                  promptHint: "Execute Live Thermal Excursion Sentinel workflow: Detects mid-transit temperature spikes >2°C, sends WhatsApp alerts to drivers, and locates nearest emergency cold-storage hub."
                },
                {
                  name: "Transit QA Release & Claim Copilot",
                  mode: "Multimodal + Agent Studio",
                  prio: "",
                  impact: "Automated transit QA release & claims",
                  sources: ["QA Telemetry", "Carrier SLAs", "Claim Portal"],
                  dailyTask: "Evening (16:00–18:30): Generates batch-level thermal compliance certificates for receiving CFAs or auto-drafts carrier spoilage claims.",
                  desc: "Generates batch-level thermal compliance certificates for receiving CFAs or auto-drafts carrier spoilage claims.",
                  promptHint: "Execute Transit QA Release & Claim Copilot workflow: Generates batch-level thermal compliance certificates for receiving CFAs or auto-drafts carrier spoilage claims."
                },
                {
                  name: "Monsoon Humidity & Ambient Transit Risk Bot",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "Cuts humidity carton damage by 30%",
                  sources: ["Weather API", "Route Humidity", "SKU Sensitivity"],
                  dailyTask: "Flags moisture-sensitive food/paper lanes transiting heavy-rain corridors needing extra desiccant/wrapping.",
                  desc: "Protects non-reefer moisture-sensitive FMCG loads during peak monsoon transit.",
                  promptHint: "Identify today's primary dispatches crossing heavy-rain alerts needing extra pallet wrap."
                },
                {
                  name: "Reefer Carrier Thermal-Compliance Scorecard",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Top-quartile cold-chain reliability",
                  sources: ["IoT Logs", "Excursion Count", "Carrier SLA"],
                  dailyTask: "Scores refrigerated fleet partners weekly on set-point adherence, door-open events, and pre-cool speed.",
                  desc: "Drives data-backed carrier selection for temperature-sensitive food and dairy lanes.",
                  promptHint: "Rank cold-chain carriers by % of trips with zero >2°C thermal excursions last month."
                }
              ]
            }
          ]
        },
        {
          name: "CFA / Depot Operations & Stock Allocation",
          items: [
            {
              id: "SC-43",
              persona: "Depot / CFA Operations Manager",
              mandate: "Orchestrates inbound plant receipts, batch FEFO staging, and outbound distributor dispatch waves.",
              impact: "30% faster CFA dock turnaround",
              agent: "CFA Wave & Bay Orchestrator",
              buildMode: "Low-Code Agent Studio",
              sources: ["WMS / CFA Portal", "SAP GRN", "Vehicle Queue"],
              promptHint: "Balance CFA unloading and distributor dispatch waves to protect same-day primary billing cutoffs.",
              dayJourney: [
                { time: "Morning (07:30–09:30)", agent: "CFA Morning Bay & Labor Planner Gem", mode: "No-Code Gemini Gem", desc: "Prioritizes inbound factory trucks carrying backordered SKUs and assigns cross-docking teams for direct WD loading." },
                { time: "Midday (10:30–15:00)", agent: "FEFO Batch & Damage Triage Agent", mode: "Multimodal Vision", desc: "Scans inbound pallet photos for crushed cartons and enforces First-Expired-First-Out (FEFO) bin placement." },
                { time: "Evening (16:00–19:00)", agent: "CFA Wave & Bay Orchestrator", mode: "Low-Code Agent Studio", desc: "Audits unbilled distributor orders at 5:30 PM and dynamically reallocates dock loaders to clear 100% of same-day dispatches." }
              ],
              tmAndDAgents: [
                {
                  name: "CFA Morning Bay & Labor Planner Gem",
                  mode: "No-Code Gemini Gem",
                  prio: "prio-first",
                  impact: "30% faster CFA dock turnaround",
                  sources: ["WMS / CFA Portal", "SAP GRN", "Vehicle Queue"],
                  dailyTask: "Morning (07:30–09:30): Prioritizes inbound factory trucks carrying backordered SKUs and assigns cross-docking teams for direct WD loading.",
                  desc: "Prioritizes inbound factory trucks carrying backordered SKUs and assigns cross-docking teams for direct WD loading.",
                  promptHint: "Execute CFA Morning Bay & Labor Planner Gem workflow: Prioritizes inbound factory trucks carrying backordered SKUs and assigns cross-docking teams for direct WD loading."
                },
                {
                  name: "FEFO Batch & Damage Triage Agent",
                  mode: "Multimodal Vision",
                  prio: "prio-next",
                  impact: "100% FEFO compliance on outbound waves",
                  sources: ["FEFO Batch Map", "Indent Queue", "Bay Capacity"],
                  dailyTask: "Midday (10:30–15:00): Scans inbound pallet photos for crushed cartons and enforces First-Expired-First-Out (FEFO) bin placement.",
                  desc: "Scans inbound pallet photos for crushed cartons and enforces First-Expired-First-Out (FEFO) bin placement.",
                  promptHint: "Execute FEFO Batch & Damage Triage Agent workflow: Scans inbound pallet photos for crushed cartons and enforces First-Expired-First-Out (FEFO) bin placement."
                },
                {
                  name: "CFA Wave & Bay Orchestrator",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Zero missed same-day billing cutoffs",
                  sources: ["SAP Dispatch", "Billing Cutoffs", "POD Logs"],
                  dailyTask: "Evening (16:00–19:00): Audits unbilled distributor orders at 5:30 PM and dynamically reallocates dock loaders to clear 100% of same-day dispatches.",
                  desc: "Audits unbilled distributor orders at 5:30 PM and dynamically reallocates dock loaders to clear 100% of same-day dispatches.",
                  promptHint: "Balance CFA unloading and distributor dispatch waves to protect same-day primary billing cutoffs."
                },
                {
                  name: "CFA Labor & Loader Wave Balancer",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "20% higher cases loaded per labor-hour",
                  sources: ["CFA Roster", "Indent Volume", "Bay Plan"],
                  dailyTask: "Aligns depot loading crews and forklift shifts with peak afternoon distributor billing waves.",
                  desc: "Prevents end-of-day dock bottlenecks when 60% of distributor trucks arrive together.",
                  promptHint: "Recommend loader crew shifts across Bays 1–8 for tomorrow's projected dispatch tonnage."
                },
                {
                  name: "CFA Hygiene, Pest & Stack-Height Auditor",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "100% depot FSSAI & safety audit pass",
                  sources: ["CFA Photos", "Audit Checklist", "FEFO Logs"],
                  dailyTask: "Reviews daily depot walkthrough photos for pallet stack-height limits, aisle clearance, and pest traps.",
                  desc: "Keeps third-party CFA warehouses continuously compliant with food-safety and EHS norms.",
                  promptHint: "Summarize open CFA housekeeping and stack-height compliance issues across regions."
                }
              ]
            },
            {
              id: "SC-44",
              persona: "Customer Service & Logistics (CS&L) Lead",
              mandate: "Executes fair-share stock allocation across Wholesale Dealers during peak season or supply shortages.",
              impact: "Protects distributor fill-rate equity",
              agent: "Fair-Share Stock Allocation Agent",
              buildMode: "Low-Code Agent Studio",
              sources: ["CFA ATP Inventory", "WD Run-Rates", "Channel Priority"],
              promptHint: "Compute equitable fair-share SKU allocations across distributors when CFA stock falls short of total indents.",
              dayJourney: [
                { time: "Morning (08:30–10:00)", agent: "Morning Short-Supply & Fill-Rate Pulse", mode: "No-Code Gemini Gem", desc: "Scans overnight WD indents vs. CFA Available-to-Promise (ATP) stock, highlighting top 10 constrained SKUs." },
                { time: "Midday (11:00–15:00)", agent: "Fair-Share Stock Allocation Agent", mode: "Low-Code Agent Studio", desc: "Runs proportional allocation across WDs based on 30-day secondary velocity and strategic channel SLAs, posting draft splits to SAP." },
                { time: "Evening (16:00–18:30)", agent: "WD Backorder & ETA Communicator", mode: "Low-Code + Messaging", desc: "Sends proactive automated WhatsApp/email updates to distributors detailing allocated quantities and next plant arrival ETA." }
              ],
              tmAndDAgents: [
                {
                  name: "Morning Short-Supply & Fill-Rate Pulse",
                  mode: "No-Code Gemini Gem",
                  prio: "prio-next",
                  impact: "Prevents single-WD hoarding",
                  sources: ["CFA ATP", "WD Indents", "Stock-Out Alerts"],
                  dailyTask: "Morning (08:30–10:00): Scans overnight WD indents vs. CFA Available-to-Promise (ATP) stock, highlighting top 10 constrained SKUs.",
                  desc: "Scans overnight WD indents vs. CFA Available-to-Promise (ATP) stock, highlighting top 10 constrained SKUs.",
                  promptHint: "Execute Morning Short-Supply & Fill-Rate Pulse workflow: Scans overnight WD indents vs. CFA Available-to-Promise (ATP) stock, highlighting top 10 constrained SKUs."
                },
                {
                  name: "Fair-Share Stock Allocation Agent",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-first",
                  impact: "Fair-share fill rate +6% in peak season",
                  sources: ["Fair-Share Rules", "WD Priority", "SAP Allocation"],
                  dailyTask: "Midday (11:00–15:00): Runs proportional allocation across WDs based on 30-day secondary velocity and strategic channel SLAs, posting draft splits to SAP.",
                  desc: "Runs proportional allocation across WDs based on 30-day secondary velocity and strategic channel SLAs, posting draft splits to SAP.",
                  promptHint: "Compute equitable fair-share SKU allocations across distributors when CFA stock falls short of total indents."
                },
                {
                  name: "WD Backorder & ETA Communicator",
                  mode: "Low-Code + Messaging",
                  prio: "",
                  impact: "50% fewer distributor status calls",
                  sources: ["WhatsApp / DMS", "Transit ETAs", "WD Portal"],
                  dailyTask: "Evening (16:00–18:30): Sends proactive automated WhatsApp/email updates to distributors detailing allocated quantities and next plant arrival ETA.",
                  desc: "Sends proactive automated WhatsApp/email updates to distributors detailing allocated quantities and next plant arrival ETA.",
                  promptHint: "Execute WD Backorder & ETA Communicator workflow: Sends proactive automated WhatsApp/email updates to distributors detailing allocated quantities and next plant arrival ETA."
                },
                {
                  name: "Key-Account vs GT Priority Conflict Resolver",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "Balances MT penalties vs GT reach",
                  sources: ["MT Penalties", "GT Fill Rate", "CFA ATP"],
                  dailyTask: "Evaluates penalty cost of shorting an MT/Q-Comm PO vs starving 20 GT Wholesale Dealers.",
                  desc: "Gives CS&L leads transparent financial trade-offs during acute SKU shortages.",
                  promptHint: "Recommend stock split between MT PO #442 and GT WDs for constrained SKU X."
                },
                {
                  name: "Backorder Auto-Recovery & Replenishment Notifier",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Zero forgotten backorders",
                  sources: ["Open Backorders", "Inbound GRNs", "DMS"],
                  dailyTask: "Automatically releases queued distributor backorders the moment plant inbound trucks post GRN.",
                  desc: "Ensures recovered stock flows immediately to waiting Wholesale Dealers.",
                  promptHint: "List open WD backorders that can be fulfilled immediately from today's plant GRNs."
                }
              ]
            },
            {
              id: "SC-45",
              persona: "Depot Dispatch & Billing Supervisor",
              mandate: "Manages daily distributor primary invoicing, e-Way Bill generation, credit-block clearances, and loading cutoffs.",
              impact: "99.2% same-day primary billing",
              agent: "EOD Billing & Cutoff Closer Agent",
              buildMode: "Low-Code + SAP OpenAPI",
              sources: ["SAP Billing", "WD Credit Ledger", "e-Way Bill Portal"],
              promptHint: "Flag credit-blocked WD indents by 2 PM and automate e-Way Bill + invoice batch release before evening cutoff.",
              dayJourney: [
                { time: "Morning (08:00–10:00)", agent: "Credit-Block & Indent Readiness Gem", mode: "No-Code Gemini Gem", desc: "Screens morning WD primary orders against overdue credit ledgers and alerts ASMs before truck staging." },
                { time: "Midday (11:00–15:00)", agent: "Pick-to-Invoice Variance Reconciler", mode: "Low-Code Agent Studio", desc: "Matches physical bay pick counts against SAP order lines so short-picked invoices are adjusted before truck sealing." },
                { time: "Evening (16:00–19:00)", agent: "EOD Billing & Cutoff Closer Agent", mode: "Low-Code + SAP OpenAPI", desc: "Auto-generates e-Way Bills and triggers final SAP billing batches before the 7:00 PM dispatch cutoff." }
              ],
              tmAndDAgents: [
                {
                  name: "Credit-Block & Indent Readiness Gem",
                  mode: "No-Code Gemini Gem",
                  prio: "prio-next",
                  impact: "Eliminates credit-hold billing surprises",
                  sources: ["SAP Credit", "WD Balances", "Indent Queue"],
                  dailyTask: "Morning (08:00–10:00): Screens morning WD primary orders against overdue credit ledgers and alerts ASMs before truck staging.",
                  desc: "Screens morning WD primary orders against overdue credit ledgers and alerts ASMs before truck staging.",
                  promptHint: "Execute Credit-Block & Indent Readiness Gem workflow: Screens morning WD primary orders against overdue credit ledgers and alerts ASMs before truck staging."
                },
                {
                  name: "Pick-to-Invoice Variance Reconciler",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "Zero pick-to-invoice billing errors",
                  sources: ["WMS Pick Scans", "SAP Invoice", "Variance Log"],
                  dailyTask: "Midday (11:00–15:00): Matches physical bay pick counts against SAP order lines so short-picked invoices are adjusted before truck sealing.",
                  desc: "Matches physical bay pick counts against SAP order lines so short-picked invoices are adjusted before truck sealing.",
                  promptHint: "Execute Pick-to-Invoice Variance Reconciler workflow: Matches physical bay pick counts against SAP order lines so short-picked invoices are adjusted before truck sealing."
                },
                {
                  name: "EOD Billing & Cutoff Closer Agent",
                  mode: "Low-Code + SAP OpenAPI",
                  prio: "prio-first",
                  impact: "100% same-day primary billing closure",
                  sources: ["SAP Billing", "GST e-Way Bill", "Dispatch Log"],
                  dailyTask: "Evening (16:00–19:00): Auto-generates e-Way Bills and triggers final SAP billing batches before the 7:00 PM dispatch cutoff.",
                  desc: "Auto-generates e-Way Bills and triggers final SAP billing batches before the 7:00 PM dispatch cutoff.",
                  promptHint: "Flag credit-blocked WD indents by 2 PM and automate e-Way Bill + invoice batch release before evening cutoff."
                },
                {
                  name: "GST e-Invoice & e-Way Bill Error Auto-Fixer",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "Zero truck gate holds due to tax errors",
                  sources: ["SAP Billing", "NIC Portal", "Master Data"],
                  dailyTask: "Detects HSN code, pin-code, or transporter-ID mismatches blocking e-Way Bill generation before dispatch.",
                  desc: "Fixes billing master-data errors in seconds so loaded trucks never wait at depot gates.",
                  promptHint: "Flag today's pending invoices failing NIC e-Way Bill validation and show the exact field fix."
                },
                {
                  name: "Distributor Balance-Order & Cancellation Cleaner",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Accurate daily fill-rate reporting",
                  sources: ["Open Indents", "Billing Cutoff", "DMS"],
                  dailyTask: "Reconciles unbilled end-of-day indent lines into next-day carry-forwards vs expired cancellations.",
                  desc: "Keeps depot order books clean and gives ASMs accurate true fill-rate metrics.",
                  promptHint: "Summarize today's unbilled indent lines by reason code (stock-out, credit block, cutoff miss)."
                }
              ]
            }
          ]
        },
        {
          name: "Channel & Route-to-Market (GT, MT & Q-Commerce)",
          items: [
            {
              id: "SC-46",
              persona: "Modern Trade & Q-Comm Logistics Lead",
              mandate: "Manages retailer DC appointment slots (DMart, Reliance, Blinkit, Zepto), ASN accuracy, and OTIF compliance.",
              impact: "98.5%+ MT & Q-Comm OTIF compliance",
              agent: "MT / Q-Comm Slot & OTIF Copilot",
              buildMode: "Low-Code Agent Studio",
              sources: ["Retailer EDI Portals", "SAP Orders", "Appointment Logs"],
              promptHint: "Match MT/Q-Commerce PO expiry windows against CFA dispatch schedules to prevent OTIF short-ship penalties.",
              dayJourney: [
                { time: "Morning (08:00–10:00)", agent: "PO Expiry & Slot Conflict Scanner", mode: "No-Code Gemini Gem", desc: "Parses Blinkit/Zepto/DMart POs for strict shelf-life (>75% DTE) and delivery slot deadlines, flagging at-risk orders." },
                { time: "Midday (10:30–15:30)", agent: "MT / Q-Comm Slot & OTIF Copilot", mode: "Low-Code Agent Studio", desc: "Detects transit delays on MT-bound trucks and proactively requests revised dark-store/DC dock slots to avoid penalty fines." },
                { time: "Evening (16:00–18:30)", agent: "OTIF Penalty & Fill-Rate Defender", mode: "Multimodal + Agent Studio", desc: "Reconciles stamped MT GRNs against dispatched invoices to dispute unfair short-delivery deductions." }
              ],
              tmAndDAgents: [
                {
                  name: "PO Expiry & Slot Conflict Scanner",
                  mode: "No-Code Gemini Gem",
                  prio: "prio-next",
                  impact: "Zero missed MT/Q-Comm PO expiries",
                  sources: ["Retailer Portals", "PO Expiry", "Slot Calendar"],
                  dailyTask: "Morning (08:00–10:00): Parses Blinkit/Zepto/DMart POs for strict shelf-life (>75% DTE) and delivery slot deadlines, flagging at-risk orders.",
                  desc: "Parses Blinkit/Zepto/DMart POs for strict shelf-life (>75% DTE) and delivery slot deadlines, flagging at-risk orders.",
                  promptHint: "Execute PO Expiry & Slot Conflict Scanner workflow: Parses Blinkit/Zepto/DMart POs for strict shelf-life (>75% DTE) and delivery slot deadlines, flagging at-risk orders."
                },
                {
                  name: "MT / Q-Comm Slot & OTIF Copilot",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-first",
                  impact: "Protects 98%+ MT & Q-Comm OTIF",
                  sources: ["ASN Portal", "CFA Dispatch", "Slot Rules"],
                  dailyTask: "Midday (10:30–15:30): Detects transit delays on MT-bound trucks and proactively requests revised dark-store/DC dock slots to avoid penalty fines.",
                  desc: "Detects transit delays on MT-bound trucks and proactively requests revised dark-store/DC dock slots to avoid penalty fines.",
                  promptHint: "Match MT/Q-Commerce PO expiry windows against CFA dispatch schedules to prevent OTIF short-ship penalties."
                },
                {
                  name: "OTIF Penalty & Fill-Rate Defender",
                  mode: "Multimodal + Agent Studio",
                  prio: "",
                  impact: "40% lower retailer OTIF penalty deductions",
                  sources: ["OTIF Tracker", "Penalty Clauses", "Claim Logs"],
                  dailyTask: "Evening (16:00–18:30): Reconciles stamped MT GRNs against dispatched invoices to dispute unfair short-delivery deductions.",
                  desc: "Reconciles stamped MT GRNs against dispatched invoices to dispute unfair short-delivery deductions.",
                  promptHint: "Execute OTIF Penalty & Fill-Rate Defender workflow: Reconciles stamped MT GRNs against dispatched invoices to dispute unfair short-delivery deductions."
                },
                {
                  name: "Q-Comm Dark-Store Direct-Drop Scheduler",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "+5% Q-Comm on-shelf availability",
                  sources: ["Blinkit/Zepto POs", "City Micro-Hubs", "Van Plan"],
                  dailyTask: "Consolidates city-level Q-Comm dark-store POs into dedicated milk-run vans hitting tight drop slots.",
                  desc: "Protects high-frequency urban Quick Commerce replenishment without bloating freight cost.",
                  promptHint: "Sequence tomorrow's Mumbai/Delhi Q-Comm dark-store milk-run stops by appointment window."
                },
                {
                  name: "Retailer Portal ASN & Appointment Reconciler",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Eliminates 'No-Show' slot penalties",
                  sources: ["Retailer Portals", "Truck GPS", "ASN Logs"],
                  dailyTask: "Monitors truck ETAs against booked MT DC slots and triggers automated slot-reschedule requests if delayed.",
                  desc: "Prevents costly 'no-show' penalties and multi-day re-booking delays at retailer DCs.",
                  promptHint: "Flag MT-bound trucks projected to miss their booked DC appointment window by >30 minutes."
                }
              ]
            },
            {
              id: "SC-47",
              persona: "Area Distribution / RTM Manager",
              mandate: "Governs territory distributor fill rates, secondary beat coverage, and rural/urban route-to-market expansion.",
              impact: "+4% secondary distribution reach",
              agent: "Territory RTM Morning Pulse Gem",
              buildMode: "No-Code Gemini Gem",
              sources: ["DMS Secondary Sales", "WD Ledgers", "Beat Geo-Logs"],
              promptHint: "Synthesize MTD secondary fill rates, WD stock-outs, and unbilled outlet beats into a 60-second morning briefing.",
              dayJourney: [
                { time: "Morning (08:15–09:45)", agent: "Territory RTM Morning Pulse Gem", mode: "No-Code Gemini Gem", desc: "Delivers an 8:15 AM briefing highlighting lagging beats, WD stock-outs on core SKUs, and credit-blocked distributors." },
                { time: "Midday (11:00–15:00)", agent: "Distributor JBR & Stock-Health Copilot", mode: "Mobile Voice Gem", desc: "Answers on-the-road voice queries before WD visits: 3-month fill rate, pending claims, and slow-moving NPD stock." },
                { time: "Evening (16:30–19:00)", agent: "EOD Market Debrief & Action Tracker", mode: "Multimodal Voice + Workspace", desc: "Converts 2-minute market visit voice notes into structured action items, WD portal tickets, and Branch Manager summaries." }
              ],
              tmAndDAgents: [
                {
                  name: "Territory RTM Morning Pulse Gem",
                  mode: "No-Code Gemini Gem",
                  prio: "prio-first",
                  impact: "8:30 AM territory pulse in 60 seconds",
                  sources: ["DMS Secondary", "Beat Coverage", "WD Fill Rate"],
                  dailyTask: "Morning (08:15–09:45): Delivers an 8:15 AM briefing highlighting lagging beats, WD stock-outs on core SKUs, and credit-blocked distributors.",
                  desc: "Delivers an 8:15 AM briefing highlighting lagging beats, WD stock-outs on core SKUs, and credit-blocked distributors.",
                  promptHint: "Synthesize MTD secondary fill rates, WD stock-outs, and unbilled outlet beats into a 60-second morning briefing."
                },
                {
                  name: "Distributor JBR & Stock-Health Copilot",
                  mode: "Mobile Voice Gem",
                  prio: "prio-next",
                  impact: "Faster ASM-to-WD stock intervention",
                  sources: ["Mobile Voice", "WD Stock Health", "ASM Targets"],
                  dailyTask: "Midday (11:00–15:00): Answers on-the-road voice queries before WD visits: 3-month fill rate, pending claims, and slow-moving NPD stock.",
                  desc: "Answers on-the-road voice queries before WD visits: 3-month fill rate, pending claims, and slow-moving NPD stock.",
                  promptHint: "Execute Distributor JBR & Stock-Health Copilot workflow: Answers on-the-road voice queries before WD visits: 3-month fill rate, pending claims, and slow-moving NPD stock."
                },
                {
                  name: "EOD Market Debrief & Action Tracker",
                  mode: "Multimodal Voice + Workspace",
                  prio: "",
                  impact: "100% field market visit follow-through",
                  sources: ["Voice Notes", "Workspace", "Action Tracker"],
                  dailyTask: "Evening (16:30–19:00): Converts 2-minute market visit voice notes into structured action items, WD portal tickets, and Branch Manager summaries.",
                  desc: "Converts 2-minute market visit voice notes into structured action items, WD portal tickets, and Branch Manager summaries.",
                  promptHint: "Execute EOD Market Debrief & Action Tracker workflow: Converts 2-minute market visit voice notes into structured action items, WD portal tickets, and Branch Manager summaries."
                },
                {
                  name: "Beat-Level Zero-Billing & Outlet Churn Radar",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "+4% active outlet billing coverage",
                  sources: ["DMS Beat Data", "Outlet History", "ASM Territory"],
                  dailyTask: "Flags high-value retail outlets in a salesman's beat that skipped ordering for 2+ consecutive visits.",
                  desc: "Helps Area Distribution Managers direct field reps to recover slipping outlets early.",
                  promptHint: "List top 20 A-class outlets in Territory West with zero billing over the last 14 days."
                },
                {
                  name: "New-Launch Distribution & Eco-Outlet Tracker",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "2x faster new-SKU beat penetration",
                  sources: ["DMS Launch", "Beat Plan", "WD Stock"],
                  dailyTask: "Tracks daily effective coverage (ECO) of newly launched SKUs across urban and rural beats.",
                  desc: "Spots Wholesale Dealers holding launch stock without pushing it down to retail beats.",
                  promptHint: "Highlight WDs that received new-SKU stock >10 days ago but have <15% beat penetration."
                }
              ]
            },
            {
              id: "SC-48",
              persona: "Wholesale Dealer (WD) / Stockist Ops Mgr",
              mandate: "Manages distributor warehouse inventory, primary indenting, credit holds, and daily kirana van/tempo dispatch.",
              impact: "4–6 days reduction in WD DSI",
              agent: "Predictive WD Reorder & Dispatch Agent",
              buildMode: "Low-Code Agent Studio",
              sources: ["DMS Inventory", "DSR Order Feed", "Festival Calendar"],
              promptHint: "Predict WD stock-outs 5 days ahead based on DSR order velocity and auto-draft optimal primary indents.",
              dayJourney: [
                { time: "Morning (07:30–09:30)", agent: "Morning Tempo Load & Beat Briefing Gem", mode: "Vernacular Voice Gem", desc: "Consolidates overnight DSR orders into route-wise tempo loading sheets and briefs van teams in regional languages." },
                { time: "Midday (11:00–15:00)", agent: "Predictive WD Reorder & Dispatch Agent", mode: "Low-Code Agent Studio", desc: "Forecasts festival SKU depletion 5 days ahead and auto-drafts optimal primary indents to the CPG CFA." },
                { time: "Evening (16:30–19:30)", agent: "Damage Return & Claim Status Bot", mode: "Multimodal + WhatsApp", desc: "Classifies photos of damaged market returns for debit notes and answers instant WhatsApp queries on pending claim payouts." }
              ],
              tmAndDAgents: [
                {
                  name: "Morning Tempo Load & Beat Briefing Gem",
                  mode: "Vernacular Voice Gem",
                  prio: "prio-next",
                  impact: "15% higher morning beat drop efficiency",
                  sources: ["DMS Beat Plan", "Tempo Capacity", "Voice Gem"],
                  dailyTask: "Morning (07:30–09:30): Consolidates overnight DSR orders into route-wise tempo loading sheets and briefs van teams in regional languages.",
                  desc: "Consolidates overnight DSR orders into route-wise tempo loading sheets and briefs van teams in regional languages.",
                  promptHint: "Execute Morning Tempo Load & Beat Briefing Gem workflow: Consolidates overnight DSR orders into route-wise tempo loading sheets and briefs van teams in regional languages."
                },
                {
                  name: "Predictive WD Reorder & Dispatch Agent",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-first",
                  impact: "Cuts WD stock-outs & overstocking by 22%",
                  sources: ["WD Closing Stock", "Secondary Sales", "Credit Limit"],
                  dailyTask: "Midday (11:00–15:00): Forecasts festival SKU depletion 5 days ahead and auto-drafts optimal primary indents to the CPG CFA.",
                  desc: "Forecasts festival SKU depletion 5 days ahead and auto-drafts optimal primary indents to the CPG CFA.",
                  promptHint: "Predict WD stock-outs 5 days ahead based on DSR order velocity and auto-draft optimal primary indents."
                },
                {
                  name: "Damage Return & Claim Status Bot",
                  mode: "Multimodal + WhatsApp",
                  prio: "",
                  impact: "Instant damage claim triage via WhatsApp",
                  sources: ["WhatsApp Photos", "Claim Policy", "DMS Returns"],
                  dailyTask: "Evening (16:30–19:30): Classifies photos of damaged market returns for debit notes and answers instant WhatsApp queries on pending claim payouts.",
                  desc: "Classifies photos of damaged market returns for debit notes and answers instant WhatsApp queries on pending claim payouts.",
                  promptHint: "Execute Damage Return & Claim Status Bot workflow: Classifies photos of damaged market returns for debit notes and answers instant WhatsApp queries on pending claim payouts."
                },
                {
                  name: "WD Working-Capital & ROI Health Advisor",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "Healthier, faster-turning WD partners",
                  sources: ["WD Stock", "Credit Days", "Secondary Sales"],
                  dailyTask: "Monitors distributor inventory-turn and ROI, flagging slow-moving capital tied up in C-class SKUs.",
                  desc: "Helps Wholesale Dealers optimize working capital so they always have cash for fast movers.",
                  promptHint: "Show WD ROI and inventory-days breakdown highlighting top 5 capital-trapping SKUs."
                },
                {
                  name: "Salesman Beat-Order Anomaly & Split-Load Bot",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "10% higher van drop-size",
                  sources: ["SFA Orders", "Van Capacity", "Beat GPS"],
                  dailyTask: "Groups incoming field-salesman outlet orders into balanced tempo/e-rickshaw delivery beats.",
                  desc: "Eliminates manual evening order sorting at the stockist godown.",
                  promptHint: "Optimize tomorrow's 4 delivery tempos across today's 185 SFA outlet orders."
                }
              ]
            }
          ]
        },
        {
          name: "Fleet, Carrier & Freight Governance",
          items: [
            {
              id: "SC-49",
              persona: "Fleet & Route Dispatch Lead",
              mandate: "Recalculates multi-drop CFA/WD routes using live Google Maps traffic, bridge limits, and city curfews.",
              impact: "Cuts fleet fuel & transit time 6–10%",
              agent: "Dynamic Rerouter",
              buildMode: "Low-Code + Maps Platform",
              sources: ["Google Maps API", "City Curfew DB", "Truck Specs"],
              promptHint: "Re-sequence multi-drop distributor & MT routes around live highway closures and municipal no-entry hours.",
              dayJourney: [
                { time: "Morning (07:30–09:30)", agent: "Curfew & Route Compliance Validator", mode: "No-Code Gemini Gem", desc: "Checks all morning metro dispatches against municipal heavy-vehicle no-entry hours and low-bridge restrictions." },
                { time: "Midday (10:30–15:30)", agent: "Live Traffic & Breakdown Rerouter", mode: "Low-Code + Maps Platform", desc: "Detects highway bottlenecks via Google Maps API and pushes optimized turn-by-turn detours to fleet drivers." },
                { time: "Evening (16:00–18:30)", agent: "Fleet Utilization & Empty-Mile Auditor", mode: "No-Code Gemini Gem", desc: "Analyzes planned vs. actual route kilometers and identifies return backhaul pairing opportunities." }
              ],
              tmAndDAgents: [
                {
                  name: "Curfew & Route Compliance Validator",
                  mode: "No-Code Gemini Gem",
                  prio: "prio-next",
                  impact: "Zero city no-entry fines",
                  sources: ["City Curfew DB", "Vehicle Specs", "Route Plan"],
                  dailyTask: "Morning (07:30–09:30): Checks all morning metro dispatches against municipal heavy-vehicle no-entry hours and low-bridge restrictions.",
                  desc: "Checks all morning metro dispatches against municipal heavy-vehicle no-entry hours and low-bridge restrictions.",
                  promptHint: "Execute Curfew & Route Compliance Validator workflow: Checks all morning metro dispatches against municipal heavy-vehicle no-entry hours and low-bridge restrictions."
                },
                {
                  name: "Live Traffic & Breakdown Rerouter",
                  mode: "Low-Code + Maps Platform",
                  prio: "prio-first",
                  impact: "Protects multi-drop delivery SLAs",
                  sources: ["Google Maps API", "GPS Telemetry", "Drop Windows"],
                  dailyTask: "Midday (10:30–15:30): Detects highway bottlenecks via Google Maps API and pushes optimized turn-by-turn detours to fleet drivers.",
                  desc: "Detects highway bottlenecks via Google Maps API and pushes optimized turn-by-turn detours to fleet drivers.",
                  promptHint: "Execute Live Traffic & Breakdown Rerouter workflow: Detects highway bottlenecks via Google Maps API and pushes optimized turn-by-turn detours to fleet drivers."
                },
                {
                  name: "Fleet Utilization & Empty-Mile Auditor",
                  mode: "No-Code Gemini Gem",
                  prio: "",
                  impact: "8–12% lower empty-mile fleet cost",
                  sources: ["Fleet GPS", "Load Factor", "Empty Miles"],
                  dailyTask: "Evening (16:00–18:30): Analyzes planned vs. actual route kilometers and identifies return backhaul pairing opportunities.",
                  desc: "Analyzes planned vs. actual route kilometers and identifies return backhaul pairing opportunities.",
                  promptHint: "Execute Fleet Utilization & Empty-Mile Auditor workflow: Analyzes planned vs. actual route kilometers and identifies return backhaul pairing opportunities."
                },
                {
                  name: "EV / CNG Fleet Range & Charge-Stop Planner",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "12% lower urban last-mile fuel cost",
                  sources: ["EV Telemetry", "Charge Map", "Beat Load"],
                  dailyTask: "Assigns urban secondary beats to EV/CNG vans factoring payload, AC/reefer draw, and charger locations.",
                  desc: "Maximizes green urban fleet utilization without mid-route range anxiety.",
                  promptHint: "Assign urban secondary routes to our EV van fleet within 80% safe battery range."
                },
                {
                  name: "Geo-Fenced Proof-of-Delivery & Cash Alert Bot",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Zero unverified drop disputes",
                  sources: ["Driver GPS", "Outlet Geo", "POD App"],
                  dailyTask: "Verifies driver delivery check-ins match outlet geo-fences and flags out-of-zone drops immediately.",
                  desc: "Strengthens last-mile delivery governance and speeds up daily van cash/UPI reconciliation.",
                  promptHint: "Flag today's secondary deliveries logged >200m outside the outlet's verified geo-fence."
                }
              ]
            },
            {
              id: "SC-50",
              persona: "Transport Procurement Manager",
              mandate: "Tracks carrier tender acceptance & lane OTIF to reprioritize contracted transporters and cut spot freight.",
              impact: "Reduces spot freight by 15–20%",
              agent: "Routing Guide Compliance Agent",
              buildMode: "No-Code Gemini Gem",
              sources: ["TMS Tender Logs", "Spot Market Rates", "Carrier OTIF"],
              promptHint: "Identify lanes where primary carriers reject >20% of tenders and recommend waterfall routing guide re-ranking.",
              dayJourney: [
                { time: "Morning (08:30–10:00)", agent: "Lane Tender Rejection Radar", mode: "No-Code Gemini Gem", desc: "Flags high-rejection lanes from overnight primary dispatches where spot market trucks were booked at a premium." },
                { time: "Midday (11:00–15:00)", agent: "Carrier Benchmark & Mini-Bid Copilot", mode: "Low-Code Agent Studio", desc: "Compares contracted lane rates against live freight index benchmarks to prepare rapid mini-RFQs for backup carriers." },
                { time: "Evening (16:00–18:00)", agent: "Weekly Carrier QBR Scorecard Agent", mode: "No-Code Gemini Gem", desc: "Auto-compiles transporter OTIF, detention, and damage KPIs for commercial review meetings." }
              ],
              tmAndDAgents: [
                {
                  name: "Lane Tender Rejection Radar",
                  mode: "No-Code Gemini Gem",
                  prio: "prio-next",
                  impact: "Flags lane tender failures 24h earlier",
                  sources: ["TMS Tenders", "Rejection Logs", "Lane Matrix"],
                  dailyTask: "Morning (08:30–10:00): Flags high-rejection lanes from overnight primary dispatches where spot market trucks were booked at a premium.",
                  desc: "Flags high-rejection lanes from overnight primary dispatches where spot market trucks were booked at a premium.",
                  promptHint: "Execute Lane Tender Rejection Radar workflow: Flags high-rejection lanes from overnight primary dispatches where spot market trucks were booked at a premium."
                },
                {
                  name: "Carrier Benchmark & Mini-Bid Copilot",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-first",
                  impact: "3–5% spot freight cost savings",
                  sources: ["Spot Market", "Contract Rates", "Carrier OTIF"],
                  dailyTask: "Midday (11:00–15:00): Compares contracted lane rates against live freight index benchmarks to prepare rapid mini-RFQs for backup carriers.",
                  desc: "Compares contracted lane rates against live freight index benchmarks to prepare rapid mini-RFQs for backup carriers.",
                  promptHint: "Execute Carrier Benchmark & Mini-Bid Copilot workflow: Compares contracted lane rates against live freight index benchmarks to prepare rapid mini-RFQs for backup carriers."
                },
                {
                  name: "Weekly Carrier QBR Scorecard Agent",
                  mode: "No-Code Gemini Gem",
                  prio: "",
                  impact: "Automated weekly carrier QBR scorecards",
                  sources: ["Carrier KPIs", "Detention Logs", "QBR Slides"],
                  dailyTask: "Evening (16:00–18:00): Auto-compiles transporter OTIF, detention, and damage KPIs for commercial review meetings.",
                  desc: "Auto-compiles transporter OTIF, detention, and damage KPIs for commercial review meetings.",
                  promptHint: "Execute Weekly Carrier QBR Scorecard Agent workflow: Auto-compiles transporter OTIF, detention, and damage KPIs for commercial review meetings."
                },
                {
                  name: "Fuel-Surcharge & Diesel-Index Auditor",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "100% accurate fuel-clause billing",
                  sources: ["Diesel Index", "Rate Cards", "Carrier Bills"],
                  dailyTask: "Recalculates monthly transporter fuel-surcharge adjustments automatically from official diesel prices.",
                  desc: "Eliminates manual spreadsheet disputes over carrier fuel-escalation clauses.",
                  promptHint: "Compute this month's diesel-index rate adjustment across all active primary lane contracts."
                },
                {
                  name: "Carrier Safety, GPS Uptime & Compliance Bot",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "98%+ live GPS tracking coverage",
                  sources: ["GPS Ping Logs", "Permit DB", "Carrier SLA"],
                  dailyTask: "Flags transporters dispatching trucks with offline GPS devices or expiring fitness/insurance permits.",
                  desc: "Enforces fleet safety and visibility SLAs before trucks are tendered loads.",
                  promptHint: "List contracted carriers with <90% GPS ping uptime over the last 14 days."
                }
              ]
            },
            {
              id: "SC-51",
              persona: "Freight Bill & Claims Controller",
              mandate: "Extracts signed PODs and carrier rate contracts via OCR to audit detention and accessorial surcharges.",
              impact: "Captures 3–7% in overbilled fees",
              agent: "Freight Bill Audit Agent",
              buildMode: "Multimodal + Agent Studio",
              sources: ["Signed PODs", "Carrier Contracts", "GPS Geofence Logs"],
              promptHint: "Audit carrier detention and loading surcharges against GPS geofence timestamps and signed PODs.",
              dayJourney: [
                { time: "Morning (08:30–10:30)", agent: "POD OCR & Short-Delivery Extractor", mode: "Multimodal Vision", desc: "Reads scanned/photographed paper PODs from drivers, extracting stamps, shortage remarks, and receiver signatures." },
                { time: "Midday (11:00–15:30)", agent: "Detention & Accessorial Dispute Agent", mode: "Low-Code Agent Studio", desc: "Cross-checks billed carrier detention hours against actual FASTag/GPS geofence entry-exit logs to block invalid charges." },
                { time: "Evening (16:00–18:00)", agent: "Auto-Approval & Credit Note Generator", mode: "Low-Code + SAP API", desc: "Approves clean freight bills for automated SAP payout and drafts itemized dispute memos for rejected surcharges." }
              ],
              tmAndDAgents: [
                {
                  name: "POD OCR & Short-Delivery Extractor",
                  mode: "Multimodal Vision",
                  prio: "prio-next",
                  impact: "80% faster POD discrepancy extraction",
                  sources: ["POD Scans", "Multimodal OCR", "GRN Logs"],
                  dailyTask: "Morning (08:30–10:30): Reads scanned/photographed paper PODs from drivers, extracting stamps, shortage remarks, and receiver signatures.",
                  desc: "Reads scanned/photographed paper PODs from drivers, extracting stamps, shortage remarks, and receiver signatures.",
                  promptHint: "Execute POD OCR & Short-Delivery Extractor workflow: Reads scanned/photographed paper PODs from drivers, extracting stamps, shortage remarks, and receiver signatures."
                },
                {
                  name: "Detention & Accessorial Dispute Agent",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-first",
                  impact: "Eliminates invalid detention payouts",
                  sources: ["GPS Dwell", "Rate Contracts", "Detention Rules"],
                  dailyTask: "Midday (11:00–15:30): Cross-checks billed carrier detention hours against actual FASTag/GPS geofence entry-exit logs to block invalid charges.",
                  desc: "Cross-checks billed carrier detention hours against actual FASTag/GPS geofence entry-exit logs to block invalid charges.",
                  promptHint: "Execute Detention & Accessorial Dispute Agent workflow: Cross-checks billed carrier detention hours against actual FASTag/GPS geofence entry-exit logs to block invalid charges."
                },
                {
                  name: "Auto-Approval & Credit Note Generator",
                  mode: "Low-Code + SAP API",
                  prio: "",
                  impact: "Auto-clears clean carrier bills in minutes",
                  sources: ["SAP FI", "Credit Notes", "Freight Ledger"],
                  dailyTask: "Evening (16:00–18:00): Approves clean freight bills for automated SAP payout and drafts itemized dispute memos for rejected surcharges.",
                  desc: "Approves clean freight bills for automated SAP payout and drafts itemized dispute memos for rejected surcharges.",
                  promptHint: "Execute Auto-Approval & Credit Note Generator workflow: Approves clean freight bills for automated SAP payout and drafts itemized dispute memos for rejected surcharges."
                },
                {
                  name: "Toll, Unloading & Extra-Drop Accessorial Verifier",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "Cuts bogus accessorial charges by 55%",
                  sources: ["FASTag Logs", "Route Stops", "Carrier Claims"],
                  dailyTask: "Cross-checks carrier extra-drop, green-tax, and toll claims against FASTag and GPS stop logs.",
                  desc: "Validates every accessorial line item automatically before approving freight bills.",
                  promptHint: "Audit today's carrier accessorial claims against actual FASTag and GPS stop timestamps."
                },
                {
                  name: "Unbilled Freight Provision & Accrual Reconciler",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Accurate monthly logistics P&L",
                  sources: ["Completed Trips", "AP Invoices", "SAP FI"],
                  dailyTask: "Estimates accrued freight liability for completed trips whose carrier invoices haven't arrived yet.",
                  desc: "Prevents month-end freight cost surprises for supply chain finance.",
                  promptHint: "Calculate month-end freight accrual for all delivered primary trips missing carrier bills."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "reverse",
      num: "06",
      title: "Returns & Reverse Logistics",
      subtitle: "Circularity & Value Recovery",
      lifecycle: "Reverse Value Stream Lifecycle",
      tagline: "Triage inspection and upstream defect loops.",
      color: "var(--g-red)",
      ink: "var(--red-ink)",
      cssClass: "p-red",
      page: "pillars/06_reverse.html",
      demoTitle: "Return Fraud & Circularity",
      demoDesc: "Visual return triage, dynamic markdowns & RTI reclamation",
      kpis: [
        { val: "25–40%", lbl: "Return fraud abuse cut" },
        { val: "20–35%", lbl: "Perishable scrap reduction" },
        { val: "30%", lbl: "Eliminated RTI non-return fines" }
      ],
      subprocesses: [
        {
          name: "Returns & Claims Mgmt",
          items: [
            {
              id: "SC-52",
              persona: "Reverse Logistics / Fraud Lead",
              mandate: "Analyzes item photos and packaging video feeds to detect wear or swapped tags.",
              impact: "Cuts returns fraud abuse by 25–40%",
              agent: "Return Fraud Sentinel",
              buildMode: "Multimodal Vision",
              sources: ["Return Photos", "Packing Video", "Order History"],
              promptHint: "Compare returned item images against outbound pack-out photos to detect tag swaps, wear, or empty boxes.",
              tmAndDAgents: [
                {
                  name: "Return Fraud Sentinel",
                  mode: "Multimodal Vision",
                  prio: "prio-next",
                  impact: "Cuts returns fraud abuse by 25–40%",
                  sources: ["Return Photos", "Packing Video", "Order History"],
                  dailyTask: "Executes core Reverse Logistics / Fraud Lead workflow: Analyzes item photos and packaging video feeds to detect wear or swapped tags.",
                  desc: "Analyzes item photos and packaging video feeds to detect wear or swapped tags.",
                  promptHint: "Compare returned item images against outbound pack-out photos to detect tag swaps, wear, or empty boxes."
                },
                {
                  name: "Distributor Claim & Return Anomaly Detector",
                  mode: "Multimodal Vision",
                  prio: "prio-next",
                  impact: "Cuts fraudulent return claims by 35%",
                  sources: ["Claim History", "Batch Codes", "Outlet Sales"],
                  dailyTask: "Flags unusual spikes in expiry/damage claims from specific outlets or distributors vs historical norms.",
                  desc: "Cross-checks claimed batch codes against actual primary/secondary invoice dates to spot abuse.",
                  promptHint: "Highlight distributors whose damage/expiry return ratio exceeds 2x regional benchmark."
                },
                {
                  name: "Serial & Batch Authenticity Verifier",
                  mode: "Multimodal Vision",
                  prio: "",
                  impact: "Protects brand & return integrity",
                  sources: ["Batch Master", "Photo OCR", "Invoice Logs"],
                  dailyTask: "Validates batch numbers and manufacturing dates on return photos against original dispatch records.",
                  desc: "Prevents out-of-policy or expired third-party stock from entering the reverse credit pipeline.",
                  promptHint: "Verify batch codes on high-value return claims against our last 6 months of CFA dispatches."
                },
                {
                  name: "Cross-Channel Grey-Market & Diversion Watcher",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "Protects channel pricing integrity",
                  sources: ["Batch Codes", "Online Listings", "WD Invoices"],
                  dailyTask: "Traces batch codes from unauthorized deep-discount listings back to original primary billing nodes.",
                  desc: "Helps TM&D and legal teams spot cross-territory or channel-diversion leaks.",
                  promptHint: "Trace batch codes flagged on unauthorized B2B portals back to original billed CFAs/WDs."
                },
                {
                  name: "High-Risk Return Policy Rule Tuner",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Balances CX with fraud prevention",
                  sources: ["Return Outcomes", "Fraud Flags", "Ticket Cost"],
                  dailyTask: "Simulates threshold adjustments for instant credits vs mandatory physical inspection.",
                  desc: "Keeps return fraud controls calibrated without slowing down legitimate partner credits.",
                  promptHint: "Evaluate false-positive rate on our current ₹5,000 mandatory-inspection return rule."
                }
              ]
            },
            {
              id: "SC-53",
              persona: "Customer Experience (CX) Lead",
              mandate: "Evaluates salvage margins vs reverse freight to determine keep-it instant refunds.",
              impact: "Lowers net return costs by 15–22%",
              agent: "Keep-It & Routing Advisor",
              buildMode: "Low-Code Agent Studio",
              sources: ["Item Margin", "Return Freight", "Customer LTV"],
              promptHint: "Calculate whether reverse shipping + restocking exceeds net salvage value to authorize instant keep-it refunds.",
              tmAndDAgents: [
                {
                  name: "Keep-It & Routing Advisor",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-first",
                  impact: "Lowers net return costs by 15–22%",
                  sources: ["Item Margin", "Return Freight", "Customer LTV"],
                  dailyTask: "Executes core Customer Experience (CX) Lead workflow: Evaluates salvage margins vs reverse freight to determine keep-it instant refunds.",
                  desc: "Evaluates salvage margins vs reverse freight to determine keep-it instant refunds.",
                  promptHint: "Calculate whether reverse shipping + restocking exceeds net salvage value to authorize instant keep-it refunds."
                },
                {
                  name: "Instant Credit vs Reverse-Pickup Optimizer",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "22% lower reverse freight cost",
                  sources: ["SKU Margin", "Freight Cost", "Salvage Value"],
                  dailyTask: "Evaluates whether reverse pickup freight exceeds net recovery value on low-value damaged claims.",
                  desc: "Automates keep-it / local-disposal decisions when reverse logistics destroys net value.",
                  promptHint: "Calculate net recovery vs reverse freight for today's pending return pickups under ₹2,500."
                },
                {
                  name: "Retailer / Consumer Claim Resolution Copilot",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "+14 NPS on claim handling",
                  sources: ["Ticket Logs", "Dispatch Proof", "Credit Rules"],
                  dailyTask: "Drafts empathetic, policy-compliant claim status updates and credit timelines for trade partners.",
                  desc: "Accelerates trade partner and consumer complaint closure with full ERP context.",
                  promptHint: "Draft resolution responses for open MT/WD short-delivery tickets cleared by POD audit."
                },
                {
                  name: "Repeat-Damage Packaging Feedback Synthesizer",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "15% fewer transit-damage complaints",
                  sources: ["Return Photos", "CX Tickets", "SKU Specs"],
                  dailyTask: "Clusters consumer and retailer damage complaints by SKU and packs into weekly briefs for Packaging R&D.",
                  desc: "Closes the loop between customer claims and packaging engineering fixes.",
                  promptHint: "Summarize top 5 SKUs generating crushed-pack or broken-seal customer complaints this month."
                },
                {
                  name: "Proactive Delay & Short-Ship Notifier",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Cuts inbound 'Where is my order' calls 40%",
                  sources: ["TMS Delays", "CFA Dispatch", "Partner Contacts"],
                  dailyTask: "Sends proactive ETA updates to key trade partners whenever primary or secondary trucks are delayed.",
                  desc: "Turns reactive complaint calls into proactive, transparent customer communication.",
                  promptHint: "Draft proactive delay alerts for MT DCs whose inbound trucks are >2 hours behind slot."
                }
              ]
            },
            {
              id: "SC-54",
              persona: "Claims Specialist / Controller",
              mandate: "Reconciles eBOLs, dock damage logs, and carrier contracts to auto-file disputes.",
              impact: "Resolves carrier claims in <72 hours",
              agent: "OS&D Freight Claims",
              buildMode: "Multimodal + Agent Studio",
              sources: ["eBOLs", "Dock Photos", "Carrier Liability"],
              promptHint: "Assemble Over, Short & Damaged (OS&D) evidence packets with timestamped dock photos and file carrier claims.",
              tmAndDAgents: [
                {
                  name: "OS&D Freight Claims",
                  mode: "Multimodal + Agent Studio",
                  prio: "prio-next",
                  impact: "Resolves carrier claims in <72 hours",
                  sources: ["eBOLs", "Dock Photos", "Carrier Liability"],
                  dailyTask: "Executes core Claims Specialist / Controller workflow: Reconciles eBOLs, dock damage logs, and carrier contracts to auto-file disputes.",
                  desc: "Reconciles eBOLs, dock damage logs, and carrier contracts to auto-file disputes.",
                  promptHint: "Assemble Over, Short & Damaged (OS&D) evidence packets with timestamped dock photos and file carrier claims."
                },
                {
                  name: "Carrier OS&D Evidence & Dispute Packager",
                  mode: "Multimodal + Agent Studio",
                  prio: "prio-first",
                  impact: "3x higher carrier claim recovery",
                  sources: ["Signed PODs", "Gate Photos", "Carrier SLA"],
                  dailyTask: "Assembles signed POD shortages, dock photos, and rate-card liability clauses into ready-to-file claims.",
                  desc: "Automates end-to-end carrier Over, Short & Damaged (OS&D) claim packets.",
                  promptHint: "Compile OS&D claim packets for all primary trips with verified shortage remarks on POD."
                },
                {
                  name: "Transit Insurance & Repeat-Offender Tracker",
                  mode: "Multimodal + Agent Studio",
                  prio: "",
                  impact: "15% lower transit loss ratio",
                  sources: ["Claims Ledger", "Transporter KPI", "Lane Risk"],
                  dailyTask: "Tracks open insurance subrogations and flags transporters with chronic pilferage or rain-damage.",
                  desc: "Feeds carrier claim loss ratios directly into transport procurement scorecards.",
                  promptHint: "Rank transporters by OS&D claim frequency and unresolved recovery value YTD."
                },
                {
                  name: "Cold-Chain Excursion & Insurance Claim Compiler",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "2x faster insurance payout settlement",
                  sources: ["Reefer IoT", "QA Hold Log", "Policy Terms"],
                  dailyTask: "Bundles thermal-excursion graphs, batch values, and surveyor reports into insurer-ready claim packs.",
                  desc: "Speeds up recovery on spoiled chilled/frozen shipments.",
                  promptHint: "Compile insurance claim packet for yesterday's reefer thermal excursion on Lane West-2."
                },
                {
                  name: "Carrier Claim Recovery Aging & Escalator",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Cuts overdue claim balances by 35%",
                  sources: ["Claims Ledger", "Carrier AP", "SLA Timers"],
                  dailyTask: "Tracks open carrier OS&D claims past 30 days and flags eligible freight-bill offsets.",
                  desc: "Ensures approved carrier damage claims actually convert into credit notes or AP offsets.",
                  promptHint: "List carrier OS&D claims >45 days overdue for AP freight-bill offset."
                }
              ]
            }
          ]
        },
        {
          name: "Expiry & Markdowns",
          items: [
            {
              id: "SC-55",
              persona: "Merchandising / Store Ops Mgr",
              mandate: "Correlates days-to-expiry (DTE) with sales velocity to trigger ESL shelf price cuts.",
              impact: "Cuts perishable scrap by 20–35%",
              agent: "Dynamic Markdown Agent",
              buildMode: "Low-Code Agent Studio",
              sources: ["DTE Inventory", "Hourly POS", "ESL Pricing API"],
              promptHint: "Compute optimal markdown % curve for short-dated perishables to clear stock before end-of-day expiry.",
              tmAndDAgents: [
                {
                  name: "Dynamic Markdown Agent",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-first",
                  impact: "Cuts perishable scrap by 20–35%",
                  sources: ["DTE Inventory", "Hourly POS", "ESL Pricing API"],
                  dailyTask: "Executes core Merchandising / Store Ops Mgr workflow: Correlates days-to-expiry (DTE) with sales velocity to trigger ESL shelf price cuts.",
                  desc: "Correlates days-to-expiry (DTE) with sales velocity to trigger ESL shelf price cuts.",
                  promptHint: "Compute optimal markdown % curve for short-dated perishables to clear stock before end-of-day expiry."
                },
                {
                  name: "Near-Expiry Trade Promo & Markdown Pricer",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-first",
                  impact: "20–30% lower perishable shrink",
                  sources: ["MT POS", "Store DTE", "Elasticity"],
                  dailyTask: "Recommends optimal markdown tiers or MT consumer BOGO offers based on remaining days-to-expiry.",
                  desc: "Dynamically prices near-date retail inventory to maximize margin recovery before expiry.",
                  promptHint: "Recommend markdown % by store cluster for chilled/bakery SKUs within 7 days of expiry."
                },
                {
                  name: "Store-Level Freshness & Rotation Coach",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "+2 days average shelf freshness",
                  sources: ["Store Audits", "Replenishment", "Shrink Logs"],
                  dailyTask: "Alerts retail merchandisers to outlets with chronic FEFO rotation misses and high expiry shrink.",
                  desc: "Guides field merchandisers to prioritize high-shrink stores for rack rotation audits.",
                  promptHint: "List top 20 MT stores driving 50% of category expiry write-offs this quarter."
                },
                {
                  name: "Slow-Moving Shelf-Space Reallocation Advisor",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "+7% retail category productivity",
                  sources: ["MT POS", "Store Stock", "Planogram"],
                  dailyTask: "Identifies chronically slow SKUs in specific MT clusters to swap shelf space toward faster variants.",
                  desc: "Prevents slow-moving variants from aging out on store shelves.",
                  promptHint: "List SKUs with >45 days store cover in MT Cluster B to reduce reorder quantities."
                },
                {
                  name: "Markdown Cannibalization & Halo Checker",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Protects full-price SKU velocity",
                  sources: ["POS Markdowns", "Core Velocity", "Margin"],
                  dailyTask: "Monitors whether near-expiry store markdowns are cannibalizing fresh full-price stock.",
                  desc: "Tunes markdown depth and timing to clear aging units without hurting full-margin sales.",
                  promptHint: "Evaluate impact of 30% DTE markdowns on fresh-lot sales velocity in top 50 stores."
                }
              ]
            },
            {
              id: "SC-56",
              persona: "Inventory Disposition Lead",
              mandate: "Matches near-date DC lots with discounters or food banks before acceptance cutoffs.",
              impact: "Diverts bulk perishables from landfill",
              agent: "Short-Dated Redistributor",
              buildMode: "No-Code Gemini Gem",
              sources: ["DC Expiry Lots", "Secondary Buyers", "Food Bank Net"],
              promptHint: "Match near-code DC pallets to secondary liquidators or local food banks with cold-chain pickup readiness.",
              tmAndDAgents: [
                {
                  name: "Short-Dated Redistributor",
                  mode: "No-Code Gemini Gem",
                  prio: "prio-next",
                  impact: "Diverts bulk perishables from landfill",
                  sources: ["DC Expiry Lots", "Secondary Buyers", "Food Bank Net"],
                  dailyTask: "Executes core Inventory Disposition Lead workflow: Matches near-date DC lots with discounters or food banks before acceptance cutoffs.",
                  desc: "Matches near-date DC lots with discounters or food banks before acceptance cutoffs.",
                  promptHint: "Match near-code DC pallets to secondary liquidators or local food banks with cold-chain pickup readiness."
                },
                {
                  name: "Secondary Channel & Value-Chain Matcher",
                  mode: "No-Code Gemini Gem",
                  prio: "prio-first",
                  impact: "Doubles recovery on short-dated lots",
                  sources: ["CFA Aged Stock", "Liquidation Buyers", "Food Banks"],
                  dailyTask: "Matches near-date CFA pallets with approved discount chains, institutional buyers, or food banks.",
                  desc: "Routes short-dated inventory to secondary channels before statutory cutoffs expire.",
                  promptHint: "Match current 30-to-60 day DTE pallets at North CFAs with approved secondary buyers."
                },
                {
                  name: "Write-Off Tax & CSR Compliance Documenter",
                  mode: "No-Code Gemini Gem",
                  prio: "",
                  impact: "100% audit-ready donation records",
                  sources: ["Donation Receipts", "Batch Value", "CSR Ledger"],
                  dailyTask: "Compiles batch-level donation certificates and tax/CSR documentation for diverted food lots.",
                  desc: "Automates compliance paperwork for food-bank donations and certified destruction.",
                  promptHint: "Generate monthly CSR food-diversion and tax-deduction audit pack from completed transfers."
                },
                {
                  name: "Regional Surplus-to-Demand Secondary Matcher",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "20% faster aged-lot clearance",
                  sources: ["CFA Aged Stock", "Institutional Buyers", "Freight"],
                  dailyTask: "Matches short-dated depot lots with regional institutional catering, defense, or discount buyers.",
                  desc: "Expands secondary monetization channels before lots hit zero-value expiry.",
                  promptHint: "Match 45-day DTE bulk packs at CFA East with approved institutional buyers."
                },
                {
                  name: "Expiry Write-Off Root-Cause Categorizer",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Feeds S&OP to prevent repeat waste",
                  sources: ["Write-Off Ledger", "Forecast Error", "MOQ Logs"],
                  dailyTask: "Tags every expired write-off by root cause (over-forecast, high MOQ, cancelled promo, FEFO miss).",
                  desc: "Gives leadership clear accountability on why inventory expired.",
                  promptHint: "Break down this quarter's expiry write-offs by root cause and top 10 SKUs."
                }
              ]
            },
            {
              id: "SC-57",
              persona: "Chief Sustainability Officer",
              mandate: "Aggregates store shrink and organic haul logs to generate audited GHG diversion filings.",
              impact: "Automates annual circularity reporting",
              agent: "Food Waste & ESG Copilot",
              buildMode: "No-Code Gemini Gem",
              sources: ["Shrink Logs", "Compost Hauls", "ESG Frameworks"],
              promptHint: "Consolidate food waste diversion weights into audit-ready Scope 3 & zero-waste-to-landfill disclosures.",
              tmAndDAgents: [
                {
                  name: "Food Waste & ESG Copilot",
                  mode: "No-Code Gemini Gem",
                  prio: "prio-next",
                  impact: "Automates annual circularity reporting",
                  sources: ["Shrink Logs", "Compost Hauls", "ESG Frameworks"],
                  dailyTask: "Executes core Chief Sustainability Officer workflow: Aggregates store shrink and organic haul logs to generate audited GHG diversion filings.",
                  desc: "Aggregates store shrink and organic haul logs to generate audited GHG diversion filings.",
                  promptHint: "Consolidate food waste diversion weights into audit-ready Scope 3 & zero-waste-to-landfill disclosures."
                },
                {
                  name: "Food Waste & Diversion Impact Tracker",
                  mode: "No-Code Gemini Gem",
                  prio: "prio-next",
                  impact: "Zero unverified waste-to-landfill claims",
                  sources: ["Scrap Logs", "Haul Manifests", "GHG Factors"],
                  dailyTask: "Aggregates plant food-waste diversion to animal feed, composting, and biogas into audited GHG metrics.",
                  desc: "Tracks circular waste diversion across plants and depots for sustainability reporting.",
                  promptHint: "Summarize quarterly organic waste diversion tons and avoided CO2e by plant."
                },
                {
                  name: "Circular Packaging & Scrap Valorization Bot",
                  mode: "No-Code Gemini Gem",
                  prio: "",
                  impact: "+12% scrap & carton recovery revenue",
                  sources: ["Plant Scrap", "Recycler Rates", "Manifests"],
                  dailyTask: "Benchmarks corrugated and laminate scrap realization rates across regional plant recyclers.",
                  desc: "Optimizes circular recovery value from plant packaging scrap and damaged cartons.",
                  promptHint: "Compare plant-wise corrugated scrap realization against regional recycler market rates."
                },
                {
                  name: "Zero-Waste-to-Landfill Plant Certifier",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "100% plant ZWL audit readiness",
                  sources: ["Waste Manifests", "Vendor Certs", "Plant Logs"],
                  dailyTask: "Audits plant waste-disposal manifests monthly to verify zero organic or packaging waste hit landfills.",
                  desc: "Automates documentation for Zero-Waste-to-Landfill site certifications.",
                  promptHint: "Check all 12 plants for missing recycler or compost manifests in this month's ZWL log."
                },
                {
                  name: "Green Freight & Modal-Shift Emissions Tracker",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Quantifies rail & EV CO2e savings",
                  sources: ["Rail Rakes", "EV Trips", "Tonne-Km"],
                  dailyTask: "Calculates Scope 3 transport emissions avoided via rail rake shifts and EV secondary fleets.",
                  desc: "Links daily logistics mode choices directly to corporate sustainability KPIs.",
                  promptHint: "Compute CO2e savings from this quarter's road-to-rail primary lane shifts."
                }
              ]
            }
          ]
        },
        {
          name: "Pallet & Tote Reclamation",
          items: [
            {
              id: "SC-58",
              persona: "Asset Recovery / RTI Manager",
              mandate: "Reconciles RFID portal scans with CHEP/PECO statements to detect hoarding nodes.",
              impact: "Eliminates 30% in non-return fee fines",
              agent: "RTI Balance Reconciler",
              buildMode: "Low-Code Agent Studio",
              sources: ["RFID Gate Scans", "CHEP/PECO Bills", "Node Balances"],
              promptHint: "Identify distributor or store nodes with accumulating unreturned pallets/totes and issue automated recovery alerts.",
              tmAndDAgents: [
                {
                  name: "RTI Balance Reconciler",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-first",
                  impact: "Eliminates 30% in non-return fee fines",
                  sources: ["RFID Gate Scans", "CHEP/PECO Bills", "Node Balances"],
                  dailyTask: "Executes core Asset Recovery / RTI Manager workflow: Reconciles RFID portal scans with CHEP/PECO statements to detect hoarding nodes.",
                  desc: "Reconciles RFID portal scans with CHEP/PECO statements to detect hoarding nodes.",
                  promptHint: "Identify distributor or store nodes with accumulating unreturned pallets/totes and issue automated recovery alerts."
                },
                {
                  name: "Pallet & Crate Hoarding Node Detector",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "18% lower RTI replacement CapEx",
                  sources: ["CHEP/RTI Portal", "WD Balances", "CFA Gate"],
                  dailyTask: "Identifies CFAs, co-packers, and distributors holding returnable pallets/crates beyond cycle norms.",
                  desc: "Monitors returnable transit item (RTI) dwell times to prevent asset loss and rental penalties.",
                  promptHint: "List top 15 nodes with >30-day overdue CHEP pallets or plastic crates."
                },
                {
                  name: "RTI Rental Invoice & Loss Reconciler",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Cuts RTI billing disputes by 50%",
                  sources: ["Rental Bills", "Transfer Logs", "Write-Offs"],
                  dailyTask: "Audits monthly pallet pooler invoices against verified plant-to-CFA transfer and return scans.",
                  desc: "Reconciles pooled pallet hire charges and disputes erroneous lost-asset fees.",
                  promptHint: "Identify unverified asset-loss charges in this month's pallet pooler statement."
                },
                {
                  name: "Plant-to-CFA Crate Circulation Velocity Tracker",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "15% faster RTI turn-time",
                  sources: ["RFID Scans", "Gate Logs", "Cycle Norms"],
                  dailyTask: "Measures average round-trip days for reusable crates and pallets across every plant-CFA corridor.",
                  desc: "Spots slow-turning corridors where pooled assets sit idle.",
                  promptHint: "Rank top 10 plant-to-CFA corridors by slowest reusable crate return cycle time."
                },
                {
                  name: "Peak-Season RTI Buffer Pre-Positioner",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "Zero festive pallet shortages at plants",
                  sources: ["Production Plan", "RTI Stock", "Backhauls"],
                  dailyTask: "Forecasts plant pallet and crate demand 3 weeks ahead to pull empty units back before festive peaks.",
                  desc: "Prevents high-speed palletizers from stalling due to empty-pallet shortages.",
                  promptHint: "Flag plants projected to run short of plastic crates or pallets in the next 14 days."
                }
              ]
            },
            {
              id: "SC-59",
              persona: "Reverse Transport Planner",
              mandate: "Schedules dynamic backhauls to collect empty roll cages and RPCs from retail stores.",
              impact: "Boosts backhaul fill rate by 25–40%",
              agent: "Milk-Run Consolidation",
              buildMode: "Low-Code Agent Studio",
              sources: ["Empty RTI Queue", "Outbound Trucks", "Store Routes"],
              promptHint: "Pair empty inbound store deliveries with nearby empty roll-cage and RPC pickups on the return leg.",
              tmAndDAgents: [
                {
                  name: "Milk-Run Consolidation",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-first",
                  impact: "Boosts backhaul fill rate by 25–40%",
                  sources: ["Empty RTI Queue", "Outbound Trucks", "Store Routes"],
                  dailyTask: "Executes core Reverse Transport Planner workflow: Schedules dynamic backhauls to collect empty roll cages and RPCs from retail stores.",
                  desc: "Schedules dynamic backhauls to collect empty roll cages and RPCs from retail stores.",
                  promptHint: "Pair empty inbound store deliveries with nearby empty roll-cage and RPC pickups on the return leg."
                },
                {
                  name: "Empty-Backhaul Milk-Run Scheduler",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "20% lower reverse transport spend",
                  sources: ["Outbound Routes", "RTI Balances", "Truck GPS"],
                  dailyTask: "Pairs returning primary/secondary delivery trucks with nearby crate, pallet, and salvage pickups.",
                  desc: "Eliminates dedicated empty-return trips by routing backhauls through high-balance nodes.",
                  promptHint: "Pair tomorrow's empty-returning CFA trucks with pending pallet pickups along their corridor."
                },
                {
                  name: "Reverse Fleet Utilization & Detention Tracker",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "15% higher backhaul completion",
                  sources: ["TMS Backhauls", "Dock Logs", "Carrier SLA"],
                  dailyTask: "Monitors backhaul pickup adherence and flags depots delaying empty-crate loading.",
                  desc: "Tracks reverse trip turnaround times to keep contracted carriers willing to take backhauls.",
                  promptHint: "Highlight depots with >60-minute average loading detention on reverse RTI pickups."
                },
                {
                  name: "Third-Party Backhaul Monetization Matcher",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "10% net primary freight offset",
                  sources: ["Empty Lanes", "Partner Freight", "TMS"],
                  dailyTask: "Identifies dedicated primary return corridors suitable for backhauling raw materials or partner loads.",
                  desc: "Turns empty return legs into inbound material hauls or freight-cost offsets.",
                  promptHint: "Match returning primary trucks from CFA South with inbound packaging pickups nearby."
                },
                {
                  name: "Crate Collapse & Stack-Density Optimizer",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "2x more empty RTIs per backhaul",
                  sources: ["RTI Specs", "Truck Cube", "Depot Queue"],
                  dailyTask: "Optimizes nested/collapsed crate and pallet loading patterns for maximum backhaul return density.",
                  desc: "Cuts reverse transport trips required to recover empty returnable packaging.",
                  promptHint: "Calculate optimal collapsed-crate stack count per 32ft container for Depot North."
                }
              ]
            },
            {
              id: "SC-60",
              persona: "Packaging QA / Food Safety",
              mandate: "Inspects return photos and wash logs for structural fatigue and chemical compliance.",
              impact: "Extends reusable lifecycle by 15–20%",
              agent: "Sanitation & Health Agent",
              buildMode: "Multimodal Vision",
              sources: ["Tote Photos", "Wash Cycle Logs", "Food Safety Spec"],
              promptHint: "Inspect returned reusable plastic crates (RPCs) for cracks and verify sanitizer wash-cycle compliance.",
              tmAndDAgents: [
                {
                  name: "Sanitation & Health Agent",
                  mode: "Multimodal Vision",
                  prio: "prio-next",
                  impact: "Extends reusable lifecycle by 15–20%",
                  sources: ["Tote Photos", "Wash Cycle Logs", "Food Safety Spec"],
                  dailyTask: "Executes core Packaging QA / Food Safety workflow: Inspects return photos and wash logs for structural fatigue and chemical compliance.",
                  desc: "Inspects return photos and wash logs for structural fatigue and chemical compliance.",
                  promptHint: "Inspect returned reusable plastic crates (RPCs) for cracks and verify sanitizer wash-cycle compliance."
                },
                {
                  name: "Reusable Crate Wash & Hygiene Auditor",
                  mode: "Multimodal Vision",
                  prio: "prio-next",
                  impact: "100% food-contact sanitation compliance",
                  sources: ["Wash Logs", "ATP Swabs", "Chemical Dosing"],
                  dailyTask: "Audits wash-tunnel temperature, sanitizer concentration, and ATP swab passes before crate reuse.",
                  desc: "Ensures every returned plastic crate or tote meets food-safety hygiene standards before re-entering plants.",
                  promptHint: "Flag any wash-station shifts with below-spec water temp or failed ATP hygiene swabs."
                },
                {
                  name: "Damaged RTI Quarantine & Repair Triager",
                  mode: "Multimodal Vision",
                  prio: "",
                  impact: "Prevents line jams from broken crates",
                  sources: ["Vision Scans", "Repair Logs", "Pooler Specs"],
                  dailyTask: "Inspects return crate photos for cracked corners or contamination to route units to repair or recycle.",
                  desc: "Keeps structurally compromised crates out of automated plant palletizers and food lines.",
                  promptHint: "Summarize weekly damaged crate reject rates by return lane and route units for repair."
                },
                {
                  name: "Allergen Cross-Contact Wash Segregation Bot",
                  mode: "Low-Code Agent Studio",
                  prio: "prio-next",
                  impact: "Zero allergen cross-contamination risk",
                  sources: ["Allergen Tags", "Wash Queue", "Line Rules"],
                  dailyTask: "Segregates returned crates carrying nut/dairy SKUs into dedicated high-temp allergen wash cycles.",
                  desc: "Protects allergen-free production lines from cross-contact via shared reusable crates.",
                  promptHint: "Flag returned crates from allergen-containing SKU lines for dedicated Zone-B wash."
                },
                {
                  name: "Wash-Water & Chemical Dosing Efficiency Bot",
                  mode: "Low-Code Agent Studio",
                  prio: "",
                  impact: "12% lower wash-tunnel water & chemical use",
                  sources: ["Flow Meters", "Dosing Logs", "Crate Count"],
                  dailyTask: "Monitors water, steam, and sanitizer usage per 1,000 washed crates to flag nozzle clogs or over-dosing.",
                  desc: "Maintains food-safety wash standards while curbing utility and chemical waste.",
                  promptHint: "Compare sanitizer consumption per 1,000 crates across all 4 regional wash hubs."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
