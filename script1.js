const radioButtons = document.getElementsByName("playGames");
const nextButton = document.getElementById("nextButton");

nextButton.addEventListener("click", () => {
    let selected = null;
    radioButtons.forEach(radio => {
        if (radio.checked) selected = radio.value;
    });

    if (!selected) {
        alert("Please select an option.");
        return;
    }

    localStorage.setItem("plays", selected);

    if (selected === "yes") {
        window.location.href = "page2.html";
    } else {
        window.location.href = "end.html";
    }
});