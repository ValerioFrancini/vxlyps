<script>
// script.js

let currentIndex = 0;
const slides = document.querySelectorAll('.slider-image');
const totalImages = slides.length;

// Funzione per muovere lo slider manualmente
function moveSlide(direction) {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + direction + totalImages) % totalImages;
    slides[currentIndex].classList.add('active');
}

// Funzione per far avanzare automaticamente le immagini
function autoSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalImages;
    slides[currentIndex].classList.add('active');
}

// Avvia l'effetto di transizione automatica ogni 5 secondi
setInterval(autoSlide, 5000);

// Inizializza il primo slide come attivo
slides[currentIndex].classList.add('active');
</script>
