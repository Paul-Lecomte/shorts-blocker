<img src="icon.png" alt="logo" width="150"/>

# YouTube Shorts Blocker Extension

This browser extension blocks YouTube Shorts content, helping you focus on regular YouTube videos. You can enable or disable the blocking feature directly from the extension's popup.

## Features
- **Block YouTube Shorts**: Automatically redirects you away from YouTube Shorts and hides the Shorts sections.
- **Toggle On/Off**: You can easily enable or disable the blocking feature via the popup interface.
- **Persistent State**: The blocking state is saved and persists across sessions.

## Installation

### Steps to install the extension locally:

1. **Clone or Download** the repository:
    - Clone the repository using Git:
      ```bash
      git clone <repo-url>
      ```
    - Or download the repository as a ZIP file and extract it.

2. **Open Chrome**:
    - Navigate to `chrome://extensions/` in your Chrome browser.
    - Enable **Developer mode** (toggle at the top right).
    - Click **Load unpacked** and select the extension's folder (where `manifest.json` is located).

3. The extension should now be loaded and active in your browser.

## Usage

1. After installation, you will see the extension icon in your browser toolbar.
2. Click on the extension icon to open the popup.
3. Use the toggle button to enable or disable the YouTube Shorts blocking.
4. The extension will block the Shorts page and sections dynamically on YouTube.

### How It Works
- **Content Script**: The extension runs a content script on `youtube.com/*` pages. If a Shorts URL is detected, the page is redirected to the main YouTube page. Additionally, any Shorts video sections are hidden.
- **Popup Interface**: The popup allows users to toggle the blocking feature, which is stored locally using `localStorage`.

## License

This project is open-source and free to use under the [MIT License](LICENSE).
