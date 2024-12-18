

// sidebar menu
var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}

// contact form
const scriptURL = 'https://script.google.com/macros/s/AKfycbwUdc1p0SRdFwn6tIT0op5f-H6Ia2WRRkVEHEf-UuQRjhsj9uw-_30jRAyR3ZKAJW86/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent :) Thank you!"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})

// portfilo
function toggleDetails(projectId) {
    const projectDetails = document.getElementById(projectId);
    if (projectDetails.style.display === "block") {
        projectDetails.style.display = "none"; // Hide if already visible
    } else {
        projectDetails.style.display = "block"; // Show if hidden
    }
}

