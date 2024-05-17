function validateForm() {

        // Regular expression for mobile number (10 digits)

        const mobileRegex = /^[0-9]{10}$/;

        // Get form input values

        const name = document.getElementById('name').value;

        const email = document.getElementById('email').value;

        const mobile = document.getElementById('mobile').value;

        const feedback = document.getElementById('feedback').value;

        // Validate name (should not be empty)

        if (name.trim() === '') {

            alert('Please enter your name');

            return false;

        }

        // Validate email (using HTML5 built-in validation)

        if (!document.getElementById('email').checkValidity()) {

            alert('Please enter a valid email address');

            return false;

        }


        // Validate mobile number (should match pattern)

        if (!mobile.match(mobileRegex)) {

            alert('Please enter a valid 10-digit mobile number');

            return false;

        }


        // Validate feedback (should not be empty)

        if (feedback === '') {

            alert('Please select your feedback');

            return false;

        }

        // Form is valid

        return true;

    }
