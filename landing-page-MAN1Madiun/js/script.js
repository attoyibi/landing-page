document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Scroll Animation for Stats Counter
    const stats = document.querySelectorAll('.counter');
    let hasAnimated = false;

    const animateStats = () => {
        stats.forEach(stat => {
            const target = +stat.getAttribute('data-target');
            const speed = 200; // Lower is faster
            const increment = target / speed;

            const updateCount = () => {
                const count = +stat.innerText;
                if (count < target) {
                    stat.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 20);
                } else {
                    stat.innerText = target;
                }
            };
            updateCount();
        });
    };

    // Intersection Observer to trigger animation when section is in view
    const statsSection = document.querySelector('.stats-area');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimated) {
                    animateStats();
                    hasAnimated = true;
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(statsSection);
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
                
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
