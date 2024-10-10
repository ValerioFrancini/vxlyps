// script.js

// Codice per l'animazione del logo durante il caricamento della pagina
window.addEventListener('load', () => {
    const logo = document.querySelector('.logo-image');
    const title = document.querySelector('.site-title');
    if (logo) {
        logo.classList.add('loaded'); // Aggiunge la classe 'loaded' al logo per attivare l'animazione
    }
    if (title) {
        title.classList.add('loaded'); // Aggiunge la classe 'loaded' al titolo per attivare l'animazione
    }
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

// Funzione per muovere lo slider manualmente con le frecce
function moveSlide(direction) {
    slides[currentIndex].classList.remove('active'); // Nasconde l'immagine attuale
    currentIndex = (currentIndex + direction + slides.length) % slides.length; // Calcola l'indice della prossima immagine
    slides[currentIndex].classList.add('active'); // Mostra la nuova immagine con effetto dissolvenza
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`; // Sposta lo slider alla nuova immagine
}

// Funzione per far avanzare automaticamente lo slider
function autoSlide() {
    moveSlide(1); // Passa all'immagine successiva
}

// Inizializza l'effetto di transizione automatica ogni 4 secondi
setInterval(autoSlide, 4000);

// Inizializza il primo slide come attivo
slides[currentIndex].classList.add('active');
