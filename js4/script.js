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


let ar12 = ['test', 'west', 'list', 'class', 'best'];
let out12 = document.querySelector('.out-12');
function f12(ar12) {
    let temp = ar12[0];
    ar12[0] = ar12[ar12.length - 1];
    ar12[ar12.length - 1] = temp;
    out12.innerHTML = ar12.join('-');
}
f12(ar12);

let ar13 = ['test', 'west', 'list', 'class', 'best'];
let out13 = document.querySelector('.out-13');
function printArrayWithIndex(ar13) {
    let result = '';
    for (let i = 0; i < ar13.length; i++) {
        result += i + ' ' + ar13[i] + ' ';
    }
    out13.innerHTML = result;
}
printArrayWithIndex(ar13);

let ar14 = [1, 2, 3, 'hello', 66];
let out14 = document.querySelector('.out-14');
let result = '';
for (let i = ar14.length - 1; i >= 0; i--) {
    result += ar14[i] + ' ';
}
out14.innerHTML = result;

let ar15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
let out15 = document.querySelector('.out-15');
let result15 = '';
for ( let i = 0; i < ar15.length; i++) {
    if (ar15[i] > 0) {
    result15 += ar15[i] + ' ';
    }
}
out15.innerHTML = result15;

let ar16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78]; 
let  ar16_odd = [];
let ar16_even = [];
let out16odd = document.querySelector('.out-16-odd');
let out16even = document.querySelector('.out-16-even');
for(i = 0; i < ar16.length; i++) {
    if (ar16[i] % 2 === 0) {
        ar16_even.push(ar16[i]);
    } else {
        ar16_odd.push(ar16[i]);
    }
}
out16odd.innerHTML = ar16_odd.join(' ');
out16even.innerHTML = ar16_even.join(' ');

let ar17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
let out17 = document.querySelector('.out-17');
let count = 0;
for (i = 0; i < ar17.length; i++) {
    if (ar17[i] > 3) {
        count++;
    }
}
out17.innerHTML = count;

let ar18 = [15,24,13,78,21,4,45,67];
let out18 = document.querySelector('.out-18');
let max = ar18[0];
for(i = 1; i < ar18.length; i++) {
    if (ar18[i] > max) {
        max = ar18[i];
    }
}
out18.innerHTML = max;

let ar19 = [15,424,313,78,241,4,45,67];
let out19 = document.querySelector('.out-19');
let min = ar19[0];
for(i = 1; i < ar19.length; i++) {
    if(ar19[i] < min) {
        min = ar19[i];
    }
}
out19.innerHTML = min;

let ar20 = [4,5,6,7,8,9,10];
let out20 = document.querySelector('.out-20');
let summ = 0;
for(i = 0; i < ar20.length; i++) {
    summ += ar20[i];
}
out20.innerHTML = summ;




















