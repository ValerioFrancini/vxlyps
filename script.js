// script.js

// Codice per l'animazione del logo durante il caricamento della pagina
window.addEventListener('load', () => {
    const logo = document.querySelector('.logo-image');
    logo.classList.add('loaded'); // Aggiunge la classe 'loaded' al logo per attivare l'animazione
});

// Funzione per il preloading delle immagini
function preloadImages() {
    const imageUrls = [
        'img/img_10.JPG',
        'img/img_2.JPG',
        'img/img_3.JPG',
        'img/img_4.JPG',
        'img/img_5.JPG',
        'img/img_6.JPG',
        'img/img_7.JPG',
        'img/img_8.JPG',
        'img/img_9.JPG'
    ];

    imageUrls.forEach((url) => {
        const img = new Image();
        img.src = url;
    });
}

// Codice per lo slider con transizione di scorrimento
let currentIndex = 0;
const slides = document.querySelectorAll('.slider-image');
const sliderContainer = document.querySelector('.slider');

function moveSlide(direction) {
    currentIndex = (currentIndex + direction + slides.length) % slides.length; // Calcola l'indice della prossima immagine
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`; // Sposta lo slider alla nuova immagine
}

// Funzione per far avanzare automaticamente le immagini
function autoSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`; // Sposta lo slider alla nuova immagine
}

// Inizializza l'effetto di transizione automatica ogni 5 secondi
setInterval(autoSlide, 5000);

// Inizializza il primo slide come attivo
sliderContainer.style.transform = `translateX(0)`;

