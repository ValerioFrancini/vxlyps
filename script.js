// script.js

// Codice per l'animazione del logo durante il caricamento della pagina
window.addEventListener('load', () => {
    const logo = document.querySelector('.logo-image');
    logo.classList.add('loaded'); // Aggiunge la classe 'loaded' al logo per attivare l'animazione
});

/* Stili per il pulsante "Prenota su Airbnb" */
.airbnb-button-container {
    display: flex;
    justify-content: center;
    margin: 20px 0;
}

.airbnb-button {
    background: linear-gradient(135deg, #FF5A5F, #FF7E82); /* Gradiente con i colori di Airbnb */
    color: white;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    padding: 15px 30px;
    border: none;
    border-radius: 30px; /* Angoli arrotondati per un look moderno */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease; /* Effetti al passaggio del mouse */
    cursor: pointer;
}

.airbnb-button:hover {
    background: linear-gradient(135deg, #FF7E82, #FF5A5F); /* Inverti il gradiente al passaggio del mouse */
    transform: translateY(-3px); /* Solleva leggermente il pulsante */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Aumenta l'ombreggiatura */
}

.airbnb-button:active {
    transform: translateY(1px); /* Effetto di clic quando si preme il pulsante */
    background: #FF5A5F; /* Colore solido per un feedback immediato */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Riduce l'ombreggiatura quando il pulsante viene cliccato */
}


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

// Attiva l'animazione del logo e del titolo al caricamento della pagina
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


/* Stili aggiornati per lo slider con altezza ridotta */
.slider-container {
    position: relative;
    max-width: 100%;
    height: 400px; /* Altezza ridotta per un aspetto più allungato */
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

// Funzione per muovere lo slider manualmente con le frecce
function moveSlide(direction) {
    slides[currentIndex].classList.remove('active'); // Nasconde l'immagine attuale
    currentIndex = (currentIndex + direction + slides.length) % slides.length; // Calcola l'indice della prossima immagine
    slides[currentIndex].classList.add('active'); // Mostra la nuova immagine con effetto dissolvenza
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`; // Sposta lo slider alla nuova immagine
}

// Inizializza l'effetto di transizione automatica ogni 4 secondi
setInterval(autoSlide, 4000);

// Inizializza il primo slide come attivo
slides[currentIndex].classList.add('active');

