document.addEventListener('DOMContentLoaded', () => {
    const components = document.querySelectorAll('[data-component]');

    components.forEach(component => {
        const path = component.dataset.component;
        fetch(path)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Bileşen yüklenemedi: ${path}`);
                }
                return response.text();
            })
            .then(html => {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = html;

                // Scriptleri bul ve çalıştır
                const scripts = tempDiv.querySelectorAll('script');
                scripts.forEach(oldScript => {
                    const newScript = document.createElement('script');
                    // Script içeriğini kopyala
                    if (oldScript.innerHTML) {
                        newScript.innerHTML = oldScript.innerHTML;
                    }
                    // Script src özelliğini kopyala (varsa)
                    if (oldScript.src) {
                        newScript.src = oldScript.src;
                    }
                    document.body.appendChild(newScript);
                    oldScript.remove(); // Orijinal scripti DOM'a eklemeden kaldır
                });
                
                // Kalan HTML'i (scriptler hariç) bileşenin yerine koy
                component.innerHTML = tempDiv.innerHTML;
            })
            .catch(error => {
                console.error('Bileşen yükleme hatası:', error);
                component.innerHTML = `<p style="color: red;">Hata: ${path} yüklenemedi.</p>`;
            });
    });
});