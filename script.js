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

// Codice per lo slider con transizione di scorrimento e puntini di navigazione
let currentIndex = 0;
const slides = document.querySelectorAll('.slider-image');
const dots = document.querySelectorAll('.dot');
const sliderContainer = document.querySelector('.slider');

// Funzione per aggiornare lo stato attivo dei puntini
function updateDots() {
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Funzione per muovere lo slider manualmente con le frecce
function moveSlide(direction) {
    if (slides.length > 0) { // Verifica che ci siano immagini nello slider
        currentIndex = (currentIndex + direction + slides.length) % slides.length; // Calcola l'indice della prossima immagine
        sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`; // Sposta lo slider alla nuova immagine
        updateDots(); // Aggiorna lo stato dei puntini
    }
}

// Funzione per passare a uno specifico slide cliccando sul puntino
function currentSlide(index) {
    currentIndex = index;
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots(); // Aggiorna lo stato dei puntini
}

// Funzione per far avanzare automaticamente lo slider
function autoSlide() {
    moveSlide(1); // Passa all'immagine successiva
}

// Inizializza l'effetto di transizione automatica ogni 4 secondi
setInterval(autoSlide, 4000);

// Inizializza il primo slide come attivo e imposta lo stato iniziale dei puntini
if (slides.length > 0) {
    updateDots();
}

// Funzione per cambiare la lingua del sito
function changeLanguage(language) {
    if (language === 'it') {
        window.location.href = 'index.html'; // Cambia alla versione italiana del sito
    } else if (language === 'en') {
        window.location.href = 'index-en.html'; // Cambia alla versione inglese del sito
    }
}

// JavaScript per il menu burger
const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-menu');
burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('open'); // Anima il menu burger
    navMenu.classList.toggle('visible'); // Mostra/nasconde il menu
});
