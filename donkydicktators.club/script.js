
// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Image Slider Functionality
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Show current slide
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
}

function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex);
}

function changeSlide(direction) {
    if (direction === 1) {
        nextSlide();
    } else {
        prevSlide();
    }
}

function currentSlide(index) {
    currentSlideIndex = index - 1;
    showSlide(currentSlideIndex);
}

// Auto-play slider
setInterval(nextSlide, 5000);

// Copy Contract Address
function copyContract() {
    const contractAddress = '0x7a1cacA1A79f6FA6Fe92a2caC28a81d28F881ab6';
    navigator.clipboard.writeText(contractAddress).then(() => {
        const copyBtn = document.querySelector('.copy-btn');
        const originalHTML = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i>';
        copyBtn.style.background = '#4CAF50';
        
        setTimeout(() => {
            copyBtn.innerHTML = originalHTML;
            copyBtn.style.background = '#ffd93d';
        }, 2000);
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'linear-gradient(135deg, rgba(102, 126, 234, 0.98) 0%, rgba(118, 75, 162, 0.98) 50%, rgba(255, 107, 107, 0.98) 100%)';
        navbar.style.boxShadow = '0 6px 25px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 50%, rgba(255, 107, 107, 0.95) 100%)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
    }
});

// Add scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.about-card, .timeline-item, .social-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add some interactive effects
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add floating animation to elements
function createFloatingEffect() {
    const floatingElements = document.querySelectorAll('.float-coin');
    floatingElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 2}s`;
        element.style.animationDuration = `${6 + Math.random() * 4}s`;
    });
}

// Initialize floating effects
createFloatingEffect();

// Add particle effect (optional enhancement)
function createParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.background = '#ffd93d';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '999';
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = window.innerHeight + 'px';
    particle.style.opacity = '0.7';
    
    document.body.appendChild(particle);
    
    const animation = particle.animate([
        { transform: 'translateY(0px)', opacity: 0.7 },
        { transform: `translateY(-${window.innerHeight + 100}px)`, opacity: 0 }
    ], {
        duration: 3000 + Math.random() * 2000,
        easing: 'ease-out'
    });
    
    animation.onfinish = () => particle.remove();
}

// Create particles occasionally
setInterval(createParticle, 2000);

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add interactive timeline effects
document.querySelectorAll('.timeline-item').forEach((item, index) => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
        const content = this.querySelector('.timeline-content');
        content.style.borderColor = '#ffd93d';
        content.style.boxShadow = '0 25px 70px rgba(0, 0, 0, 0.4), 0 0 50px rgba(255, 217, 61, 0.4)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        const content = this.querySelector('.timeline-content');
        content.style.borderColor = 'rgba(255, 217, 61, 0.3)';
        content.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.2), inset 0 1px 10px rgba(255, 255, 255, 0.1)';
    });
});

// Add click effects to timeline dates
document.querySelectorAll('.timeline-date').forEach(date => {
    date.addEventListener('click', function() {
        this.style.animation = 'pulse 0.5s ease-in-out';
        setTimeout(() => {
            this.style.animation = 'dateFloat 4s ease-in-out infinite';
        }, 500);
    });
});

// Enhanced social card interactions
document.querySelectorAll('.social-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const icon = this.querySelector('i');
        icon.style.animation = 'iconBounce 0.6s ease-out';
        
        // Create floating hearts effect
        createFloatingHearts(this);
    });
});

function createFloatingHearts(element) {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '💖';
            heart.style.position = 'absolute';
            heart.style.fontSize = '0.8rem';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '1000';
            heart.style.opacity = '0.8';
            
            const rect = element.getBoundingClientRect();
            heart.style.left = (rect.left + Math.random() * rect.width) + 'px';
            heart.style.top = rect.top + 'px';
            
            document.body.appendChild(heart);
            
            const animation = heart.animate([
                { transform: 'translateY(0px)', opacity: 0.8 },
                { transform: 'translateY(-50px)', opacity: 0 }
            ], {
                duration: 1500,
                easing: 'ease-out'
            });
            
            animation.onfinish = () => heart.remove();
        }, i * 200);
    }
}

// Add rainbow effect to buttons on click
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        if (!this.href || this.href.startsWith('#')) {
            e.preventDefault();
        }
        
        this.style.animation = 'rainbow 1s linear, pulse 0.5s ease-out';
        setTimeout(() => {
            this.style.animation = 'pulse 3s ease-in-out infinite';
        }, 1000);
    });
});

// Enhanced particle effects with emojis
function createEmojiParticle() {
    const emojis = ['🚀', '💎', '🐴', '💰', '⭐', '🎯', '🔥', '💫'];
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    
    const particle = document.createElement('div');
    particle.innerHTML = emoji;
    particle.style.position = 'fixed';
    particle.style.fontSize = '1.5rem';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '999';
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = window.innerHeight + 'px';
    particle.style.opacity = '0.6';
    
    document.body.appendChild(particle);
    
    const animation = particle.animate([
        { 
            transform: 'translateY(0px) rotate(0deg)', 
            opacity: 0.6 
        },
        { 
            transform: `translateY(-${window.innerHeight + 100}px) rotate(360deg)`, 
            opacity: 0 
        }
    ], {
        duration: 4000 + Math.random() * 3000,
        easing: 'ease-out'
    });
    
    animation.onfinish = () => particle.remove();
}

// Create emoji particles more frequently
setInterval(createEmojiParticle, 1500);

// Add mousemove parallax effect
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    document.querySelectorAll('.float-coin').forEach((coin, index) => {
        const speed = (index + 1) * 0.02;
        const x = mouseX * speed * 50;
        const y = mouseY * speed * 50;
        coin.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Add scroll-triggered animations for timeline
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'bounceInTimeline 0.8s ease-out';
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.timeline-item').forEach(item => {
    timelineObserver.observe(item);
});

// Add celebration effect when reaching certain sections
const celebrationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            createCelebration();
        }
    });
}, { threshold: 0.5 });

const communitySection = document.querySelector('.community-section');
if (communitySection) {
    celebrationObserver.observe(communitySection);
}

function createCelebration() {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            createEmojiParticle();
        }, i * 100);
    }
}

// Add interactive tokenomics effects
document.querySelectorAll('.distribution-item').forEach((item, index) => {
    item.addEventListener('mouseenter', function() {
        const percentage = this.querySelector('.percentage');
        percentage.style.animation = 'percentagePulse 0.5s ease-out, rainbow 2s linear infinite';
        
        // Create coin rain effect
        createCoinRain(this);
    });
    
    item.addEventListener('mouseleave', function() {
        const percentage = this.querySelector('.percentage');
        percentage.style.animation = 'percentagePulse 2s ease-in-out infinite';
    });
});

function createCoinRain(element) {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const coin = document.createElement('div');
            coin.innerHTML = '🪙';
            coin.style.position = 'absolute';
            coin.style.fontSize = '1.2rem';
            coin.style.pointerEvents = 'none';
            coin.style.zIndex = '1000';
            coin.style.opacity = '0.8';
            
            const rect = element.getBoundingClientRect();
            coin.style.left = (rect.left + Math.random() * rect.width) + 'px';
            coin.style.top = rect.top + 'px';
            
            document.body.appendChild(coin);
            
            const animation = coin.animate([
                { 
                    transform: 'translateY(0px) rotate(0deg)', 
                    opacity: 0.8 
                },
                { 
                    transform: 'translateY(100px) rotate(360deg)', 
                    opacity: 0 
                }
            ], {
                duration: 1500,
                easing: 'ease-out'
            });
            
            animation.onfinish = () => coin.remove();
        }, i * 150);
    }
}

// Add click effect to pie chart
const pieChart = document.querySelector('.pie-chart');
if (pieChart) {
    pieChart.addEventListener('click', function() {
        this.style.animation = 'chartSpin 2s linear, pulse 1s ease-out';
        
        // Create explosion effect
        createChartExplosion(this);
        
        setTimeout(() => {
            this.style.animation = 'chartSpin 15s linear infinite';
        }, 2000);
    });
}

function createChartExplosion(element) {
    const emojis = ['💰', '💎', '🚀', '⭐', '🎯', '🔥'];
    
    for (let i = 0; i < 8; i++) {
        const emoji = document.createElement('div');
        emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.position = 'absolute';
        emoji.style.fontSize = '1.5rem';
        emoji.style.pointerEvents = 'none';
        emoji.style.zIndex = '1000';
        
        const rect = element.getBoundingClientRect();
        emoji.style.left = (rect.left + rect.width / 2) + 'px';
        emoji.style.top = (rect.top + rect.height / 2) + 'px';
        
        document.body.appendChild(emoji);
        
        const angle = (i / 8) * 2 * Math.PI;
        const distance = 100;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        const animation = emoji.animate([
            { 
                transform: 'translate(0px, 0px) scale(0)',
                opacity: 1
            },
            { 
                transform: `translate(${x}px, ${y}px) scale(1)`,
                opacity: 0
            }
        ], {
            duration: 1500,
            easing: 'ease-out'
        });
        
        animation.onfinish = () => emoji.remove();
    }
}

// Enhanced footer interactions
document.querySelectorAll('.footer-section').forEach((section, index) => {
    section.addEventListener('mouseenter', function() {
        this.style.animation = 'footerSectionFloat 1s ease-out, footerGlow 2s ease-in-out infinite';
        
        // Create floating emojis
        createFooterEmojis(this, index);
    });
    
    section.addEventListener('mouseleave', function() {
        this.style.animation = `footerSectionFloat 6s ease-in-out infinite`;
        this.style.animationDelay = `${index}s`;
    });
});

function createFooterEmojis(element, sectionIndex) {
    const emojis = [
        ['🐴', '💎', '🚀'], // Section 1
        ['🔗', '⚡', '🎯'], // Section 2
        ['💫', '🌟', '✨']  // Section 3
    ];
    
    const sectionEmojis = emojis[sectionIndex] || ['🎉', '🎊', '🎈'];
    
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const emoji = document.createElement('div');
            emoji.innerHTML = sectionEmojis[i % sectionEmojis.length];
            emoji.style.position = 'absolute';
            emoji.style.fontSize = '1.2rem';
            emoji.style.pointerEvents = 'none';
            emoji.style.zIndex = '1000';
            emoji.style.opacity = '0.8';
            
            const rect = element.getBoundingClientRect();
            emoji.style.left = (rect.left + Math.random() * rect.width) + 'px';
            emoji.style.top = rect.top + 'px';
            
            document.body.appendChild(emoji);
            
            const animation = emoji.animate([
                { 
                    transform: 'translateY(0px) rotate(0deg) scale(0.5)',
                    opacity: 0.8 
                },
                { 
                    transform: 'translateY(-80px) rotate(360deg) scale(1)',
                    opacity: 0 
                }
            ], {
                duration: 2000,
                easing: 'ease-out'
            });
            
            animation.onfinish = () => emoji.remove();
        }, i * 300);
    }
}

// Add click effect to footer bottom
const footerBottom = document.querySelector('.footer-bottom');
if (footerBottom) {
    footerBottom.addEventListener('click', function() {
        this.style.animation = 'footerBottomPulse 0.5s ease-out, rainbow 2s linear';
        
        // Create celebration explosion
        createFooterCelebration();
        
        setTimeout(() => {
            this.style.animation = 'footerBottomPulse 4s ease-in-out infinite';
        }, 2000);
    });
}

function createFooterCelebration() {
    const celebrationEmojis = ['🎉', '🎊', '🥳', '🎈', '🍾', '✨', '🌟', '💫'];
    
    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            const emoji = document.createElement('div');
            emoji.innerHTML = celebrationEmojis[Math.floor(Math.random() * celebrationEmojis.length)];
            emoji.style.position = 'fixed';
            emoji.style.fontSize = '2rem';
            emoji.style.pointerEvents = 'none';
            emoji.style.zIndex = '1001';
            emoji.style.left = '50%';
            emoji.style.bottom = '20px';
            
            document.body.appendChild(emoji);
            
            const angle = (i / 12) * 2 * Math.PI;
            const distance = 150 + Math.random() * 100;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            
            const animation = emoji.animate([
                { 
                    transform: 'translate(-50%, 0px) scale(0) rotate(0deg)',
                    opacity: 1
                },
                { 
                    transform: `translate(calc(-50% + ${x}px), ${y}px) scale(1.5) rotate(720deg)`,
                    opacity: 0
                }
            ], {
                duration: 2000 + Math.random() * 1000,
                easing: 'ease-out'
            });
            
            animation.onfinish = () => emoji.remove();
        }, i * 100);
    }
}

// Add periodic footer animations
setInterval(() => {
    const footerSections = document.querySelectorAll('.footer-section');
    const randomSection = footerSections[Math.floor(Math.random() * footerSections.length)];
    
    if (randomSection) {
        randomSection.style.animation = 'footerSectionFloat 2s ease-out, pulse 1s ease-out';
        setTimeout(() => {
            randomSection.style.animation = 'footerSectionFloat 6s ease-in-out infinite';
        }, 2000);
    }
}, 8000);

console.log('🐴 $DONKY Di*ktators website loaded successfully! 🚀');
console.log('🎉 Enhanced with cartoon effects and interactive elements! ✨');
console.log('👟 Footer is now super cartoonish and animated! 🎪');
