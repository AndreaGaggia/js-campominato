/*
Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 =>  tra 1 e 80
con difficoltà 2 => tra 1 e 50
Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Proviamo prima con pochi numeri, inserire 86 numeri ogni volta potrebbe essere un po’ scocciante :wink:
Le validazioni e i controlli possiamo farli anche in un secondo momento.
Ricordatevi che se non sappiamo quante volte dobbiamo fare una cosa ci serve… :stuck_out_tongue:
Buon divertimento a tutt* :muscle: :video_game:
*/

// 1. Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati
var pcNumberList = [];
var listLength = 16;
while (pcNumberList.length < listLength) {
  var randomNumber = randomInt(1, 100);
  if (!(pcNumberList.includes(randomNumber))) { // se non è (già) incluso nell'array
    pcNumberList.push(randomNumber);
  }
}
console.log(pcNumberList);

// 2. In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100. 
var userNumberList = [];
var maxTentativi = 100 - 16;
var keepGoing = true;
while (keepGoing && userNumberList.length < maxTentativi) {
  var userNumber = Number(prompt("Inserisci un numero da 1 a 100\nNon inserire più volte lo stesso numero"));
  if (userNumber < 1 || userNumber > 100) {
    alert("Devi inserire un numero compreso tra 1 e 100. Ricarica la pagina per riprovare.");
    keepGoing = false;
  }
  switch (userNumber >= 1 && userNumber <= 100) {
    // il numero inserito è presente all'interno della pcNumberList e quindi la partita termina
    case match(userNumber, pcNumberList):
      console.log("Hai vinto! Il numero " + userNumber + " è in lista.");
      keepGoing = false;
      break;
    // l'utente inserisce due volte lo stesso numero e quindi la partita termina
    case match(userNumber, userNumberList):
      console.log("Hai già inserito il numero " + userNumber + "... Partita finita");
      keepGoing = false;
      break;
    // tentativo buono, numero inserito nell'array
    case !(userNumberList.includes(userNumber)):
      userNumberList.push(userNumber);
      break;
  }
}
var tentativiBuoni = userNumberList.length;
console.log("N° tentativi a vuoto ma corretti: " + tentativiBuoni);

// FUNZIONI
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function match(num, array) {
  for (var i = 0; i < array.length; i++) {
    if (num === array[i]) {
      return true;
    }
  }
}