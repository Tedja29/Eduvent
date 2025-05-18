// Tab switching logic
const tabs = document.querySelectorAll(".tab");
const cards = document.querySelectorAll(".event-card");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        const filter = tab.dataset.category;

        // Filter events
        cards.forEach(card => {
            if (filter === "all" || card.dataset.category === filter) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });
    });
});