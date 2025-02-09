document.addEventListener("DOMContentLoaded", function () {
    let savedDate = localStorage.getItem("valentineDate");
    if (savedDate) {
        showSavedDate(savedDate);
    }
});

document.getElementById("yesBtn").addEventListener("click", function () {
    document.getElementById("datePicker").classList.remove("hidden");
});

document.getElementById("noBtn").addEventListener("click", function () {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
});

document.getElementById("downloadBtn").addEventListener("click", function () {
    let date = document.getElementById("date").value;
    if (date) {
        localStorage.setItem("valentineDate", date);
        showSavedDate(date);

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

function showSavedDate(date) {
    document.getElementById("datePicker").innerHTML = `
        <h2>Our date is set for: <span style="color: #ff4b5c;">${date}</span> ❤️</h2>
    `;
    document.getElementById("datePicker").classList.remove("hidden");
}
