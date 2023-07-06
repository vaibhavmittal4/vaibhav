const toggleButton = document.getElementById("menu-toggle");
const accessibilityMenu = document.getElementById("accessibility-menu");

toggleButton.addEventListener("click", () => {
  accessibilityMenu.classList.toggle("active-menu");
});
