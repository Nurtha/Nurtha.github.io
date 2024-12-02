// Handle "Yes" button click
document.getElementById("yes-btn").addEventListener("click", yesResponse);

// Handle "No" button click
document.getElementById("no-btn").addEventListener("click", noResponse);

// Yes button action
function yesResponse() {
    // Show the date picker and poem section
    document.getElementById('date-picker').classList.remove('hidden');
    document.getElementById('poem-section').classList.remove('hidden');

    // Display a random romantic poem
    const poems = [
        "Under the stars, where dreams align,\nI found my heart and made it thine.",
        "Your smile is the sun, lighting my way,\nYou make every moment feel like a holiday.",
        "Roses are red, violets are blue,\nEvery love song reminds me of you."
    ];
    const randomPoem = poems[Math.floor(Math.random() * poems.length)];
    document.getElementById('poem-text').innerText = randomPoem;

    // Add floating emojis
    for (let i = 0; i < 15; i++) {
        createFloatingEmoji();
    }
}

// No button action
function noResponse() {
    window.location.href = "https://www.youtube.com/watch?v=URu1cpMqKuc";
}

// Create floating emojis
function createFloatingEmoji() {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');
    emoji.innerText = ['😍', '❤️', '🥰', '💖', '💘'][Math.floor(Math.random() * 5)];

    // Set random position
    const randomX = Math.random() * window.innerWidth;
    const randomY = window.innerHeight - 100; // Start near bottom

    emoji.style.left = `${randomX}px`;
    emoji.style.top = `${randomY}px`;

    document.body.appendChild(emoji);

    // Remove emoji after animation
    setTimeout(() => {
        emoji.remove();
    }, 2500);
}
