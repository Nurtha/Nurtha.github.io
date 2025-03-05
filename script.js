document.addEventListener("DOMContentLoaded", loadEntries);

function saveEntry() {
    let input = document.getElementById("diary-input");
    let text = input.value.trim();
    
    if (text === "") return;

    let date = new Date().toLocaleString();
    let entry = { text, date };

    let entries = JSON.parse(localStorage.getItem("diary")) || [];
    entries.push(entry);
    localStorage.setItem("diary", JSON.stringify(entries));

    displayEntry(entry);
    input.value = "";
}

function loadEntries() {
    let entries = JSON.parse(localStorage.getItem("diary")) || [];
    entries.forEach(displayEntry);
}

function displayEntry(entry) {
    let container = document.getElementById("diary-entries");

    let div = document.createElement("div");
    div.className = "entry";
    div.innerHTML = `<p>${entry.text}</p><div class="date">${entry.date}</div>`;

    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}
