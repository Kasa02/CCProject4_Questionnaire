const radios = document.getElementsByName("anxiousWhile");
const nextButton = document.getElementById("nextButton");
const followUp = document.getElementById("followUp");
const slider = document.getElementById("anxietySlider");
const valueDisplay = document.getElementById("anxietyValue");

slider.addEventListener("input", () => {
    valueDisplay.textContent = slider.value;
});

radios.forEach(radio => {
    radio.addEventListener("change", () => {
        if (radio.value === "yes") {
        followUp.style.display = "block";
        } else {
        followUp.style.display = "none";
        }
    });
});

nextButton.addEventListener("click", () => {
    let selected = null;
    radios.forEach(r => { if (r.checked) selected = r.value; });

    if (!selected) {
        alert("Please answer whether you feel anxious while playing.");
        return;
    }

    localStorage.setItem("anxious_while", selected);

    if (selected === "yes") {
        localStorage.setItem("after_anxiety", slider.value);
    }

    window.location.href = "page5.html";
});