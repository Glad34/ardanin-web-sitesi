
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
                scripts.forEach(oldScript => {
                    const newScript = document.createElement('script');
                    Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
                    newScript.appendChild(document.createTextNode(oldScript.innerHTML));
                    oldScript.parentNode.replaceChild(newScript, oldScript);
                });
            }
        } catch (e) { console.error('Bileşen Yüklenemedi:', file); }
    }
}
window.addEventListener('DOMContentLoaded', loadComponents);
