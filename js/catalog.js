document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. EXTRACT DATA ---
    const allProductsArray = Object.entries(productDatabase).map(([slug, data]) => ({ slug, ...data }));

    // --- 2. ACCORDION TOGGLE LOGIC ---
    const accordionBtns = document.querySelectorAll(".accordion-btn");
    accordionBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const parent = btn.parentElement;
            
            // Optional: Close other accordions when one opens
            document.querySelectorAll(".accordion-item").forEach(item => {
                if(item !== parent) {
                    item.classList.remove("active");
                    item.querySelector('.subcategory-list').style.maxHeight = null;
                }
            });

            // Toggle active class on clicked item
            parent.classList.toggle("active");
            const subList = parent.querySelector('.subcategory-list');
            if (parent.classList.contains('active')) {
                subList.style.maxHeight = subList.scrollHeight + "px";
            } else {
                subList.style.maxHeight = null;
            }
        });
    });

    // Initialize the first accordion as open
    const firstList = document.querySelector('.accordion-item.active .subcategory-list');
    if(firstList) firstList.style.maxHeight = firstList.scrollHeight + "px";

    // --- 3. FILTER & RENDER PRODUCTS LOGIC ---
    const productGrid = document.getElementById("product-grid");
    const emptyState = document.getElementById("empty-state");
    const catalogTitle = document.getElementById("catalog-title");
    const catalogCount = document.getElementById("catalog-count");
    const subLinks = document.querySelectorAll(".sub-link[data-category]");

    function renderProducts(categoryName, displayName = null) {
        if (!productGrid || !emptyState || !catalogTitle || !catalogCount) return;

        // Update Title (Use displayName if provided, else use raw categoryName)
        catalogTitle.textContent = displayName || (categoryName === "all" ? "All Products" : categoryName);

        // Filter Array
        const filteredProducts = categoryName === "all" 
            ? allProductsArray 
            : allProductsArray.filter(p => p.category.toLowerCase() === categoryName.toLowerCase());

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
                let imgPath = product.image.replace(/%20/g, " ");
                if(imgPath.startsWith('/')) imgPath = imgPath.substring(1);
                if(!imgPath.includes("assets/images/")) imgPath = `assets/images/${imgPath}`;

                let seriesName = "ENERGY SERIES";
                if(product.company.includes("Systems")) seriesName = "SYSTEMS SERIES";
                if(product.company.includes("Fabtech")) seriesName = "FABTECH SERIES";
                if(product.company.includes("Greenwheels")) seriesName = "EV SERIES";

                let themeColorClass = "bg-orange-500"; let lightBgClass = "bg-orange-50";
                if(product.company.includes("Systems")) { themeColorClass = "bg-blue-500"; lightBgClass = "bg-blue-50"; }
                if(product.company.includes("Fabtech")) { themeColorClass = "bg-purple-500"; lightBgClass = "bg-purple-50"; }
                if(product.company.includes("Greenwheels")) { themeColorClass = "bg-green-500"; lightBgClass = "bg-green-50"; }

                let quickSpecHtml = '';
                if(product.specs && Object.keys(product.specs).length > 0) {
                    const firstSpecKey = Object.keys(product.specs)[0];
                    const firstSpecValue = product.specs[firstSpecKey];
                    quickSpecHtml = `<span class="quick-spec">${firstSpecKey}: ${firstSpecValue}</span>`;
                }

                const cardHtml = `
                    <a href="${encodeURIComponent(product.slug)}.html" class="cat-card group">
                        <div class="badge-enquiry ${themeColorClass}">ENQUIRY NOW</div>
                        <div class="cat-img-box ${lightBgClass}">
                            <div class="img-glow ${themeColorClass}"></div>
                            <img src="${imgPath}" alt="${product.name}">
                        </div>
                        <div class="cat-details">
                            <div class="cat-series">
                                <i class="fa-solid fa-bolt text-yellow-500"></i> ${seriesName}
                            </div>
                            <h3 class="cat-title">${product.name}</h3>
                            ${quickSpecHtml}
                        </div>
                        <div class="hover-arrow ${themeColorClass}">
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </a>
                `;
                productGrid.innerHTML += cardHtml;
            });
        }

        // Update Active Styling in Sidebar
        subLinks.forEach(link => {
            if (link.getAttribute("data-category").toLowerCase() === categoryName.toLowerCase()) {
                link.classList.add("active-link");
            } else {
                link.classList.remove("active-link");
            }
        });
    }

    // --- 4. INITIAL LOAD & CLICK LISTENERS ---
    
    // Check URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const initialCategory = urlParams.get('category');

    if (initialCategory) {
        // Try to find the display name in the sidebar
        let displayName = initialCategory;
        subLinks.forEach(link => {
            if (link.getAttribute("data-category").toLowerCase() === initialCategory.toLowerCase()) {
                displayName = link.textContent;
                link.closest('.accordion-item').classList.add('active');
                const subList = link.closest('.subcategory-list');
                subList.style.maxHeight = subList.scrollHeight + "px";
            }
        });
        renderProducts(initialCategory, displayName);
    } else {
        renderProducts("all");
    }

    // Handle clicks on sidebar links
    subLinks.forEach(link => {
        link.addEventListener("click", () => {
            const selectedCat = link.getAttribute("data-category");
            const displayName = link.textContent;
            
            const newUrl = `${window.location.pathname}?category=${encodeURIComponent(selectedCat)}`;
            window.history.pushState({ path: newUrl }, '', newUrl);
            
            renderProducts(selectedCat, displayName);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
});
