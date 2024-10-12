/* =========================
      BODY
   ========================= */
body {
    margin-top: 130px; /* Modifica questo valore in base all'altezza effettiva del tuo header */
}

/* =========================
   HEADER & LOGO STYLES
   ========================= */
.header {
    display: flex;
    align-items: center;
    justify-content: space-between; /* Distribuisce il logo e il titolo correttamente */
    background-color: #ffffff;
    padding: 5px 0px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0; /* Posiziona l'header in cima alla pagina */
    width: 100%; /* Assicura che l'header occupi tutta la larghezza */
    z-index: 1000; /* Assicura che l'header sia sempre sopra gli altri elementi della pagina */
}

.logo-title {
    display: flex;
    align-items: center;
    justify-content: flex-start; /* Mantiene il logo a sinistra */
}

.logo-image {
    max-width: 170px; /* Dimensione massima del logo */
    height: auto;
    margin-right: 15px; /* Spazio tra il logo e il titolo */
}

.site-title {
    font-size: 1.8rem; /* Regola la dimensione del titolo per renderlo ben visibile */
    color: #2c3e50;
    margin: 0 auto; /* Utilizza margini automatici per centrare il titolo */
    text-align: center; /* Allinea il testo del titolo al centro */
    flex: 1; /* Fa sì che il titolo occupi lo spazio disponibile per centrarlo */
}

.home-link {
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
}

/* Responsive adjustments for mobile */
@media (max-width: 768px) {
    .site-title {
        display: none; /* Nasconde il titolo sui dispositivi mobili per salvare spazio */
    }
    
    .header {
        display: flex;
        justify-content: center; /* Centra tutto il contenuto all'interno dell'header */
    }

    .logo-title {
        display: flex;
        justify-content: center; /* Centra il logo su mobile */
        flex: initial; /* Rimuove il comportamento flex precedente */
        margin: 0 auto; /* Assicura che il logo si posizioni al centro */
    }
}


/* =========================
   BURGER MENU STYLES
   ========================= */
.burger-menu {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    position: absolute; /* Imposta la posizione del burger menu */
    right: 50px; /* Posiziona il menu a 20px dal bordo destro */
    top: 30px; /* Posiziona il menu a 15px dall'alto */
    z-index: 1001;
}

.burger-menu .line {
    width: 37px;
    height: 2px;
    background-color: #2c3e50;
    margin: 3px 0;
    transition: transform 0.3s ease, opacity 0.3s ease;
}

/* Apri e chiudi BURGERMENU */
.menu-toggle:checked + .burger-menu .line:nth-child(1) {
    transform: rotate(45deg) translate(7px, 6px);
}

.menu-toggle:checked + .burger-menu .line:nth-child(2) {
    opacity: 0;
}

.menu-toggle:checked + .burger-menu .line:nth-child(3) {
    transform: rotate(-45deg) translate(4px, -5px);
}

/* Hide menu checkbox */
.menu-toggle {
    display: none;
}

/* =========================
   NAV MENU STYLES
   ========================= */
.nav-menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 90px;
    right: 12px;
    background-color: #fafafa;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    border-radius: 7px;
    padding: 15px;
    z-index: 1000;
    width: 130px; /* Imposta una larghezza fissa per il menu */
}

.nav-menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 65%; /* Assicura che la lista ul occupi tutta la larghezza del menu */
}

.nav-menu ul li {
    margin: 11px 0;
    width: 100%; /* Assicura che ogni elemento li occupi tutta la larghezza del menu */
}

.nav-menu ul li a {
    display: block; /* Trasforma l'elemento <a> in un blocco per occupare tutta la larghezza */
    width: 100%; /* Assicura che lo sfondo si estenda su tutta la larghezza del contenitore */
    padding: 7px 23px;
    text-decoration: none;
    font-size: 1.1rem;
    color: #2c3e50;
    background-color: #f0f0f0;
    border-radius: 12px;
    transition: background-color 0.3s ease, color 0.3s ease;
}

