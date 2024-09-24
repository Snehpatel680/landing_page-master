// JavaScript for smooth scrolling and modal functionality

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-list a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal functionality
document.querySelectorAll('.view-details').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const modalId = this.getAttribute('href');
        document.querySelector(modalId).style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scroll when modal is open
    });
});

document.querySelectorAll('.modal .close-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        this.closest('.modal').style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scroll when modal is closed
    });
});

window.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scroll when modal is closed
    }
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        this.reset();
    } else {
        alert('Please fill out all required fields.');
    }
});
