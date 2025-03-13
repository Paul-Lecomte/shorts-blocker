// popup.js

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

    // Optionally, you can send a message to the content script to update the blocking state
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            func: toggleShortsBlocking,
            args: [isBlockingEnabled],
        });
    });
});

// Function to toggle Shorts blocking based on the state
function toggleShortsBlocking(isEnabled) {
    const url = window.location.href;
    if (url.includes("/shorts/")) {
        if (isEnabled) {
            window.location.replace("https://www.youtube.com");
        }
    }

    const shortsSection = document.querySelector("ytd-rich-grid-media[href*='/shorts/']");
    if (shortsSection) {
        if (isEnabled) {
            shortsSection.style.display = 'none'; // Hide the Shorts section
        } else {
            shortsSection.style.display = ''; // Show the Shorts section
        }
    }
}

// Initialize the button state when the popup opens
updateButton();