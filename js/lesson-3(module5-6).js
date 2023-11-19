//TODO № 1 з колбеком =====================================
//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній

function letMeSeeYourName(callback) {
    const name = prompt("What is youre name?");
    if (name === "") {
        alert("Enter youre name")
        return
    }
    return callback(name);

}

const greet = (name) => `Hello ${name}`
console.log(letMeSeeYourName(greet));
    
