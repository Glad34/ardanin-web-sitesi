
async function loadComponents() {
    console.log("Mimar Loader: Bileşenler aranıyor...");
    const elements = document.querySelectorAll('[data-component]');
    for (const el of elements) {
        const file = el.getAttribute('data-component');
        console.log("Yükleniyor: " + file);
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
                    document.body.appendChild(newScript);
                    oldScript.remove();
                });
            } else { console.error("Hata: Dosya bulunamadı -> " + file); }
        } catch (e) { console.error("Yükleme hatası: " + file, e); }
    }
}
window.addEventListener('DOMContentLoaded', loadComponents);
