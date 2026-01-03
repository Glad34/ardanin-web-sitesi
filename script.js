document.addEventListener('DOMContentLoaded', () => {

    // Bu fonksiyon loader.js tüm bileşenleri yükledikten sonra çağrılır.
    // Bu yüzden DOM elementlerinin var olduğundan emin olabiliriz.
    const initApp = () => {

        // Hamburger Menu Logic
        const hamburger = document.querySelector('.hamburger-menu');
        const navMenu = document.querySelector('.main-nav ul');
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });

            document.querySelectorAll('.main-nav a').forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });
        }

        // Typewriter Effect Logic
        const typewriterElement = document.getElementById('typewriter');
        if (typewriterElement) {
            const text = typewriterElement.getAttribute('data-text');
            let i = 0;
            typewriterElement.innerHTML = ''; // Clear initial text
            function type() {
                if (i < text.length) {
                    typewriterElement.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, 100);
                }
            }
            type();
        }
    };

    // Loader.js asenkron çalıştığı için, script.js'in içindeki kodların
    // bileşenler yüklendikten sonra çalışmasını garantilemek için kısa bir gecikme ekleyebiliriz.
    // Daha sağlam bir yöntem, loader.js'den özel bir event tetiklemektir.
    // Şimdilik basit bir timeout kullanalım.
    setTimeout(initApp, 100); 

});