/* script.js */

// Funzione per gestire l'apertura e la chiusura del menù burger
function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('open');
}

// Slider - gestione della visualizzazione delle immagini
let currentIndex = 0;
const slides = document.querySelectorAll('.slider-image');
const totalImages = slides.length;

function moveSlide(direction) {
    slides[currentIndex].classList.remove('active'); // Nasconde l'immagine attuale
    currentIndex = (currentIndex + direction + totalImages) % totalImages; // Calcola l'indice dell'immagine

