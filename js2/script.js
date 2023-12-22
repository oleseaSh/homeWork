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

function t9() {
  let input = document.querySelector('.i-9');
  let output = document.querySelector('.out-9');
  output.textContent = input.value;
  input.value = '';
}

let button2 = document.querySelector('.b-9');
button2.addEventListener('click', t9);

   // таск 10

 function t10() {
  let input = document.querySelector('.i-10');
  let output = document.querySelector('.out-10');
  output.textContent = input.value *20;
  input.value = '';
}

let button3 = document.querySelector('.b-10');
button3.addEventListener('click', t10);

function t11() {
  let input = document.querySelector('.i-11');
  let output = document.querySelector('.out-11');
  output.textContent = input.value +55;
  input.value = '';
}
let button4 = document.querySelector('.b-11');
button4.addEventListener('click', t11);

function t12() {
  let firstName = document.querySelector('.i-12-1').value;
  let lastName = document.querySelector('.i-12-2').value;
  let fullName = firstName + " " + lastName;
  document.querySelector(".out-12").innerHTML = "Hello " + fullName;

}
let button5 = document.querySelector('.b-12');
button5.addEventListener('click', t12);

function t13() {
  let a = Number(document.getElementById(".i-13-1").value);
  let b = Number(document.getElementById(".i-13-2").value);
  document.querySelector(".out-13").innerHTML = a + b;
}

let button6 = document.querySelector('.b-13');
button6.addEventListener('click', t13);

function t14() {
  let input = document.querySelector('.i-14');
  let output = document.querySelector('.out-14');
  input.value = 'Go';
  output.textContent = input.value;
}

let button7 = document.querySelector('.b-14');
button7.addEventListener('click', t14);

function t15() {
  let element = document.querySelector('.i-15');
  element.style.border = "4px solid red";
}

let button8 = document.querySelector('.b-15');
button8.addEventListener('click', t15);

function t16() {
  let input1 = document.querySelector('.i-16-1');
  let input2 = document.querySelector('.i-16-2');
  let result = input1.value + input2.value;
  document.querySelector('.out-16').innerHTML = result;
}

let button9 = document.querySelector('.b-16');
button9.addEventListener('click', t16);
