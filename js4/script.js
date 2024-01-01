function arrayOutput() {
let ar1 = ['Hello', '445', 6, true, false, 1];
let output = document.querySelector('.out-1');
output.textContent = ar1;
}
let button1 = document.querySelector('.b-1');
button1.addEventListener('click', arrayOutput);



