// Function to remove the Shorts container
function removeShorts() {
    const shortsContainer = document.getElementById("shorts-container");
    if (shortsContainer) {
        shortsContainer.remove();
        console.log("YouTube Shorts removed!");
    }
}

// Function to check the stored blocking state
function checkBlockingState() {
    chrome.storage.local.get("isBlockingEnabled", (data) => {
        if (data.isBlockingEnabled) {
            removeShorts();

            // Monitor for dynamically loaded Shorts
            const observer = new MutationObserver(() => {
                removeShorts();
            });
            observer.observe(document.body, { childList: true, subtree: true });
        }
    });
}

// Run on page load
checkBlockingState();

// Listen for messages from popup.js to toggle Shorts blocking
chrome.runtime.onMessage.addListener((message) => {
    if (message.action === "toggleBlocking") {
        chrome.storage.local.set({ isBlockingEnabled: message.isBlockingEnabled });

        if (message.isBlockingEnabled) {
            removeShorts();
        } else {
            location.reload(); // Reload page to restore Shorts
        }
    }
});
