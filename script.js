// script.js

// Codice esistente per lo slider
let currentIndex = 0;
const slides = document.querySelectorAll('.slider-image');
const totalImages = slides.length;

function moveSlide(direction) {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + direction + totalImages) % totalImages;
    slides[currentIndex].classList.add('active');
}

function autoSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalImages;
    slides[currentIndex].classList.add('active');
}

setInterval(autoSlide, 5000);
slides[currentIndex].classList.add('active');

// Nuovo codice per l'animazione del logo
window.addEventListener('load', () => {
    const logo = document.querySelector('.logo-image');
    logo.classList.add('loaded'); // Aggiunge la classe 'loaded' al logo per attivare l'animazione
});
