//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
// const numbers = [35, 56, 12, 7, 80, 3];

// function findSmallerNumber(numbers) {
//     let min = numbers[0];
//     for (const number of numbers) {
//         if (number < min) {
//             min = number;
//         }
//     }
//     return min;
// }

// console.log(findSmallerNumber(numbers));

//TODO: № 2 =============================================================
//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

// function caclculateAverage(...args) {
// let sum = 0;
// let length = 0;

// for (const arg of args) {

//     if (typeof arg !== "number") {
//     continue}
// sum += arg;
// length += 1;
// }
// return sum / length;
// }

// console.log(caclculateAverage(10, "5", 10, 20, 200))