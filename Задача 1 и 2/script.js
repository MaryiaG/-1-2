// Задача №1

let number = +prompt("Введите число:");
if(number === 0) {
    console.log("Число равно нулю")
}
else if(number %2 === 0) {
    console.log("Число четное")
}
else [
    console.log("Число нечетное")
]

// Задача №2

let number1 = prompt("Введите значение:");
if(!isNaN(number1)) {
    console.log("Это значение можно преобразовать в число")
}
else {
    console.log("Это значение преобразовать в число не получится. Получится NaN")
}
