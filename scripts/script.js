// JavaScript Document

// Menu openen/sluiten
const menuButton = document.querySelector("header button"); 
const hetMenu = document.querySelector("header nav:nth-of-type(1) ul");

//Carousel links gingen nu door alle nav en a elementen in de pagina, maar we willen alleen die van de tweede section dus met behulp van ChatGPT ben ik op deze oplossing gekomen
const section = document.querySelector('section:nth-of-type(2)');
const deLinks = section.querySelectorAll('nav a');

// Menu openen/sluiten
menuButton.addEventListener("click", () => { //Verkorte manier van een function schrijven
  hetMenu.classList.toggle("is-open");
  menuButton.classList.toggle("open-menu"); 
});

// Carousel visibility met behulp van deze JS code https://codepen.io/shooft/pen/ZYQMVWy
deLinks.forEach(eenLink => {
	eenLink.addEventListener("click", toonUl);
});

function toonUl(event) {
	// normaal ga je navigeren als je op een ul klikt
	// dat wil je niet - dat 'zet' je met preventDefault(); uit
	event.preventDefault();
	
	/* eerst de class is-visible afhalen van de oude link en ul */
  	section.querySelector("a.is-visible").classList.remove("is-visible");
  	section.querySelector("ul.is-visible").classList.remove("is-visible");
	
	/* dan de class is-visible toevoegen aan de nieuwe link en ul */
	event.target.classList.add("is-visible");	
	section.querySelector(event.target.getAttribute("href")).classList.add("is-visible");
}