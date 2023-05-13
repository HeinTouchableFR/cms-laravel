// Annimations
document.addEventListener("turbolinks:load", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });
  const animateElements = document.querySelectorAll(".animate");
  animateElements.forEach((el) => observer.observe(el));
});
