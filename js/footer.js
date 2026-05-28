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
});