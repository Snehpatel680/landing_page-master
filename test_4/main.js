document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonial-item');
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }

    showTestimonial(currentIndex);

    // Auto-slide every 3 seconds
    setInterval(showNext, 3000);
});
