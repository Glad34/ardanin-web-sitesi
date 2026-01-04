// MAIN JAVASCRIPT FOR COMPONENT LOADING AND ANIMATIONS

document.addEventListener('DOMContentLoaded', () => {
    // 1. Component Loader
    const loadComponents = async () => {
        const components = document.querySelectorAll('[data-component]');
        for (const component of components) {
            const path = component.getAttribute('data-component');
            try {
                const response = await fetch(path);
                if (!response.ok) throw new Error(`Component not found: ${path}`);
                const content = await response.text();
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = content;
                
                // Insert HTML
                component.innerHTML = tempDiv.querySelector('*:not(style):not(script)').outerHTML;

                // Append Style
                const style = tempDiv.querySelector('style');
                if (style) document.head.appendChild(style);

                // Append and execute Script
                const script = tempDiv.querySelector('script');
                if (script) {
                    const newScript = document.createElement('script');
                    newScript.textContent = script.textContent;
                    document.body.appendChild(newScript);
                }

            } catch (error) {
                console.error(`Error loading component: ${path}`, error);
                component.innerHTML = `<p style="color:red;">Error loading component: ${path}</p>`;
            }
        }
    };

    // 2. Scroll Animation (Fade-in)
    const setupScrollAnimations = () => {
        const sections = document.querySelectorAll('main > div');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const componentContainer = entry.target;
                    const actualSection = componentContainer.querySelector('.section');
                     if(actualSection) {
                        actualSection.classList.add('is-visible');
                        observer.unobserve(componentContainer);
                    }
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => {
            observer.observe(section);
        });
    };

    // Execute functions
    loadComponents().then(() => {
        setupScrollAnimations();
    });
});
