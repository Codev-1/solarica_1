document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Auto-Inject the Cursor HTML so you don't have to!
    const cursorDot = document.createElement("div");
    cursorDot.className = "custom-cursor-dot hidden-mobile";
    document.body.appendChild(cursorDot);

    const cursorRing = document.createElement("div");
    cursorRing.className = "custom-cursor-ring hidden-mobile";
    document.body.appendChild(cursorRing);

    // 2. Physics Variables
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let isVisible = false;
    
    // 3. Track Mouse Movement
    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Show cursor on first move
        if (!isVisible) {
            cursorDot.style.opacity = 1;
            cursorRing.style.opacity = 1;
            isVisible = true;
        }
        
        // Move the solid dot instantly (using transform for better performance)
        cursorDot.style.transform = `translate(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%))`;
    });

    // 4. Smooth Lerp Animation for the Ring
    function animateCursor() {
        // Math for the Framer Motion "Spring" effect
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;
        
        cursorRing.style.transform = `translate(calc(${ringX}px - 50%), calc(${ringY}px - 50%))`;
        requestAnimationFrame(animateCursor);
    }
    
    // Start loop
    requestAnimationFrame(animateCursor);
});