document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("datePicker").classList.remove("hidden");
});

document.getElementById("noBtn").addEventListener("click", function() {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
});

document.getElementById("downloadBtn").addEventListener("click", function() {
    let date = document.getElementById("date").value;
    if (date) {
        let text = `Our date: ${date}`;
        let blob = new Blob([text], { type: "text/plain" });
        let link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "Valentine_Date.txt";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        alert("Please select a date!");
    }
});
