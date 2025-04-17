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
        localStorage.removeItem("after_anxiety"); 
        }
    });
});

nextButton.addEventListener("click", () => {
    let selected = null;
    radios.forEach(r => {
        if (r.checked) selected = r.value;
    });

    if (!selected) {
        alert("Please select an answer.");
        return;
    }

    localStorage.setItem("anxious_while", selected);

    if (selected === "yes") {
        localStorage.setItem("after_anxiety", slider.value);
    } else {
        localStorage.removeItem("after_anxiety"); 
    }

    window.location.href = "page5.html";
});