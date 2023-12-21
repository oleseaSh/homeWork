var a = 7;
var b = 9;
console.log(a*b);

var c=7;
var d=9;
console.log(7/9);

var e=3;
var f=5;
console.log(e+f);

var e1='3';
var f1=5;
console.log(e1+f1);
// '3' - читается как строка, поэтому он просто присоединяет ее.

// var e2=3;
// varf2=0;
// console.log(e2/f2); - выдает ошибку.

var e3=3;
var f3='Hello';
console.log(e3+f3);

var e4=3;
var f4='Hello';
console.log(e4*f4);

function showInputValue() {
    let input = document.querySelector('.i-8');
    let output = document.querySelector('.out-8');
    output.textContent = input.value;
  }
  
  let button = document.querySelector('.b-8');
  button.addEventListener('click', showInputValue);

