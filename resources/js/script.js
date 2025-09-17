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

// Task 4: Dynamic artist list
const addArtistButton = document.getElementById('add-artist');

addArtistButton.addEventListener('click', function() {
    const interest = prompt("Enter one of your artists:");

    if (interest && interest.trim() !== '') {
        // Create new paragraph element
        const artistElement = document.createElement('p');
        artistElement.textContent = '• ' + interest;

        // Style it a bit
        artistElement.style.backgroundColor = '#f0f8ff';
        artistElement.style.padding = '5px';
        artistElement.style.margin = '5px 0';
        artistElement.style.borderRadius = '3px';

        // Append to container
        const container = document.getElementById('artists-container'); // ✅ fixed typo
        container.appendChild(artistElement);
    }
});