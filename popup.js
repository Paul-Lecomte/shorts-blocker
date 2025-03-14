const toggleButton = document.getElementById('toggle');
let isBlockingEnabled = localStorage.getItem('isBlockingEnabled') === 'true';

function updateButton() {
    toggleButton.textContent = isBlockingEnabled ? 'Disable Shorts Blocking' : 'Enable Shorts Blocking';
}

toggleButton.addEventListener('click', () => {
    isBlockingEnabled = !isBlockingEnabled;
    localStorage.setItem('isBlockingEnabled', isBlockingEnabled.toString());
    updateButton();

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {
            action: 'toggleBlocking',
            isBlockingEnabled: isBlockingEnabled
        });
    });
});

updateButton();