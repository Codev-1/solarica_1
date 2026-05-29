document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. AWARDS SLIDER LOGIC ---
    const slider = document.getElementById('awards-slider');
    const prevBtn = document.getElementById('award-prev');
    const nextBtn = document.getElementById('award-next');

    if (slider && prevBtn && nextBtn) {
        const scrollAmount = 400; // Match width of cards
        prevBtn.addEventListener('click', () => { slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' }); });
        nextBtn.addEventListener('click', () => { slider.scrollBy({ left: scrollAmount, behavior: 'smooth' }); });
    }

    // --- 2. AWARDS MODAL LOGIC ---
    const modal = document.getElementById('award-modal');
    const closeBtn = document.getElementById('close-modal');
    const awardCards = document.querySelectorAll('.award-card');

    if (modal && closeBtn) {
        awardCards.forEach(card => {
            card.addEventListener('click', () => {
                document.getElementById('modal-img').src = card.getAttribute('data-img');
                document.getElementById('modal-title').textContent = card.getAttribute('data-title');
                document.getElementById('modal-date').textContent = card.getAttribute('data-date');
                document.getElementById('modal-desc').textContent = card.getAttribute('data-desc');
                
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden'; 
            });
        });

        const closeModal = () => {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        };

        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => { if(e.target === modal) closeModal(); });
    }

    // --- 3. SCROLL REVEAL ANIMATIONS ---
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { root: null, threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

    revealElements.forEach(el => revealObserver.observe(el));
});