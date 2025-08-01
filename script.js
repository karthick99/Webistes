// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Enquiry form submission
    const enquiryForm = document.getElementById('enquiryForm');
    
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const fullName = document.getElementById('fullName').value;
            const mobileNumber = document.getElementById('mobileNumber').value;
            const customerType = document.querySelector('input[name="customerType"]:checked');
            const oilType = document.getElementById('oilType').value;
            
            // Check if required fields are filled
            if (!fullName || !mobileNumber || !customerType || !oilType) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Validate mobile number format (basic validation)
            const mobileRegex = /^[0-9]{10,15}$/;
            if (!mobileRegex.test(mobileNumber.replace(/[\s-]/g, ''))) {
                alert('Please enter a valid mobile number.');
                return;
            }
            
            // If validation passes, show success message
            alert('Thank you for your enquiry! We will get back to you shortly.');
            enquiryForm.reset();
        });
    }
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('contactMessage').value;
            
            // Check if required fields are filled
            if (!name || !email || !subject || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // If validation passes, show success message
            alert('Thank you for your message! We will get back to you shortly.');
            contactForm.reset();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
});