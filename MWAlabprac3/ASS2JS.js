document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');

    if (!form) {
        console.error("Form element not found!");
        return;
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent multiple submissions

        // Get all input fields
        const inputs = document.querySelectorAll('.form-group input');
        let allValid = true;

        inputs.forEach(input => {
            if (input.value.trim() === '') {
                allValid = false;
                input.style.border = '2px solid red';
            } else {
                input.style.border = '2px solid black'; // Reset border if valid
            }
        });

        if (!allValid) {
            alert('⚠️ Please fill out all required fields before submitting!');
            return; // Stop execution if fields are empty
        }

        // Remove previous event listener (if any)
        form.removeEventListener('submit', arguments.callee);

        alert('✅ Form submitted successfully!');
        
        // Submit the form manually
        form.submit();
    });
});
