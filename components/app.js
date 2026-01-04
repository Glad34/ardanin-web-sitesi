// Bu dosya, loader.js tarafından bileşenler yüklendikten sonra çalışacak interaktif özellikleri içerir.

const initializeApp = () => {

    // 1. Kayan Menü (Sticky Header) - CSS ile halledildi (position: sticky)

    // 2. Mobil Hamburger Menü
    const hamburger = document.querySelector('[data-id="header_nav_hamburger"]');
    const navLinks = document.querySelector('[data-id="header_nav_links"]');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 3. Sayfa Kaydırma Animasyonu (Fade-in)
    const sections = document.querySelectorAll('.section');
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.15 // elementin %15'i göründüğünde tetikle
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Animasyon bir kez çalışsın
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
};

// Bileşenler yüklendiğinde uygulamayı başlat
document.addEventListener('componentsLoaded', initializeApp);