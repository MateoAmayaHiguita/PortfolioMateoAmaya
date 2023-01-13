const nav__menu_hamburguesa = document.querySelector(".nav__menu_hamburguesa");
const links = document.querySelectorAll(".nav__menu_hamburguesa li a");
const button__menu = document.querySelector(".button__menu");

function handleMenu() {
  nav__menu_hamburguesa.classList.toggle("menu_show");
}

button__menu.addEventListener("click", handleMenu);

links.forEach((link) => {
  link.addEventListener("click", handleMenu);
});
