// script.js

// Codice per l'animazione del logo durante il caricamento della pagina
window.addEventListener('load', () => {
    const logo = document.querySelector('.logo-image');
    logo.classList.add('loaded'); // Aggiunge la classe 'loaded' al logo per attivare l'animazione
});

// Codice per lo slider delle immagini
let currentIndex = 0;
const slides = document.querySelectorAll('.slider-image');
const totalImages = slides.length;

function moveSlide(direction) {
    slides[currentIndex].classList.remove('active'); // Nasconde l'immagine attuale
    currentIndex = (currentIndex + direction + totalImages) % totalImages; // Calcola l'indice della prossima immagine
    slides[currentIndex].classList.add('active'); // Mostra l'immagine successiva
}

// Funzione per far avanzare automaticamente le immagini
function autoSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalImages;
    slides[currentIndex].classList.add('active');
}

// Inizializza l'effetto di transizione automatica ogni 5 secondi
setInterval(autoSlide, 5000);

// Inizializza il primo slide come attivo
slides[currentIndex].classList.add('active');
