// --- MASTER DATA DATABASE ---
const schemesData = {
    "pm-surya-ghar": {
        type: "govt-scheme", theme: "orange",
        title: "PM Surya Ghar", subtitle: "Muft Bijli Yojana",
        tagline: "Empowering 1 crore households with free solar electricity — lighting homes, saving energy, and building a sustainable future for India.",
        icon: "fa-bolt", bgIcon: "fa-sun",
        portalLink: "https://pmsuryaghar.gov.in",
        hasMinisters: true, hasDeadline: true,
        quote: {
            text: "In order to further sustainable development and people's well-being, we are launching the PM Surya Ghar: Muft Bijli Yojana. This project, with an investment of over Rs. 75,000 crores, aims to light up 1 crore households by providing up to 300 units of free electricity every month.",
            author: "Shri Narendra Modi", role: "Hon'ble Prime Minister of India",
            image: "assets/images/Suryaghar.png" // Fixed path
        },
        tableHeaders: ["Category", "Subsidy Rate", "Notes"],
        tableData: [
            { col1: "Residential households", col2: "Rs. 30,000 (up to 2 kW)", col3: "First slab for rooftop solar" },
            { col1: "Additional capacity", col2: "Rs. 18,000 (per kW)", col3: "For next 1 kW (Up to 3 kW total)" },
            { col1: "Systems > 3 kW", col2: "Max Rs. 78,000", col3: "Fixed cap for larger systems" },
            { col1: "GHS / RWA (common)", col2: "Rs. 18,000 per kW", col3: "Upto 500 kW (Incl. EV charging)" },
        ],
        steps: [
            { step: "01", title: "Visit Portal", desc: "Go to pmsuryaghar.gov.in > Consumer Login" },
            { step: "02", title: "Enter Details", desc: "Enter mobile number & verify captcha." },
            { step: "03", title: "Verify OTP", desc: "Enter the OTP sent to your mobile to login." },
            { step: "04", title: "Complete Profile", desc: "Fill in your profile details and save." },
            { step: "05", title: "Apply", desc: "Select State/DISCOM, fetch details & submit." }
        ],
        capacityBuilding: [
            { title: "Introduction", icon: "fa-bolt", text: "The scheme aims for 1 crore rooftop solar installations nationwide, requiring ~1 lakh skilled teams." },
            { title: "Training Scope", icon: "fa-file-lines", text: "Training covers installation, O&M, and repair roles for Technicians, Engineers, and Vendors." },
            { title: "Aims & Objectives", icon: "fa-arrow-right", text: "Train over 3 lakh professionals including 1 lakh Solar PV Technicians and strengthen DISCOMs." },
            { title: "Implementation", icon: "fa-circle-check", text: "REC Ltd. acts as National Implementing Agency (NPIA) coordinating through State Agencies." }
        ],
        updates: [
            { date: "9 Oct", text: "Amendment: Awareness & Outreach component." },
            { date: "9 Oct", text: "Payment mechanism under Utility model." },
            { date: "1 Oct", text: "Waiver of net metering agreement." },
            { date: "3 Sep", text: "Update: ALMM Manufacturers List." },
            { date: "30 Jul", text: "Clarification: Ground Mounted Structures." }
        ]
    },
    "kusum-yojana": {
        type: "govt-scheme", theme: "green",
        title: "PM-KUSUM", subtitle: "Yojana",
        tagline: "Empowering farmers with solar energy — irrigation, income generation, and energy independence.",
        icon: "fa-tractor", bgIcon: "fa-leaf",
        portalLink: "https://pmkusum.mnre.gov.in",
        hasMinisters: false,
        quote: {
            text: "PM-KUSUM aims to provide energy security to farmers, reducing diesel dependency and enabling income generation through solar power.",
            author: "Core Objective", role: "Ministry of New and Renewable Energy",
            image: null 
        },
        tableHeaders: ["Component", "Description", "Target"],
        tableData: [
            { col1: "Component A", col2: "Grid-connected solar plants", col3: "10,000 MW" },
            { col1: "Component B", col2: "Standalone solar pumps", col3: "20 Lakh Pumps" },
            { col1: "Component C", col2: "Solarisation of pumps", col3: "15 Lakh Pumps" },
        ],
        steps: [
            { step: "01", title: "Visit Portal", desc: "Visit state renewable energy portal." },
            { step: "02", title: "Select Component", desc: "Choose specific PM-KUSUM component." },
            { step: "03", title: "Fill Details", desc: "Enter farmer & land details." },
            { step: "04", title: "Upload Docs", desc: "Upload land records and ID proofs." },
            { step: "05", title: "Submit", desc: "Submit for approval." }
        ],
        capacityBuilding: [
            { title: "Energy Independence", icon: "fa-battery-full", text: "Self-reliance in electricity for irrigation needs." },
            { title: "Additional Income", icon: "fa-indian-rupee-sign", text: "Sell surplus solar power back to the grid." },
            { title: "Environmental Impact", icon: "fa-leaf", text: "Reduce diesel dependency and carbon footprint." }
        ]
    },
    "saur-krushi-pump-yojana": {
        type: "govt-scheme", theme: "green",
        title: "Mission Solarica", subtitle: "Saur Krushi Pump Yojana",
        tagline: "Sustainable irrigation for the future of Indian agriculture. High subsidies, zero bills.",
        icon: "fa-droplet", bgIcon: "fa-tractor",
        portalLink: "https://kusum.mahaurja.com/",
        tableHeaders: ["Pump Capacity", "Government Subsidy", "Farmer Contribution"],
        tableData: [
            { col1: "3 HP DC Pump", col2: "90% - 95%", col3: "5% - 10%" },
            { col1: "5 HP DC Pump", col2: "85% - 90%", col3: "10% - 15%" },
            { col1: "7.5 HP AC Pump", col2: "Up to 80%", col3: "20%" },
        ],
        capacityBuilding: [
            { title: "Zero Bills", icon: "fa-bolt", text: "Harness free power from the sun and eliminate monthly agricultural energy costs." },
            { title: "Day-Time Irrigation", icon: "fa-sun", text: "No more working in the fields at night. Get reliable water supply during daylight hours." },
            { title: "Eco-Friendly", icon: "fa-leaf", text: "Reduce carbon footprint and dependency on diesel-powered pumps." }
        ]
    },
    "commercial": {
        type: "business-page", theme: "blue",
        title: "Solarica Group", subtitle: "Industrial Energy",
        tagline: "We deliver high-efficiency solar PV systems for enterprise properties—scaling from factory rooftops to massive 500MW+ solar parks.",
        icon: "fa-building", bgIcon: "fa-industry",
        tableHeaders: ["Model", "Investment", "Benefit"],
        tableData: [
            { col1: "CAPEX (Self Owned)", col2: "100% by Client", col3: "Max Savings & Tax Benefits" },
            { col1: "OPEX (PPA)", col2: "Zero Investment", col3: "Pay per Unit (Cheaper than Grid)" },
            { col1: "Lease / Loan", col2: "20-30% Down Payment", col3: "EMI paid from Savings" },
        ],
        capacityBuilding: [
            { title: "Rooftop Efficiency", icon: "fa-building", text: "Perfectly optimized for factories, warehouses, and commercial complexes." },
            { title: "Utility Scale", icon: "fa-industry", text: "Specialized large-scale installations integrated into 500MW+ solar parks." },
            { title: "Water-Based", icon: "fa-droplet", text: "Advanced projects on reservoirs and water bodies to save land space." },
            { title: "Energy Resilience", icon: "fa-battery-full", text: "Solar combined with advanced battery storage or wind power." }
        ],
        steps: [
            { step: "01", title: "Audit", desc: "Site survey & load analysis." },
            { step: "02", title: "Design", desc: "Engineering & Shadow Analysis." },
            { step: "03", title: "Install", desc: "Procurement & Construction." },
            { step: "04", title: "Monitor", desc: "Grid Sync & AI Monitoring." },
        ]
    },
    "industrial": {
        type: "business-page", theme: "slate",
        title: "Solarica Industries", subtitle: "Pvt. Ltd.",
        tagline: "Powering Large Scale Manufacturing with industrial-scale solar production excellence.",
        icon: "fa-industry", bgIcon: "fa-gear",
        tableHeaders: ["Service", "Scope", "Output"],
        tableData: [
            { col1: "Utility Scale Parks", col2: "Grid Connected", col3: "MW Scale Power Generation" },
            { col1: "Factory Rooftop", col2: "Industrial Space", col3: "Maximize unused roof space" },
            { col1: "Hybrid Systems", col2: "BESS Integration", col3: "24/7 Power Supply" },
        ],
        capacityBuilding: [
            { title: "Utility-Scale Parks", icon: "fa-industry", text: "Developing massive solar farms (MW level) designed to feed the national grid directly." },
            { title: "Factory Rooftop", icon: "fa-building", text: "Maximize unused industrial roof space with high-durability mounting structures." },
            { title: "Hybrid Systems", icon: "fa-battery-full", text: "Combining solar PV with battery storage (BESS) for round-the-clock (RTC) renewable power." },
            { title: "Process Heat", icon: "fa-sun", text: "Using CSP or PV to generate high-temperature heat for manufacturing processes." }
        ],
        steps: [
            { step: "01", title: "Site Audit", desc: "Feasibility study." },
            { step: "02", title: "Design", desc: "Precision Engineering." },
            { step: "03", title: "Setup", desc: "Turnkey Installation." },
            { step: "04", title: "O&M", desc: "24/7 Tracking." },
        ]
    },
    "power-projects": {
        type: "business-page", theme: "purple",
        title: "Strategic Solar", subtitle: "Infrastructure",
        tagline: "Delivering end-to-end solar EPC excellence for Government, Industrial, and Private sectors across India.",
        icon: "fa-briefcase", bgIcon: "fa-landmark",
        tableHeaders: ["Sector", "Solution", "Application"],
        tableData: [
            { col1: "Utility Scale", col2: "Ground Mounted", col3: "Mega Solar Parks" },
            { col1: "Commercial", col2: "Rooftop / Carport", col3: "Malls, Hospitals, Hotels" },
            { col1: "Institutional", col2: "High Capacity", col3: "Universities, Govt Bldgs" },
        ],
        capacityBuilding: [
            { title: "Ground Mounted", icon: "fa-landmark", text: "We specialize in large-scale utility projects with maximum generation density." },
            { title: "Rooftop Solutions", icon: "fa-building", text: "Empowering industries with CAPEX & RESCO models for maximum ROI." },
            { title: "Floating Solar", icon: "fa-droplet", text: "Innovative water-based solar installations for reservoirs and canals." },
            { title: "Hybrid Systems", icon: "fa-battery-full", text: "Intelligent solar + storage combinations for grid stability." }
        ]
    }
};

