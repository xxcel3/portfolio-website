

// sidebar menu
var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}

// contact form

// portfilo
function toggleDetails(projectId) {
    const projectDetails = document.getElementById(projectId);
    if (projectDetails.style.display === "block") {
        projectDetails.style.display = "none"; // Hide if already visible
    } else {
        projectDetails.style.display = "block"; // Show if hidden
    }
}

