var schermo = document.getElementById('schermo');

var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');
var btn6 = document.getElementById('btn6');
var btn7 = document.getElementById('btn7');
var btn8 = document.getElementById('btn8');
var btn9 = document.getElementById('btn9');
var btn_punto = document.getElementById('punto');
var btn0 = document.getElementById('btn0');
var btn_del = document.getElementById('del');

var btn_più = document.getElementById('più');
var btn_meno = document.getElementById('meno');
var btn_per = document.getElementById('per');
var btn_diviso = document.getElementById('diviso');
var btn_canc = document.getElementById('canc');
var btn_uguale = document.getElementById('uguale');

//azioni al click per i numeri
btn1.addEventListener('click', function() {
  schermo.innerHTML = schermo.innerHTML + '1';
})
btn2.addEventListener('click', function() {
  schermo.innerHTML = schermo.innerHTML + '2';
})
btn3.addEventListener('click', function() {
  schermo.innerHTML = schermo.innerHTML + '3';
})
btn4.addEventListener('click', function() {
  schermo.innerHTML = schermo.innerHTML + '4';
})
btn5.addEventListener('click', function() {
  schermo.innerHTML = schermo.innerHTML + '5';
})
btn6.addEventListener('click', function() {
  schermo.innerHTML = schermo.innerHTML + '6';
})
btn7.addEventListener('click', function() {
  schermo.innerHTML = schermo.innerHTML + '7';
})
btn8.addEventListener('click', function() {
  schermo.innerHTML = schermo.innerHTML + '8';
})
btn9.addEventListener('click', function() {
  schermo.innerHTML = schermo.innerHTML + '9';
})
btn_punto.addEventListener('click', function() {
  schermo.innerHTML = schermo.innerHTML + '.';
})
btn0.addEventListener('click', function() {
  schermo.innerHTML = schermo.innerHTML + '0';
})
// btn_del.addEventListener('click', function() {
//   schermo.innerHTML = //qui ci va una funzione
// })

//azioni al click per i tasti funzione
btn_più.addEventListener('click', function() {
  schermo.innerHTML = schermo.innerHTML + '+';
})
btn_meno.addEventListener('click', function() {
  schermo.innerHTML = schermo.innerHTML + '-';
})
btn_per.addEventListener('click', function() {
  schermo.innerHTML = schermo.innerHTML + '*';
})
btn_diviso.addEventListener('click', function() {
  schermo.innerHTML = schermo.innerHTML + '/';
})
btn_canc.addEventListener('click', function() {
  schermo.innerHTML = '';
})
btn_uguale.addEventListener('click', function() {
  schermo.innerHTML = eval(schermo.innerHTML);
})