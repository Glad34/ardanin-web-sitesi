document.addEventListener("DOMContentLoaded", () => {
    // 1. Modüler Bileşen Yükleyici
    const loadComponents = async () => {
        const componentPlaceholders = document.querySelectorAll('[data-component]');
        for (const placeholder of componentPlaceholders) {
            const componentPath = placeholder.getAttribute('data-component');
            try {
                const response = await fetch(componentPath);
                if (response.ok) {
                    const html = await response.text();
                    // placeholder'ı doğrudan component ile değiştirelim.
                    placeholder.outerHTML = html;
                } else {
                    console.error(`Bileşen yüklenemedi: ${componentPath}`);
                    placeholder.innerHTML = `<p style="color:red;">Hata: ${componentPath} yüklenemedi.</p>`;
                }
            } catch (error) {
                console.error(`Bileşen yüklenirken ağ hatası: ${componentPath}`, error);
            }
        }
    };

    // 2. Navigasyon ve diğer interaktif elementleri yönet
    const initializeScripts = () => {
        // Hamburger Menü İşlevselliği
        const hamburger = document.querySelector('.hamburger-menu');
        const menu = document.querySelector('.menu-items');

        if (hamburger && menu) {
            hamburger.addEventListener('click', () => {
                menu.classList.toggle('active');
                const isExpanded = menu.classList.contains('active');
                hamburger.setAttribute('aria-expanded', isExpanded);
            });
        }

        console.log("Tüm bileşenler yüklendi ve scriptler başlatıldı.");
    };

    // Ana fonksiyonları çalıştır
    loadComponents().then(() => {
        // Bileşenler DOM'a eklendikten sonra script'leri başlat
        initializeScripts();
    });
});