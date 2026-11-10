
// Listenly Website JavaScript

// Automatically update copyright year
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Download button
const downloadButton = document.getElementById("downloadButton");

if (downloadButton) {
    downloadButton.addEventListener("click", function (event) {
        event.preventDefault();

        alert("The Listenly Windows installer is coming soon!");
    });
}
