// JavaScript Document
console.log("hi");

let menuButton = document.querySelector("header nav button");
let hetMenu = document.querySelector("header nav");
let deButton = document.querySelector("button");

menuButton .addEventListener("click", toggleMenu);

function toggleMenu() {
  hetMenu.classList.toggle("is-open");
}

deButton.addEventListener("click", toggleButton);

function toggleButton() {
  deButton.classList.toggle("open-menu");
}