const nextButton = document.getElementById("nextButton");
const reasonInput = document.getElementById("reasonInput");

nextButton.addEventListener("click", () => {
    const value = reasonInput.value.trim();

    if (!value) {
        alert("Please enter your reason.");
        return;
    }

    localStorage.setItem("reason", value);
    window.location.href = "page6.html";
});