const divMenu = document.getElementById("div-menu");
const divClose = document.getElementById("div-close");
const navResponsive = document.getElementById("nav-responsive-out");
const navRegistrar = document.getElementById("nav-registrar");

navResponsive.style.display = "none";
navRegistrar.style.display = "none";

divMenu.addEventListener("click", function () {
  if (navResponsive.style.display === "none") {
    navResponsive.style.display = "flex";
  } else {
    navResponsive.style.display = "none";
  }
});

divClose.addEventListener("click", function () {
  if (navResponsive.style.display === "none") {
    navResponsive.style.display = "flex";
  } else {
    navResponsive.style.display = "none";
  }
});
