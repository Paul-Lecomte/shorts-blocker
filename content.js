const blockShorts = () => {
    const url = window.location.href;

    if (url.includes("/shorts/")) {
        // If it's a Shorts URL, redirect to the main YouTube page.
        window.location.replace("https://www.youtube.com");
    }

    // You can also block Shorts sections on the main page:
    const shortsSection = document.querySelector("ytd-rich-grid-media[href*='/shorts/']");
    if (shortsSection) {
        shortsSection.style.display = 'none'; // Hide the Shorts video section
    }
};

setInterval(blockShorts, 1000); // Check and block every second.