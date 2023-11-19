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



// //TODO: № 3 на this ✅ ==============================================
// // Виправте помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);    
// },
// };
// product.showPrice();


//TODO: № 4 на this ✅==============================================
// //Виправте помилки, щоб код працював

// function callAction(action) {
//   action();
// }

// const item = {
//   getQuatity() {
//     console.log(this.quantity);
//   },
//   quantity: 5,
// };
// // callAction(item.getQuatity.bind(item));

// console.log(item.getQuatity.bind(item));
//TODO якщо що на замикання ✅ ==============================================

// Напишіть функцію makeShef(shefName), яка повертає функцію
// makeDish(dish), яка памятає імя щефа піл час її виклику
// Функція  makeDish має логіровать рядок "<імя шефа> is cooking <dish>"
// function makeShef(shefName) {
//     return function makeDish(dish) {
//         console.log(`${shefName} is cooking ${ dish }`);
//     }
// }
// const shef = makeShef("Ivan");
// shef("Fish");
// const shef1 = makeShef("Vova");
// shef1("eggs");

//TODO: № 6 на перебирання ✅ ==============================================
//Зібрати в allTopics масив всіх предметів всіх курсів
//Виконати фільтрацію, залишивши в uniqueTopics тільки унікальні елементи

// const courses = [
//     {
//         name: "Basic HTML+CSS",
//         topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
//     },
//     {
//         name: "Intermediate HTML+CSS",
//         topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
//     },
//     {
//         name: "Basic JavaScript",
//         topics: [
//             "VSCode", "Type system", "Loops", "Function", "Git", "Conditions", "Classes", "GitHub", "DOM",
//         ],
//     },
//     {
//         name: "Intermediate JavaScript",
//         topics: [
//             "VSCode",
//             "NPM",
//             "Bundlers",
//             "Transpiling",
//             "Git",
//             "Promises",
//             "AJAX",
//             "GitHub",
//         ],
//     },
// ];

// const allTopics = courses.flatMap((course) => course.topics)
// console.log(allTopics)
// const sorting = allTopics.filter((item, index, array) => array.indexOf(item)===index);
// console.log(sorting);