// JavaScript Document
const menuButton = document.querySelector("header button"); 
const hetMenu = document.querySelector("header nav:nth-of-type(1) ul");
const tabs = document.querySelectorAll('ul li a');
const carousels = document.querySelectorAll('.carousel');

const categories = ['recent', 'favoriet', 'dichtbij'];

menuButton.addEventListener("click", () => { //Verkorte manier van een function schrijven
  hetMenu.classList.toggle("is-open");
  menuButton.classList.toggle("open-menu"); 
});

//if else stetment gebruiken

//met behulp van ChatGPT, maar werkt nogsteeds niet... (Promt was ik heb dit in mijn HTML.... ik wil met JS doormiddel van array en if else statements een tab systeem maken waarbij je op de tab klikt en de juiste categorie tevoorschijn komt. De HTML structuur is als volgt...)

// Klik-event toevoegen aan elke tab
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.getAttribute('data-target');

    // Eerst alles verbergen
    carousels.forEach(carousel => carousel.classList.remove('active'));
    tabs.forEach(t => t.classList.remove('active'));

    // Vervolgens de juiste categorie tonen
    if (categories.includes(target)) {
      tab.classList.add('active');
      const activeCarousel = document.querySelector(`.carousel[data-category="${target}"]`);
      if (activeCarousel) {
        activeCarousel.classList.add('active');
      }
      } else {
        console.error(`Categorie ${target} bestaat niet!`);
      }
    });
});
