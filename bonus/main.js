/*
BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 =>  tra 1 e 80
con difficoltà 2 => tra 1 e 50
*/

// 1. Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati
var pcList = [];
while (pcList.length < 16) {
  var randomNumber = randomInt(1, 100);
  if (!existInArray(randomNumber, pcList)) { // se non è (già) incluso nell'array
    pcList.push(randomNumber);
  }
}
// non necessario - lo faccio per vedere i numeri della lista in console in ordine crescente
var pcListOrdered = bubbleSort(pcList);
for (var i = 0; i < pcListOrdered.length; i++) {
  console.log(pcListOrdered[i]);
}

// 2. In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100. 
var difficultyLevel = 100; // questo al momento è fisso ma cambierà con l'introduzione della scelta della difficoltà
var userList = []; //array che conterrà gli inserimenti da parte dell'utente
var keepGoing = true; //variabile 'sentinella' che mi serve per bloccare le iterazioni rendendola falsa all'occorrenza di alcune condizioni

//messaggi per l'utente
alert("Benvenuto a campo minato easy! Niente immagini, solo numeri ;)")
var difficultyChoice = Number(prompt("Per prima cosa scegli il livello di difficoltà:\n\nDigita [0] per FACILE (ovvero 16 mine su 100 numeri)\n\nDigita [1] per INTERMEDIO (ovvero 16 mine su 80 numeri)\n\nDigita [2] per DIFFICILE (ovvero 16 mine su 50 numeri)"))
//imposto il livello di difficoltà secondo la scelta dell'utente utilizzando lo switch
switch (difficultyChoice) {
  case 1:
    difficultyLevel = 80;
    break;
  case 2:
    difficultyLevel = 50;
    break;
}
var maxTries = difficultyLevel - 16;
alert("Inserisci più numeri che puoi evitando di far saltare mine! Fai attenzione a seguire alcune regole:\n- Non ripetere lo stesso numero in tentativi successivi\n- Non inserire numeri al di fuori dell'intervallo 1-" + difficultyLevel + "\nPronto? Premi OK per iniziare ;)");

//il ciclo che segue il funzionamento del gioco secondo le istruzioni della consegna
while (keepGoing) {
  var tries = userList.length;
  var userNumber = Number(prompt("Inserimento " + (tries + 1) + ". Buona fortuna!"));
  //numero inserito è fuori dall'intervallo
  if (userNumber < 1 || userNumber > difficultyLevel) {
    alert("Partita terminata. Hai inserito un numero NON compreso tra 1 e " + difficultyLevel + ".");
    punteggioNumeroVietato(tries);
    keepGoing = false;
  //l'utente ripete l'inserimento di uno stesso numero
  } else if (existInArray(userNumber, userList)) {
    alert("Hai già inserito il numero " + userNumber + "... Partita terminata");
    punteggioNumeroVietato(tries);
    keepGoing = false;
  //il numero inserito corrisponde a una mina
  } else if (existInArray(userNumber, pcList)) {
    alert("Partita terminata. Il numero " + userNumber + " è una mina.");
    punteggioMinaTrovata(tries);
    keepGoing = false;
  //l'utente esaurisce i tentativi disponibili
  } else if (tries === maxTries) {
    alert("WOW! Hai fatto tutti gli inserimenti possibili senza beccare alcuna mina!!");
    keepGoing = false;
  //in ogni altro caso il numero inserito dall'utente viene assegnato all'array lista dell'utente
  } else {
    userList.push(userNumber);
  }
}


//FUNZIONI

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//verifica se un certo numero è contenuto all'interno di un array
function existInArray(num, array) {
  for (var i = 0; i < array.length; i++) {
    if (num === array[i]) {
      return true;
    }
  }
}

//per mostrare i punteggi a seconda del (macro)caso
function punteggioMinaTrovata(tentativi) {
  if (tentativi === 0) {
    return alert("Mina beccata al primo colpo... che sfiga :(\nIl tuo punteggio è " + tentativi + "\nRicarica la pagina per giocare un altra partita :)");
  } else if (tentativi === 1) {
    return alert("Mina beccata dopo un solo inserimento :(\nIl tuo punteggio è " + tentativi + "\nRicarica la pagina per giocare un altra partita :)");
  } else {
    return alert("Mina beccata dopo " + tentativi + " inserimenti.\nIl tuo punteggio è " + tentativi + "\nRicarica la pagina per giocare un altra partita :)");
  }
}
function punteggioNumeroVietato(tentativi) {
  return alert("Il tuo punteggio è " + tentativi + "\nRicarica la pagina per giocare un altra partita :)");
}


//plus - implemento l'algoritmo bubble sort per ordinare la lista del pc e visualizzare tutti gli elementi in console
function bubbleSort(array) {
  for (var j = array.length - 1; j > 0; j--) {
    for (var i = 0; i < j; i++) {
      if (array[i] > array[i + 1]) { // se un elemento è maggiore del suo successivo
        var temp = array[i]; // creo una variabile temporanea a cui assegno l'indice dell'elemento con indice maggiore, ecc.
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }
  return array;
}