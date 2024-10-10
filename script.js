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

/* Stili aggiornati per lo slider con altezza ridotta */
.slider-container {
    position: relative;
    max-width: 100%;
    height: 300px; /* Altezza ridotta per un aspetto più allungato */
    margin: auto;
    overflow: hidden;
    border-radius: 10px;
    background-color: #f0f0f0; /* Colore di sfondo per evitare spazi vuoti durante il caricamento */
}

.slider {
    display: flex; /* Disposizione delle immagini in linea orizzontale */
    transition: transform 0.8s ease; /* Aggiunge la transizione di scorrimento */
}

.slider-image {
    min-width: 100%; /* Ogni immagine occupa l'intera larghezza del contenitore */
    height: 100%; /* Adatta l'immagine all'altezza del contenitore */
    object-fit: cover; /* Mantiene le proporzioni corrette, riempendo il contenitore senza distorcere l'immagine */
    position: relative;
}



// Codice per lo slider con transizione di scorrimento
let currentIndex = 0;
const slides = document.querySelectorAll('.slider-image');
const sliderContainer = document.querySelector('.slider');

function moveSlide(direction) {
    slides[currentIndex].classList.remove('active'); // Rimuove l'effetto di dissolvenza dall'immagine corrente
    currentIndex = (currentIndex + direction + slides.length) % slides.length; // Calcola l'indice della prossima immagine
    slides[currentIndex].classList.add('active'); // Applica l'effetto di dissolvenza alla nuova immagine
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`; // Sposta lo slider alla nuova immagine
}

// Inizializza l'effetto di transizione automatica ogni 4 secondi
setInterval(autoSlide, 4000);

// Inizializza il primo slide come attivo
slides[currentIndex].classList.add('active');

