// Get the toggle button
const toggleButton = document.getElementById('toggle');

// Check the current status of blocking (you can store this in localStorage for persistence)
let isBlockingEnabled = localStorage.getItem('isBlockingEnabled') === 'true';

// Function to update the button text and state
function updateButton() {
    if (isBlockingEnabled) {
        toggleButton.textContent = 'Disable YouTube Shorts Blocking';
    } else {
        toggleButton.textContent = 'Enable YouTube Shorts Blocking';
    }
}

// Event listener to toggle the blocking state
toggleButton.addEventListener('click', () => {
    isBlockingEnabled = !isBlockingEnabled;
    localStorage.setItem('isBlockingEnabled', isBlockingEnabled.toString());
    updateButton();

    // Send a message to the content script to toggle blocking
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            action: 'toggleBlocking',
            isBlockingEnabled: isBlockingEnabled
        });
    });
});

// Initialize the button state when the popup opens
updateButton();