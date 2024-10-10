/* script.js */

// Funzione per gestire l'apertura e la chiusura del menù burger con animazione
function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    const burgerIcon = document.querySelector('.burger-menu');
    
    // Aggiunge o rimuove la classe per mostrare/nascondere il menù
    menu.classList.toggle('open');

    // Aggiunge o rimuove la classe per ruotare l'icona del menù burger
    burgerIcon.classList.toggle('open');
}
