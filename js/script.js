/* CONSEGNA
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.*/

// FUNZIONI

// funzione per creare i quadratini

function drawSquare (index, numSquares) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `calc(100% / ${numSquares})`;
    square.style.height = square.style.width;
    square.innerHTML = index;
    return square;

}

// funzione per generare la griglia di gioco 
function play(e) {
    e.preventDefault();
    const playground = document.getElementById('playground'); // prendo il div dove ci sarà la griglia di gioco
    playground.innerHTML = ''; // ad un nuovo submit la griglia si svuoterà

    const level = document.getElementById('level').value;// prendo il livello scelto dall'utente
    console.log(level);

    let squareNumbers; //variabile per impostare il numero di quadrati della griglia a seconda del livello
    switch (level) {
        case 'easy':
            squareNumbers = 100;
            break;
        case 'medium':
            squareNumbers = 81;
            break;
        case 'hard':
            squareNumbers = 49;
            break;
    };
    
    // variabile per impostare numero di quadratini per fila della griglia
    let squarePerRow = Math.sqrt(squareNumbers);
    console.log(squarePerRow);

    // ciclo for per generare i quadratini all'interno della griglia
    for (let i = 1; i <= squareNumbers; i++) {
        const square = drawSquare(i, squarePerRow);
        playground.appendChild(square);

    }

    playground.addEventListener('click', (ev) => {
        const squareEl = ev.target;
        squareEl.classList.add("noBomb");
        console.dir(squareEl.innerText);
    })
}



// creo variabile per prendere il form ed aggiungergli l'evento submit e la funzione play

const levelChoice = document.getElementById('levelForm');
levelChoice.addEventListener('submit', play);