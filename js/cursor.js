document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Auto-Inject Cursor markup with backward-compatible IDs and Classes
    const cursorDot = document.createElement("div");
    cursorDot.id = "cursor-dot"; // Added ID for style sheet tracking
    cursorDot.className = "custom-cursor-dot hidden-mobile";
    document.body.appendChild(cursorDot);

    const cursorRing = document.createElement("div");
    cursorRing.id = "cursor-ring"; // Added ID for style sheet tracking
    cursorRing.className = "custom-cursor-ring hidden-mobile";
    document.body.appendChild(cursorRing);

    // 2. Physics & State Variables
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let isVisible = false;
    
    // 3. Track Mouse Movement Vectors
    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Handle first-move fade-in initialization state
        if (!isVisible) {
            cursorDot.style.opacity = "1";
            cursorRing.style.opacity = "1";
            isVisible = true;
        }
        
        // PERFORMANCE BOOST: Replaced 'calc()' string parsing with direct 3D Hardware Translation
        cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    });

    // 4. Smooth Lerp Animation for the Ring Track (Framer Motion emulation)
    function animateCursor() {
        // LERP Equation physics matrix calculations
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;
        
        // PERFORMANCE BOOST: Invokes GPU acceleration instead of layout thrashing
        cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
        
        requestAnimationFrame(animateCursor);
    }
    
    // Run the continuous rendering physics loop
    requestAnimationFrame(animateCursor);

    // 5. WINDOW BOUNDARY VISIBILITY TIMERS
    // Automatically hides the elements when the cursor steps outside browser canvas area
    document.addEventListener("mouseleave", () => {
        cursorDot.style.opacity = "0";
        cursorRing.style.opacity = "0";
        isVisible = false;
    });

    document.addEventListener("mouseenter", () => {
        cursorDot.style.opacity = "1";
        cursorRing.style.opacity = "1";
        isVisible = true;
    });
});