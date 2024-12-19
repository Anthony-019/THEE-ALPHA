const hackProgress = document.getElementById('hack-progress');
const hackStatus = document.getElementById('hack-status');

// Simulated Hack Progress Counter
let progress = 0;

function updateHack() {
    if (progress < 100) {
        progress++;
        hackProgress.textContent = `${progress}%`;

        if (progress === 25) {
            hackStatus.textContent = "Accessing System Files...";
        } else if (progress === 50) {
            hackStatus.textContent = "Extracting Personal Data...";
        } else if (progress === 75) {
            hackStatus.textContent = "Encrypting Device...";
        }
    } else {
        hackStatus.textContent = "Your Device is Now Under Virtual Control Of AlphaCode Solutions.";
        hackProgress.textContent = "100%";
        clearInterval(hackInterval);

        // Add a dramatic final effect
        document.body.style.backgroundColor = "#f00"; // Red background
        hackStatus.style.color = "#fff"; // White text
        hackProgress.style.color = "#fff"; // White text
    }
}

// Update progress every 100ms
const hackInterval = setInterval(updateHack, 100);
