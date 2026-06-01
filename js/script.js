// Remove the 'navbarLoaded' wrapper here. We will just use standard DOMContentLoaded.
document.addEventListener("DOMContentLoaded", () => {

    // --- 1. INITIALIZE LENIS SMOOTH SCROLL ---
   // --- 1. INITIALIZE GLOBAL LENIS SMOOTH SCROLL ---
    window.lenis = new Lenis({
        lerp: 0.08,
        duration: 1.5,
        smoothWheel: true
    });
    function raf(time) {
        if (window.lenis) window.lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // --- 2. CUSTOM CURSOR PHYSICS ---
    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");
    
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    
    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Dot moves instantly
        if(dot) {
            dot.style.opacity = 1;
            dot.style.left = mouseX + "px";
            dot.style.top = mouseY + "px";
        }
        if(ring) ring.style.opacity = 1;
    });

    // Lerp function for the trailing ring
    function animateCursor() {
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;
        
        if(ring) {
            ring.style.left = ringX + "px";
            ring.style.top = ringY + "px";
        }
        requestAnimationFrame(animateCursor);
    }
    requestAnimationFrame(animateCursor);


    // --- 3. FETCH FOOTER ONLY (Navbar is handled by navbar.js now!) ---
   


    // --- 4. GSAP ANIMATIONS ---
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".hero-text-container", { opacity: 1, duration: 1 });
    gsap.from(".hero-title, .hero-subtitle", { y: 100, opacity: 0, duration: 1.2, ease: "power4.out" });
    gsap.to(".hero-buttons", { opacity: 1, y: 0, duration: 1, delay: 0.8 });

    gsap.to(".hero-bg-container", {
        yPercent: 50,
        ease: "none",
        scrollTrigger: {
            trigger: "#hero-section",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    gsap.to(".hero-text-container", {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
            trigger: "#hero-section",
            start: "top top",
            end: "center top",
            scrub: true
        }
    });

    // --- 5. MARQUEE STRIP ---
    const marqueeParts = document.querySelectorAll(".marquee-part");
    const slider = document.getElementById("marquee-slider");
    let xPercent = 0;
    let direction = -1;

    function animateMarquee() {
        if (xPercent < -100) xPercent = 0;
        else if (xPercent > 0) xPercent = -100;
        
        gsap.set(marqueeParts, { xPercent: xPercent });
        xPercent += 0.1 * direction; 
        requestAnimationFrame(animateMarquee);
    }
    requestAnimationFrame(animateMarquee);

    if(slider) {
        gsap.to(slider, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.25,
                start: 0,
                end: window.innerHeight,
                onUpdate: e => direction = e.direction * -1
            },
            x: "-=300px"
        });
    }

    // --- 6. PRODUCT AUTO SCROLL ---
    const prodContainer = document.getElementById("product-scroll-container");
    let isPaused = false;

    if (prodContainer) {
        prodContainer.addEventListener("mouseenter", () => isPaused = true);
        prodContainer.addEventListener("mouseleave", () => isPaused = false);

        setInterval(() => {
            if (!isPaused) {
                const itemWidth = prodContainer.children[0]?.clientWidth || 320;
                const scrollAmount = itemWidth + 32; 
                const maxScroll = prodContainer.scrollWidth - prodContainer.clientWidth;

                if (prodContainer.scrollLeft >= maxScroll - 10) {
                    prodContainer.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    prodContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }
            }
        }, 3000);

        const leftBtn = document.getElementById("btn-scroll-left");
        const rightBtn = document.getElementById("btn-scroll-right");

        if(leftBtn) leftBtn.addEventListener("click", () => {
            const itemWidth = prodContainer.children[0]?.clientWidth || 320;
            prodContainer.scrollBy({ left: -(itemWidth + 32), behavior: 'smooth' });
        });

        if(rightBtn) rightBtn.addEventListener("click", () => {
            const itemWidth = prodContainer.children[0]?.clientWidth || 320;
            prodContainer.scrollBy({ left: (itemWidth + 32), behavior: 'smooth' });
        });
    }

    // --- 7. PM SURYA GHAR SLIDER ---
    const suryaImages = document.querySelectorAll(".surya-img");
    let currentSuryaIndex = 0;

    if(suryaImages.length > 0) {
        setInterval(() => {
            suryaImages[currentSuryaIndex].classList.remove("active");
            currentSuryaIndex = (currentSuryaIndex + 1) % suryaImages.length;
            suryaImages[currentSuryaIndex].classList.add("active");
        }, 4000);
    }

    // --- 8. ECOSYSTEM ACCORDION ---
    const ecoCards = document.querySelectorAll(".eco-card");
    
    ecoCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            ecoCards.forEach(c => c.classList.remove("active"));
            card.classList.add("active");
        });
    });
});