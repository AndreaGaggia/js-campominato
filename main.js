/*
CAMPO
MINATO
*/

// 1. Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati
var pcList = [];
while (pcList.length < 16) {
  var randomNumber = randomInt(1, 100);
  if (!existInArray(randomNumber, pcList)) { // se non è (già) incluso nell'array
    pcList.push(randomNumber);
  }
}
console.log(pcList);

// 2. In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100. 
var difficultyLevel = 100; // questo al momento è fisso ma cambierà con l'introduzione della scelta della difficoltà
var maxTries = difficultyLevel - 16;
var userList = []; //array che conterrà gli inserimenti da parte dell'utente
var keepGoing = true; //variabile 'sentinella' che mi serve per bloccare le iterazioni rendendola falsa all'occorrenza di alcune condizioni

//messaggi per l'utente
alert("Benvenuto a campo minato easy! Niente immagini, solo numeri ;)")
alert("Inserisci più numeri che puoi evitando di far saltare mine! Fai attenzione a seguire alcune regole:\n- Non ripetere lo stesso numero in tentativi successivi\n- Non inserire numeri al di fuori dell'intervallo 1-100\nPronto? Premi OK per iniziare ;)");

//il ciclo che segue il funzionamento del gioco secondo le istruzioni della consegna
while (keepGoing && userList.length < maxTries) {
  var tries = userList.length;
  var userNumber = Number(prompt("Inserimento " + (tries + 1) + ". Buona fortuna!"));
  if (userNumber < 1 || userNumber > 100) {
    alert("Partita terminata. Hai inserito un numero NON compreso tra 1 e 100.");
    punteggioNumeroVietato(tries);
    keepGoing = false;
  } else if (existInArray(userNumber, userList)) {
    alert("Hai già inserito il numero " + userNumber + "... Partita terminata");
    punteggioNumeroVietato(tries);
    keepGoing = false;
  } else if (existInArray(userNumber, pcList)) {
    alert("Partita terminata. Il numero " + userNumber + " è una mina.");
    punteggioMinaTrovata(tries);
    keepGoing = false;
  } else {
    userList.push(userNumber);
    console.log(userList);
  }
}


//FUNZIONI

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


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
