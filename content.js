// Function to remove Shorts elements from YouTube
function removeShorts() {
    // Remove individual Shorts from the homepage and other sections
    document.querySelectorAll("ytd-rich-section-renderer, ytd-rich-grid-row").forEach((section) => {
        if (section.querySelector("ytd-thumbnail a[href*='/shorts/']")) {
            section.remove();
        }
    });

    // Remove Shorts from the sidebar in the watch page
    document.querySelectorAll("ytd-compact-video-renderer").forEach((video) => {
        if (video.querySelector("a[href*='/shorts/']")) {
            video.remove();
        }
    });

    // Remove the Shorts shelf (carousel of Shorts)
    document.querySelectorAll("ytd-reel-shelf-renderer").forEach((shortsShelf) => {
        shortsShelf.remove();
    });

    console.log("YouTube Shorts removed!");
}

// Run the function immediately
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