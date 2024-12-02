function yesResponse() {
    document.getElementById('date-picker').classList.remove('hidden');
}

function noResponse() {
    window.location.href = "https://youtu.be/krHj5oON6B0?si=6X93HaaPdpJoPBHY"; // Replace with desired YouTube link
}

function saveDate() {
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (date && time) {
        const blob = new Blob([`Date: ${date}, Time: ${time}`], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = "date.txt";
        a.click();
        alert("Your response has been saved!");
    } else {
        alert("Please select both date and time.");
    }
}
