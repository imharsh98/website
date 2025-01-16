// JavaScript file to add interactivity
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (name && email) {
            alert(`Thank you for your submission, ${name}!`);
        } else {
            alert('Please fill in all fields.');
        }
    });
});
