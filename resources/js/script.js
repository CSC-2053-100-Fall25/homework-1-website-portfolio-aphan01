// Step 1: Select the button
const toggleButton = document.getElementById("toggle-photo");

// Step 2: Select the photo container
const photoContainer = document.getElementById("photo-container");

// Step 3: Add click event listener
toggleButton.addEventListener("click", function() {
    // Step 4: Toggle visibility
    if (photoContainer.style.display === "none") {
        // Show photo
        photoContainer.style.display = "block";
        toggleButton.textContent = "Hide Photo";
    } else {
        // Hide photo
        photoContainer.style.display = "none";
        toggleButton.textContent = "Show Photo";
    }
});