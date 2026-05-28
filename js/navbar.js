document.addEventListener("DOMContentLoaded", () => {
    
    const navPlaceholder = document.getElementById('navbar-placeholder');
    
    if (navPlaceholder) {
        fetch('navbar.html')
            .then(res => {
                if (!res.ok) throw new Error("Navbar file not found.");
                return res.text();
            })
            .then(data => {
                // 1. Inject the HTML first
                navPlaceholder.innerHTML = data;
                
                // 2. NOW bind the events for scroll and mobile menu
                initNavbarLogic(); 
            })
            .catch(err => console.error(err));
    }

    function initNavbarLogic() {
        // Elements
        const topBar = document.getElementById("nav-top-bar");
        const mainHeader = document.getElementById("nav-main-header");
        const logoContainer = document.getElementById("nav-logo");
        
        const mobileBtn = document.getElementById("mobile-menu-btn");
        const mobileIcon = document.getElementById("mobile-icon");
        const mobileMenu = document.getElementById("mobile-menu");

        // Scroll Shrink Logic
        window.addEventListener("scroll", () => {
            if (window.scrollY > 20) {
                if(topBar) topBar.classList.add("scrolled");
                if(mainHeader) mainHeader.classList.add("scrolled");
                if(logoContainer) logoContainer.classList.add("scrolled");
            } else {
                if(topBar) topBar.classList.remove("scrolled");
                if(mainHeader) mainHeader.classList.remove("scrolled");
                if(logoContainer) logoContainer.classList.remove("scrolled");
            }
        });

        // Mobile Menu Button Logic
        if (mobileBtn && mobileMenu) {
            mobileBtn.addEventListener("click", () => {
                mobileMenu.classList.toggle("open");
                
                // Change Hamburger icon to X
                if (mobileMenu.classList.contains("open")) {
                    mobileIcon.classList.remove("fa-bars");
                    mobileIcon.classList.add("fa-xmark");
                } else {
                    mobileIcon.classList.remove("fa-xmark");
                    mobileIcon.classList.add("fa-bars");
                }
            });
        }
    }
});