/* Hover effect for menu items */
.nav-menu ul li a:hover {
    background-color: #FF5A5F;
    color: white;
}

/* Show menu when burger menu is active */
.menu-toggle:checked + .burger-menu + .nav-menu {
    display: flex;
}

/* =========================
   SLIDER STYLES
   ========================= */
.slider-container {
    position: relative;
    max-width: 90%;
    height: 50vh;
    margin: auto;
    overflow: hidden;
    border-radius: 10px;
    background-color: #f0f0f0;
}

.slider {
    display: flex;
    transition: transform 0.8s ease;
}

.slider-image {
    min-width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

/* Stili migliorati per i controlli dello slider */
.prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    padding: 12px;
    color: white;
    background-color: rgba(0, 0, 0, 0.6); /* Colore di sfondo più scuro */
    border: none;
    border-radius: 50%; /* Rende le frecce circolari */
    user-select: none;
    transition: background-color 0.3s ease, transform 0.2s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Ombreggiatura per un effetto di profondità */
}

.prev:hover, .next:hover {
    background-color: rgba(0, 0, 0, 0.8); /* Colore di sfondo più scuro al passaggio del mouse */
    transform: scale(1.1); /* Leggero ingrandimento al passaggio del mouse */
}

.prev {
    left: 10px; /* Posiziona la freccia sinistra */
}

.next {
    right: 10px; /* Posiziona la freccia destra */
}

/* Nascondi le freccette su dispositivi mobili */
@media (max-width: 768px) {
    .prev, .next {
        display: none;
    }
}

/* Responsive slider adjustments */
@media (max-width: 768px) {
    .slider-container {
        max-width: 95%;
        height: 30vh;
    }
}

@media (min-width: 1024px) {
    .slider-container {
        max-width: 70%;
        height: 60vh;
    }
}

/* Stili per i puntini di navigazione dello slider */
.dots-container {
    position: absolute; /* Posiziona i puntini all'interno dello slider */
    bottom: 5px; /* Sposta i puntini molto vicini alla parte inferiore dell'immagine */
    left: 50%; /* Centra i puntini orizzontalmente */
    transform: translateX(-50%); /* Centra i puntini rispetto alla loro posizione */
    margin: 0; /* Rimuove qualsiasi margine extra */
    text-align: center; /* Allinea i puntini al centro */
    z-index: 2; /* Assicura che i puntini siano sopra l'immagine */
    pointer-events: none; /* Assicura che i puntini non interferiscano con altri elementi cliccabili */
}

.dot {
    display: inline-block;
    width: 6px; /* Dimensione ridotta del puntino */
    height: 6px; /* Dimensione ridotta del puntino */
    margin: 0 3.5px; /* Spazio tra i puntini */
    background-color: #bbb;
    border-radius: 50%; /* Rende i puntini rotondi */
    cursor: pointer;
    transition: background-color 0.3s ease;
    pointer-events: all; /* Permette di cliccare sui puntini */
}

.dot.active {
    background-color: #FF5A5F; /* Colore attivo del puntino quando la foto è selezionata */
}


/* =========================
   AIRBNB BUTTON STYLES
   ========================= */
.booking-buttons-container {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    width: 100%;
    z-index: 1000;
}

