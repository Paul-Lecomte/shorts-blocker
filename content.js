// Function to remove the Shorts container
function removeShorts() {
    const shortsContainer = document.getElementById("shorts-container");
    if (shortsContainer) {
        shortsContainer.remove();
        console.log("YouTube Shorts removed!");
    }
}

// Run the function immediately on page load
removeShorts();

// Monitor the page for changes and remove Shorts dynamically
const observer = new MutationObserver(() => {
    removeShorts();
});
observer.observe(document.body, { childList: true, subtree: true });

// Listen for messages from popup.js to toggle Shorts blocking
chrome.runtime.onMessage.addListener((message) => {
    if (message.action === 'toggleBlocking') {
        if (message.isBlockingEnabled) {
            removeShorts();
        } else {
            location.reload(); // Reload to restore Shorts if re-enabled
        }
    }
});