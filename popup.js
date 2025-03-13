// Get the toggle button
const toggleButton = document.getElementById('toggle');

// Check the current status of blocking
let isBlockingEnabled = localStorage.getItem('isBlockingEnabled') === 'true';

// Function to update the button text and state
function updateButton() {
    if (isBlockingEnabled) {
        toggleButton.textContent = 'Disable YouTube Shorts Blocking';
    } else {
        toggleButton.textContent = 'Enable YouTube Shorts Blocking';
    }
}