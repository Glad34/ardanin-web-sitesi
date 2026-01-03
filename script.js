document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('typewriter-text');
    const textToType = "Arda İlci İzmir'deki Gayrimenkul Danışmanınız";
    let index = 0;
    const typingSpeed = 120; // Milisaniye cinsinden yazma hızı

    function typeWriter() {
        if (index < textToType.length) {
            textElement.innerHTML += textToType.charAt(index);
            index++;
            setTimeout(typeWriter, typingSpeed);
        }
    }

    // Sadece masaüstü ve tabletlerde daktilo efektini çalıştır
    if (window.innerWidth > 768) {
        // H1'i boşaltarak efekti başlat
        textElement.innerHTML = '';
        typeWriter();
    } else {
        // Mobil cihazlarda metni direkt göster
        textElement.innerHTML = textToType;
    }
});