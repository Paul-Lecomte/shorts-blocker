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

// Event listener to toggle the blocking state
toggleButton.addEventListener('click', () => {
    isBlockingEnabled = !isBlockingEnabled;
    localStorage.setItem('isBlockingEnabled', isBlockingEnabled.toString());
    updateButton();

    // Optionally, you can send a message to the content script to update the blocking state
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            func: toggleShortsBlocking,
            args: [isBlockingEnabled],
        });
    });
});
