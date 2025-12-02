// Prosta aplikacja JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Obsługa przycisku CTA
    const ctaButton = document.getElementById('cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Obsługa formularza kontaktowego
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Prosta walidacja
            if (name && email && message) {
                alert('Dziękujemy za wiadomość, ' + name + '! Skontaktujemy się z Tobą wkrótce.');
                contactForm.reset();
            }
        });
    }

    // Płynne przewijanie dla linków nawigacyjnych
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
