// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');

    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Active navigation link highlighting
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink);

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll animations
    function animateOnScroll() {
        const elements = document.querySelectorAll('.quality-card, .timeline-item, .center-card, .skill-item, .language-card, .contact-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('animate-on-scroll', 'animated');
            }
        });
    }

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load

    // Typing animation for hero title
    function typeWriter() {
        const titleHighlight = document.querySelector('.title-highlight');
        const titleMain = document.querySelector('.title-main');
        
        if (titleHighlight && titleMain) {
            const text1 = 'Soins Exceptionnels,';
            const text2 = 'Meilleurs Résultats';
            
            titleHighlight.textContent = '';
            titleMain.textContent = '';
            
            let i = 0;
            let j = 0;
            
            function typeText1() {
                if (i < text1.length) {
                    titleHighlight.textContent += text1.charAt(i);
                    i++;
                    setTimeout(typeText1, 100);
                } else {
                    setTimeout(typeText2, 500);
                }
            }
            
            function typeText2() {
                if (j < text2.length) {
                    titleMain.textContent += text2.charAt(j);
                    j++;
                    setTimeout(typeText2, 100);
                }
            }
            
            setTimeout(typeText1, 1000);
        }
    }

    // Initialize typing animation
    typeWriter();

    // Language level animations
    function animateLanguageLevels() {
        const levelBars = document.querySelectorAll('.level-bar');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const width = bar.classList.contains('level-native') ? '100%' :
                                 bar.classList.contains('level-fluent') ? '85%' : '60%';
                    
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 300);
                }
            });
        });
        
        levelBars.forEach(bar => {
            bar.style.width = '0%';
            observer.observe(bar);
        });
    }

    animateLanguageLevels();

    // Counter animation for stats
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-content h3');
        
        counters.forEach(counter => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = entry.target;
                        const text = target.textContent;
                        
                        if (text === '24/7') {
                            animateCounter(target, 0, 24, '/7', 100);
                        }
                        
                        observer.unobserve(target);
                    }
                });
            });
            
            observer.observe(counter);
        });
    }

    function animateCounter(element, start, end, suffix, duration) {
        let current = start;
        const increment = (end - start) / (duration / 10);
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
                element.textContent = end + suffix;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + suffix;
            }
        }, 10);
    }

    animateCounters();

    // Parallax effect for hero shapes
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.shape');
        
        shapes.forEach((shape, index) => {
            const speed = 0.5 + (index * 0.2);
            const yPos = -(scrolled * speed);
            shape.style.transform = `translateY(${yPos}px)`;
        });
    });

    // Form validation (if contact form is added later)
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Add ripple effect to buttons
    function addRippleEffect() {
        const buttons = document.querySelectorAll('.btn, .quality-card, .center-card, .contact-card');
        
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }

    addRippleEffect();

    // Add CSS for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .btn, .quality-card, .center-card, .contact-card {
            position: relative;
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);
});

// Utility functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

function downloadCV() {
    // Create a simple CV download functionality
    // In a real application, this would download an actual PDF file
    const cvContent = generateCVContent();
    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'CV_Moncif_CHERRADI.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    // Show download notification
    showNotification('CV téléchargé avec succès!');
}

function generateCVContent() {
    return `
CV - MONCIF CHERRADI
Infirmier Auxiliaire

CONTACT
Téléphone: 06.44.45.21.57
Email: moncifcherradi240@gmail.com
Adresse: 162 Partie 1 Lotissement Zaitouna, Khouribga

PROFIL
Les infirmiers auxiliaires administrent des soins infirmiers aux patients, 
habituellement sous la supervision des médecins, des infirmiers autorisés 
ou d'autres membres de l'équipe de santé.

FORMATION
2024 - Diplôme d'Infirmier Auxiliaire, École IFSI à Khouribga
Niveau Baccalauréat - Sciences de la vie et de la terre

EXPÉRIENCE
Stages à l'Hôpital Hassan II Khouribga:
- Service Médecine
- Service Chirurgie  
- Service Pédiatrie
- Service Urgences

Stages en Centres de Santé:
- Centre ZITOUNA
- Centre EL QODS
- Centre EL BRIK

COMPÉTENCES
- Analyser et retranscrire l'information
- Méthodique
- Adaptation à chaque patient
- Vigilance
- Pédagogie
- Excellent sens du relationnel
- Remise en question
- Veille informationnelle et scientifique

QUALITÉS PERSONNELLES
Rigueur, autonomie, dynamisme, esprit d'équipe, motivation, 
créativité, bon relationnel, passion

LANGUES
- Arabe: Langue maternelle
- Français: Courant
- Anglais: Niveau scolaire
    `.trim();
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        z-index: 1001;
        font-weight: 500;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add notification animations
const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyle);

// Contact functions
function callPhone() {
    window.location.href = 'tel:0644452157';
}

function sendEmail() {
    window.location.href = 'mailto:moncifcherradi240@gmail.com?subject=Contact depuis le CV';
}

// Performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll events
const optimizedScrollHandler = debounce(() => {
    updateActiveNavLink();
    animateOnScroll();
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// Loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Add loading styles
    const loadingStyle = document.createElement('style');
    loadingStyle.textContent = `
        body:not(.loaded) {
            overflow: hidden;
        }
        
        body:not(.loaded)::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        body:not(.loaded)::after {
            content: '';
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 50px;
            height: 50px;
            border: 3px solid rgba(255, 255, 255, 0.3);
            border-top: 3px solid white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            z-index: 10000;
        }
        
        @keyframes spin {
            0% { transform: translate(-50%, -50%) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        body.loaded::before,
        body.loaded::after {
            display: none;
        }
    `;
    document.head.appendChild(loadingStyle);
});
