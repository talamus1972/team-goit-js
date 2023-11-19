//TODO № 1 з колбеком =====================================
//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній

// function letMeSeeYourName(callback) {
//     const name = prompt("What is youre name?");
//     if (name === "") {
//         alert("Enter youre name")
//         return
//     }
//     return callback(name);

// }

// const greet = (name) => `Hello ${name}`
// console.log(letMeSeeYourName(greet));
    

//TODO № 2 з колбеком ==============================================
//Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентифікатор як id і викликає callback
//Передаючи йому створений об'єкт.
//showProduct(product) - коллбек приймаючий об'єкт
//продукту і логірующий їх у консоль

// function makeProduct(name, price, callback){
//     const products = {
//         name,
//         price,
//         id: Math.random(),
//     }
//     return callback(products);
// }
// // function showProduct(product){
// //     return product;
// // }
// const showProduct = (product) => product;
// console.log(makeProduct("fish",2500,showProduct));
// console.log(makeProduct("rabit",2800,showProduct));
// console.log(makeProduct("water",500,showProduct));
