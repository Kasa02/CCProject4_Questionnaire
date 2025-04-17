const radios = document.getElementsByName("socialMode");
const nextButton = document.getElementById("nextButton");

nextButton.addEventListener("click", () => {
    let selected = null;
    radios.forEach(radio => {
        if (radio.checked) selected = radio.value;
    });

    if (!selected) {
        alert("Please select one option.");
        return;
    }

    localStorage.setItem("social_mode", selected);
    window.location.href = "page7.html";
});