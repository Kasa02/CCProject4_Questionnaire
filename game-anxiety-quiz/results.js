function get(id) {
    return localStorage.getItem(id) || "N/A";
  }
  
    document.getElementById("plays").textContent = get("plays");
    document.getElementById("frequency").textContent = get("frequency");
    document.getElementById("genres").textContent = JSON.parse(get("genres") || "[]").join(", ");
    document.getElementById("anxious_while").textContent = get("anxious_while");
    document.getElementById("after_anxiety").textContent = get("after_anxiety");
    document.getElementById("reason").textContent = get("reason");
    document.getElementById("social_mode").textContent = get("social_mode");
    document.getElementById("purpose").textContent = get("purpose");
  
    let summary = "";
    const anxiousWhile = get("anxious_while");
    const anxiety = parseInt(get("after_anxiety"));
  
    const container = document.querySelector(".container");
  
    if (isNaN(anxiety)) {
        summary = "You skipped the anxiety level question.";
        container.style.backgroundColor = "#fefefe";
    } else if (anxiety <= 3) {
        summary = "😌 You seem calm after gaming. It looks like gaming helps you relax! 👾";
        container.style.backgroundColor = "#e3f2fd"; 
    } else if (anxiety <= 7) {
        summary = "😐 Your gaming-related anxiety is moderate. Try balancing playtime with breaks. 😴";
        container.style.backgroundColor = "#fffde7"; 
    } else {
        summary = "😣 Your anxiety level seems high after gaming. Consider reducing intense play or exploring relaxing games. 🎮";
        container.style.backgroundColor = "#ffebee"; 
    }
  
    document.getElementById("summary").textContent = summary;