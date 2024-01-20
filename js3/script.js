function calculatePerimeter(lenght, width) {
    return 2*(lenght+width);
}
let lenght = 3;
let width = 5;
let perimeter = calculatePerimeter(lenght, width);
console.log('Периметр прямоугольника ', perimeter);

function calculateArea(lenght, width) {
    return lenght*width;
}
let lenght1 = 5;
let width1 = 3;
let area = calculateArea(lenght, width);
console.log('Площадь прямоугольника ', area);

function calculateTrianglePerimeter(side1, side2, side3) {
    return side1+side2+side3;
}
let side1 = 3;
let side2 = 4;
let side3 = 5;
let perimeter2 = calculateTrianglePerimeter(side1, side2, side3);
console.log('Площадь треугольника ', perimeter2);

function calculateTriangleArea(base, height) {
    return 0.5*base*height;
}
let base = 5;
let height = 3;
let area2 = calculateTriangleArea(base, height);
console.log('Площадь треугольника ', area2);

function calculateSquarePerimeter(sideLenght) {
    let perimeter = sideLenght*4;
    console.log('Периметр квадрата ', perimeter);
}
let sideLenght = 5;
calculateSquarePerimeter(sideLenght);

function calculateSquareArea(side) {
    let area = side*side;
    console.log('Площадь квадрата ', area);
}
let side = 5;
calculateSquareArea(side);

function calculateDegree(number, exponent) {
    let result = Math.pow(number, exponent);
    return result;
}
let number = 5;
let exponent = 3;
let result = calculateDegree(number, exponent);
console.log('Число в степени ', result);