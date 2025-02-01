document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("valentineButton");
    const response = document.getElementById("response");
    const music = document.getElementById("backgroundMusic");

    // Play music when the page loads
    music.play();

    // Show the response when the button is clicked
    button.addEventListener("click", () => {
        response.classList.remove("hidden");
        button.disabled = true; // Disable the button after clicking
    });
});