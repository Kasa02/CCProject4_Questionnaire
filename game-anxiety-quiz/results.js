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
  
    const container = document.querySelector(".container");
    const summaryEl = document.getElementById("summary");
  
    const anxiousWhile = localStorage.getItem("anxious_while");
    const anxietyRaw = localStorage.getItem("after_anxiety");
    const anxiety = anxietyRaw !== null ? parseInt(anxietyRaw) : null;
    
    let summary = "";
  
    if (anxiousWhile === "yes" && anxiety !== null) {
        if (anxiety <= 3) {
        summary = "😌 You feel relaxed after playing. Gaming might be a healthy coping tool for you!";
        container.style.backgroundColor = "#e0f7fa";
    } else if (anxiety <= 7) {
        summary = "😐 Your post-gaming anxiety is moderate. Consider balancing intense sessions with breaks.";
        container.style.backgroundColor = "#fffde7"; 
    } else {
        summary = "😣 You reported high anxiety after gaming. Try reducing intense games or setting boundaries.";
        container.style.backgroundColor = "#ffebee"; 
        }
    } else if (anxiousWhile === "no") {
        summary = "🧘 You don't feel anxious while playing. That's great! Keep up the healthy habits.";
        container.style.backgroundColor = "#ede7f6"; 
    } else {
        summary = "🤔 We couldn't detect your anxiety level. Maybe you skipped that part.";
        container.style.backgroundColor = "#f5f5f5";
    }
  
    summaryEl.textContent = summary;