// Loading screen functionality
window.addEventListener('load', function() {
    const loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) {
        loadingScreen.classList.add('hidden');
        
        // Remove from DOM after transition completes
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }
});

// Disable right-click context menu
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
});

// Disable keyboard shortcuts for developer tools
document.addEventListener('keydown', function(e) {
    // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+Shift+C
    if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
        (e.ctrlKey && e.key === 'U')
    ) {
        e.preventDefault();
        return false;
    }
});

// Disable text selection
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
    return false;
});

// Disable drag and drop
document.addEventListener('dragstart', function(e) {
    e.preventDefault();
    return false;
});

// Handle contact form submission with AJAX and redirect to thank you page
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('form[name="contact"]');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const formName = formData.get('form-name');
            
            fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            })
            .then(() => {
                window.location.href = 'thank-you.html';
            })
            .catch((error) => {
                console.error('Error:', error);
                window.location.href = 'thank-you.html';
            });
        });
    }
});

// Calculate age dynamically
function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    
    return age;
}

// Update age in the about section
document.addEventListener('DOMContentLoaded', function() {
    const birthDate = '2004-08-03';
    const age = calculateAge(birthDate);
    
    // Find and update the age element
    const ageElements = document.querySelectorAll('.sub-container h4');
    ageElements.forEach(element => {
        if (element.textContent.includes('Age:')) {
            element.innerHTML = `<span>Age:</span> ${age}`;
        }
    });
    
    // Fly-in animation for hero name elements on scroll
    const heroSection = document.querySelector('.hero');
    const nameElements = ['#back_name', '#front_name', '#back-role', '#front-role'];
    
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate name and role together
                nameElements.forEach(selector => {
                    const element = document.querySelector(selector);
                    if (element) {
                        element.classList.add('animate');
                    }
                });
                heroObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    if (heroSection) {
        heroObserver.observe(heroSection);
    }
    
    // Auto-scrolling image carousel
    const carousels = document.querySelectorAll('.image-carousel');
    
    carousels.forEach(carousel => {
        let currentIndex = 0;
        const slides = carousel.querySelectorAll('.carousel-slide');
        const totalSlides = slides.length;
        
        // Initialize first slide as active for mobile
        if (window.innerWidth <= 767 && slides.length > 0) {
            slides[0].classList.add('active');
        }
        
        function scrollCarousel() {
            const isMobile = window.innerWidth <= 767;
            
            if (isMobile) {
                // Fade-based carousel for mobile
                slides.forEach(slide => slide.classList.remove('active'));
                currentIndex = (currentIndex + 1) % totalSlides;
                slides[currentIndex].classList.add('active');
            } else {
                // Transform-based carousel for desktop
                currentIndex = (currentIndex + 1) % totalSlides;
                const translateAmount = 100 / totalSlides;
                carousel.style.transform = `translateX(-${currentIndex * translateAmount}%)`;
            }
        }
        
        // Start auto-scroll every 3 seconds
        setInterval(scrollCarousel, 3000);
    });
    
    // Animate skill progress bars when they come into view
    const skillProgressBars = document.querySelectorAll('.skill-progress');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target.getAttribute('data-progress');
                entry.target.style.width = progress + '%';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    skillProgressBars.forEach(bar => {
        observer.observe(bar);
    });
    
    // Hamburger menu toggle for mobile
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const logo = document.querySelector('.logo');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!hamburger.contains(event.target) && !navLinks.contains(event.target) && !logo.contains(event.target)) {
                navLinks.classList.remove('active');
            }
        });
    }
    
    // Logo click to toggle navigation dropdown
    if (logo && navLinks) {
        logo.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
});
