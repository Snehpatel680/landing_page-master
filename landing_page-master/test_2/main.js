document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonial-item');
    let current = 0;
    const total = testimonials.length;

    function showTestimonial(index) {
        testimonials.forEach((item, i) => {
            item.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextTestimonial() {
        current = (current + 1) % total;
        showTestimonial(current);
    }

    showTestimonial(current);
    setInterval(nextTestimonial, 5000); // Change testimonial every 5 seconds
});
