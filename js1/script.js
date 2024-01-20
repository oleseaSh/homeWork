var myName = "Olesea";
console.log (myName);



// вывод месяца рождения строкой.
let month = "octomber";
console.log(month);

// вывод месяца рождения строкой2.
let birthday = new Date('Octomber 10, 1983');
let birthMonth = birthday.toLocaleString('default',{month: 'long'});
console.log(birthMonth);

// вывод месяца рождения числом.
let numberMonth = 10;
console.log(numberMonth);

let message = "Добро пожаловать на курс";
console.log(message);

// alert(2019);

console.log(2019-200);

document.getElementById("six").innerText = "Hello World";

var result = 12*12;
document.getElementById("seven").innerHTML = result;

document.querySelector(".out-8").innerText = "task-8";

document.querySelector('.out-10').innerHTML = '<h2>Hi</h2>';

document.querySelector('.out-11').innerHTML = '123';
document.querySelector('.out-11').innerHTML += '456';

var a = document.querySelector('.out-12');
a.innerHTML = '<b>3.1415</b>';

// var out13 = document.querySelector('.out-13');
// out13.innerHTML = '<img src="https://static.wikia.nocookie.net/rustarwars/images/d/d6/Yoda_SWSB.png/revision/latest?cb=20171222112613" alt="js">'

var z1 = 6;
var z2 = 3;
var result = z1*z2;
document.querySelector('.out-14').innerHTML = result;

var y1 = 6;
var y2 = 3;
var result = y1/y2;
document.querySelector('.out-15').innerHTML = result;

var x1='Hello';
var x2 = 5;
var result = x1+x2;
document.querySelector('.out-16').innerHTML = result;

var out17 = document.querySelector('.out-17');
console.log(out17);

var out18 = document.querySelector('.out-18');
console.log(out18);

out18 = 5;
console.log(out18);

var out19 = document.querySelector('.out-19-test');
console.log(out19);

var out20 = document.querySelector('.out-20');
out20.textContent = "'<h2>Hi</h2>'";



