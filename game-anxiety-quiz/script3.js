const nextButton = document.getElementById("nextButton");
const checkboxes = document.querySelectorAll('input[name="genre"]');
const otherCheckbox = document.getElementById("otherCheckbox");
const otherText = document.getElementById("otherText");


otherCheckbox.addEventListener("change", () => {
    if (otherCheckbox.checked) {
        otherText.style.display = "block";
    } else {
        otherText.style.display = "none";
        otherText.value = ""; 
    }
});

nextButton.addEventListener("click", () => {
    const selectedGenres = Array.from(checkboxes)
        .filter(cb => cb.checked)
        .map(cb => {
            if (cb.value === "Other") {
                const otherVal = otherText.value.trim();
                return otherVal ? otherVal : "Other";
            }
            return cb.value;
        });

    if (selectedGenres.length === 0) {
        alert("Please select at least one genre.");
        return;
    }
    
    localStorage.setItem("genres", JSON.stringify(selectedGenres));
    window.location.href = "page4.html";
});