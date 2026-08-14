document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    
    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = 'var(--primary-color)';
            header.style.backdropFilter = 'none';
        }
    });

    // Form submission simulation
    const form = document.getElementById('ride-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const pickup = document.getElementById('pickup').value;
        const destination = document.getElementById('destination').value;
        
        const btn = document.getElementById('request-btn');
        const originalText = btn.innerText;
        
        btn.innerText = 'Calcul en cours...';
        btn.disabled = true;
        
        setTimeout(() => {
            btn.innerText = originalText;
            btn.disabled = false;
            alert(`Simulation : Prix estimé pour un trajet de ${pickup} à ${destination} est de 18€ - 24€.`);
        }, 1500);
    });
});
