
async function loadComponents() {
    console.log("Bileşenler yükleniyor...");
    const elements = document.querySelectorAll('[data-component]');
    for (const el of elements) {
        const file = el.getAttribute('data-component');
        try {
            const response = await fetch(file);
            if (response.ok) {
                const html = await response.text();
                el.innerHTML = html;
                const scripts = el.querySelectorAll('script');
                scripts.forEach(s => {
                    const ns = document.createElement('script');
                    Array.from(s.attributes).forEach(a => ns.setAttribute(a.name, a.value));
                    ns.appendChild(document.createTextNode(s.innerHTML));
                    document.body.appendChild(ns); s.remove();
                });
            }
        } catch (e) { console.error('Hata:', file, e); }
    }
}
window.addEventListener('DOMContentLoaded', loadComponents);
