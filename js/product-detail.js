document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Get the slug from the URL
    const pageName = window.location.pathname.split("/").pop();
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("slug") || pageName.replace(".html", "") || 'led-solar-street-light-30w';

    const product = productDatabase[slug];

    if (!product) {
        document.querySelector('.product-main').innerHTML = `
            <div class="container mx-auto flex flex-col items-center justify-center pt-24 pb-20">
                <div class="text-center p-8 bg-white rounded-[2rem] shadow-xl border border-slate-100 max-w-md mx-4">
                    <h1 class="text-2xl font-bold text-slate-900 mb-2">Details Coming Soon</h1>
                    <a href="../products.html" class="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-orange-600 transition-colors">
                        <i class="fa-solid fa-arrow-left"></i> Back to Catalog
                    </a>
                </div>
            </div>
        `;
        return;
    }

    // 2. SEO Friendly Updates (Dynamic Title & Meta)
    document.title = `${product.name} | Solarica Energy`;
    
    // Create dynamic meta description for SEO
    let metaDesc = document.querySelector('meta[name="description"]');
    if(!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = "description";
        document.head.appendChild(metaDesc);
    }
    metaDesc.content = product.description;

    // 3. Theme Logic
    let themeText, themeBg, themeBtn, themeGlow;
    const comp = product.company;
    
    if (comp.includes("Fabtech")) {
        themeText = "text-purple-600"; themeBg = "bg-purple-50"; themeBtn = "bg-purple-600 hover-bg-purple-700"; themeGlow = "bg-purple-500-10";
    } else if (comp.includes("Greenwheels")) {
        themeText = "text-emerald-600"; themeBg = "bg-emerald-50"; themeBtn = "bg-emerald-600 hover-bg-emerald-700"; themeGlow = "bg-emerald-500-10";
    } else if (comp.includes("Systems")) {
        themeText = "text-blue-600"; themeBg = "bg-blue-50"; themeBtn = "bg-blue-600 hover-bg-blue-700"; themeGlow = "bg-blue-500-10";
    } else {
        themeText = "text-orange-600"; themeBg = "bg-orange-50"; themeBtn = "bg-orange-600 hover-bg-orange-700"; themeGlow = "bg-orange-500-10";
    }

    // Apply Themes
    document.querySelectorAll('.theme-text').forEach(el => el.className += ` ${themeText}`);
    document.querySelectorAll('.theme-bg').forEach(el => el.className += ` ${themeBg}`);
    document.querySelectorAll('.theme-btn').forEach(el => el.className += ` ${themeBtn}`);
    document.getElementById('theme-glow').classList.add(themeGlow);

    // 4. Populate Data
    document.getElementById('product-category').textContent = product.category;
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-company').textContent = product.company;
    document.getElementById('product-desc').textContent = product.description;
    
    // === FIX IMAGE PATH ===
    // Remove the leading slash if it exists, replace %20 with space, and append to assets path
    let rawPath = product.image.replace(/%20/g, " ");
    if(rawPath.startsWith('/')) {
        rawPath = rawPath.substring(1);
    }
    document.getElementById('product-image').src = `../assets/images/${rawPath}`;

    // 5. Populate Features
    const featuresContainer = document.getElementById('product-features');
    product.features.forEach(feat => {
        featuresContainer.innerHTML += `
            <div class="feature-row">
                <div class="feature-icon ${themeBg} ${themeText}">
                    <i class="fa-solid fa-check text-xs"></i>
                </div>
                <span class="feature-text">${feat}</span>
            </div>
        `;
    });

    // 6. Icon Helper
    const getIconClass = (key) => {
        const k = key.toLowerCase();
        if (k.includes("power") || k.includes("watt") || k.includes("volt")) return "fa-bolt";
        if (k.includes("battery") || k.includes("backup")) return "fa-battery-full";
        if (k.includes("solar") || k.includes("panel") || k.includes("collector")) return "fa-sun";
        if (k.includes("water") || k.includes("flow") || k.includes("head") || k.includes("capacity")) return "fa-droplet";
        if (k.includes("temp") || k.includes("heat") || k.includes("tube") || k.includes("insulation")) return "fa-temperature-half";
        if (k.includes("lumen") || k.includes("led") || k.includes("light") || k.includes("color")) return "fa-lightbulb";
        if (k.includes("wifi") || k.includes("app") || k.includes("control")) return "fa-wifi";
        if (k.includes("warranty") || k.includes("material") || k.includes("stand")) return "fa-shield-halved";
        if (k.includes("design") || k.includes("pattern") || k.includes("shape") || k.includes("components")) return "fa-border-all";
        if (k.includes("thickness") || k.includes("size") || k.includes("length") || k.includes("span")) return "fa-layer-group";
        if (k.includes("mount") || k.includes("finish") || k.includes("type") || k.includes("work")) return "fa-wrench";
        if (k.includes("fabrication") || k.includes("welding")) return "fa-hammer";
        if (k.includes("fix") || k.includes("install")) return "fa-anchor";
        return "fa-box";
    };

    // 7. Populate Specifications
    const specsGrid = document.getElementById('specs-grid');
    
    Object.entries(product.specs).forEach(([key, value]) => {
        specsGrid.innerHTML += `
            <div class="spec-card group">
                <div class="spec-icon-box ${themeBg} ${themeText}">
                    <i class="fa-solid ${getIconClass(key)} text-xl"></i>
                </div>
                <h4 class="spec-label">${key}</h4>
                <p class="spec-value">${value}</p>
            </div>
        `;
    });

    if (product.basePrice) {
        specsGrid.innerHTML += `
            <div class="spec-card spec-card-orange group">
                <div class="spec-icon-box spec-icon-orange text-xl font-black">₹</div>
                <h4 class="spec-label">Base Price</h4>
                <p class="spec-value">${product.basePrice}</p>
            </div>
        `;
    }
    if (product.installation) {
        specsGrid.innerHTML += `
            <div class="spec-card spec-card-slate group">
                <div class="spec-icon-box spec-icon-slate"><i class="fa-solid fa-box text-xl"></i></div>
                <h4 class="spec-label">Installation</h4>
                <p class="spec-value">${product.installation}</p>
            </div>
        `;
    }
    if (product.warranty) {
        specsGrid.innerHTML += `
            <div class="spec-card spec-card-green group">
                <div class="spec-icon-box spec-icon-green"><i class="fa-solid fa-shield-halved text-xl"></i></div>
                <h4 class="spec-label">Warranty</h4>
                <p class="spec-value">${product.warranty}</p>
            </div>
        `;
    }
});
