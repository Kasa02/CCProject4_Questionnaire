const radios = document.getElementsByName("purpose");
const nextButton = document.getElementById("nextButton");

nextButton.addEventListener("click", () => {
    let selected = null;
    radios.forEach(radio => {
        if (radio.checked) selected = radio.value;
    });

    if (!selected) {
        alert("Please select your main purpose.");
        return;
    }

    localStorage.setItem("purpose", selected);
    window.location.href = "results.html";
});