.airbnb-button {
    background: linear-gradient(135deg, #FF4E50, #FF6B6B); /* Gradiente rosso più acceso */
    color: white;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    padding: 15px 40px;
    border: none;
    border-radius: 50px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
    cursor: pointer;
    display: block;
    margin: 20px auto;
}

.airbnb-button:hover {
    background: linear-gradient(135deg, #FF6B6B, #FF4E50); /* Colore del gradiente invertito per l'effetto hover */
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(255, 110, 110, 0.5); /* Leggero effetto glow al passaggio del mouse */
}

.airbnb-button:active {
    transform: translateY(2px);
    background: #FF4E50;
    box-shadow: 0 4px 8px rgba(255, 110, 110, 0.7); /* Effetto glow più intenso durante il clic */
}

/* Stili per il pulsante Airbnb su dispositivi mobili */
@media (max-width: 768px) {
    .booking-buttons-container {
        position: relative; /* Cambia da statico a relative per controllare meglio il posizionamento */
        transform: none; /* Rimuove eventuali trasformazioni */
        margin-top: 15px; /* Aggiunge uno spazio sopra il pulsante per separarlo dallo slider */
        width: 100%; /* Imposta la larghezza al 100% */
        display: flex;
        justify-content: center; /* Centra il pulsante */
        z-index: 1; /* Assicura che il pulsante non sia coperto da altri elementi */
        visibility: visible; /* Assicura che il pulsante sia visibile */
    }

    .airbnb-button {
        width: 80%; /* Riduci la larghezza del pulsante su mobile */
        font-size: 0.9rem; /* Riduci leggermente la dimensione del testo */
        padding: 10px 15px; /* Riduci il padding per un aspetto più compatto */
        margin: 10px auto; /* Spazio minore attorno al pulsante su mobile */
        display: block; /* Assicura che il pulsante sia visualizzato come un blocco */
    }
}




/* =========================
   CARD STYLES
   ========================= */
.card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    padding: 20px;
    justify-items: center;
}

.card {
    background-color: #ffffff;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    padding: 20px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

/* =========================
   CONTACT CARD STYLES
   ========================= */
.contact-card {
    display: flex;
    align-items: center;
    justify-content: flex-start; /* Allinea il contenuto a sinistra */
    gap: 20px; /* Spazio tra l'immagine e il testo */
    margin: 20px auto; /* Centra la card nella pagina */
    max-width: 800px; /* Limita la larghezza della card */
    background-color: #ffffff; /* Colore di sfondo della card */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Ombreggiatura leggera */
    padding: 20px;
    border-radius: 10px; /* Angoli arrotondati */
    text-align: left; /* Allinea il testo a sinistra */
}

/* Stile dell'immagine del profilo */
.profile-pic {
    width: 120px; /* Dimensione della foto */
    height: 120px; /* Mantiene la stessa altezza della larghezza per rendere la foto circolare */
    border-radius: 50%; /* Rende l'immagine circolare */
    object-fit: cover; /* Mantiene le proporzioni della foto */
    cursor: pointer; /* Mostra il cursore di puntatore per indicare che è cliccabile */
}

/* Stile specifico per dispositivi mobili */
@media (max-width: 768px) {
    .contact-card {
        flex-direction: column; /* Disposizione verticale degli elementi nella card su mobile */
        align-items: center; /* Centra tutti gli elementi */
        text-align: center; /* Centra il testo */
    }

    .profile-pic {
        margin-bottom: 15px; /* Spazio tra la foto e il testo su mobile */
    }
}


/* =========================
   FOOTER STYLES
   ========================= */
.footer {
    background-color: #2c3e50;
    color: #ffffff;
    padding: 20px 0;
    text-align: center;
}

.footer-content {
    display: flex;
    flex-direction: row; /* Cambia la disposizione degli elementi in una fila */
    justify-content: space-between; /* Distribuisce lo spazio tra gli elementi */
    align-items: center;
    width: 90%; /* Assicura che gli elementi riempiano la larghezza del footer */
    padding: 0 10px; /* Aggiunge un po' di spazio sui lati */
}

.footer-language {
    order: 2; /* Posiziona il selettore della lingua a dx */
}

.social-icons {
    order: 1; /* Posiziona l'icona di Instagram a sx */
}

.instagram-icon {
    width: 34px; /* Dimensione ridotta dell'icona */
    height: 34px; /* Altezza ridotta dell'icona */
    transition: transform 0.3s ease, filter 0.3s ease; /* Transizione per l'effetto hover */
}

.footer-language select {
    background-color: #ffffff;
    color: #2c3e50;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
}

.footer-bottom {
    margin-top: 10px;
    font-size: 0.9rem;
    color: #d1d1d1;
}
