document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll(".star");
  const ratingValue = document.getElementById("rating-value");
  const ratingSystem = document.getElementById("rating-system");

  // Verificar si el usuario ya ha valorado
  if (localStorage.getItem("rated")) {
    ratingSystem.style.display = "none";
  }

  stars.forEach((star) => {
    star.addEventListener("mouseover", () => {
      const selectedValue = star.getAttribute("data-value");
      updateStarColors(selectedValue);
      ratingValue.textContent = `Valoración: ${selectedValue} estrellas`;
    });

    star.addEventListener("mouseout", () => {
      const savedRating = localStorage.getItem("rating") || 0;
      updateStarColors(savedRating);
      ratingValue.textContent = `Valoración: ${savedRating} estrellas`;
    });

    star.addEventListener("click", () => {
      const selectedValue = star.getAttribute("data-value");

      // Guardar que el usuario ya ha valorado
      localStorage.setItem("rated", "true");
      localStorage.setItem("rating", selectedValue);

      // Aplicar animación de desaparición y ocultar el div después
      ratingSystem.classList.add("fade-out");
      setTimeout(() => {
        ratingSystem.style.display = "none";
      }, 500); // Duración de la animación en milisegundos

      ratingValue.textContent = `Valoración: ${selectedValue} estrellas`;
    });
  });

  function updateStarColors(value) {
    stars.forEach((star) => {
      const starValue = parseInt(star.getAttribute("data-value"));
      if (starValue <= value) {
        star.style.color = "#ffc107";
      } else {
        star.style.color = "#ddd";
      }
    });
  }

  // Inicializar el color de las estrellas basado en la valoración guardada
  const savedRating = localStorage.getItem("rating") || 0;
  updateStarColors(savedRating);
  ratingValue.textContent = `Valoración: ${savedRating} estrellas`;
});

// const header = document.getElementsByClassName("header");
// const footer = document.getElementsByClassName("footer");

// header.style.display = "none";
