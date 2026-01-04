
async function loadComponents() {
    const elements = document.querySelectorAll('[data-component]');
    for (const el of elements) {
        const file = el.getAttribute('data-component');
        try {
            const response = await fetch(file);
            if (response.ok) {
                const html = await response.text();
                el.innerHTML = html;
                // Scriptleri yeniden oluşturup enjekte et (Hamburger menü vb. çalışması için)
                const scripts = el.querySelectorAll('script');
                scripts.forEach(oldScript => {
                    const newScript = document.createElement('script');
                    Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
                    newScript.appendChild(document.createTextNode(oldScript.innerHTML));
                    document.body.appendChild(newScript);
                    oldScript.remove();
                });
            }
        } catch (e) { console.error('Bileşen Hatası:', file, e); }
    }
}
window.addEventListener('DOMContentLoaded', loadComponents);
