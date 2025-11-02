// ========================================
// MOBILE MENU TOGGLE
// ========================================
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('.nav');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// ========================================
// SMOOTH SCROLL
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        }
    });
});

// ========================================
// SCROLL REVEAL ANIMATION
// ========================================
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);
reveal(); // Call on page load

// ========================================
// HEADER SCROLL EFFECT
// ========================================
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.style.boxShadow = 'none';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// ========================================
// FORM HANDLING
// ========================================
const downloadForm = document.getElementById('downloadForm');

if (downloadForm) {
    downloadForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitButton = downloadForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.innerHTML;
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            timestamp: new Date().toISOString()
        };
        
        // Disable button and show loading state
        submitButton.disabled = true;
        submitButton.classList.add('loading');
        submitButton.innerHTML = '<span>⏳</span> Processando...';
        
        try {
            // Simulate form submission (replace with actual API call)
            await simulateFormSubmission(formData);
            
            // Store data in localStorage for thank you page
            localStorage.setItem('downloadData', JSON.stringify(formData));
            
            // Redirect to thank you page
            window.location.href = 'thank-you.html';
            
        } catch (error) {
            console.error('Erro ao enviar formulário:', error);
            
            // Show error message
            alert('Ocorreu um erro ao processar seu pedido. Por favor, tente novamente.');
            
            // Restore button
            submitButton.disabled = false;
            submitButton.classList.remove('loading');
            submitButton.innerHTML = originalButtonText;
        }
    });
}

// Simulate form submission (replace with actual API call)
function simulateFormSubmission(data) {
    return new Promise((resolve) => {
        console.log('Dados do formulário:', data);
        
        // Simulate API delay
        setTimeout(() => {
            resolve({ success: true });
        }, 1500);
    });
}

// ========================================
// TRILHA CARDS INTERACTION
// ========================================
const trilhaCards = document.querySelectorAll('.trilha-card');

trilhaCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// ========================================
// ADD REVEAL CLASS TO ELEMENTS
// ========================================
function addRevealClasses() {
    const elementsToReveal = [
        '.benefit-card',
        '.trilha-card',
        '.opening-content',
        '.download-container'
    ];
    
    elementsToReveal.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            element.classList.add('reveal');
        });
    });
}

// Initialize reveal classes on page load
document.addEventListener('DOMContentLoaded', () => {
    addRevealClasses();
    reveal();
});

// ========================================
// FORM VALIDATION
// ========================================
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    let isValid = true;
    
    // Validate name
    if (nameInput && nameInput.value.trim().length < 3) {
        showError(nameInput, 'Por favor, insira seu nome completo');
        isValid = false;
    } else if (nameInput) {
        clearError(nameInput);
    }
    
    // Validate email
    if (emailInput && !validateEmail(emailInput.value)) {
        showError(emailInput, 'Por favor, insira um e-mail válido');
        isValid = false;
    } else if (emailInput) {
        clearError(emailInput);
    }
    
    return isValid;
}

function showError(input, message) {
    clearError(input);
    input.style.borderColor = '#ef4444';
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = '#ef4444';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.25rem';
    errorDiv.textContent = message;
    
    input.parentElement.appendChild(errorDiv);
}

function clearError(input) {
    input.style.borderColor = '';
    const errorMessage = input.parentElement.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
}

// Add real-time validation
if (downloadForm) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    
    if (nameInput) {
        nameInput.addEventListener('blur', () => {
            if (nameInput.value.trim().length < 3 && nameInput.value.length > 0) {
                showError(nameInput, 'Por favor, insira seu nome completo');
            } else {
                clearError(nameInput);
            }
        });
    }
    
    if (emailInput) {
        emailInput.addEventListener('blur', () => {
            if (!validateEmail(emailInput.value) && emailInput.value.length > 0) {
                showError(emailInput, 'Por favor, insira um e-mail válido');
            } else {
                clearError(emailInput);
            }
        });
    }
}

// ========================================
// SCROLL TO TOP BUTTON (Optional)
// ========================================
function createScrollToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'scroll-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%);
        color: white;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    `;
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    document.body.appendChild(button);
    
    // Show/hide button on scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
}

// Initialize scroll to top button
createScrollToTopButton();

// ========================================
// ANALYTICS & TRACKING (Optional)
// ========================================
function trackEvent(category, action, label) {
    console.log('Event tracked:', { category, action, label });
    
    // Add your analytics tracking code here
    // Example: Google Analytics, Facebook Pixel, etc.
    // gtag('event', action, { 'event_category': category, 'event_label': label });
}

// Track bootcamp link clicks
document.querySelectorAll('.bootcamp-link').forEach(link => {
    link.addEventListener('click', (e) => {
        const bootcampName = e.target.closest('.bootcamp-item').querySelector('h4').textContent;
        trackEvent('Bootcamp', 'Click', bootcampName);
    });
});

// Track CTA button clicks
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.textContent.trim();
        trackEvent('CTA', 'Click', buttonText);
    });
});

// ========================================
// CONSOLE EASTER EGG
// ========================================
console.log('%c🚀 Trilhas da Transformação Tech', 'font-size: 24px; font-weight: bold; color: #8b5cf6;');
console.log('%c📚 E-book criado por Márcio Gil - Embaixador DIO Campus Expert', 'font-size: 14px; color: #06b6d4;');
console.log('%c💜 Transforme curiosidade em carreira com propósito!', 'font-size: 12px; color: #a78bfa;');
