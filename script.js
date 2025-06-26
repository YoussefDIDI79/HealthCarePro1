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

    // Advanced scroll animations
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

    // Active navigation link highlighting with scroll
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

    // Enhanced typing animation for hero title
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
                    setTimeout(typeText1, 80);
                } else {
                    setTimeout(typeText2, 300);
                }
            }
            
            function typeText2() {
                if (j < text2.length) {
                    titleMain.textContent += text2.charAt(j);
                    j++;
                    setTimeout(typeText2, 80);
                }
            }
            
            setTimeout(typeText1, 800);
        }
    }

    // Add morphing text effects
    function addMorphingEffects() {
        const titleElements = document.querySelectorAll('.section-title');
        
        titleElements.forEach(title => {
            title.style.background = 'linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #10b981)';
            title.style.backgroundSize = '400% 400%';
            title.style.webkitBackgroundClip = 'text';
            title.style.webkitTextFillColor = 'transparent';
            title.style.animation = 'gradientShift 4s ease-in-out infinite';
        });
    }

    // Initialize parallax scrolling
    function initParallaxScrolling() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.hero-shapes, .shape');
            
            parallaxElements.forEach((element, index) => {
                const speed = 0.3 + (index * 0.1);
                const yPos = -(scrolled * speed);
                element.style.transform = `translate3d(0, ${yPos}px, 0)`;
            });
        });
    }

    // Create particle system
    function createParticleSystem() {
        const particleContainer = document.createElement('div');
        particleContainer.className = 'particle-system';
        particleContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
            overflow: hidden;
        `;
        
        document.body.appendChild(particleContainer);
        
        for (let i = 0; i < 50; i++) {
            createParticle(particleContainer);
        }
    }

    function createParticle(container) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 4 + 2;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 20;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 70%);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            animation: floatParticle ${duration}s linear ${delay}s infinite;
        `;
        
        container.appendChild(particle);
    }

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

    // Add ripple effect to interactive elements
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

    // Initialize all animations and effects
    typeWriter();
    addMorphingEffects();
    initParallaxScrolling();
    createParticleSystem();
    animateLanguageLevels();
    animateCounters();
    addRippleEffect();
    animateOnScroll();

    // Optimized scroll event listener
    window.addEventListener('scroll', debounce(() => {
        updateActiveNavLink();
        animateOnScroll();
    }, 10));

    // Add CSS for ripple effect and advanced animations
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

        /* Advanced scroll reveal animations */
        .animate-on-scroll {
            opacity: 0;
            transform: translateY(50px);
            transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .animate-on-scroll.animated {
            opacity: 1;
            transform: translateY(0);
        }

        /* Staggered animations */
        .quality-card:nth-child(1).animated { transition-delay: 0.1s; }
        .quality-card:nth-child(2).animated { transition-delay: 0.2s; }
        .quality-card:nth-child(3).animated { transition-delay: 0.3s; }
        .quality-card:nth-child(4).animated { transition-delay: 0.4s; }
        .quality-card:nth-child(5).animated { transition-delay: 0.5s; }
        .quality-card:nth-child(6).animated { transition-delay: 0.6s; }
        .quality-card:nth-child(7).animated { transition-delay: 0.7s; }
        .quality-card:nth-child(8).animated { transition-delay: 0.8s; }

        /* Magnetic hover effects */
        .magnetic {
            transition: transform 0.2s ease-out;
        }
    `;
    document.head.appendChild(style);

    // Add magnetic hover effect to cards
    document.querySelectorAll('.quality-card, .contact-card').forEach(card => {
        card.classList.add('magnetic');
        
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            card.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translate(0px, 0px) scale(1)';
        });
    });
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
        background: linear-gradient(135deg, #10b981, #059669);
        color: white;
        padding: 20px 25px;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
        z-index: 1001;
        font-weight: 600;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        animation: slideInNotification 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutNotification 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    }, 3000);
}

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

// Add notification animations
const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
    @keyframes slideInNotification {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutNotification {
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

// Loading animation with modern effects
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Add enhanced loading styles
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
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
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
            width: 60px;
            height: 60px;
            border: 4px solid rgba(59, 130, 246, 0.3);
            border-top: 4px solid #3b82f6;
            border-radius: 50%;
            animation: modernSpin 1s linear infinite;
            z-index: 10000;
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
        }
        
        @keyframes modernSpin {
            0% { 
                transform: translate(-50%, -50%) rotate(0deg);
                box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
            }
            50% {
                box-shadow: 0 0 50px rgba(139, 92, 246, 0.7);
            }
            100% { 
                transform: translate(-50%, -50%) rotate(360deg);
                box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
            }
        }
        
        body.loaded::before,
        body.loaded::after {
            display: none;
        }
    `;
    document.head.appendChild(loadingStyle);
});