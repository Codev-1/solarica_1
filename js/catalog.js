document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. CONFIGURATION & DATA MAPPING ---
    // We group your subcategories under the main company umbrellas
    const companyConfig = {
        "Solarica Energy India Pvt. Ltd.": {
            theme: "theme-orange",
            shortName: "Energy India",
            icon: "fa-bolt",
            subcategories: new Set()
        },
        "Solarica Systems Pvt. Ltd.": {
            theme: "theme-blue",
            shortName: "Systems",
            icon: "fa-gear",
            subcategories: new Set()
        },
        "Solarica Fabtech Pvt. Ltd.": {
            theme: "theme-purple",
            shortName: "Fabtech",
            icon: "fa-industry",
            subcategories: new Set()
        },
        "Solarica Greenwheels Pvt. Ltd.": {
            theme: "theme-green",
            shortName: "Greenwheels",
            icon: "fa-leaf",
            subcategories: new Set()
        }
    };

    // Auto-extract categories from database
    const allProductsArray = Object.entries(productDatabase).map(([slug, data]) => ({ slug, ...data }));
    
    allProductsArray.forEach(product => {
        if (companyConfig[product.company]) {
            companyConfig[product.company].subcategories.add(product.category);
        }
    });

    // --- 2. BUILD THE SIDEBAR ACCORDION ---
    const accordionContainer = document.getElementById("sidebar-accordion");
    accordionContainer.innerHTML = ""; // Clear loading text

    Object.values(companyConfig).forEach((config, index) => {
        if (config.subcategories.size === 0) return; // Skip if no products

        const isActive = index === 0 ? "active" : ""; // Open the first one by default

        let linksHtml = "";
        Array.from(config.subcategories).sort().forEach(subcat => {
            linksHtml += `<div class="sub-link" data-category="${subcat}">${subcat}</div>`;
        });

        const sectionHtml = `
            <div class="accordion-item ${isActive}">
                <button class="accordion-btn ${config.theme}">
                    ${config.shortName} <i class="fa-solid fa-chevron-right"></i>
                </button>
                <div class="subcategory-list">
                    ${linksHtml}
                </div>
            </div>
        `;
        accordionContainer.innerHTML += sectionHtml;
    });

    // --- 3. ACCORDION TOGGLE LOGIC ---
    const accordionBtns = document.querySelectorAll(".accordion-btn");
    accordionBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const parent = btn.parentElement;
            // Toggle active class
            parent.classList.toggle("active");
        });
    });

    // --- 4. FILTER & RENDER PRODUCTS LOGIC ---
    const productGrid = document.getElementById("product-grid");
    const emptyState = document.getElementById("empty-state");
    const catalogTitle = document.getElementById("catalog-title");
    const catalogCount = document.getElementById("catalog-count");
    const subLinks = document.querySelectorAll(".sub-link");

    // Function to render products
    function renderProducts(categoryName) {
        // Update Title
        const displayTitle = categoryName === "all" ? "All Products" : categoryName;
        catalogTitle.textContent = displayTitle;

        // Filter Array
        const filteredProducts = categoryName === "all" 
            ? allProductsArray 
            : allProductsArray.filter(p => p.category === categoryName);

        // Update Count
        catalogCount.textContent = `Showing ${filteredProducts.length} results`;

        // Clear Grid
        productGrid.innerHTML = "";

        if (filteredProducts.length === 0) {
            emptyState.classList.remove("hidden");
        } else {
            emptyState.classList.add("hidden");
            
            // Build Cards
            filteredProducts.forEach(product => {
                // Fix image path
                let imgPath = product.image.replace(/%20/g, " ");
                if(imgPath.startsWith('/')) imgPath = imgPath.substring(1);

                // Determine Series Tag
                let seriesName = "ENERGY SERIES";
                if(product.company.includes("Systems")) seriesName = "SYSTEMS SERIES";
                if(product.company.includes("Fabtech")) seriesName = "FABTECH SERIES";
                if(product.company.includes("Greenwheels")) seriesName = "EV SERIES";

                const cardHtml = `
                    <a href="product.html?slug=${product.slug}" class="cat-card">
                        <div class="badge-enquiry">ENQUIRY NOW</div>
                        <div class="cat-img-box">
                            <img src="assets/images/${imgPath}" alt="${product.name}">
                        </div>
                        <div class="cat-details">
                            <div class="cat-series">
                                <i class="fa-solid fa-bolt series-icon"></i> ${seriesName}
                            </div>
                            <h3 class="cat-title">${product.name}</h3>
                        </div>
                    </a>
                `;
                productGrid.innerHTML += cardHtml;
            });
        }

        // Update Active Link Styling in Sidebar
        subLinks.forEach(link => {
            if (link.getAttribute("data-category") === categoryName) {
                link.classList.add("active-link");
            } else {
                link.classList.remove("active-link");
            }
        });
    }

    // --- 5. INITIAL LOAD & CLICK LISTENERS ---
    
    // Check if URL has a category parameter (e.g. products.html?category=Solar+Panels)
    const urlParams = new URLSearchParams(window.location.search);
    const initialCategory = urlParams.get('category');

    if (initialCategory) {
        renderProducts(initialCategory);
        // Ensure accordion containing this link is open
        subLinks.forEach(link => {
            if (link.getAttribute("data-category") === initialCategory) {
                link.closest('.accordion-item').classList.add('active');
            }
        });
    } else {
        // If no parameter, show ALL products
        renderProducts("all");
    }

    // Handle clicks on sidebar links
    subLinks.forEach(link => {
        link.addEventListener("click", () => {
            const selectedCat = link.getAttribute("data-category");
            
            // Update URL without reloading page (for clean sharing)
            const newUrl = `${window.location.pathname}?category=${encodeURIComponent(selectedCat)}`;
            window.history.pushState({ path: newUrl }, '', newUrl);
            
            renderProducts(selectedCat);
            
            // Scroll to top of grid
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
});