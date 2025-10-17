const menuBtn = document.getElementById("menu-btn");
const hamburgerNav = document.getElementById("hamburger-nav");

menuBtn.addEventListener("click", () => {
  hamburgerNav.classList.toggle("open");
  menuBtn.classList.toggle("open");
});

const hoverBorders = document.querySelectorAll(".hover-border");

hoverBorders.forEach((hoverBorder) => {
  hoverBorder.addEventListener("mouseover", () => {
    hoverBorder.classList.add("hovered");
  });

  hoverBorder.addEventListener("mouseout", () => {
    hoverBorder.classList.remove("hovered");
  });
});
