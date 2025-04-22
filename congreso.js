// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior

        // Get the target element's ID from the href attribute
        const targetId = this.getAttribute('href');

        // Check if the target ID exists
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Scroll to the target element smoothly
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            console.error(Target element with ID "${targetId}" not found.);
        }
    });
});

// Contact Form Validation
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');

    // Reset previous messages
    formMessage.textContent = '';

    // Check if all fields are filled
    if (name === '' || email === '' || message === '') {
        formMessage.textContent = 'All fields are required!';
        formMessage.style.color = 'red';
        return false; // Prevent form submission
    }

    // Simple email validation (can be improved)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Slightly improved regex
    if (!emailRegex.test(email)) {
        formMessage.textContent = 'Please enter a valid email address!';
        formMessage.style.color = 'red';
        return false; // Prevent form submission
    }

    //  THIS PART IS A PLACEHOLDER.  YOU NEED SERVER-SIDE CODE TO ACTUALLY SEND THE EMAIL.
    //  The following is just a simulation for demonstration purposes.
    formMessage.textContent = 'Your message has been sent! (This is a simulated message.  You need server-side code for actual email sending.)';
    formMessage.style.color = 'green';
    // In a real application, you would use AJAX or Fetch API to send the data to a server.
    return true;
}