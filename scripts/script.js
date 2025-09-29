// JavaScript Document
const menuButton = document.querySelector("header button"); 
const hetMenu = document.querySelector("header nav:nth-of-type(1) ul");

menuButton.addEventListener("click", () => { //Verkorte manier van een function schrijven
  hetMenu.classList.toggle("is-open");
  menuButton.classList.toggle("open-menu"); 
});