
async function loadComponents() {
    console.log("Bileşen yükleyici başlatıldı...");
    const elements = document.querySelectorAll('[data-component]');
    for (const el of elements) {
        const file = el.getAttribute('data-component');
        console.log("Yükleniyor:", file);
        try {
            const response = await fetch(file);
            if (response.ok) {
                const html = await response.text();
                el.innerHTML = html;
                const scripts = el.querySelectorAll('script');
                scripts.forEach(oldScript => {
                    const newScript = document.createElement('script');
                    Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
                    newScript.appendChild(document.createTextNode(oldScript.innerHTML));
                    oldScript.parentNode.replaceChild(newScript, oldScript);
                });
            } else { console.error("Dosya bulunamadı:", file); }
        } catch (e) { console.error("Yükleme hatası:", file, e); }
    }
}
window.onload = loadComponents;
