document.addEventListener('DOMContentLoaded', function() {
    const typeWriterElement = document.getElementById('typewriter');
    if (typeWriterElement) {
        const text = "Arda İlci İzmir'deki Gayrimenkul Danışmanınız";
        let i = 0;
        const speed = 75; // milisaniye cinsinden yazma hızı

        function typeWriter() {
            if (i < text.length) {
                typeWriterElement.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }

        // Efekti küçük bir gecikmeyle başlat
        setTimeout(typeWriter, 500);
    }
});