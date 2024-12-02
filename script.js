// Array of romantic poems
const poems = [
    "Under the stars, where dreams align,\nI found my heart and made it thine.\nWith every breath, my soul does sing,\nFor you, my love, my everything.",
    "Your eyes, a portal to another place,\nA world of love, a warm embrace.\nIn your presence, all doubts subside,\nMy heart beats loud, you're my guide.",
    "Roses bloom when you are near,\nYour laughter's song is all I hear.\nTime stands still, the moment’s sweet,\nWith you, my world feels complete.",
    "Through life's trials, we'll prevail,\nTogether we sail, in love’s grand tale.\nYour smile, the sun, my guiding light,\nYou make my days and endless night."
];

// Function to show a random poem and dramatic effects
function yesResponse() {
    // Show date picker
    document.getElementById('date-picker').classList.remove('hidden');

    // Display a random poem
    const randomPoem = poems[Math.floor(Math.random() * poems.length)];
    const poemSection = document.getElementById('poem-section');
    document.getElementById('poem-text').innerText = randomPoem;
    poemSection.classList.remove('hidden');

    // Add dramatic floating emojis
    for (let i = 0; i < 15; i++) {
        createFloatingEmoji();
    }
}

// Function to create and animate floating emojis
function createFloatingEmoji() {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');
    emoji.innerText = ['😍', '❤️', '🥰', '💖', '💘'][Math.floor(Math.random() * 5)]; // Random emoji

    // Set random position
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;

    emoji.style.left = `${randomX}px`;
    emoji.style.top = `${randomY}px`;

    document.body.appendChild(emoji);

    // Remove the emoji after the animation
    setTimeout(() => {
        emoji.remove();
    }, 2000);
}

// Function to handle "No" response
function noResponse() {
    window.location.href = "https://www.youtube.com/watch?v=URu1cpMqKuc"; // Redirect to the song
}

// Function to submit the date and time
function submitDate() {
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (date && time) {
        // Display the selected date and time
        document.getElementById('selected-date').classList.remove('hidden');
        document.getElementById('date-time-display').innerText = `${date} at ${time}`;

        // Send POST request to backend (if applicable)
        fetch('/saveDate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ date, time })
        })
            .then(response => response.text())
            .then(data => {
                alert(data); // Show success or error message
            })
            .catch(error => {
                console.error('Error:', error);
            });
    } else {
        alert("Please select both date and time.");
    }
}
