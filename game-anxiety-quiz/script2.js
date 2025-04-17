const nextButton = document.getElementById("nextButton");
const frequencySelect = document.getElementById("frequencySelect");

nextButton.addEventListener("click", () => {
    const selected = frequencySelect.value;
    if (!selected) {
        alert("Please select how often you play games.");
        return;
    }

    localStorage.setItem("frequency", selected);
    window.location.href = "page3.html";
});