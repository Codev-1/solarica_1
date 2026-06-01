document.addEventListener("DOMContentLoaded", () => {
    
    const navPlaceholder = document.getElementById('navbar-placeholder');
    
   if (navPlaceholder) {
        fetch('navbar.html')
            .then(res => {
                if (!res.ok) throw new Error("Navbar file not found.");
                return res.text();
            })
            .then(data => {
                navPlaceholder.innerHTML = data;
                initNavbarLogic(); 
                
                // ADD THIS EXACT LINE RIGHT HERE:
                window.dispatchEvent(new Event('navbarLoaded'));
            })
            .catch(err => console.error(err));
    }

    function initNavbarLogic() {
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

        // Mobile Hamburger Button Logic
        if (mobileBtn && mobileMenu) {
            mobileBtn.addEventListener("click", () => {
                mobileMenu.classList.toggle("open");
                
                if (mobileMenu.classList.contains("open")) {
                    mobileIcon.classList.remove("fa-bars");
                    mobileIcon.classList.add("fa-xmark");
                } else {
                    mobileIcon.classList.remove("fa-xmark");
                    mobileIcon.classList.add("fa-bars");
                }
            });
        }

        // Mobile Dropdown Accordion Logic
        const mobileDropdownTriggers = document.querySelectorAll('.mobile-dropdown-trigger');
        
        mobileDropdownTriggers.forEach(trigger => {
            trigger.addEventListener("click", () => {
                const parentItem = trigger.parentElement;
                
                // Close other open accordions
                document.querySelectorAll('.mobile-item.has-mobile-dropdown').forEach(item => {
                    if (item !== parentItem) {
                        item.classList.remove('active');
                        item.querySelector('.mobile-dropdown-content').style.maxHeight = null;
                        item.querySelector('i.fa-chevron-down').style.transform = "rotate(0deg)";
                    }
                });

                // Toggle the clicked accordion
                parentItem.classList.toggle('active');
                const content = parentItem.querySelector('.mobile-dropdown-content');
                const icon = trigger.querySelector('i.fa-chevron-down');

                if (parentItem.classList.contains('active')) {
                    content.style.maxHeight = content.scrollHeight + "px";
                    icon.style.transform = "rotate(180deg)";
                } else {
                    content.style.maxHeight = null;
                    icon.style.transform = "rotate(0deg)";
                }
            });
        });
    }
});