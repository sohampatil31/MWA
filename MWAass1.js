
// Form Validation
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission for validation

    // Get all input fields
    const inputs = document.querySelectorAll('.form-group input');
    let allValid = true;

    // Loop through inputs and validate
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            allValid = false;
            input.style.border = '2px solid red';
            alert(`Please fill out the ${input.placeholder}`);
        } else {
            input.style.border = '2px solid black'; // Reset border if valid
        }
    });

    if (allValid) {
        alert('Form submitted successfully!');
        // Submit the form if needed: e.target.submit();
    }
});

// Smooth Scroll for Navbar Links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else {
            alert('Target section not found!');
        }
    });
});

// Button Click Interactions
document.querySelector('.btn').addEventListener('click', function () {
    alert('Calling us is not set up yet! But you can email us.');
});

// Add interactivity for multiple buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function () {
        const buttonText = this.textContent;
        if (buttonText.includes('Call')) {
            alert('Call feature coming soon!');
        } else if (buttonText.includes('Email')) {
            alert('Email us at sohamfitness@example.com');
        }
    });
}); 

// Add Event Listener for Form Submission
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission behavior

    // Show alert message
    alert('Form submitted successfully!');

    // Optionally, reset the form after submission
    this.reset(); // Clears all input fields
});
