// Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li a');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
});

// Close mobile menu when clicking a link
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Intersection Observer for Fade-Up Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-up').forEach(element => {
    observer.observe(element);
});

// Product Filtering
const filterBtns = document.querySelectorAll('.product-filters li');
const products = document.querySelectorAll('.product-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        products.forEach(product => {
            if (filter === 'all' || product.getAttribute('data-category') === filter) {
                product.style.display = 'block';
                // Trigger animation again for better effect (optional)
                setTimeout(() => product.classList.add('visible'), 50);
            } else {
                product.style.display = 'none';
            }
        });
    });
});

// Add to Cart Simulation
const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
const badge = document.querySelector('.badge');
let cartCount = 0;

addToCartBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const originalText = btn.innerHTML;
        
        // Update Cart Count
        cartCount++;
        badge.innerText = cartCount;

        // Button Feedback
        btn.innerHTML = '<i class="fas fa-check"></i> Added';
        btn.style.background = '#1a1a1a';
        btn.style.color = '#fff';
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = ''; // Reset to CSS default
            btn.style.color = '';
        }, 1500);
    });
});
