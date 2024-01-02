function arrayOutput() {
let ar1 = ['Hello', '445', 6, true, false, 1];
let output = document.querySelector('.out-1');
output.textContent = ar1;
}
let button1 = document.querySelector('.b-1');
button1.addEventListener('click', arrayOutput);

function arrOut2() {
    let ar2 = ['Hello', 42, true, 'World', false, 3.14]; 
    let out2 = document.querySelector('.out-2'); 
    out2.innerHTML = ar2.join(', ');
}
let button2 = document.querySelector('.b-2');
button2.addEventListener('click', arrOut2);

let ar3 = [1, 2, 3, 4, 5, 6, 7];
console.log('Task 3 - ' + ar3.length);

let ar4 = ['Ira', 'Dasha', 'Katie', 'John', 'Elis', 'Kira', 'Alex', 'Elena', 'Misha'];
let out4 = document.querySelector('.out-4');
out4.innerHTML = ar4[0] + " " + ar4[3] + ' ' + ar4[8];

let ar5 = [55,56,57,58,59,60,61,62];
let sum = ar5[0] + ar5[2] + ar5[3];
let out5 = document.querySelector('.out-5');
out5.innerHTML = sum;

let ar6 = ['Олеся', 'Весы', '14', 'октября'];
let out6 = document.querySelector('.out-6');
out6.innerHTML = ar6.join(' ');

let ar7 = ['china', 'india', 'brazil', 'japan', 'egypt'];
let out7 = document.querySelector('.out-7');
function f7() {
    ar7[5] = 'italy';
    ar7[6] = 'turkey';
    ar7[7] = 'vietnam';
}
f7();
out7.innerHTML = ar7.join(' ');

let ar8 = [];
    ar8[3] = 3.14;
    ar8[4] = 17;
    ar8[6] = 5;

let out8 = document.querySelector('.out-8');
out8.innerHTML = ar8.join('-');

let out8_1 = document.querySelector('.out-8-1');
out8_1.innerHTML = ar8.length;

let ar9 = [100, 200, 300, 400, 700, 121];
let out9 = document.querySelector('.out-9');
out9.innerHTML = ar9[ar9.length-1];

let ar10 = [100, 200, 300, 400, 700, 121];
let out10 = document.querySelector('.out-10');
function f10() {
    let sum = ar10[0] + ar10[ar10.length-1];
    out10.innerHTML = sum;
}
f10();

let ar11 = [2,3,4,5,6,7];
let out11 = document.querySelector('.out-11');
function SwapElements(arr, index1, index2) {
    [arr[index1],arr[index2]] = [arr[index2], arr[index1]];
}
SwapElements(ar11,2,4);
out11.innerHTML = ar11.join(' ');







