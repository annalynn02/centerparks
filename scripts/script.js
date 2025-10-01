// JavaScript Document
const menuButton = document.querySelector("header button"); 
const hetMenu = document.querySelector("header nav:nth-of-type(1) ul");
const tabs = document.querySelectorAll('.tab');
const carousels = document.querySelectorAll('.carousel');

menuButton.addEventListener("click", () => { //Verkorte manier van een function schrijven
  hetMenu.classList.toggle("is-open");
  menuButton.classList.toggle("open-menu"); 
});

tabs.forEach(tab => {
  tab.addEventListener('click', (e) => {
    e.preventDefault(); // voorkomen dat hij naar boven scrollt

    tabs.forEach(t => t.classList.remove('active'));
    carousels.forEach(c => c.classList.remove('active'));

    tab.classList.add('active');
    document.getElementById(tab.dataset.target).classList.add('active');
  });
});