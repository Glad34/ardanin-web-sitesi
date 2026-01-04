
async function loadComponents() {
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
                    el.appendChild(ns); s.remove();
                });
            }
        } catch (e) { console.error('Bileşen Hatası:', file); }
    }
}
window.onload = loadComponents;
