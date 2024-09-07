document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('myButton');
    const message = document.getElementById('message');
    const testimonialList = document.getElementById('testimonialList');

    button.addEventListener('click', () => {
        message.textContent = 'Button was clicked!';
    });

    // Simulating fetching testimonials
    const testimonials = [
        '“Saint Sam’s message has been life-changing!” - John Doe',
        '“A true leader in faith and action.” - Jane Smith',
        '“Inspiring words and deeds.” - Alex Johnson'
    ];

    setTimeout(() => {
        testimonialList.innerHTML = testimonials.join('<br>');
    }, 1000); // Simulates a network delay
});
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission
        console.log('Form Submitted:', {
            name: contactForm.name.value,
            email: contactForm.email.value,
            message: contactForm.message.value
        });
        alert('Thank you for your message!');
        contactForm.reset();
    });
});
