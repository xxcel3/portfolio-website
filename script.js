// sidebar menu
var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}

// contact form 
const scriptURL = 'https://script.google.com/macros/s/AKfycbwUdc1p0SRdFwn6tIT0op5f-H6Ia2WRRkVEHEf-UuQRjhsj9uw-_30jRAyR3ZKAJW86/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

function escapeHTML(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}

form.addEventListener('submit', e => {
    e.preventDefault();

    // sanitize 
    const sanitizedName = escapeHTML(form.Name.value);
    const sanitizedEmail = escapeHTML(form.Email.value);
    const sanitizedMessage = escapeHTML(form.Message.value);

    const sanitizedFormData = new FormData();
    sanitizedFormData.append('Name', sanitizedName);
    sanitizedFormData.append('Email', sanitizedEmail);
    sanitizedFormData.append('Message', sanitizedMessage);

    fetch(scriptURL, { method: 'POST', body: sanitizedFormData })
        .then(response => {
            msg.innerHTML = "Message sent :) Thank you!";
            setTimeout(function () {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});
