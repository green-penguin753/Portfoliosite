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


const skillDetailsList = document.querySelectorAll(".skill-details-container");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");

        observer.unobserve(entry.target);
      }
    });
  },

  { threshold: 0.5 }
);

skillDetailsList.forEach((container) => observer.observe(container));
