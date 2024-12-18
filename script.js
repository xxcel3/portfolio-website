// sidebar menu
var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}

function escapeHTML(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}

// contact form
const scriptURL = 'https://script.google.com/macros/s/AKfycbwUdc1p0SRdFwn6tIT0op5f-H6Ia2WRRkVEHEf-UuQRjhsj9uw-_30jRAyR3ZKAJW86/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();

    // sanitize 
    const sanitizedFormData = new FormData();
    sanitizedFormData.append('Name', escapeHTML(form.Name.value));
    sanitizedFormData.append('Email', escapeHTML(form.Email.value));
    sanitizedFormData.append('Message', escapeHTML(form.Message.value));

    fetch(scriptURL, { method: 'POST', body: sanitizedFormData })
        .then(response => {
            msg.innerHTML = "Message sent :) Thank you!";
            setTimeout(() => {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch(error => {
            console.error('Error!', error.message);
            msg.innerHTML = "Failed to send message. Please try again.";
        });
});

// portfilo
function toggleDetails(projectId) {
    const details = document.getElementById(projectId);
    if (details.style.display === "block") {
        details.style.display = "none"; // Hide if visible
    } else {
        details.style.display = "block"; // Show if hidden
    }
}
