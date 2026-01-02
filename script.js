document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');
            const icon = question.querySelector('i');

            // Close other open FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.querySelector('.faq-answer').style.maxHeight = null;
                    otherItem.querySelector('.faq-question i').classList.remove('fa-minus');
                    otherItem.querySelector('.faq-question i').classList.add('fa-plus');
                }
            });

            // Toggle the clicked item
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            }
        });
    });
});
