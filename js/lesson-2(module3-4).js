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

//TODO: № 7 ==============================================================
//2. У нас есть объект, в котором храняться зарплаты
//нашей команды
//Напишите код для сумирования всех зарплат и
//сохраните его результат в переменной sum.
//Если объект salaries пуст, то результат должен быть 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };
// let sum = 0;
// for (const value of Object.values(salaries))  {
//     sum += value;
// }
// console.log("🚀 ~ sum:", sum);


//TODO: № 8 ================================================================
// Потрібно написати функцію, яка приймає 2 параметри key та obj,
// яка буде перебирати об'єкт
// Якщо у об'єкта є такий ключ - поверне true
// Є 2 варіанти рішення, спочатку напишемо функцію,
// потім вирішимо простим способом

// const obj = {
//   name: "Igor",
//   car: "Mercedes",
//   carColor: "black",
// };

//TODO: № 9 ==============================================================
// Створіть функцію multiplyNumeric(obj),
// яка множить всі числові властивості об'єкта obj на 2

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

//TODO: № 10 ==============================================================
// Напиши функцію яка приймає массив чисел і повертає новий массив,
// унікальних чисел, які не півторюються

// const numbers = [1, 1, 1, 2, 3, 4, 7, 7, 6, 6, 5, 4, 23, 22, 22, 111, 1, 5];

