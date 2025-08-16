// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
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
    const navMenu = document.querySelector('.nav-menu');
    
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        // Mobile menu background when scrolled
        if (window.innerWidth <= 768) {
            navMenu.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            navMenu.style.boxShadow = '0 10px 27px rgba(0, 0, 0, 0.05)';
        }
    } else {
        navbar.style.background = 'transparent';
        navbar.style.boxShadow = 'none';
        // Mobile menu background when at top
        if (window.innerWidth <= 768) {
            navMenu.style.backgroundColor = 'transparent';
            navMenu.style.boxShadow = 'none';
        }
    }
});

// Audio player functionality
document.addEventListener('DOMContentLoaded', () => {
    const audioPlayers = document.querySelectorAll('audio');
    const musicCards = document.querySelectorAll('.music-card');
    
    // Pause all other audio when one starts playing
    audioPlayers.forEach(audio => {
        audio.addEventListener('play', () => {
            audioPlayers.forEach(otherAudio => {
                if (otherAudio !== audio) {
                    otherAudio.pause();
                }
            });
        });
    });
    
    // Play/pause on music cover click
    musicCards.forEach(card => {
        const cover = card.querySelector('.music-cover');
        const audio = card.querySelector('audio');
        const playIcon = card.querySelector('.play-icon');
        
        if (cover && audio) {
            cover.addEventListener('click', () => {
                if (audio.paused) {
                    audio.play();
                    playIcon.style.opacity = '1';
                    playIcon.style.transform = 'scale(1.1)';
                } else {
                    audio.pause();
                    playIcon.style.opacity = '0.8';
                    playIcon.style.transform = 'scale(1)';
                }
            });
        }
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const subject = contactForm.querySelector('input[placeholder="Subject"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Simulate form submission (replace with actual backend integration)
        alert('Thank you for your message! I\'ll get back to you soon.');
        contactForm.reset();
    });
}

// Intersection Observer for animations
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
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.music-card, .stat, .contact-method');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add loading animation for audio players
document.addEventListener('DOMContentLoaded', () => {
    const audioPlayers = document.querySelectorAll('audio');
    
    audioPlayers.forEach(audio => {
        audio.addEventListener('loadstart', () => {
            audio.style.opacity = '0.7';
        });
        
        audio.addEventListener('canplay', () => {
            audio.style.opacity = '1';
        });
        
        audio.addEventListener('error', () => {
            console.log('Audio file could not be loaded');
        });
    });
});

// Add hover effects for social links
document.addEventListener('DOMContentLoaded', () => {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-3px) scale(1.1)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-text h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        // Uncomment the line below to enable typing effect
        // typeWriter(heroTitle, originalText, 150);
    }
});

// Add scroll progress indicator
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    // Create progress bar if it doesn't exist
    let progressBar = document.querySelector('.scroll-progress');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #3498db, #667eea);
            z-index: 1001;
            transition: width 0.3s ease;
        `;
        document.body.appendChild(progressBar);
    }
    
    progressBar.style.width = scrollPercent + '%';
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Add touch support for mobile devices
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe up - could be used for navigation
            console.log('Swipe up detected');
        } else {
            // Swipe down - could be used for navigation
            console.log('Swipe down detected');
        }
    }
} 

document.addEventListener('DOMContentLoaded', () => {
    // Get all music cover elements first
    const covers = document.querySelectorAll('.music-cover');
    console.log('Found', covers.length, 'music covers');

    // Array of local image paths for music cards
    const imageUrls = [
        'images/image1.jpg',
        'images/image2.jpg',
        'images/image3.jpg',
        'images/image4.jpg',
        'images/image5.jpg',
        'images/image6.jpg',
        'images/image7.jpg',
        'images/image8.jpg',
        'images/image9.jpg',
        'images/image10.jpg',
        'images/image11.jpg',
        'images/image12.jpg',
        'images/image13.jpg',
        'images/image14.jpg',
        'images/image15.jpg',
        'images/image16.jpg',
        'images/image17.jpg',
        'images/image18.jpg',
        'images/image19.jpg',
        'images/image20.jpg',
        'images/image21.jpg',
        'images/image22.jpg',
        'images/image23.jpg',
        'images/image24.jpg',
        'images/image25.jpg',
        'images/image26.jpg',
        'images/image27.jpg',
        'images/image28.jpg',
        'images/image29.jpg',
        'images/image30.jpg',
        'images/image31.jpg',
        'images/image32.jpg',
        'images/image33.jpg',
        'images/image34.jpg',
        'images/image35.jpg',
        'images/image36.jpg',
        'images/image37.jpg',
        'images/image38.jpg',
        'images/image39.jpg',
        'images/image40.jpg',
        'images/image41.jpg',
        'images/image42.jpg',
        'images/image43.jpg',
        'images/image44.jpg',
        'images/image45.jpg',
        'images/image46.jpg',
        'images/image47.jpg',
        'images/image48.jpg'
    ];

    console.log('Total images available:', imageUrls.length);
    console.log('Total covers found:', covers.length);

    // Create a copy of the image URLs array to avoid modifying the original
    const availableImages = [...imageUrls];

    covers.forEach((cover, index) => {
        console.log(`Processing card ${index + 1}:`, cover);
        
        // Check if we have available images
        if (availableImages.length === 0) {
            console.error(`No more images available for card ${index + 1}`);
            return;
        }

        // Pick a random image URL from available images
        const randomIndex = Math.floor(Math.random() * availableImages.length);
        const randomUrl = availableImages[randomIndex];
        
        // Remove the used image from the available pool
        availableImages.splice(randomIndex, 1);
        
        // Set as background
        cover.style.backgroundImage = `url('${randomUrl}')`;
        
        // Verify the background was set
        const actualBackground = cover.style.backgroundImage;
        console.log(`Card ${index + 1}:`, { 
            url: randomUrl, 
            cover: cover,
            backgroundSet: actualBackground,
            hasBackground: actualBackground !== '' && actualBackground !== 'none'
        });
        console.log(`Remaining images:`, availableImages.length);
        
        // Test if image loads
        const img = new Image();
        img.onload = () => {
            console.log(`✅ Card ${index + 1}: Image loaded successfully`);
        };
        img.onerror = () => {
            console.error(`❌ Card ${index + 1}: Image failed to load:`, randomUrl);
        };
        img.src = randomUrl;
    });

    // Footer link hover effects
    const footerLinks = document.querySelectorAll('.footer-links a');
    footerLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateX(5px)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateX(0)';
        });
    });

    // Social link hover effects
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-2px)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0)';
        });
    });
}); 