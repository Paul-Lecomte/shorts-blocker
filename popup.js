const toggleButton = document.getElementById("toggle");
const statusText = document.getElementById("status-text");

// Load blocking state from storage
let isBlockingEnabled = localStorage.getItem("isBlockingEnabled") === "true";

// Function to update button text and styling
function updateButton() {
    if (isBlockingEnabled) {
        toggleButton.textContent = "Disable Shorts Blocking";
        toggleButton.classList.add("enabled");
        statusText.textContent = "Blocking is ON";
    } else {
        toggleButton.textContent = "Enable Shorts Blocking";
        toggleButton.classList.remove("enabled");
        statusText.textContent = "Blocking is OFF";
    }
}

// Toggle Shorts blocking state
toggleButton.addEventListener("click", () => {
    isBlockingEnabled = !isBlockingEnabled;
    localStorage.setItem("isBlockingEnabled", isBlockingEnabled.toString());
    updateButton();

    // Send message to content script
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {
            action: "toggleBlocking",
            isBlockingEnabled: isBlockingEnabled
        });
    });
});

// Initialize UI
updateButton();