// --- LOGIC TO BUILD PAGE ---
document.addEventListener("DOMContentLoaded", () => {
    // 1. Get the slug from the HTML body attribute
    const slug = document.body.getAttribute("data-slug");
    const data = schemesData[slug];

    if (!data) return; // Fail silently if no data matched

    // 2. Map Theme Colors
    let colors = {};
    switch(data.theme) {
        case 'green': colors = { text: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200', gradText: 'from-green-600 to-emerald-500', gradBg: 'from-green-600 to-emerald-700', highlight: 'text-green-700', lightBg: 'bg-green-50' }; break;
        case 'blue': colors = { text: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200', gradText: 'from-blue-600 to-cyan-500', gradBg: 'from-blue-600 to-blue-800', highlight: 'text-blue-700', lightBg: 'bg-blue-50' }; break;
        case 'purple': colors = { text: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-200', gradText: 'from-purple-600 to-violet-500', gradBg: 'from-purple-600 to-violet-800', highlight: 'text-purple-700', lightBg: 'bg-purple-50' }; break;
        case 'slate': colors = { text: 'text-slate-600', bg: 'bg-slate-100', border: 'border-slate-300', gradText: 'from-slate-700 to-slate-900', gradBg: 'from-slate-800 to-black', highlight: 'text-slate-700', lightBg: 'bg-slate-100' }; break;
        default: colors = { text: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200', gradText: 'from-orange-500 to-yellow-500', gradBg: 'from-orange-500 to-red-500', highlight: 'text-orange-700', lightBg: 'bg-orange-50' };
    }

    // Apply colors to body to allow CSS targeting
    document.body.className += ` ${colors.bg} theme-${data.theme}`;

    // 3. Inject Background Icon
    document.getElementById("bg-icon-container").innerHTML = `<i class="fa-solid ${data.bgIcon} ${colors.text}"></i>`;

    // 4. Inject Header
    const badgeType = data.type === 'govt-scheme' ? 'GOVT. INITIATIVE' : 'MISSION SOLARICA';
    document.getElementById("hero-header").innerHTML = `
        <span class="sec-badge ${colors.lightBg} border-${colors.border} ${colors.text}">
            <i class="fa-solid ${data.icon}"></i> ${badgeType}
        </span>
        <h1 class="hero-title">${data.title} <br>
            <span class="text-gradient ${colors.gradText}">${data.subtitle}</span>
        </h1>
        <p class="hero-desc">${data.tagline}</p>
        ${data.portalLink ? `<a href="${data.portalLink}" target="_blank" class="btn-gradient ${colors.gradBg}">Register Now <i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : ''}
    `;

    // 5. Inject Quote (If exists)
    if (data.quote) {
        let imgHtml = '';
        if (data.quote.image) {
            imgHtml = `<div class="quote-img-box"><img src="${data.quote.image}" alt="${data.quote.author}"></div>`;
        }
        
        document.getElementById("quote-section").innerHTML = `
            <div class="quote-card ${colors.gradBg}">
                <div class="quote-text-box">
                    <blockquote>"${data.quote.text}"</blockquote>
                    <p class="quote-author">${data.quote.author}</p>
                    <p class="quote-role">${data.quote.role}</p>
                </div>
                ${imgHtml}
            </div>
        `;
    }

    // 6. Inject Table Data
    if (data.tableData) {
        const tHead = data.tableHeaders.map(h => `<th>${h}</th>`).join('');
        const tBody = data.tableData.map(row => `
            <tr>
                <td class="font-bold">${row.col1}</td>
                <td class="font-bold ${colors.highlight}">${row.col2}</td>
                <td>${row.col3}</td>
            </tr>
        `).join('');

        document.getElementById("table-section").innerHTML = `
            <div class="table-container">
                <table>
                    <thead class="${colors.lightBg}"><tr>${tHead}</tr></thead>
                    <tbody>${tBody}</tbody>
                </table>
            </div>
        `;
    }

    // 7. Inject Steps
    if (data.steps) {
        const stepHtml = data.steps.map((s, i) => `
            <div class="step-card">
                <div class="step-bg-num">${s.step || `0${i+1}`}</div>
                <div class="step-icon ${colors.bg} ${colors.text}"><i class="fa-solid fa-circle-check"></i></div>
                <h3>${s.title}</h3>
                <p>${s.desc}</p>
            </div>
        `).join('');

        document.getElementById("steps-grid").innerHTML = stepHtml;
    }

    // 8. Inject Capacity / Portfolio
    if (data.capacityBuilding) {
        const capHtml = data.capacityBuilding.map(item => `
            <div class="cap-card">
                <h3 class="${colors.text}"><i class="fa-solid ${item.icon}"></i> ${item.title}</h3>
                <p>${item.text}</p>
            </div>
        `).join('');
        document.getElementById("capacity-grid").innerHTML = capHtml;
    }
});