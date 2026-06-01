document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Fetch and Inject Footer ---
    const footerPlaceholder = document.getElementById('footer-placeholder');
    
    if (footerPlaceholder) {
        fetch('footer.html')
            .then(res => {
                if (!res.ok) throw new Error("Footer file not found.");
                return res.text();
            })
            .then(data => {
                footerPlaceholder.innerHTML = data;
                initWhatsAppLogic(); // Bind WhatsApp events AFTER HTML loads
				 initScrollToTopLogic(); 
            })
            .catch(err => console.error(err));
    }

    // --- 2. Floating WhatsApp Toggle Logic ---
    function initWhatsAppLogic() {
        const waContainer = document.querySelector(".floating-wa-container");
        const waTrigger = document.getElementById("wa-trigger");
        const waDropdown = document.getElementById("wa-dropdown");

        if (waTrigger && waContainer && waDropdown) {
            waTrigger.addEventListener("click", () => {
                waContainer.classList.toggle("active");
                waDropdown.classList.toggle("active");
            });

            // Optional: Close dropdown if clicking outside
            document.addEventListener("click", (e) => {
                if (!waContainer.contains(e.target)) {
                    waContainer.classList.remove("active");
                    waDropdown.classList.remove("active");
                }
            });
        }
    }

    // --- 3. Custom Cursor Logic ---
    // (Ensure you have <div id="cursor-dot"></div> and <div id="cursor-ring"></div> in your index.html)
    const cursorDot = document.getElementById("cursor-dot");
    const cursorRing = document.getElementById("cursor-ring");
    
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let isVisible = false;
    
    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        if (!isVisible) {
            if (cursorDot) cursorDot.style.opacity = 1;
            if (cursorRing) cursorRing.style.opacity = 1;
            isVisible = true;
        }
        
        // Dot moves instantly without delay
        if (cursorDot) {
            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;
        }
    });

    // Lerp function for the trailing ring (replicates Framer Motion spring)
    function animateCursor() {
        // Linear Interpolation (Lerp) formula
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;
        
        if (cursorRing) {
            cursorRing.style.left = `${ringX}px`;
            cursorRing.style.top = `${ringY}px`;
        }
        requestAnimationFrame(animateCursor);
    }
    
    // Start animation loop if cursors exist
    if (cursorDot && cursorRing) {
        requestAnimationFrame(animateCursor);
    }


	// Ensure this code initializes after your footer fetch completion hook!
function initScrollToTopLogic() {
    const scrollToTopBtn = document.getElementById("scroll-to-top-btn");
    if (!scrollToTopBtn) return;

    // Standard Visibility Toggle function
    const handleToggle = (scrollPosition) => {
        if (scrollPosition > 400) {
            scrollToTopBtn.classList.add("is-visible");
        } else {
            scrollToTopBtn.classList.remove("is-visible");
        }
    };

    // 1. Fallback listener for standard pages (About, Products, etc.)
    window.addEventListener("scroll", () => {
        if (!window.lenis) {
            handleToggle(window.scrollY);
        }
    });

    // 2. Smart listener for the Index Page (Waits for Lenis engine to initialize)
    const checkLenisEngine = setInterval(() => {
        if (window.lenis) {
            window.lenis.on('scroll', (event) => {
                handleToggle(event.scroll); // Uses Lenis's precise scroll position tracking
            });
            clearInterval(checkLenisEngine); // Cleans up the interval loop once connected
        }
    }, 50);
    
    // Safety stop: Kill checking sequence after 3 seconds on standard layout pages
    setTimeout(() => clearInterval(checkLenisEngine), 3000);

    // 3. Click Handler — Prevents stutters by scrolling via Lenis when present
    scrollToTopBtn.addEventListener("click", () => {
        if (window.lenis) {
            window.lenis.scrollTo(0, { duration: 1.2 }); // Elegant smooth animation via Lenis
        } else {
            window.scrollTo({
                top: 0,
                behavior: "smooth" // Standard native fallback
            });
        }
    });
}

// REMINDER: Call initScrollToTopLogic() inside your theme template fetch sequence!
// Example insertion spot inside your fetch callback rule:
/*
    fetch('footer.html')
        .then(res => res.text())
        .then(data => {
            footerPlaceholder.innerHTML = data;
            initWhatsAppLogic();
            initScrollToTopLogic(); // <-- CALL IT RIGHT HERE!
        });
*/

});