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
                
                // CRITICAL FIX: Prevent the floating container box from acting like an invisible click-blocking wall
                const waContainer = document.querySelector(".floating-wa-container");
                if (waContainer) {
                    waContainer.style.pointerEvents = "none"; // Invisible wrapper box becomes completely click-through
                    
                    // Explicitly restore clicks ONLY on interactive elements inside it
                    const interactiveElements = waContainer.querySelectorAll(".wa-trigger, .wa-dropdown, a, button, i");
                    interactiveElements.forEach(el => el.style.pointerEvents = "auto");
                }

                initWhatsAppLogic(); // Bind WhatsApp events AFTER HTML loads
                initScrollToTopLogic(); // Bind Scroll-to-top events AFTER HTML loads
            })
            .catch(err => console.error(err));
    }

    // --- 2. Floating WhatsApp Toggle Logic ---
    function initWhatsAppLogic() {
    const waContainer = document.querySelector(".floating-wa-container");
    const waTrigger = document.getElementById("wa-trigger");
    const waDropdown = document.getElementById("wa-dropdown");

    if (waTrigger && waContainer && waDropdown) {
        waTrigger.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevents click from instantly bubbling up and triggering the document closer
            waContainer.classList.toggle("active");
            waDropdown.classList.toggle("active");
        });

        // --- NEW DETOUR LOGIC: Intercept all item clicks ---
        const waItems = waDropdown.querySelectorAll(".wa-item");
        waItems.forEach(item => {
            item.addEventListener("click", (e) => {
                e.preventDefault(); // STOP the browser from opening external wa.me links
                e.stopPropagation();

                // Find the department/role text label inside this specific row item
                const labelEl = item.querySelector(".wa-label");
                const targetDept = labelEl ? labelEl.textContent.trim() : "General";

                // Gracefully redirect the user to your main contact form with the topic query appended
                window.location.href = `contact.html?selectTopic=${encodeURIComponent(targetDept)}`;
            });
        });

        // Close dropdown if clicking anywhere else outside the widget area
        document.addEventListener("click", (e) => {
            if (!waContainer.contains(e.target)) {
                waContainer.classList.remove("active");
                waDropdown.classList.remove("active");
            }
        });
    }
}

    // --- 3. Custom Cursor Logic ---
    const cursorDot = document.getElementById("cursor-dot");
    const cursorRing = document.getElementById("cursor-ring");
    
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let isVisible = false;
    
    // CRITICAL FIX: Hard-enforce click-through properties directly via JS.
    // This stops the custom cursor elements from swallowing up your mouse clicks!
    if (cursorDot) cursorDot.style.pointerEvents = "none";
    if (cursorRing) cursorRing.style.pointerEvents = "none";
    
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

    // --- 4. Global Scroll to Top Logic ---
    function initScrollToTopLogic() {
        const scrollToTopBtn = document.getElementById("scroll-to-top-btn");
        if (!scrollToTopBtn) return;

        // Ensure the button explicitly catches click events
        scrollToTopBtn.style.pointerEvents = "auto";

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

        // 3. Click Handler — Scrolls via Lenis when present
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
});