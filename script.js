const buttons = document.querySelectorAll(".filter-buttons button");
const cards = document.querySelectorAll(".gallery .card");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");

    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    cards.forEach(card => {
      const category = card.getAttribute("data-category");
      if (filter === "all" || category === filter) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    });
  });
});
