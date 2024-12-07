document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const confirmation = document.getElementById('confirmation');
    confirmation.classList.remove('hidden'); // Show confirmation message
    setTimeout(() => confirmation.classList.add('hidden'), 3000); // Hide after 3 seconds
    this.reset(); // Reset the form fields
  });