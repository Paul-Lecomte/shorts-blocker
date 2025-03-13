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

// Listen for messages from popup.js
chrome.runtime.onMessage.addListener((message) => {
    if (message.action === 'toggleBlocking') {
        toggleShortsBlocking(message.isBlockingEnabled);
    }
});