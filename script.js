/* script.js */

let currentIndex = 0;
const slides = document.querySelectorAll('.slider-image');
const totalImages = slides.length;

function moveSlide(direction) {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + direction + totalImages) % totalImages;
    slides[currentIndex].classList.add('active');
}

// Inizializza il primo slide come attivo
slides[currentIndex].classList.add('active');
