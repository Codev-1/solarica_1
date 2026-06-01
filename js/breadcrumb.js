document.addEventListener("DOMContentLoaded", () => {
    const breadcrumbList = document.getElementById("breadcrumb-list");
    if (!breadcrumbList) return;

    // 1. Map ugly file endpoints to beautiful client-facing display titles
    const pageMap = {
        "index.html": "Home",
        "products.html": "Catalog",
        "product.html": "Product Details",
        "we-solarica.html": "We Solarica",
        "our-journey.html": "Our Journey",
        "our-companies.html": "Our Companies",
        "leadership.html": "Board of Directors",
        "awards.html": "Awards & Certifications",
        "pm-surya-ghar.html": "PM Surya Ghar Yojana",
        "kusum-yojana.html": "KUSUM Yojana",
        "saur-krushi-pump.html": "Saur Krushi Pump Yojana",
        "commercial-projects.html": "Commercial Setups",
        "industrial-projects.html": "Industrial Setups",
        "power-projects.html": "Power Projects",
        "contact.html": "Contact Us",
        "careers.html": "Careers"
    };

    // 2. Parse the current browser navigation details
    const pathName = window.location.pathname;
    const pageFile = pathName.substring(pathName.lastIndexOf('/') + 1) || "index.html";
    const urlParams = new URLSearchParams(window.location.search);
    
    // 3. Always plant the root "Home" anchor link first
    let breadcrumbHtml = `<li class="breadcrumb-item"><a href="index.html">Home</a></li>`;

    // 4. Build custom paths based on what page your user is looking at
    if (pageFile !== "index.html") {
        
        // CASE A: User is inside the Filtered Catalog view
        if (pageFile === "products.html") {
            const categoryParam = urlParams.get("category");
            if (categoryParam) {
                // If a category filter parameter exists, provide a link back to the full catalog first
                breadcrumbHtml += `<li class="breadcrumb-item"><a href="products.html">Catalog</a></li>`;
                breadcrumbHtml += `<li class="breadcrumb-item active">${decodeURIComponent(categoryParam)}</li>`;
            } else {
                breadcrumbHtml += `<li class="breadcrumb-item active">Catalog</li>`;
            }
        } 
        
        // CASE B: User is examining a specific individual Product Detail card
        else if (pageFile === "product.html") {
            breadcrumbHtml += `<li class="breadcrumb-item"><a href="products.html">Catalog</a></li>`;
            
            // Attempt to dynamically match the item name using the slug parameter from your database
            const slugParam = urlParams.get("slug");
            if (slugParam && typeof productDatabase !== 'undefined' && productDatabase[slugParam]) {
                breadcrumbHtml += `<li class="breadcrumb-item active">${productDatabase[slugParam].name}</li>`;
            } else {
                breadcrumbHtml += `<li class="breadcrumb-item active">Product Specs</li>`;
            }
        } 
        
        // CASE C: Standard internal landing sub-pages
        else {
            const displayTitle = pageMap[pageFile] || pageFile.replace(".html", "").replace("-", " ");
            breadcrumbHtml += `<li class="breadcrumb-item active">${displayTitle}</li>`;
        }
    }

    // 5. Build layout nodes onto document canvas DOM tree
    breadcrumbList.innerHTML = breadcrumbHtml;
});