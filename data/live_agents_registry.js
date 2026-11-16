/* Live Gemini Enterprise Agent Registry (12 Deployed ITC TMD Agents + Flagship GE Agents) */
window.SC_LIVE_AGENTS = [
  {
    "id": "itc_load_consolidation_agent",
    "name": "Load Consolidation Agent",
    "geDisplayName": "Load Consolidation Agent (ITC TMD)",
    "isItcTmd": true,
    "pillar": "Distribution & Logistics (ITC TMD)",
    "persona": "Primary Transport Planner",
    "buildMode": "Low-Code Agent Studio",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 29.4,
    "outcome": "ITC ICML mega-plants ship both high-density Staples (Aashirvaad Atta at ~600 kg/m3, weighting out a 32-ft MXL truck at 45% volume) and ultra-light fragile Foods (Bingo! chips & Sunfeast biscuits at ~90-180 kg/m3, cubing out at 25% payload). Dispatching single-category trucks wastes 28-36% of primary freight spend.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/41610693945890168/session/-?mods=",
    "videoSrc": "assets/media/video/fleetflow_dispatch_demo.mp4",
    "starterPrompts": [
      "Check today's staged Ranjangaon and Khordha dispatches. Where are we sending half-empty Atta or Bingo! trucks that can be combined?",
      "Will co-loading Sunfeast biscuits and Bingo! cartons above Aashirvaad Atta on the Ahmedabad lane stay safe on axle weight and carton crushing?",
      "Prepare the consolidated truck loading plan for the Sanand and Dankuni lanes so I can review and release the indents."
    ],
    "samplePrompt": "Check today's staged Ranjangaon and Khordha dispatches. Where are we sending half-empty Atta or Bingo! trucks that can be combined?"
  },
  {
    "id": "itc_yard_disruption_detention_sentinel",
    "name": "Yard Disruption & Detention Sentinel",
    "geDisplayName": "Yard Disruption & Detention Sentinel (ITC TMD)",
    "isItcTmd": true,
    "pillar": "Distribution & Logistics (ITC TMD)",
    "persona": "Plant Yard & Dispatch Lead",
    "buildMode": "Low-Code Agent Studio",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 20.9,
    "outcome": "At peak shift handovers, 32-ft containers and frozen reefers queue at ICML weighbridges and blocked stretch-wrap doors beyond the 120-minute free-time slab\u2014triggering Rs 850-Rs 1,350/hr carrier detention charges and diesel burn on waiting reefers.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/4795666764246492206/session/-?mods=",
    "videoSrc": "assets/media/video/smart_warehouse_demo.mp4",
    "starterPrompts": [
      "Which trucks waiting at Ranjangaon, Kapurthala, and Panchla gates are close to breaching free detention time right now?",
      "Do we have any frozen or chilled reefers running on diesel in the yard that need an open shore-power dock door immediately?",
      "Reassign the delayed trailers from blocked doors to open bays and queue the yard move instructions for sign-off."
    ],
    "samplePrompt": "Which trucks waiting at Ranjangaon, Kapurthala, and Panchla gates are close to breaching free detention time right now?"
  },
  {
    "id": "itc_cold_chain_thermal_auditor",
    "name": "Cold-Chain Thermal Auditor",
    "geDisplayName": "Cold-Chain Thermal Auditor (ITC TMD)",
    "isItcTmd": true,
    "pillar": "Distribution & Logistics (ITC TMD)",
    "persona": "Cold-Chain & Transit QA Lead",
    "buildMode": "Low-Code Agent Studio",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 22.6,
    "outcome": "ITC Master Chef frozen snacks (-18C), Aashirvaad Svasti paneer/curd (2-8C), and Fabelle luxury chocolates (16-20C) suffer mid-highway compressor slips or driver fuel-saving switch-offs. Simple min/max alerts miss cumulative Arrhenius kinetic heat damage.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/15505209197662230344/session/-?mods=",
    "videoSrc": "assets/media/video/f2f_fleet_demo.mp4",
    "starterPrompts": [
      "Review our inbound Master Chef frozen, Svasti dairy, and Fabelle chocolate reefers. Did any load suffer heat damage in transit?",
      "Check the logger printout on the Kapurthala frozen fries truck and the Patna paneer load to see why temperatures spiked.",
      "Hold the affected pallets in quarantine and prepare the carrier spoilage claim packet for quality sign-off."
    ],
    "samplePrompt": "Review our inbound Master Chef frozen, Svasti dairy, and Fabelle chocolate reefers. Did any load suffer heat damage in transit?"
  },
  {
    "id": "itc_cfa_wave_bay_orchestrator",
    "name": "CFA Wave & Bay Orchestrator",
    "geDisplayName": "CFA Wave & Bay Orchestrator (ITC TMD)",
    "isItcTmd": true,
    "pillar": "Distribution & Logistics (ITC TMD)",
    "persona": "Depot / CFA Operations Manager",
    "buildMode": "Low-Code Agent Studio",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 21.1,
    "outcome": "State CFAs simultaneously pick rapid Quick-Commerce waves (strict 75% Minimum Remaining Shelf-Life gate, 10:30 cutoff), Modern Trade pallets, and General Trade Wholesale Dealer loads (55% MRSL gate). Unbalanced bays miss morning cutoffs while blind picking sends older batches to Quick-Commerce.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/2773771553799396308/session/-?mods=",
    "videoSrc": "assets/media/video/smart_warehouse_demo.mp4",
    "starterPrompts": [
      "How are morning pick waves and loading bays tracking at Bhiwandi and Kundli, and will any wave miss its dispatch cutoff?",
      "Are any Blinkit or Zepto orders picking older stock that could get rejected at their dock for having less than 75% shelf life?",
      "Swap those older compliant batches to General Trade beats, rebalance the pickers across bays, and stage the updated wave plan."
    ],
    "samplePrompt": "How are morning pick waves and loading bays tracking at Bhiwandi and Kundli, and will any wave miss its dispatch cutoff?"
  },
  {
    "id": "itc_fair_share_stock_allocation_agent",
    "name": "Fair-Share Stock Allocation Agent",
    "geDisplayName": "Fair-Share Stock Allocation Agent (ITC TMD)",
    "isItcTmd": true,
    "pillar": "Distribution & Logistics (ITC TMD)",
    "persona": "Customer Service & Logistics (CS&L) Lead",
    "buildMode": "Low-Code Agent Studio",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 27.4,
    "outcome": "When a high-velocity SKU like Sunfeast Dark Fantasy 300g is short at a State CFA (2,400 cases available vs 3,650 ordered), standard SAP First-In-First-Out lets early Modern Trade bulk orders consume 100% of stock\u2014starving 18 General Trade Wholesale Dealers and UNNATI kiranas.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/9202118731352281302/session/-?mods=",
    "videoSrc": "assets/media/video/o2d_suite_demo.mp4",
    "starterPrompts": [
      "We are short on Sunfeast Dark Fantasy 300g at Nelamangala depot. How should we split the 2,400 available cases across channels?",
      "What happens to our Quick-Commerce penalties and General Trade dealers if we let standard first-come-first-served allocation run?",
      "Hold the fair-share channel split in SAP for my review so neither Blinkit nor our Karnataka wholesale dealers get starved."
    ],
    "samplePrompt": "We are short on Sunfeast Dark Fantasy 300g at Nelamangala depot. How should we split the 2,400 available cases across channels?"
  },
  {
    "id": "itc_eod_billing_cutoff_closer_agent",
    "name": "EOD Billing & Cutoff Closer Agent",
    "geDisplayName": "EOD Billing & Cutoff Closer Agent (ITC TMD)",
    "isItcTmd": true,
    "pillar": "Distribution & Logistics (ITC TMD)",
    "persona": "Depot Dispatch & Billing Supervisor",
    "buildMode": "Low-Code + SAP OpenAPI",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 29.8,
    "outcome": "Every evening before the 21:00 IST gate lock, loaded trucks sit trapped at CFA gates because SAP outbound deliveries (`VL02N`) fail Post Goods Issue or `VF01` billing due to FEFO batch-split variances, unsynced FinAgg dealer credit drawdowns, or hyphen typos in NIC E-Way Bill Part-B vehicle numbers.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/7230909732670915574/session/-?mods=",
    "videoSrc": "assets/media/video/o2d_suite_demo.mp4",
    "starterPrompts": [
      "Which loaded trucks at our depots are still unbilled before tonight's 9 PM SAP cutoff, and what is holding each one up?",
      "Separate the deliveries we can clear right away, like batch splits, FinAgg credit sync, or E-Way Bill typos, from overdue credit holds.",
      "Clear the fixable SAP delivery, e-Invoice, and E-Way Bill errors for my sign-off and flag the overdue account to Finance."
    ],
    "samplePrompt": "Which loaded trucks at our depots are still unbilled before tonight's 9 PM SAP cutoff, and what is holding each one up?"
  },
  {
    "id": "itc_mt_qcomm_slot_otif_copilot",
    "name": "MT / Q-Comm Slot & OTIF Copilot",
    "geDisplayName": "MT / Q-Comm Slot & OTIF Copilot (ITC TMD)",
    "isItcTmd": true,
    "pillar": "Distribution & Logistics (ITC TMD)",
    "persona": "Modern Trade & Q-Comm Logistics Lead",
    "buildMode": "Low-Code Agent Studio",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 28.4,
    "outcome": "Blinkit, Zepto, Swiggy Instamart, DMart, and Reliance enforce 15-to-30-minute dock arrival tolerances and strict 75% Minimum Remaining Shelf-Life gates. Missing a slot by 20 minutes or sending a 68%-MRSL batch triggers full truck turn-away and 5-10% PO chargebacks.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/14366296034264623629/session/-?mods=",
    "videoSrc": "assets/media/video/o2d_suite_demo.mp4",
    "starterPrompts": [
      "Which Blinkit, Zepto, Instamart, or DMart trucks are running late for their dock slot today or carrying short-shelf-life stock?",
      "What open appointment slots are available on the retailer portals right now so we avoid turn-aways and OTIF penalties?",
      "Move the delayed dispatches to the next open portal slots and swap the short-dated Zepto batch before the truck is sealed."
    ],
    "samplePrompt": "Which Blinkit, Zepto, Instamart, or DMart trucks are running late for their dock slot today or carrying short-shelf-life stock?"
  },
  {
    "id": "itc_territory_rtm_morning_pulse_gem",
    "name": "Territory RTM Morning Pulse Gem",
    "geDisplayName": "Territory RTM Morning Pulse Gem (ITC TMD)",
    "isItcTmd": true,
    "pillar": "Distribution & Logistics (ITC TMD)",
    "persona": "Area Distribution / RTM Manager",
    "buildMode": "No-Code Gemini Gem",
    "model": "gemini-3.8-flash",
    "annualValueCr": 19.8,
    "outcome": "Area Distribution Managers start every morning juggling four disconnected trackers: overnight UNNATI kirana app orders, yesterday's Vajra salesman beat strike rates, Wholesale Dealer stockout lines, and active trade schemes\u2014missing urgent beat course-corrections before 08:30.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/1654916665580027546/session/-?mods=",
    "videoSrc": "assets/media/video/demand_sensing_demo.mp4",
    "starterPrompts": [
      "Give me this morning's territory pulse. Where did overnight UNNATI kirana orders jump and where did salesman beat productivity dip yesterday?",
      "Which wholesale dealers in Pune, Lucknow, and South Kolkata are running out of top SKUs before today's beats go out?",
      "Draft quick 8 AM priorities for my Area Sales Executives so they cover the weak beats and push active trade schemes today."
    ],
    "samplePrompt": "Give me this morning's territory pulse. Where did overnight UNNATI kirana orders jump and where did salesman beat productivity dip yesterday?"
  },
  {
    "id": "itc_predictive_wd_reorder_dispatch_agent",
    "name": "Predictive WD Reorder & Dispatch Agent",
    "geDisplayName": "Predictive WD Reorder & Dispatch Agent (ITC TMD)",
    "isItcTmd": true,
    "pillar": "Distribution & Logistics (ITC TMD)",
    "persona": "Wholesale Dealer (WD) / Stockist Ops Mgr",
    "buildMode": "Low-Code Agent Studio",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 32.6,
    "outcome": "Wholesale Dealers frequently under-order core staples during UNNATI scheme surges (causing kirana stockouts within 48 hours) or hit credit-limit walls mid-week despite having approved FinAgg/SBI supply-chain credit headroom.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/9152999501602931019/session/-?mods=",
    "videoSrc": "assets/media/video/demand_sensing_demo.mp4",
    "starterPrompts": [
      "Which wholesale dealers have dropped below four days of stock on fast-moving SKUs and risk running dry in the next 48 hours?",
      "Do Mahavir Agencies, Kaveri Distributors, and Hooghly Enterprises have enough godown space and FinAgg credit room for a top-up load?",
      "Prepare the primary replenishment orders and FinAgg credit drawdowns for dealer confirmation."
    ],
    "samplePrompt": "Which wholesale dealers have dropped below four days of stock on fast-moving SKUs and risk running dry in the next 48 hours?"
  },
  {
    "id": "itc_dynamic_rerouter",
    "name": "Dynamic Rerouter",
    "geDisplayName": "Dynamic Rerouter (ITC TMD)",
    "isItcTmd": true,
    "pillar": "Distribution & Logistics (ITC TMD)",
    "persona": "Fleet & Route Dispatch Lead",
    "buildMode": "Low-Code + Maps Platform",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 22.0,
    "outcome": "En-route highway landslides (NH-48 Khandala Ghat), urban waterlogging (Bengaluru ORR), police heavy-vehicle curfews, commercial EV low battery State-of-Charge, and expiring midnight NIC E-Way Bills cause severe delivery misses and Section 129 GST transit penalties.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/7796378644329947655/session/-?mods=",
    "videoSrc": "assets/media/video/fleetflow_dispatch_demo.mp4",
    "starterPrompts": [
      "Which primary trucks and city EV vans are stuck in highway blockages, waterlogging, or police no-entry curfews right now?",
      "Are any delayed highway loads close to their E-Way Bill expiring tonight, or do any city EVs need a charging stop to finish their drops?",
      "Send the diversion routes, charger stop, and E-Way Bill extension request to the control tower queue for approval."
    ],
    "samplePrompt": "Which primary trucks and city EV vans are stuck in highway blockages, waterlogging, or police no-entry curfews right now?"
  },
  {
    "id": "itc_routing_guide_compliance_agent",
    "name": "Routing Guide Compliance Agent",
    "geDisplayName": "Routing Guide Compliance Agent (ITC TMD)",
    "isItcTmd": true,
    "pillar": "Distribution & Logistics (ITC TMD)",
    "persona": "Transport Procurement Manager",
    "buildMode": "No-Code Gemini Gem",
    "model": "gemini-3.8-flash",
    "annualValueCr": 16.9,
    "outcome": "ITC negotiates annual L1/L2/L3 waterfall rate cards across hundreds of ICML-to-CFA lanes, yet local dispatchers frequently bypass L2 backup carriers during evening rush and book ad-hoc spot-market brokers at 28-40% freight premiums.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/13477844154945305896/session/-?mods=",
    "videoSrc": "assets/media/video/f2f_fleet_demo.mp4",
    "starterPrompts": [
      "Where did we overspend on spot-market trucks this month instead of using our contracted L1 and L2 transporters?",
      "On which lanes did our dispatchers skip the backup carrier waterfall versus lanes where contracted transporters actually refused loads?",
      "Prepare compliance notes for the skipped waterfall lanes and flag chronic rejection lanes for rate review."
    ],
    "samplePrompt": "Where did we overspend on spot-market trucks this month instead of using our contracted L1 and L2 transporters?"
  },
  {
    "id": "itc_freight_bill_audit_agent",
    "name": "Freight Bill Audit Agent",
    "geDisplayName": "Freight Bill Audit Agent (ITC TMD)",
    "isItcTmd": true,
    "pillar": "Distribution & Logistics (ITC TMD)",
    "persona": "Freight Bill & Claims Controller",
    "buildMode": "Multimodal + Agent Studio",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 25.5,
    "outcome": "Indian CPG freight settlement requires reconciling paper-heavy Lorry Receipts (Bilty), rubber-stamped CFA Proof-of-Delivery (POD) slips with handwritten wet/crushed carton remarks, contracted diesel escalation pegs, and GPS-verified gate detention hours.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/3118104517465970888/session/-?mods=",
    "videoSrc": "assets/media/video/o2d_suite_demo.mp4",
    "starterPrompts": [
      "Audit this week's pending transporter freight bills. Where do billed rates, fuel surcharges, or detention hours disagree with our contracts and GPS logs?",
      "Check the scanned lorry receipts and stamped delivery slips on LR-TCI-882910 and LR-HWK-771024 for damaged cartons or duplicate billing.",
      "Block the duplicate bill and stage short-pay vouchers deducting the unverified detention and damaged Dark Fantasy cartons."
    ],
    "samplePrompt": "Audit this week's pending transporter freight bills. Where do billed rates, fuel surcharges, or detention hours disagree with our contracts and GPS logs?"
  },
  {
    "id": "demand_sensing_agent",
    "name": "Demand Sensing Agent",
    "geDisplayName": "Demand Sensing Agent",
    "isItcTmd": false,
    "pillar": "Planning & Strategy",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Fuses daily POS sell-through, weather ensembles, and stockout imputation to cut short-horizon WAPE by 20%\u201335% and reduce safety-stock buffers.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/4275760174019143309/session/-?mods=",
    "videoSrc": "assets/media/video/demand_sensing_demo.mp4",
    "starterPrompts": [
      "Compare our baseline plan against constrained options in demand forecasting this week and recommend where to adjust for best margin and service."
    ],
    "samplePrompt": "Compare our baseline plan against constrained options in demand forecasting this week and recommend where to adjust for best margin and service."
  },
  {
    "id": "promo_lift_simulator",
    "name": "Promo ROI Simulator",
    "geDisplayName": "Promo ROI Simulator",
    "isItcTmd": false,
    "pillar": "Planning & Strategy",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Simulates baseline cannibalization, post-promo dip, and incremental gross margin before trade funds are committed\u2014blocking unprofitable events.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/7230495950759747643/session/-?mods=",
    "videoSrc": "assets/media/video/promo_lift_simulator_demo.mp4",
    "starterPrompts": [
      "What critical trade promotion risks or threshold breaches should we contain today, and what preventive steps keep operations protected?"
    ],
    "samplePrompt": "What critical trade promotion risks or threshold breaches should we contain today, and what preventive steps keep operations protected?"
  },
  {
    "id": "sop_scenario_weaver",
    "name": "Consensus & Gap Agent",
    "geDisplayName": "Consensus & Gap Agent",
    "isItcTmd": false,
    "pillar": "Planning & Strategy",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Translates supply-demand gaps into margin-optimal constrained scenarios (overtime vs. co-packer vs. air freight vs. customer priority).",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/9189674696747625515/session/-?mods=",
    "videoSrc": "assets/media/video/demand_sensing_demo.mp4",
    "starterPrompts": [
      "Compare our baseline plan against constrained options in s&op / ibp this week and recommend where to adjust for best margin and service."
    ],
    "samplePrompt": "Compare our baseline plan against constrained options in s&op / ibp this week and recommend where to adjust for best margin and service."
  },
  {
    "id": "disruption_war_room_orchestrator",
    "name": "Digital War-Room Agent",
    "geDisplayName": "Digital War-Room Agent",
    "isItcTmd": false,
    "pillar": "Planning & Strategy",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Maps port, plant, or supplier shocks to affected customer orders in minutes and executes the lowest-cost mitigation playbook to protect OTIF.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/4685464268735078343/session/-?mods=",
    "videoSrc": "assets/media/video/demand_sensing_demo.mp4",
    "starterPrompts": [
      "What critical s&op / ibp risks or threshold breaches should we contain today, and what preventive steps keep operations protected?"
    ],
    "samplePrompt": "What critical s&op / ibp risks or threshold breaches should we contain today, and what preventive steps keep operations protected?"
  },
  {
    "id": "csco_control_tower_copilot",
    "name": "Executive Copilot",
    "geDisplayName": "Executive Copilot",
    "isItcTmd": false,
    "pillar": "Planning & Strategy",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Synthesizes cross-pillar service, cash-to-cash, and cost variances on demand\u2014turning 5-day analyst deck cycles into instant executive action.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/4015823380636158533/session/-?mods=",
    "videoSrc": "assets/media/video/demand_sensing_demo.mp4",
    "starterPrompts": [
      "Compare our baseline plan against constrained options in s&op / ibp this week and recommend where to adjust for best margin and service."
    ],
    "samplePrompt": "Compare our baseline plan against constrained options in s&op / ibp this week and recommend where to adjust for best margin and service."
  },
  {
    "id": "working_capital_cash_bridge",
    "name": "SKU Pruning Agent",
    "geDisplayName": "SKU Pruning Agent",
    "isItcTmd": false,
    "pillar": "Planning & Strategy",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Scores every SKU on true net contribution after carrying, changeover, and obsolescence cost\u2014unlocking trapped working capital from the long tail.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/14094336958774128849/session/-?mods=",
    "videoSrc": "assets/media/video/demand_sensing_demo.mp4",
    "starterPrompts": [
      "Audit our open portfolio & sku records this week, show where money is leaking or blocked, and flag what needs immediate release or recovery."
    ],
    "samplePrompt": "Audit our open portfolio & sku records this week, show where money is leaking or blocked, and flag what needs immediate release or recovery."
  },
  {
    "id": "tier_n_risk_sentinel",
    "name": "Disruption Sensing Agent",
    "geDisplayName": "Disruption Sensing Agent",
    "isItcTmd": false,
    "pillar": "Sourcing & Procurement",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Continuously monitors sub-tier financial, geopolitical, weather, and port signals\u2014triggering alternate allocations weeks before line stoppage.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/6167693086894539620/session/-?mods=",
    "videoSrc": "assets/media/video/o2d_suite_demo.mp4",
    "starterPrompts": [
      "What critical supplier network risks or threshold breaches should we contain today, and what preventive steps keep operations protected?"
    ],
    "samplePrompt": "What critical supplier network risks or threshold breaches should we contain today, and what preventive steps keep operations protected?"
  },
  {
    "id": "carbon_scope3_ledger",
    "name": "ESG & Scope 3 Auditor",
    "geDisplayName": "ESG & Scope 3 Auditor",
    "isItcTmd": false,
    "pillar": "Sourcing & Procurement",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Replaces coarse spend-based averages with primary supplier + lane emissions\u2014preventing EU CBAM penalties and cutting external assurance fees.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/12043431535905541673/session/-?mods=",
    "videoSrc": "assets/media/video/o2d_suite_demo.mp4",
    "starterPrompts": [
      "Audit our open supplier network records this week, show where money is leaking or blocked, and flag what needs immediate release or recovery."
    ],
    "samplePrompt": "Audit our open supplier network records this week, show where money is leaking or blocked, and flag what needs immediate release or recovery."
  },
  {
    "id": "rfq_should_cost_agent",
    "name": "Dynamic Should-Cost Agent",
    "geDisplayName": "Dynamic Should-Cost Agent",
    "isItcTmd": false,
    "pillar": "Sourcing & Procurement",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Decomposes every supplier quote into raw material, conversion, energy, logistics, and margin\u2014arming buyers with hard clean-sheet leverage.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/18006815538360774894/session/-?mods=",
    "videoSrc": "assets/media/video/o2d_suite_demo.mp4",
    "starterPrompts": [
      "Audit our open material & packaging records this week, show where money is leaking or blocked, and flag what needs immediate release or recovery."
    ],
    "samplePrompt": "Audit our open material & packaging records this week, show where money is leaking or blocked, and flag what needs immediate release or recovery."
  },
  {
    "id": "three_way_match_dispute",
    "name": "Three-Way Match Dispute",
    "geDisplayName": "Three-Way Match Dispute",
    "isItcTmd": false,
    "pillar": "Sourcing & Procurement",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Reconciles PO, Goods Receipt (ASN/GRN), and Invoice line variances automatically\u2014capturing early-payment discounts and cutting AP unit cost by 80%.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/3963067958567898860/session/-?mods=",
    "videoSrc": "assets/media/video/o2d_suite_demo.mp4",
    "starterPrompts": [
      "Audit our open contract & po mgmt records this week, show where money is leaking or blocked, and flag what needs immediate release or recovery."
    ],
    "samplePrompt": "Audit our open contract & po mgmt records this week, show where money is leaking or blocked, and flag what needs immediate release or recovery."
  },
  {
    "id": "finite_production_scheduler",
    "name": "Changeover Optimizer",
    "geDisplayName": "Changeover Optimizer",
    "isItcTmd": false,
    "pillar": "Manufacturing & Production",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Solves finite-capacity campaign wheels across allergens, colors, and pack formats\u2014cutting sanitation/changeover downtime by 15%\u201325%.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/16838162618721244143/session/-?mods=",
    "videoSrc": "assets/media/video/o2d_suite_demo.mp4",
    "starterPrompts": [
      "Audit our open production scheduling records this week, show where money is leaking or blocked, and flag what needs immediate release or recovery."
    ],
    "samplePrompt": "Audit our open production scheduling records this week, show where money is leaking or blocked, and flag what needs immediate release or recovery."
  },
  {
    "id": "predictive_oee_sentinel",
    "name": "Bottleneck Diagnostic",
    "geDisplayName": "Bottleneck Diagnostic",
    "isItcTmd": false,
    "pillar": "Manufacturing & Production",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Combines PLC telemetry with 6-month Rough-Cut Capacity Planning (RCCP) to prevent unplanned breakdowns and expose plant bottlenecks months ahead.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/12855910931272362848/session/-?mods=",
    "videoSrc": "assets/media/video/o2d_suite_demo.mp4",
    "starterPrompts": [
      "What critical capacity planning risks or threshold breaches should we contain today, and what preventive steps keep operations protected?"
    ],
    "samplePrompt": "What critical capacity planning risks or threshold breaches should we contain today, and what preventive steps keep operations protected?"
  },
  {
    "id": "inline_yield_guardian",
    "name": "Visual Defect Triager",
    "geDisplayName": "Visual Defect Triager",
    "isItcTmd": false,
    "pillar": "Manufacturing & Production",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.8-flash",
    "annualValueCr": 8.5,
    "outcome": "Detects seal, fill, label, and surface defects inline in milliseconds\u2014halting drift before whole pallets turn into scrap or rework.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/14928798980920927172/session/-?mods=",
    "videoSrc": "assets/media/video/o2d_suite_demo.mp4",
    "starterPrompts": [
      "What critical quality & compliance risks or threshold breaches should we contain today, and what preventive steps keep operations protected?"
    ],
    "samplePrompt": "What critical quality & compliance risks or threshold breaches should we contain today, and what preventive steps keep operations protected?"
  },
  {
    "id": "meio_safety_stock_agent",
    "name": "Safety Stock Agent",
    "geDisplayName": "Safety Stock Agent",
    "isItcTmd": false,
    "pillar": "Inventory & Warehousing",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Simultaneously optimizes safety stocks across plants, central hubs, and regional DCs\u2014freeing 12%\u201322% in working capital while lifting fill rates.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/9879109757966221077/session/-?mods=",
    "videoSrc": "assets/media/video/smart_warehouse_demo.mp4",
    "starterPrompts": [
      "Compare our baseline plan against constrained options in positioning & optimization this week and recommend where to adjust for best margin and service."
    ],
    "samplePrompt": "Compare our baseline plan against constrained options in positioning & optimization this week and recommend where to adjust for best margin and service."
  },
  {
    "id": "warehouse_slotting_agent",
    "name": "Dynamic Slotting Agent",
    "geDisplayName": "Dynamic Slotting Agent",
    "isItcTmd": false,
    "pillar": "Inventory & Warehousing",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Re-slots fast-moving and co-ordered SKUs into ergonomic golden zones and optimizes TSP pick paths\u2014boosting DC throughput with $0 automation CapEx.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/680853864033816982/session/-?mods=",
    "videoSrc": "assets/media/video/smart_warehouse_demo.mp4",
    "starterPrompts": [
      "Which active warehouse operations bottlenecks need immediate floor or dispatch reassignment right now to protect On-Time In-Full (OTIF) delivery?"
    ],
    "samplePrompt": "Which active warehouse operations bottlenecks need immediate floor or dispatch reassignment right now to protect On-Time In-Full (OTIF) delivery?"
  },
  {
    "id": "atp_order_promising_agent",
    "name": "SFS / BOPIS Sourcing",
    "geDisplayName": "SFS / BOPIS Sourcing",
    "isItcTmd": false,
    "pillar": "Inventory & Warehousing",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Routes every e-commerce and BOPIS order to the DC or store that maximizes net order margin across parcel zone cost, split risk, and markdown avoidance.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/6469216377587188453/session/-?mods=",
    "videoSrc": "assets/media/video/smart_warehouse_demo.mp4",
    "starterPrompts": [
      "Audit our open omnichannel visibility records this week, show where money is leaking or blocked, and flag what needs immediate release or recovery."
    ],
    "samplePrompt": "Audit our open omnichannel visibility records this week, show where money is leaking or blocked, and flag what needs immediate release or recovery."
  },
  {
    "id": "load_consolidation_agent",
    "name": "Load Consolidation",
    "geDisplayName": "Load Consolidation",
    "isItcTmd": false,
    "pillar": "Distribution & Logistics",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Solves 3D bin-packing, bridge-formula axle weights, and LIFO stop unloading order\u2014shipping the same volume in 10%\u201315% fewer trucks.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/17846204712745878596/session/-?mods=",
    "videoSrc": "assets/media/video/fleetflow_dispatch_demo.mp4",
    "starterPrompts": [
      "Compare our baseline plan against constrained options in first & mid-mile this week and recommend where to adjust for best margin and service."
    ],
    "samplePrompt": "Compare our baseline plan against constrained options in first & mid-mile this week and recommend where to adjust for best margin and service."
  },
  {
    "id": "yard_dock_sequencer",
    "name": "Yard Disruption Agent",
    "geDisplayName": "Yard Disruption Agent",
    "isItcTmd": false,
    "pillar": "Distribution & Logistics",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Synchronizes live carrier GPS ETAs, yard jockey moves, and dock door crew capacity to eliminate gate queues, detention fees, and plant starvation.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/13894952638038502510/session/-?mods=",
    "videoSrc": "assets/media/video/fleetflow_dispatch_demo.mp4",
    "starterPrompts": [
      "Which active first & mid-mile bottlenecks need immediate floor or dispatch reassignment right now to protect On-Time In-Full (OTIF) delivery?"
    ],
    "samplePrompt": "Which active first & mid-mile bottlenecks need immediate floor or dispatch reassignment right now to protect On-Time In-Full (OTIF) delivery?"
  },
  {
    "id": "cold_chain_auditor",
    "name": "Cold-Chain Auditor",
    "geDisplayName": "Cold-Chain Auditor",
    "isItcTmd": false,
    "pillar": "Distribution & Logistics",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Monitors continuous IoT temperature/humidity and calculates Mean Kinetic Temperature (MKT) in transit\u2014intervening before perishable or pharma loads spoil.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/5823400487531018226/session/-?mods=",
    "videoSrc": "assets/media/video/fleetflow_dispatch_demo.mp4",
    "starterPrompts": [
      "Audit our open first & mid-mile records this week, show where money is leaking or blocked, and flag what needs immediate release or recovery."
    ],
    "samplePrompt": "Audit our open first & mid-mile records this week, show where money is leaking or blocked, and flag what needs immediate release or recovery."
  },
  {
    "id": "aisle_aligned_pallet_agent",
    "name": "Aisle-Aligned Pallet",
    "geDisplayName": "Aisle-Aligned Pallet",
    "isItcTmd": false,
    "pillar": "Distribution & Logistics",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Builds DC pallets sequenced to each store's exact planogram aisle layout and case crush physics\u2014slashing in-store restocking labor by 20%\u201335%.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/4425840194449317295/session/-?mods=",
    "videoSrc": "assets/media/video/fleetflow_dispatch_demo.mp4",
    "starterPrompts": [
      "Audit our open store replenishment records this week, show where money is leaking or blocked, and flag what needs immediate release or recovery."
    ],
    "samplePrompt": "Audit our open store replenishment records this week, show where money is leaking or blocked, and flag what needs immediate release or recovery."
  },
  {
    "id": "store_capacity_agent",
    "name": "Store Capacity Agent",
    "geDisplayName": "Store Capacity Agent",
    "isItcTmd": false,
    "pillar": "Distribution & Logistics",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Caps and paces DC replenishment dispatches against each store's live backroom cubic capacity and receiving labor\u2014preventing overflow and damage.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/9877222810170171439/session/-?mods=",
    "videoSrc": "assets/media/video/fleetflow_dispatch_demo.mp4",
    "starterPrompts": [
      "Which active store replenishment bottlenecks need immediate floor or dispatch reassignment right now to protect On-Time In-Full (OTIF) delivery?"
    ],
    "samplePrompt": "Which active store replenishment bottlenecks need immediate floor or dispatch reassignment right now to protect On-Time In-Full (OTIF) delivery?"
  },
  {
    "id": "port_drayage_orchestrator",
    "name": "Curfew Orchestrator",
    "geDisplayName": "Curfew Orchestrator",
    "isItcTmd": false,
    "pillar": "Distribution & Logistics",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Aligns store dispatch times, EV/low-noise tractor assignment, and urban curfew/school-zone rules to eliminate municipal fines and refused drops.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/200992941311882772/session/-?mods=",
    "videoSrc": "assets/media/video/fleetflow_dispatch_demo.mp4",
    "starterPrompts": [
      "Which active store replenishment bottlenecks need immediate floor or dispatch reassignment right now to protect On-Time In-Full (OTIF) delivery?"
    ],
    "samplePrompt": "Which active store replenishment bottlenecks need immediate floor or dispatch reassignment right now to protect On-Time In-Full (OTIF) delivery?"
  },
  {
    "id": "geocoding_intelligence_agent",
    "name": "Geocoding Intelligence",
    "geDisplayName": "Geocoding Intelligence",
    "isItcTmd": false,
    "pillar": "Distribution & Logistics",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Validates address rooftop/loading-bay coordinates and driver access notes before dispatch\u2014eliminating $15\u2013$18 failed-delivery redelivery costs.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/7088606266716503770/session/-?mods=",
    "videoSrc": "assets/media/video/fleetflow_dispatch_demo.mp4",
    "starterPrompts": [
      "Compare our baseline plan against constrained options in last-mile delivery this week and recommend where to adjust for best margin and service."
    ],
    "samplePrompt": "Compare our baseline plan against constrained options in last-mile delivery this week and recommend where to adjust for best margin and service."
  },
  {
    "id": "multimodal_mode_shift_agent",
    "name": "Courier Allocation",
    "geDisplayName": "Courier Allocation",
    "isItcTmd": false,
    "pillar": "Distribution & Logistics",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Dynamically selects the lowest-cost parcel, regional courier, crowdsourced, or LTL mode per order that still hits the promised customer delivery date.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/9650827414407796887/session/-?mods=",
    "videoSrc": "assets/media/video/fleetflow_dispatch_demo.mp4",
    "starterPrompts": [
      "Which active last-mile delivery bottlenecks need immediate floor or dispatch reassignment right now to protect On-Time In-Full (OTIF) delivery?"
    ],
    "samplePrompt": "Which active last-mile delivery bottlenecks need immediate floor or dispatch reassignment right now to protect On-Time In-Full (OTIF) delivery?"
  },
  {
    "id": "otif_penalty_shield",
    "name": "Delivery Exception Copilot",
    "geDisplayName": "Delivery Exception Copilot",
    "isItcTmd": false,
    "pillar": "Distribution & Logistics",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Detects mid-route parcel and retail-delivery delays early, triggers carrier rescue or proactive customer self-rescheduling, and cuts WISMO cost.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/3661643723290218713/session/-?mods=",
    "videoSrc": "assets/media/video/fleetflow_dispatch_demo.mp4",
    "starterPrompts": [
      "Compare our baseline plan against constrained options in last-mile delivery this week and recommend where to adjust for best margin and service."
    ],
    "samplePrompt": "Compare our baseline plan against constrained options in last-mile delivery this week and recommend where to adjust for best margin and service."
  },
  {
    "id": "freight_control_tower",
    "name": "Routing Guide Compliance",
    "geDisplayName": "Routing Guide Compliance",
    "isItcTmd": false,
    "pillar": "Distribution & Logistics",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Predicts primary carrier tender rejections by lane and cascades early to contracted Tier-2/3 carriers before loads leak onto expensive spot markets.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/10313484596104664959/session/-?mods=",
    "videoSrc": "assets/media/video/fleetflow_dispatch_demo.mp4",
    "starterPrompts": [
      "Which active route & carrier bottlenecks need immediate floor or dispatch reassignment right now to protect On-Time In-Full (OTIF) delivery?"
    ],
    "samplePrompt": "Which active route & carrier bottlenecks need immediate floor or dispatch reassignment right now to protect On-Time In-Full (OTIF) delivery?"
  },
  {
    "id": "reverse_rma_optimizer",
    "name": "Return Fraud Sentinel",
    "geDisplayName": "Return Fraud Sentinel",
    "isItcTmd": false,
    "pillar": "Returns & Reverse Logistics",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.8-flash",
    "annualValueCr": 8.5,
    "outcome": "Scores return requests against serial history, account abuse patterns, and item telemetry\u2014blocking fraudulent RMAs without friction for loyal buyers.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/2869479596817501852/session/-?mods=",
    "videoSrc": "assets/media/video/f2f_fleet_demo.mp4",
    "starterPrompts": [
      "Audit our open returns & claims mgmt records this week, show where money is leaking or blocked, and flag what needs immediate release or recovery."
    ],
    "samplePrompt": "Audit our open returns & claims mgmt records this week, show where money is leaking or blocked, and flag what needs immediate release or recovery."
  },
  {
    "id": "keep_it_routing_advisor",
    "name": "Keep-It & Routing Advisor",
    "geDisplayName": "Keep-It & Routing Advisor",
    "isItcTmd": false,
    "pillar": "Returns & Reverse Logistics",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Calculates reverse shipping + grading cost vs. resale recovery in real time\u2014routing items to store, refurb hub, outlet, or Keep-It credit.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/3851887269918555105/session/-?mods=",
    "videoSrc": "assets/media/video/f2f_fleet_demo.mp4",
    "starterPrompts": [
      "Compare our baseline plan against constrained options in returns & claims mgmt this week and recommend where to adjust for best margin and service."
    ],
    "samplePrompt": "Compare our baseline plan against constrained options in returns & claims mgmt this week and recommend where to adjust for best margin and service."
  },
  {
    "id": "osd_freight_claims_agent",
    "name": "OS&D Freight Claims",
    "geDisplayName": "OS&D Freight Claims",
    "isItcTmd": false,
    "pillar": "Returns & Reverse Logistics",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Assembles dock damage photos, signed BOL exceptions, and SKU invoice values into compliant carrier claim packets within hours of unloading.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/11604346230811147054/session/-?mods=",
    "videoSrc": "assets/media/video/f2f_fleet_demo.mp4",
    "starterPrompts": [
      "Audit our open returns & claims mgmt records this week, show where money is leaking or blocked, and flag what needs immediate release or recovery."
    ],
    "samplePrompt": "Audit our open returns & claims mgmt records this week, show where money is leaking or blocked, and flag what needs immediate release or recovery."
  },
  {
    "id": "dynamic_markdown_agent",
    "name": "Dynamic Markdown Agent",
    "geDisplayName": "Dynamic Markdown Agent",
    "isItcTmd": false,
    "pillar": "Returns & Reverse Logistics",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Triggers shallow, early price-elasticity markdowns synced to lot sell-by dates and local store velocity\u2014clearing stock at higher margin with less waste.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/11982871860095077801/session/-?mods=",
    "videoSrc": "assets/media/video/f2f_fleet_demo.mp4",
    "starterPrompts": [
      "What critical expiry & markdowns risks or threshold breaches should we contain today, and what preventive steps keep operations protected?"
    ],
    "samplePrompt": "What critical expiry & markdowns risks or threshold breaches should we contain today, and what preventive steps keep operations protected?"
  },
  {
    "id": "short_dated_redistributor",
    "name": "Short-Dated Redistributor",
    "geDisplayName": "Short-Dated Redistributor",
    "isItcTmd": false,
    "pillar": "Returns & Reverse Logistics",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Matches short-dated DC lots at risk of customer shelf-life rejection to fast-turning stores, foodservice channels, or tax-advantaged donations.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/374272156355245468/session/-?mods=",
    "videoSrc": "assets/media/video/f2f_fleet_demo.mp4",
    "starterPrompts": [
      "Audit our open expiry & markdowns records this week, show where money is leaking or blocked, and flag what needs immediate release or recovery."
    ],
    "samplePrompt": "Audit our open expiry & markdowns records this week, show where money is leaking or blocked, and flag what needs immediate release or recovery."
  },
  {
    "id": "food_waste_esg_copilot",
    "name": "Food Waste & ESG Copilot",
    "geDisplayName": "Food Waste & ESG Copilot",
    "isItcTmd": false,
    "pillar": "Returns & Reverse Logistics",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Routes unsellable organics to highest circular tier (donation tax credits, upcycling, feed, digester) and automates Scope 3 waste reporting.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/10037702925741270884/session/-?mods=",
    "videoSrc": "assets/media/video/f2f_fleet_demo.mp4",
    "starterPrompts": [
      "Audit our open expiry & markdowns records this week, show where money is leaking or blocked, and flag what needs immediate release or recovery."
    ],
    "samplePrompt": "Audit our open expiry & markdowns records this week, show where money is leaking or blocked, and flag what needs immediate release or recovery."
  },
  {
    "id": "rti_balance_reconciler",
    "name": "RTI Balance Reconciler",
    "geDisplayName": "RTI Balance Reconciler",
    "isItcTmd": false,
    "pillar": "Returns & Reverse Logistics",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Reconciles serialized pallet, tote, rack, and keg balances across plants, DCs, and customers\u2014slashing pool rental fines and replacement CapEx.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/16699165381032264857/session/-?mods=",
    "videoSrc": "assets/media/video/f2f_fleet_demo.mp4",
    "starterPrompts": [
      "Compare our baseline plan against constrained options in pallet & tote reclamation this week and recommend where to adjust for best margin and service."
    ],
    "samplePrompt": "Compare our baseline plan against constrained options in pallet & tote reclamation this week and recommend where to adjust for best margin and service."
  },
  {
    "id": "intermodal_rail_linehaul_agent",
    "name": "Milk-Run Consolidation",
    "geDisplayName": "Milk-Run Consolidation",
    "isItcTmd": false,
    "pillar": "Returns & Reverse Logistics",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Pairs empty outbound store/DC return legs with pallet stacks, collapsible totes, and consolidated RMAs\u2014eliminating dedicated reverse freight.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/13844457953454901577/session/-?mods=",
    "videoSrc": "assets/media/video/f2f_fleet_demo.mp4",
    "starterPrompts": [
      "Which active pallet & tote reclamation bottlenecks need immediate floor or dispatch reassignment right now to protect On-Time In-Full (OTIF) delivery?"
    ],
    "samplePrompt": "Which active pallet & tote reclamation bottlenecks need immediate floor or dispatch reassignment right now to protect On-Time In-Full (OTIF) delivery?"
  },
  {
    "id": "sanitation_health_agent",
    "name": "Sanitation & Health Agent",
    "geDisplayName": "Sanitation & Health Agent",
    "isItcTmd": false,
    "pillar": "Returns & Reverse Logistics",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Enforces wash-temperature, allergen segregation, and structural cycle limits on every reusable container\u2014extending asset life while guaranteeing safety.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/11114379190038719987/session/-?mods=",
    "videoSrc": "assets/media/video/f2f_fleet_demo.mp4",
    "starterPrompts": [
      "What critical pallet & tote reclamation risks or threshold breaches should we contain today, and what preventive steps keep operations protected?"
    ],
    "samplePrompt": "What critical pallet & tote reclamation risks or threshold breaches should we contain today, and what preventive steps keep operations protected?"
  }
];
window.SC_LIVE_AGENT_MAP = {
  "load consolidation agent": {
    "id": "itc_load_consolidation_agent",
    "name": "Load Consolidation Agent",
    "geDisplayName": "Load Consolidation Agent (ITC TMD)",
    "isItcTmd": true,
    "pillar": "Distribution & Logistics (ITC TMD)",
    "persona": "Primary Transport Planner",
    "buildMode": "Low-Code Agent Studio",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 29.4,
    "outcome": "ITC ICML mega-plants ship both high-density Staples (Aashirvaad Atta at ~600 kg/m3, weighting out a 32-ft MXL truck at 45% volume) and ultra-light fragile Foods (Bingo! chips & Sunfeast biscuits at ~90-180 kg/m3, cubing out at 25% payload). Dispatching single-category trucks wastes 28-36% of primary freight spend.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/41610693945890168/session/-?mods=",
    "videoSrc": "assets/media/video/fleetflow_dispatch_demo.mp4",
    "starterPrompts": [
      "Check today's staged Ranjangaon and Khordha dispatches. Where are we sending half-empty Atta or Bingo! trucks that can be combined?",
      "Will co-loading Sunfeast biscuits and Bingo! cartons above Aashirvaad Atta on the Ahmedabad lane stay safe on axle weight and carton crushing?",
      "Prepare the consolidated truck loading plan for the Sanand and Dankuni lanes so I can review and release the indents."
    ],
    "samplePrompt": "Check today's staged Ranjangaon and Khordha dispatches. Where are we sending half-empty Atta or Bingo! trucks that can be combined?"
  },
  "yard disruption & detention sentinel": {
    "id": "itc_yard_disruption_detention_sentinel",
    "name": "Yard Disruption & Detention Sentinel",
    "geDisplayName": "Yard Disruption & Detention Sentinel (ITC TMD)",
    "isItcTmd": true,
    "pillar": "Distribution & Logistics (ITC TMD)",
    "persona": "Plant Yard & Dispatch Lead",
    "buildMode": "Low-Code Agent Studio",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 20.9,
    "outcome": "At peak shift handovers, 32-ft containers and frozen reefers queue at ICML weighbridges and blocked stretch-wrap doors beyond the 120-minute free-time slab\u2014triggering Rs 850-Rs 1,350/hr carrier detention charges and diesel burn on waiting reefers.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/4795666764246492206/session/-?mods=",
    "videoSrc": "assets/media/video/smart_warehouse_demo.mp4",
    "starterPrompts": [
      "Which trucks waiting at Ranjangaon, Kapurthala, and Panchla gates are close to breaching free detention time right now?",
      "Do we have any frozen or chilled reefers running on diesel in the yard that need an open shore-power dock door immediately?",
      "Reassign the delayed trailers from blocked doors to open bays and queue the yard move instructions for sign-off."
    ],
    "samplePrompt": "Which trucks waiting at Ranjangaon, Kapurthala, and Panchla gates are close to breaching free detention time right now?"
  },
  "cold-chain thermal auditor": {
    "id": "itc_cold_chain_thermal_auditor",
    "name": "Cold-Chain Thermal Auditor",
    "geDisplayName": "Cold-Chain Thermal Auditor (ITC TMD)",
    "isItcTmd": true,
    "pillar": "Distribution & Logistics (ITC TMD)",
    "persona": "Cold-Chain & Transit QA Lead",
    "buildMode": "Low-Code Agent Studio",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 22.6,
    "outcome": "ITC Master Chef frozen snacks (-18C), Aashirvaad Svasti paneer/curd (2-8C), and Fabelle luxury chocolates (16-20C) suffer mid-highway compressor slips or driver fuel-saving switch-offs. Simple min/max alerts miss cumulative Arrhenius kinetic heat damage.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/15505209197662230344/session/-?mods=",
    "videoSrc": "assets/media/video/f2f_fleet_demo.mp4",
    "starterPrompts": [
      "Review our inbound Master Chef frozen, Svasti dairy, and Fabelle chocolate reefers. Did any load suffer heat damage in transit?",
      "Check the logger printout on the Kapurthala frozen fries truck and the Patna paneer load to see why temperatures spiked.",
      "Hold the affected pallets in quarantine and prepare the carrier spoilage claim packet for quality sign-off."
    ],
    "samplePrompt": "Review our inbound Master Chef frozen, Svasti dairy, and Fabelle chocolate reefers. Did any load suffer heat damage in transit?"
  },
  "cfa wave & bay orchestrator": {
    "id": "itc_cfa_wave_bay_orchestrator",
    "name": "CFA Wave & Bay Orchestrator",
    "geDisplayName": "CFA Wave & Bay Orchestrator (ITC TMD)",
    "isItcTmd": true,
    "pillar": "Distribution & Logistics (ITC TMD)",
    "persona": "Depot / CFA Operations Manager",
    "buildMode": "Low-Code Agent Studio",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 21.1,
    "outcome": "State CFAs simultaneously pick rapid Quick-Commerce waves (strict 75% Minimum Remaining Shelf-Life gate, 10:30 cutoff), Modern Trade pallets, and General Trade Wholesale Dealer loads (55% MRSL gate). Unbalanced bays miss morning cutoffs while blind picking sends older batches to Quick-Commerce.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/2773771553799396308/session/-?mods=",
    "videoSrc": "assets/media/video/smart_warehouse_demo.mp4",
    "starterPrompts": [
      "How are morning pick waves and loading bays tracking at Bhiwandi and Kundli, and will any wave miss its dispatch cutoff?",
      "Are any Blinkit or Zepto orders picking older stock that could get rejected at their dock for having less than 75% shelf life?",
      "Swap those older compliant batches to General Trade beats, rebalance the pickers across bays, and stage the updated wave plan."
    ],
    "samplePrompt": "How are morning pick waves and loading bays tracking at Bhiwandi and Kundli, and will any wave miss its dispatch cutoff?"
  },
  "fair-share stock allocation agent": {
    "id": "itc_fair_share_stock_allocation_agent",
    "name": "Fair-Share Stock Allocation Agent",
    "geDisplayName": "Fair-Share Stock Allocation Agent (ITC TMD)",
    "isItcTmd": true,
    "pillar": "Distribution & Logistics (ITC TMD)",
    "persona": "Customer Service & Logistics (CS&L) Lead",
    "buildMode": "Low-Code Agent Studio",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 27.4,
    "outcome": "When a high-velocity SKU like Sunfeast Dark Fantasy 300g is short at a State CFA (2,400 cases available vs 3,650 ordered), standard SAP First-In-First-Out lets early Modern Trade bulk orders consume 100% of stock\u2014starving 18 General Trade Wholesale Dealers and UNNATI kiranas.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/9202118731352281302/session/-?mods=",
    "videoSrc": "assets/media/video/o2d_suite_demo.mp4",
    "starterPrompts": [
      "We are short on Sunfeast Dark Fantasy 300g at Nelamangala depot. How should we split the 2,400 available cases across channels?",
      "What happens to our Quick-Commerce penalties and General Trade dealers if we let standard first-come-first-served allocation run?",
      "Hold the fair-share channel split in SAP for my review so neither Blinkit nor our Karnataka wholesale dealers get starved."
    ],
    "samplePrompt": "We are short on Sunfeast Dark Fantasy 300g at Nelamangala depot. How should we split the 2,400 available cases across channels?"
  },
  "eod billing & cutoff closer agent": {
    "id": "itc_eod_billing_cutoff_closer_agent",
    "name": "EOD Billing & Cutoff Closer Agent",
    "geDisplayName": "EOD Billing & Cutoff Closer Agent (ITC TMD)",
    "isItcTmd": true,
    "pillar": "Distribution & Logistics (ITC TMD)",
    "persona": "Depot Dispatch & Billing Supervisor",
    "buildMode": "Low-Code + SAP OpenAPI",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 29.8,
    "outcome": "Every evening before the 21:00 IST gate lock, loaded trucks sit trapped at CFA gates because SAP outbound deliveries (`VL02N`) fail Post Goods Issue or `VF01` billing due to FEFO batch-split variances, unsynced FinAgg dealer credit drawdowns, or hyphen typos in NIC E-Way Bill Part-B vehicle numbers.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/7230909732670915574/session/-?mods=",
    "videoSrc": "assets/media/video/o2d_suite_demo.mp4",
    "starterPrompts": [
      "Which loaded trucks at our depots are still unbilled before tonight's 9 PM SAP cutoff, and what is holding each one up?",
      "Separate the deliveries we can clear right away, like batch splits, FinAgg credit sync, or E-Way Bill typos, from overdue credit holds.",
      "Clear the fixable SAP delivery, e-Invoice, and E-Way Bill errors for my sign-off and flag the overdue account to Finance."
    ],
    "samplePrompt": "Which loaded trucks at our depots are still unbilled before tonight's 9 PM SAP cutoff, and what is holding each one up?"
  },
  "mt / q-comm slot & otif copilot": {
    "id": "itc_mt_qcomm_slot_otif_copilot",
    "name": "MT / Q-Comm Slot & OTIF Copilot",
    "geDisplayName": "MT / Q-Comm Slot & OTIF Copilot (ITC TMD)",
    "isItcTmd": true,
    "pillar": "Distribution & Logistics (ITC TMD)",
    "persona": "Modern Trade & Q-Comm Logistics Lead",
    "buildMode": "Low-Code Agent Studio",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 28.4,
    "outcome": "Blinkit, Zepto, Swiggy Instamart, DMart, and Reliance enforce 15-to-30-minute dock arrival tolerances and strict 75% Minimum Remaining Shelf-Life gates. Missing a slot by 20 minutes or sending a 68%-MRSL batch triggers full truck turn-away and 5-10% PO chargebacks.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/14366296034264623629/session/-?mods=",
    "videoSrc": "assets/media/video/o2d_suite_demo.mp4",
    "starterPrompts": [
      "Which Blinkit, Zepto, Instamart, or DMart trucks are running late for their dock slot today or carrying short-shelf-life stock?",
      "What open appointment slots are available on the retailer portals right now so we avoid turn-aways and OTIF penalties?",
      "Move the delayed dispatches to the next open portal slots and swap the short-dated Zepto batch before the truck is sealed."
    ],
    "samplePrompt": "Which Blinkit, Zepto, Instamart, or DMart trucks are running late for their dock slot today or carrying short-shelf-life stock?"
  },
  "territory rtm morning pulse gem": {
    "id": "itc_territory_rtm_morning_pulse_gem",
    "name": "Territory RTM Morning Pulse Gem",
    "geDisplayName": "Territory RTM Morning Pulse Gem (ITC TMD)",
    "isItcTmd": true,
    "pillar": "Distribution & Logistics (ITC TMD)",
    "persona": "Area Distribution / RTM Manager",
    "buildMode": "No-Code Gemini Gem",
    "model": "gemini-3.8-flash",
    "annualValueCr": 19.8,
    "outcome": "Area Distribution Managers start every morning juggling four disconnected trackers: overnight UNNATI kirana app orders, yesterday's Vajra salesman beat strike rates, Wholesale Dealer stockout lines, and active trade schemes\u2014missing urgent beat course-corrections before 08:30.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/1654916665580027546/session/-?mods=",
    "videoSrc": "assets/media/video/demand_sensing_demo.mp4",
    "starterPrompts": [
      "Give me this morning's territory pulse. Where did overnight UNNATI kirana orders jump and where did salesman beat productivity dip yesterday?",
      "Which wholesale dealers in Pune, Lucknow, and South Kolkata are running out of top SKUs before today's beats go out?",
      "Draft quick 8 AM priorities for my Area Sales Executives so they cover the weak beats and push active trade schemes today."
    ],
    "samplePrompt": "Give me this morning's territory pulse. Where did overnight UNNATI kirana orders jump and where did salesman beat productivity dip yesterday?"
  },
  "predictive wd reorder & dispatch agent": {
    "id": "itc_predictive_wd_reorder_dispatch_agent",
    "name": "Predictive WD Reorder & Dispatch Agent",
    "geDisplayName": "Predictive WD Reorder & Dispatch Agent (ITC TMD)",
    "isItcTmd": true,
    "pillar": "Distribution & Logistics (ITC TMD)",
    "persona": "Wholesale Dealer (WD) / Stockist Ops Mgr",
    "buildMode": "Low-Code Agent Studio",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 32.6,
    "outcome": "Wholesale Dealers frequently under-order core staples during UNNATI scheme surges (causing kirana stockouts within 48 hours) or hit credit-limit walls mid-week despite having approved FinAgg/SBI supply-chain credit headroom.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/9152999501602931019/session/-?mods=",
    "videoSrc": "assets/media/video/demand_sensing_demo.mp4",
    "starterPrompts": [
      "Which wholesale dealers have dropped below four days of stock on fast-moving SKUs and risk running dry in the next 48 hours?",
      "Do Mahavir Agencies, Kaveri Distributors, and Hooghly Enterprises have enough godown space and FinAgg credit room for a top-up load?",
      "Prepare the primary replenishment orders and FinAgg credit drawdowns for dealer confirmation."
    ],
    "samplePrompt": "Which wholesale dealers have dropped below four days of stock on fast-moving SKUs and risk running dry in the next 48 hours?"
  },
  "dynamic rerouter": {
    "id": "itc_dynamic_rerouter",
    "name": "Dynamic Rerouter",
    "geDisplayName": "Dynamic Rerouter (ITC TMD)",
    "isItcTmd": true,
    "pillar": "Distribution & Logistics (ITC TMD)",
    "persona": "Fleet & Route Dispatch Lead",
    "buildMode": "Low-Code + Maps Platform",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 22.0,
    "outcome": "En-route highway landslides (NH-48 Khandala Ghat), urban waterlogging (Bengaluru ORR), police heavy-vehicle curfews, commercial EV low battery State-of-Charge, and expiring midnight NIC E-Way Bills cause severe delivery misses and Section 129 GST transit penalties.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/7796378644329947655/session/-?mods=",
    "videoSrc": "assets/media/video/fleetflow_dispatch_demo.mp4",
    "starterPrompts": [
      "Which primary trucks and city EV vans are stuck in highway blockages, waterlogging, or police no-entry curfews right now?",
      "Are any delayed highway loads close to their E-Way Bill expiring tonight, or do any city EVs need a charging stop to finish their drops?",
      "Send the diversion routes, charger stop, and E-Way Bill extension request to the control tower queue for approval."
    ],
    "samplePrompt": "Which primary trucks and city EV vans are stuck in highway blockages, waterlogging, or police no-entry curfews right now?"
  },
  "routing guide compliance agent": {
    "id": "itc_routing_guide_compliance_agent",
    "name": "Routing Guide Compliance Agent",
    "geDisplayName": "Routing Guide Compliance Agent (ITC TMD)",
    "isItcTmd": true,
    "pillar": "Distribution & Logistics (ITC TMD)",
    "persona": "Transport Procurement Manager",
    "buildMode": "No-Code Gemini Gem",
    "model": "gemini-3.8-flash",
    "annualValueCr": 16.9,
    "outcome": "ITC negotiates annual L1/L2/L3 waterfall rate cards across hundreds of ICML-to-CFA lanes, yet local dispatchers frequently bypass L2 backup carriers during evening rush and book ad-hoc spot-market brokers at 28-40% freight premiums.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/13477844154945305896/session/-?mods=",
    "videoSrc": "assets/media/video/f2f_fleet_demo.mp4",
    "starterPrompts": [
      "Where did we overspend on spot-market trucks this month instead of using our contracted L1 and L2 transporters?",
      "On which lanes did our dispatchers skip the backup carrier waterfall versus lanes where contracted transporters actually refused loads?",
      "Prepare compliance notes for the skipped waterfall lanes and flag chronic rejection lanes for rate review."
    ],
    "samplePrompt": "Where did we overspend on spot-market trucks this month instead of using our contracted L1 and L2 transporters?"
  },
  "freight bill audit agent": {
    "id": "itc_freight_bill_audit_agent",
    "name": "Freight Bill Audit Agent",
    "geDisplayName": "Freight Bill Audit Agent (ITC TMD)",
    "isItcTmd": true,
    "pillar": "Distribution & Logistics (ITC TMD)",
    "persona": "Freight Bill & Claims Controller",
    "buildMode": "Multimodal + Agent Studio",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 25.5,
    "outcome": "Indian CPG freight settlement requires reconciling paper-heavy Lorry Receipts (Bilty), rubber-stamped CFA Proof-of-Delivery (POD) slips with handwritten wet/crushed carton remarks, contracted diesel escalation pegs, and GPS-verified gate detention hours.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/3118104517465970888/session/-?mods=",
    "videoSrc": "assets/media/video/o2d_suite_demo.mp4",
    "starterPrompts": [
      "Audit this week's pending transporter freight bills. Where do billed rates, fuel surcharges, or detention hours disagree with our contracts and GPS logs?",
      "Check the scanned lorry receipts and stamped delivery slips on LR-TCI-882910 and LR-HWK-771024 for damaged cartons or duplicate billing.",
      "Block the duplicate bill and stage short-pay vouchers deducting the unverified detention and damaged Dark Fantasy cartons."
    ],
    "samplePrompt": "Audit this week's pending transporter freight bills. Where do billed rates, fuel surcharges, or detention hours disagree with our contracts and GPS logs?"
  },
  "demand sensing agent": {
    "id": "demand_sensing_agent",
    "name": "Demand Sensing Agent",
    "geDisplayName": "Demand Sensing Agent",
    "isItcTmd": false,
    "pillar": "Planning & Strategy",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Fuses daily POS sell-through, weather ensembles, and stockout imputation to cut short-horizon WAPE by 20%\u201335% and reduce safety-stock buffers.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/4275760174019143309/session/-?mods=",
    "videoSrc": "assets/media/video/demand_sensing_demo.mp4",
    "starterPrompts": [
      "Compare our baseline plan against constrained options in demand forecasting this week and recommend where to adjust for best margin and service."
    ],
    "samplePrompt": "Compare our baseline plan against constrained options in demand forecasting this week and recommend where to adjust for best margin and service."
  },
  "promo roi simulator": {
    "id": "promo_lift_simulator",
    "name": "Promo ROI Simulator",
    "geDisplayName": "Promo ROI Simulator",
    "isItcTmd": false,
    "pillar": "Planning & Strategy",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Simulates baseline cannibalization, post-promo dip, and incremental gross margin before trade funds are committed\u2014blocking unprofitable events.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/7230495950759747643/session/-?mods=",
    "videoSrc": "assets/media/video/promo_lift_simulator_demo.mp4",
    "starterPrompts": [
      "What critical trade promotion risks or threshold breaches should we contain today, and what preventive steps keep operations protected?"
    ],
    "samplePrompt": "What critical trade promotion risks or threshold breaches should we contain today, and what preventive steps keep operations protected?"
  },
  "consensus & gap agent": {
    "id": "sop_scenario_weaver",
    "name": "Consensus & Gap Agent",
    "geDisplayName": "Consensus & Gap Agent",
    "isItcTmd": false,
    "pillar": "Planning & Strategy",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Translates supply-demand gaps into margin-optimal constrained scenarios (overtime vs. co-packer vs. air freight vs. customer priority).",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/9189674696747625515/session/-?mods=",
    "videoSrc": "assets/media/video/demand_sensing_demo.mp4",
    "starterPrompts": [
      "Compare our baseline plan against constrained options in s&op / ibp this week and recommend where to adjust for best margin and service."
    ],
    "samplePrompt": "Compare our baseline plan against constrained options in s&op / ibp this week and recommend where to adjust for best margin and service."
  },
  "digital war-room agent": {
    "id": "disruption_war_room_orchestrator",
    "name": "Digital War-Room Agent",
    "geDisplayName": "Digital War-Room Agent",
    "isItcTmd": false,
    "pillar": "Planning & Strategy",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Maps port, plant, or supplier shocks to affected customer orders in minutes and executes the lowest-cost mitigation playbook to protect OTIF.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/4685464268735078343/session/-?mods=",
    "videoSrc": "assets/media/video/demand_sensing_demo.mp4",
    "starterPrompts": [
      "What critical s&op / ibp risks or threshold breaches should we contain today, and what preventive steps keep operations protected?"
    ],
    "samplePrompt": "What critical s&op / ibp risks or threshold breaches should we contain today, and what preventive steps keep operations protected?"
  },
  "executive copilot": {
    "id": "csco_control_tower_copilot",
    "name": "Executive Copilot",
    "geDisplayName": "Executive Copilot",
    "isItcTmd": false,
    "pillar": "Planning & Strategy",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Synthesizes cross-pillar service, cash-to-cash, and cost variances on demand\u2014turning 5-day analyst deck cycles into instant executive action.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/4015823380636158533/session/-?mods=",
    "videoSrc": "assets/media/video/demand_sensing_demo.mp4",
    "starterPrompts": [
      "Compare our baseline plan against constrained options in s&op / ibp this week and recommend where to adjust for best margin and service."
    ],
    "samplePrompt": "Compare our baseline plan against constrained options in s&op / ibp this week and recommend where to adjust for best margin and service."
  },
  "sku pruning agent": {
    "id": "working_capital_cash_bridge",
    "name": "SKU Pruning Agent",
    "geDisplayName": "SKU Pruning Agent",
    "isItcTmd": false,
    "pillar": "Planning & Strategy",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Scores every SKU on true net contribution after carrying, changeover, and obsolescence cost\u2014unlocking trapped working capital from the long tail.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/14094336958774128849/session/-?mods=",
    "videoSrc": "assets/media/video/demand_sensing_demo.mp4",
    "starterPrompts": [
      "Audit our open portfolio & sku records this week, show where money is leaking or blocked, and flag what needs immediate release or recovery."
    ],
    "samplePrompt": "Audit our open portfolio & sku records this week, show where money is leaking or blocked, and flag what needs immediate release or recovery."
  },
  "disruption sensing agent": {
    "id": "tier_n_risk_sentinel",
    "name": "Disruption Sensing Agent",
    "geDisplayName": "Disruption Sensing Agent",
    "isItcTmd": false,
    "pillar": "Sourcing & Procurement",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Continuously monitors sub-tier financial, geopolitical, weather, and port signals\u2014triggering alternate allocations weeks before line stoppage.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/6167693086894539620/session/-?mods=",
    "videoSrc": "assets/media/video/o2d_suite_demo.mp4",
    "starterPrompts": [
      "What critical supplier network risks or threshold breaches should we contain today, and what preventive steps keep operations protected?"
    ],
    "samplePrompt": "What critical supplier network risks or threshold breaches should we contain today, and what preventive steps keep operations protected?"
  },
  "esg & scope 3 auditor": {
    "id": "carbon_scope3_ledger",
    "name": "ESG & Scope 3 Auditor",
    "geDisplayName": "ESG & Scope 3 Auditor",
    "isItcTmd": false,
    "pillar": "Sourcing & Procurement",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Replaces coarse spend-based averages with primary supplier + lane emissions\u2014preventing EU CBAM penalties and cutting external assurance fees.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/12043431535905541673/session/-?mods=",
    "videoSrc": "assets/media/video/o2d_suite_demo.mp4",
    "starterPrompts": [
      "Audit our open supplier network records this week, show where money is leaking or blocked, and flag what needs immediate release or recovery."
    ],
    "samplePrompt": "Audit our open supplier network records this week, show where money is leaking or blocked, and flag what needs immediate release or recovery."
  },
  "dynamic should-cost agent": {
    "id": "rfq_should_cost_agent",
    "name": "Dynamic Should-Cost Agent",
    "geDisplayName": "Dynamic Should-Cost Agent",
    "isItcTmd": false,
    "pillar": "Sourcing & Procurement",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Decomposes every supplier quote into raw material, conversion, energy, logistics, and margin\u2014arming buyers with hard clean-sheet leverage.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/18006815538360774894/session/-?mods=",
    "videoSrc": "assets/media/video/o2d_suite_demo.mp4",
    "starterPrompts": [
      "Audit our open material & packaging records this week, show where money is leaking or blocked, and flag what needs immediate release or recovery."
    ],
    "samplePrompt": "Audit our open material & packaging records this week, show where money is leaking or blocked, and flag what needs immediate release or recovery."
  },
  "three-way match dispute": {
    "id": "three_way_match_dispute",
    "name": "Three-Way Match Dispute",
    "geDisplayName": "Three-Way Match Dispute",
    "isItcTmd": false,
    "pillar": "Sourcing & Procurement",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Reconciles PO, Goods Receipt (ASN/GRN), and Invoice line variances automatically\u2014capturing early-payment discounts and cutting AP unit cost by 80%.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/3963067958567898860/session/-?mods=",
    "videoSrc": "assets/media/video/o2d_suite_demo.mp4",
    "starterPrompts": [
      "Audit our open contract & po mgmt records this week, show where money is leaking or blocked, and flag what needs immediate release or recovery."
    ],
    "samplePrompt": "Audit our open contract & po mgmt records this week, show where money is leaking or blocked, and flag what needs immediate release or recovery."
  },
  "changeover optimizer": {
    "id": "finite_production_scheduler",
    "name": "Changeover Optimizer",
    "geDisplayName": "Changeover Optimizer",
    "isItcTmd": false,
    "pillar": "Manufacturing & Production",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Solves finite-capacity campaign wheels across allergens, colors, and pack formats\u2014cutting sanitation/changeover downtime by 15%\u201325%.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/16838162618721244143/session/-?mods=",
    "videoSrc": "assets/media/video/o2d_suite_demo.mp4",
    "starterPrompts": [
      "Audit our open production scheduling records this week, show where money is leaking or blocked, and flag what needs immediate release or recovery."
    ],
    "samplePrompt": "Audit our open production scheduling records this week, show where money is leaking or blocked, and flag what needs immediate release or recovery."
  },
  "bottleneck diagnostic": {
    "id": "predictive_oee_sentinel",
    "name": "Bottleneck Diagnostic",
    "geDisplayName": "Bottleneck Diagnostic",
    "isItcTmd": false,
    "pillar": "Manufacturing & Production",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Combines PLC telemetry with 6-month Rough-Cut Capacity Planning (RCCP) to prevent unplanned breakdowns and expose plant bottlenecks months ahead.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/12855910931272362848/session/-?mods=",
    "videoSrc": "assets/media/video/o2d_suite_demo.mp4",
    "starterPrompts": [
      "What critical capacity planning risks or threshold breaches should we contain today, and what preventive steps keep operations protected?"
    ],
    "samplePrompt": "What critical capacity planning risks or threshold breaches should we contain today, and what preventive steps keep operations protected?"
  },
  "visual defect triager": {
    "id": "inline_yield_guardian",
    "name": "Visual Defect Triager",
    "geDisplayName": "Visual Defect Triager",
    "isItcTmd": false,
    "pillar": "Manufacturing & Production",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.8-flash",
    "annualValueCr": 8.5,
    "outcome": "Detects seal, fill, label, and surface defects inline in milliseconds\u2014halting drift before whole pallets turn into scrap or rework.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/14928798980920927172/session/-?mods=",
    "videoSrc": "assets/media/video/o2d_suite_demo.mp4",
    "starterPrompts": [
      "What critical quality & compliance risks or threshold breaches should we contain today, and what preventive steps keep operations protected?"
    ],
    "samplePrompt": "What critical quality & compliance risks or threshold breaches should we contain today, and what preventive steps keep operations protected?"
  },
  "safety stock agent": {
    "id": "meio_safety_stock_agent",
    "name": "Safety Stock Agent",
    "geDisplayName": "Safety Stock Agent",
    "isItcTmd": false,
    "pillar": "Inventory & Warehousing",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Simultaneously optimizes safety stocks across plants, central hubs, and regional DCs\u2014freeing 12%\u201322% in working capital while lifting fill rates.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/9879109757966221077/session/-?mods=",
    "videoSrc": "assets/media/video/smart_warehouse_demo.mp4",
    "starterPrompts": [
      "Compare our baseline plan against constrained options in positioning & optimization this week and recommend where to adjust for best margin and service."
    ],
    "samplePrompt": "Compare our baseline plan against constrained options in positioning & optimization this week and recommend where to adjust for best margin and service."
  },
  "dynamic slotting agent": {
    "id": "warehouse_slotting_agent",
    "name": "Dynamic Slotting Agent",
    "geDisplayName": "Dynamic Slotting Agent",
    "isItcTmd": false,
    "pillar": "Inventory & Warehousing",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Re-slots fast-moving and co-ordered SKUs into ergonomic golden zones and optimizes TSP pick paths\u2014boosting DC throughput with $0 automation CapEx.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/680853864033816982/session/-?mods=",
    "videoSrc": "assets/media/video/smart_warehouse_demo.mp4",
    "starterPrompts": [
      "Which active warehouse operations bottlenecks need immediate floor or dispatch reassignment right now to protect On-Time In-Full (OTIF) delivery?"
    ],
    "samplePrompt": "Which active warehouse operations bottlenecks need immediate floor or dispatch reassignment right now to protect On-Time In-Full (OTIF) delivery?"
  },
  "sfs / bopis sourcing": {
    "id": "atp_order_promising_agent",
    "name": "SFS / BOPIS Sourcing",
    "geDisplayName": "SFS / BOPIS Sourcing",
    "isItcTmd": false,
    "pillar": "Inventory & Warehousing",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Routes every e-commerce and BOPIS order to the DC or store that maximizes net order margin across parcel zone cost, split risk, and markdown avoidance.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/6469216377587188453/session/-?mods=",
    "videoSrc": "assets/media/video/smart_warehouse_demo.mp4",
    "starterPrompts": [
      "Audit our open omnichannel visibility records this week, show where money is leaking or blocked, and flag what needs immediate release or recovery."
    ],
    "samplePrompt": "Audit our open omnichannel visibility records this week, show where money is leaking or blocked, and flag what needs immediate release or recovery."
  },
  "load consolidation": {
    "id": "itc_load_consolidation_agent",
    "name": "Load Consolidation Agent",
    "geDisplayName": "Load Consolidation Agent (ITC TMD)",
    "isItcTmd": true,
    "pillar": "Distribution & Logistics (ITC TMD)",
    "persona": "Primary Transport Planner",
    "buildMode": "Low-Code Agent Studio",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 29.4,
    "outcome": "ITC ICML mega-plants ship both high-density Staples (Aashirvaad Atta at ~600 kg/m3, weighting out a 32-ft MXL truck at 45% volume) and ultra-light fragile Foods (Bingo! chips & Sunfeast biscuits at ~90-180 kg/m3, cubing out at 25% payload). Dispatching single-category trucks wastes 28-36% of primary freight spend.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/41610693945890168/session/-?mods=",
    "videoSrc": "assets/media/video/fleetflow_dispatch_demo.mp4",
    "starterPrompts": [
      "Check today's staged Ranjangaon and Khordha dispatches. Where are we sending half-empty Atta or Bingo! trucks that can be combined?",
      "Will co-loading Sunfeast biscuits and Bingo! cartons above Aashirvaad Atta on the Ahmedabad lane stay safe on axle weight and carton crushing?",
      "Prepare the consolidated truck loading plan for the Sanand and Dankuni lanes so I can review and release the indents."
    ],
    "samplePrompt": "Check today's staged Ranjangaon and Khordha dispatches. Where are we sending half-empty Atta or Bingo! trucks that can be combined?"
  },
  "yard disruption agent": {
    "id": "itc_yard_disruption_detention_sentinel",
    "name": "Yard Disruption & Detention Sentinel",
    "geDisplayName": "Yard Disruption & Detention Sentinel (ITC TMD)",
    "isItcTmd": true,
    "pillar": "Distribution & Logistics (ITC TMD)",
    "persona": "Plant Yard & Dispatch Lead",
    "buildMode": "Low-Code Agent Studio",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 20.9,
    "outcome": "At peak shift handovers, 32-ft containers and frozen reefers queue at ICML weighbridges and blocked stretch-wrap doors beyond the 120-minute free-time slab\u2014triggering Rs 850-Rs 1,350/hr carrier detention charges and diesel burn on waiting reefers.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/4795666764246492206/session/-?mods=",
    "videoSrc": "assets/media/video/smart_warehouse_demo.mp4",
    "starterPrompts": [
      "Which trucks waiting at Ranjangaon, Kapurthala, and Panchla gates are close to breaching free detention time right now?",
      "Do we have any frozen or chilled reefers running on diesel in the yard that need an open shore-power dock door immediately?",
      "Reassign the delayed trailers from blocked doors to open bays and queue the yard move instructions for sign-off."
    ],
    "samplePrompt": "Which trucks waiting at Ranjangaon, Kapurthala, and Panchla gates are close to breaching free detention time right now?"
  },
  "cold-chain auditor": {
    "id": "itc_cold_chain_thermal_auditor",
    "name": "Cold-Chain Thermal Auditor",
    "geDisplayName": "Cold-Chain Thermal Auditor (ITC TMD)",
    "isItcTmd": true,
    "pillar": "Distribution & Logistics (ITC TMD)",
    "persona": "Cold-Chain & Transit QA Lead",
    "buildMode": "Low-Code Agent Studio",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 22.6,
    "outcome": "ITC Master Chef frozen snacks (-18C), Aashirvaad Svasti paneer/curd (2-8C), and Fabelle luxury chocolates (16-20C) suffer mid-highway compressor slips or driver fuel-saving switch-offs. Simple min/max alerts miss cumulative Arrhenius kinetic heat damage.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/15505209197662230344/session/-?mods=",
    "videoSrc": "assets/media/video/f2f_fleet_demo.mp4",
    "starterPrompts": [
      "Review our inbound Master Chef frozen, Svasti dairy, and Fabelle chocolate reefers. Did any load suffer heat damage in transit?",
      "Check the logger printout on the Kapurthala frozen fries truck and the Patna paneer load to see why temperatures spiked.",
      "Hold the affected pallets in quarantine and prepare the carrier spoilage claim packet for quality sign-off."
    ],
    "samplePrompt": "Review our inbound Master Chef frozen, Svasti dairy, and Fabelle chocolate reefers. Did any load suffer heat damage in transit?"
  },
  "aisle-aligned pallet": {
    "id": "aisle_aligned_pallet_agent",
    "name": "Aisle-Aligned Pallet",
    "geDisplayName": "Aisle-Aligned Pallet",
    "isItcTmd": false,
    "pillar": "Distribution & Logistics",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Builds DC pallets sequenced to each store's exact planogram aisle layout and case crush physics\u2014slashing in-store restocking labor by 20%\u201335%.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/4425840194449317295/session/-?mods=",
    "videoSrc": "assets/media/video/fleetflow_dispatch_demo.mp4",
    "starterPrompts": [
      "Audit our open store replenishment records this week, show where money is leaking or blocked, and flag what needs immediate release or recovery."
    ],
    "samplePrompt": "Audit our open store replenishment records this week, show where money is leaking or blocked, and flag what needs immediate release or recovery."
  },
  "store capacity agent": {
    "id": "store_capacity_agent",
    "name": "Store Capacity Agent",
    "geDisplayName": "Store Capacity Agent",
    "isItcTmd": false,
    "pillar": "Distribution & Logistics",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Caps and paces DC replenishment dispatches against each store's live backroom cubic capacity and receiving labor\u2014preventing overflow and damage.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/9877222810170171439/session/-?mods=",
    "videoSrc": "assets/media/video/fleetflow_dispatch_demo.mp4",
    "starterPrompts": [
      "Which active store replenishment bottlenecks need immediate floor or dispatch reassignment right now to protect On-Time In-Full (OTIF) delivery?"
    ],
    "samplePrompt": "Which active store replenishment bottlenecks need immediate floor or dispatch reassignment right now to protect On-Time In-Full (OTIF) delivery?"
  },
  "curfew orchestrator": {
    "id": "port_drayage_orchestrator",
    "name": "Curfew Orchestrator",
    "geDisplayName": "Curfew Orchestrator",
    "isItcTmd": false,
    "pillar": "Distribution & Logistics",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Aligns store dispatch times, EV/low-noise tractor assignment, and urban curfew/school-zone rules to eliminate municipal fines and refused drops.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/200992941311882772/session/-?mods=",
    "videoSrc": "assets/media/video/fleetflow_dispatch_demo.mp4",
    "starterPrompts": [
      "Which active store replenishment bottlenecks need immediate floor or dispatch reassignment right now to protect On-Time In-Full (OTIF) delivery?"
    ],
    "samplePrompt": "Which active store replenishment bottlenecks need immediate floor or dispatch reassignment right now to protect On-Time In-Full (OTIF) delivery?"
  },
  "geocoding intelligence": {
    "id": "geocoding_intelligence_agent",
    "name": "Geocoding Intelligence",
    "geDisplayName": "Geocoding Intelligence",
    "isItcTmd": false,
    "pillar": "Distribution & Logistics",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Validates address rooftop/loading-bay coordinates and driver access notes before dispatch\u2014eliminating $15\u2013$18 failed-delivery redelivery costs.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/7088606266716503770/session/-?mods=",
    "videoSrc": "assets/media/video/fleetflow_dispatch_demo.mp4",
    "starterPrompts": [
      "Compare our baseline plan against constrained options in last-mile delivery this week and recommend where to adjust for best margin and service."
    ],
    "samplePrompt": "Compare our baseline plan against constrained options in last-mile delivery this week and recommend where to adjust for best margin and service."
  },
  "courier allocation": {
    "id": "multimodal_mode_shift_agent",
    "name": "Courier Allocation",
    "geDisplayName": "Courier Allocation",
    "isItcTmd": false,
    "pillar": "Distribution & Logistics",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Dynamically selects the lowest-cost parcel, regional courier, crowdsourced, or LTL mode per order that still hits the promised customer delivery date.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/9650827414407796887/session/-?mods=",
    "videoSrc": "assets/media/video/fleetflow_dispatch_demo.mp4",
    "starterPrompts": [
      "Which active last-mile delivery bottlenecks need immediate floor or dispatch reassignment right now to protect On-Time In-Full (OTIF) delivery?"
    ],
    "samplePrompt": "Which active last-mile delivery bottlenecks need immediate floor or dispatch reassignment right now to protect On-Time In-Full (OTIF) delivery?"
  },
  "delivery exception copilot": {
    "id": "itc_mt_qcomm_slot_otif_copilot",
    "name": "MT / Q-Comm Slot & OTIF Copilot",
    "geDisplayName": "MT / Q-Comm Slot & OTIF Copilot (ITC TMD)",
    "isItcTmd": true,
    "pillar": "Distribution & Logistics (ITC TMD)",
    "persona": "Modern Trade & Q-Comm Logistics Lead",
    "buildMode": "Low-Code Agent Studio",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 28.4,
    "outcome": "Blinkit, Zepto, Swiggy Instamart, DMart, and Reliance enforce 15-to-30-minute dock arrival tolerances and strict 75% Minimum Remaining Shelf-Life gates. Missing a slot by 20 minutes or sending a 68%-MRSL batch triggers full truck turn-away and 5-10% PO chargebacks.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/14366296034264623629/session/-?mods=",
    "videoSrc": "assets/media/video/o2d_suite_demo.mp4",
    "starterPrompts": [
      "Which Blinkit, Zepto, Instamart, or DMart trucks are running late for their dock slot today or carrying short-shelf-life stock?",
      "What open appointment slots are available on the retailer portals right now so we avoid turn-aways and OTIF penalties?",
      "Move the delayed dispatches to the next open portal slots and swap the short-dated Zepto batch before the truck is sealed."
    ],
    "samplePrompt": "Which Blinkit, Zepto, Instamart, or DMart trucks are running late for their dock slot today or carrying short-shelf-life stock?"
  },
  "routing guide compliance": {
    "id": "itc_routing_guide_compliance_agent",
    "name": "Routing Guide Compliance Agent",
    "geDisplayName": "Routing Guide Compliance Agent (ITC TMD)",
    "isItcTmd": true,
    "pillar": "Distribution & Logistics (ITC TMD)",
    "persona": "Transport Procurement Manager",
    "buildMode": "No-Code Gemini Gem",
    "model": "gemini-3.8-flash",
    "annualValueCr": 16.9,
    "outcome": "ITC negotiates annual L1/L2/L3 waterfall rate cards across hundreds of ICML-to-CFA lanes, yet local dispatchers frequently bypass L2 backup carriers during evening rush and book ad-hoc spot-market brokers at 28-40% freight premiums.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/13477844154945305896/session/-?mods=",
    "videoSrc": "assets/media/video/f2f_fleet_demo.mp4",
    "starterPrompts": [
      "Where did we overspend on spot-market trucks this month instead of using our contracted L1 and L2 transporters?",
      "On which lanes did our dispatchers skip the backup carrier waterfall versus lanes where contracted transporters actually refused loads?",
      "Prepare compliance notes for the skipped waterfall lanes and flag chronic rejection lanes for rate review."
    ],
    "samplePrompt": "Where did we overspend on spot-market trucks this month instead of using our contracted L1 and L2 transporters?"
  },
  "return fraud sentinel": {
    "id": "reverse_rma_optimizer",
    "name": "Return Fraud Sentinel",
    "geDisplayName": "Return Fraud Sentinel",
    "isItcTmd": false,
    "pillar": "Returns & Reverse Logistics",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.8-flash",
    "annualValueCr": 8.5,
    "outcome": "Scores return requests against serial history, account abuse patterns, and item telemetry\u2014blocking fraudulent RMAs without friction for loyal buyers.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/2869479596817501852/session/-?mods=",
    "videoSrc": "assets/media/video/f2f_fleet_demo.mp4",
    "starterPrompts": [
      "Audit our open returns & claims mgmt records this week, show where money is leaking or blocked, and flag what needs immediate release or recovery."
    ],
    "samplePrompt": "Audit our open returns & claims mgmt records this week, show where money is leaking or blocked, and flag what needs immediate release or recovery."
  },
  "keep-it & routing advisor": {
    "id": "keep_it_routing_advisor",
    "name": "Keep-It & Routing Advisor",
    "geDisplayName": "Keep-It & Routing Advisor",
    "isItcTmd": false,
    "pillar": "Returns & Reverse Logistics",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Calculates reverse shipping + grading cost vs. resale recovery in real time\u2014routing items to store, refurb hub, outlet, or Keep-It credit.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/3851887269918555105/session/-?mods=",
    "videoSrc": "assets/media/video/f2f_fleet_demo.mp4",
    "starterPrompts": [
      "Compare our baseline plan against constrained options in returns & claims mgmt this week and recommend where to adjust for best margin and service."
    ],
    "samplePrompt": "Compare our baseline plan against constrained options in returns & claims mgmt this week and recommend where to adjust for best margin and service."
  },
  "os&d freight claims": {
    "id": "osd_freight_claims_agent",
    "name": "OS&D Freight Claims",
    "geDisplayName": "OS&D Freight Claims",
    "isItcTmd": false,
    "pillar": "Returns & Reverse Logistics",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Assembles dock damage photos, signed BOL exceptions, and SKU invoice values into compliant carrier claim packets within hours of unloading.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/11604346230811147054/session/-?mods=",
    "videoSrc": "assets/media/video/f2f_fleet_demo.mp4",
    "starterPrompts": [
      "Audit our open returns & claims mgmt records this week, show where money is leaking or blocked, and flag what needs immediate release or recovery."
    ],
    "samplePrompt": "Audit our open returns & claims mgmt records this week, show where money is leaking or blocked, and flag what needs immediate release or recovery."
  },
  "dynamic markdown agent": {
    "id": "dynamic_markdown_agent",
    "name": "Dynamic Markdown Agent",
    "geDisplayName": "Dynamic Markdown Agent",
    "isItcTmd": false,
    "pillar": "Returns & Reverse Logistics",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Triggers shallow, early price-elasticity markdowns synced to lot sell-by dates and local store velocity\u2014clearing stock at higher margin with less waste.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/11982871860095077801/session/-?mods=",
    "videoSrc": "assets/media/video/f2f_fleet_demo.mp4",
    "starterPrompts": [
      "What critical expiry & markdowns risks or threshold breaches should we contain today, and what preventive steps keep operations protected?"
    ],
    "samplePrompt": "What critical expiry & markdowns risks or threshold breaches should we contain today, and what preventive steps keep operations protected?"
  },
  "short-dated redistributor": {
    "id": "short_dated_redistributor",
    "name": "Short-Dated Redistributor",
    "geDisplayName": "Short-Dated Redistributor",
    "isItcTmd": false,
    "pillar": "Returns & Reverse Logistics",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Matches short-dated DC lots at risk of customer shelf-life rejection to fast-turning stores, foodservice channels, or tax-advantaged donations.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/374272156355245468/session/-?mods=",
    "videoSrc": "assets/media/video/f2f_fleet_demo.mp4",
    "starterPrompts": [
      "Audit our open expiry & markdowns records this week, show where money is leaking or blocked, and flag what needs immediate release or recovery."
    ],
    "samplePrompt": "Audit our open expiry & markdowns records this week, show where money is leaking or blocked, and flag what needs immediate release or recovery."
  },
  "food waste & esg copilot": {
    "id": "food_waste_esg_copilot",
    "name": "Food Waste & ESG Copilot",
    "geDisplayName": "Food Waste & ESG Copilot",
    "isItcTmd": false,
    "pillar": "Returns & Reverse Logistics",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Routes unsellable organics to highest circular tier (donation tax credits, upcycling, feed, digester) and automates Scope 3 waste reporting.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/10037702925741270884/session/-?mods=",
    "videoSrc": "assets/media/video/f2f_fleet_demo.mp4",
    "starterPrompts": [
      "Audit our open expiry & markdowns records this week, show where money is leaking or blocked, and flag what needs immediate release or recovery."
    ],
    "samplePrompt": "Audit our open expiry & markdowns records this week, show where money is leaking or blocked, and flag what needs immediate release or recovery."
  },
  "rti balance reconciler": {
    "id": "rti_balance_reconciler",
    "name": "RTI Balance Reconciler",
    "geDisplayName": "RTI Balance Reconciler",
    "isItcTmd": false,
    "pillar": "Returns & Reverse Logistics",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Reconciles serialized pallet, tote, rack, and keg balances across plants, DCs, and customers\u2014slashing pool rental fines and replacement CapEx.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/16699165381032264857/session/-?mods=",
    "videoSrc": "assets/media/video/f2f_fleet_demo.mp4",
    "starterPrompts": [
      "Compare our baseline plan against constrained options in pallet & tote reclamation this week and recommend where to adjust for best margin and service."
    ],
    "samplePrompt": "Compare our baseline plan against constrained options in pallet & tote reclamation this week and recommend where to adjust for best margin and service."
  },
  "milk-run consolidation": {
    "id": "intermodal_rail_linehaul_agent",
    "name": "Milk-Run Consolidation",
    "geDisplayName": "Milk-Run Consolidation",
    "isItcTmd": false,
    "pillar": "Returns & Reverse Logistics",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Pairs empty outbound store/DC return legs with pallet stacks, collapsible totes, and consolidated RMAs\u2014eliminating dedicated reverse freight.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/13844457953454901577/session/-?mods=",
    "videoSrc": "assets/media/video/f2f_fleet_demo.mp4",
    "starterPrompts": [
      "Which active pallet & tote reclamation bottlenecks need immediate floor or dispatch reassignment right now to protect On-Time In-Full (OTIF) delivery?"
    ],
    "samplePrompt": "Which active pallet & tote reclamation bottlenecks need immediate floor or dispatch reassignment right now to protect On-Time In-Full (OTIF) delivery?"
  },
  "sanitation & health agent": {
    "id": "sanitation_health_agent",
    "name": "Sanitation & Health Agent",
    "geDisplayName": "Sanitation & Health Agent",
    "isItcTmd": false,
    "pillar": "Returns & Reverse Logistics",
    "persona": "Supply Chain Lead",
    "buildMode": "Google ADK + Agent Engine",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 8.5,
    "outcome": "Enforces wash-temperature, allergen segregation, and structural cycle limits on every reusable container\u2014extending asset life while guaranteeing safety.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/11114379190038719987/session/-?mods=",
    "videoSrc": "assets/media/video/f2f_fleet_demo.mp4",
    "starterPrompts": [
      "What critical pallet & tote reclamation risks or threshold breaches should we contain today, and what preventive steps keep operations protected?"
    ],
    "samplePrompt": "What critical pallet & tote reclamation risks or threshold breaches should we contain today, and what preventive steps keep operations protected?"
  },
  "overnight sto & load consolidation agent": {
    "id": "itc_load_consolidation_agent",
    "name": "Load Consolidation Agent",
    "geDisplayName": "Load Consolidation Agent (ITC TMD)",
    "isItcTmd": true,
    "pillar": "Distribution & Logistics (ITC TMD)",
    "persona": "Primary Transport Planner",
    "buildMode": "Low-Code Agent Studio",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 29.4,
    "outcome": "ITC ICML mega-plants ship both high-density Staples (Aashirvaad Atta at ~600 kg/m3, weighting out a 32-ft MXL truck at 45% volume) and ultra-light fragile Foods (Bingo! chips & Sunfeast biscuits at ~90-180 kg/m3, cubing out at 25% payload). Dispatching single-category trucks wastes 28-36% of primary freight spend.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/41610693945890168/session/-?mods=",
    "videoSrc": "assets/media/video/fleetflow_dispatch_demo.mp4",
    "starterPrompts": [
      "Check today's staged Ranjangaon and Khordha dispatches. Where are we sending half-empty Atta or Bingo! trucks that can be combined?",
      "Will co-loading Sunfeast biscuits and Bingo! cartons above Aashirvaad Atta on the Ahmedabad lane stay safe on axle weight and carton crushing?",
      "Prepare the consolidated truck loading plan for the Sanand and Dankuni lanes so I can review and release the indents."
    ],
    "samplePrompt": "Check today's staged Ranjangaon and Khordha dispatches. Where are we sending half-empty Atta or Bingo! trucks that can be combined?"
  },
  "live thermal excursion sentinel": {
    "id": "itc_cold_chain_thermal_auditor",
    "name": "Cold-Chain Thermal Auditor",
    "geDisplayName": "Cold-Chain Thermal Auditor (ITC TMD)",
    "isItcTmd": true,
    "pillar": "Distribution & Logistics (ITC TMD)",
    "persona": "Cold-Chain & Transit QA Lead",
    "buildMode": "Low-Code Agent Studio",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 22.6,
    "outcome": "ITC Master Chef frozen snacks (-18C), Aashirvaad Svasti paneer/curd (2-8C), and Fabelle luxury chocolates (16-20C) suffer mid-highway compressor slips or driver fuel-saving switch-offs. Simple min/max alerts miss cumulative Arrhenius kinetic heat damage.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/15505209197662230344/session/-?mods=",
    "videoSrc": "assets/media/video/f2f_fleet_demo.mp4",
    "starterPrompts": [
      "Review our inbound Master Chef frozen, Svasti dairy, and Fabelle chocolate reefers. Did any load suffer heat damage in transit?",
      "Check the logger printout on the Kapurthala frozen fries truck and the Patna paneer load to see why temperatures spiked.",
      "Hold the affected pallets in quarantine and prepare the carrier spoilage claim packet for quality sign-off."
    ],
    "samplePrompt": "Review our inbound Master Chef frozen, Svasti dairy, and Fabelle chocolate reefers. Did any load suffer heat damage in transit?"
  },
  "live traffic & breakdown rerouter": {
    "id": "itc_dynamic_rerouter",
    "name": "Dynamic Rerouter",
    "geDisplayName": "Dynamic Rerouter (ITC TMD)",
    "isItcTmd": true,
    "pillar": "Distribution & Logistics (ITC TMD)",
    "persona": "Fleet & Route Dispatch Lead",
    "buildMode": "Low-Code + Maps Platform",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 22.0,
    "outcome": "En-route highway landslides (NH-48 Khandala Ghat), urban waterlogging (Bengaluru ORR), police heavy-vehicle curfews, commercial EV low battery State-of-Charge, and expiring midnight NIC E-Way Bills cause severe delivery misses and Section 129 GST transit penalties.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/7796378644329947655/session/-?mods=",
    "videoSrc": "assets/media/video/fleetflow_dispatch_demo.mp4",
    "starterPrompts": [
      "Which primary trucks and city EV vans are stuck in highway blockages, waterlogging, or police no-entry curfews right now?",
      "Are any delayed highway loads close to their E-Way Bill expiring tonight, or do any city EVs need a charging stop to finish their drops?",
      "Send the diversion routes, charger stop, and E-Way Bill extension request to the control tower queue for approval."
    ],
    "samplePrompt": "Which primary trucks and city EV vans are stuck in highway blockages, waterlogging, or police no-entry curfews right now?"
  },
  "lane tender rejection radar": {
    "id": "itc_routing_guide_compliance_agent",
    "name": "Routing Guide Compliance Agent",
    "geDisplayName": "Routing Guide Compliance Agent (ITC TMD)",
    "isItcTmd": true,
    "pillar": "Distribution & Logistics (ITC TMD)",
    "persona": "Transport Procurement Manager",
    "buildMode": "No-Code Gemini Gem",
    "model": "gemini-3.8-flash",
    "annualValueCr": 16.9,
    "outcome": "ITC negotiates annual L1/L2/L3 waterfall rate cards across hundreds of ICML-to-CFA lanes, yet local dispatchers frequently bypass L2 backup carriers during evening rush and book ad-hoc spot-market brokers at 28-40% freight premiums.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/13477844154945305896/session/-?mods=",
    "videoSrc": "assets/media/video/f2f_fleet_demo.mp4",
    "starterPrompts": [
      "Where did we overspend on spot-market trucks this month instead of using our contracted L1 and L2 transporters?",
      "On which lanes did our dispatchers skip the backup carrier waterfall versus lanes where contracted transporters actually refused loads?",
      "Prepare compliance notes for the skipped waterfall lanes and flag chronic rejection lanes for rate review."
    ],
    "samplePrompt": "Where did we overspend on spot-market trucks this month instead of using our contracted L1 and L2 transporters?"
  },
  "pod ocr & short-delivery extractor": {
    "id": "itc_freight_bill_audit_agent",
    "name": "Freight Bill Audit Agent",
    "geDisplayName": "Freight Bill Audit Agent (ITC TMD)",
    "isItcTmd": true,
    "pillar": "Distribution & Logistics (ITC TMD)",
    "persona": "Freight Bill & Claims Controller",
    "buildMode": "Multimodal + Agent Studio",
    "model": "gemini-3.1-pro-preview",
    "annualValueCr": 25.5,
    "outcome": "Indian CPG freight settlement requires reconciling paper-heavy Lorry Receipts (Bilty), rubber-stamped CFA Proof-of-Delivery (POD) slips with handwritten wet/crushed carton remarks, contracted diesel escalation pegs, and GPS-verified gate detention hours.",
    "geUrl": "https://vertexaisearch.cloud.google.com/home/cid/47d2d150-f788-4afc-af12-df8dd05ed34a/r/agent/3118104517465970888/session/-?mods=",
    "videoSrc": "assets/media/video/o2d_suite_demo.mp4",
    "starterPrompts": [
      "Audit this week's pending transporter freight bills. Where do billed rates, fuel surcharges, or detention hours disagree with our contracts and GPS logs?",
      "Check the scanned lorry receipts and stamped delivery slips on LR-TCI-882910 and LR-HWK-771024 for damaged cartons or duplicate billing.",
      "Block the duplicate bill and stage short-pay vouchers deducting the unverified detention and damaged Dark Fantasy cartons."
    ],
    "samplePrompt": "Audit this week's pending transporter freight bills. Where do billed rates, fuel surcharges, or detention hours disagree with our contracts and GPS logs?"
  }
};
