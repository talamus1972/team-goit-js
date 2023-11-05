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

//TODO: № 3  ============================================================
// Напишіть функцію min(a,b), яка повертає менше чисел a і b.

// function min(a, b) {
//     if (typeof a !== "number" || typeof b !== "number") {
//         return 'a бо b не число!Запиши числові дані!'
//     };
//     // if (a < b) { return a } return b;
//     return a < b ? a : b;
// }
// console.log(min(1, 2));

// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function numbers(array) {
//     const sum = [];
//     for (let i = 0; i < array.length - 1; i +=1) {
//         sum.push(array[i] + array[i + 1]);
        
//     }
//     return sum;
// }

// console.log(numbers(someArr));


//TODO: № 6 ==============================================================
// Напиши скрипт, який для об'єкта user,
// Послідовно:
// 1. додати поле mood зі значенням 'happy'
// 2. замінити hobby на 'skydiving'
// 3. замінити значення premium на false
// 4. виводити зміст об'єкта user у форматі
// ключ:значення використовуючи Object.keys() і for...of

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,

//   greet(){
// console.log(`Hello my name is ${this.name}`)
// }
// };

// user.mood = "happy";

// console.log("🚀 ~ user:", user)

// user.hobby = "skydiving";

// console.log("🚀 ~ user:", user)

// user.premium = false; 
// console.log("🚀 ~ user:", user)

// for (const key of Object.keys(user)) {
//     console.log(`${key}: ${user[key]}`)
// }
// user.greet();