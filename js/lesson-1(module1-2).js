// TODO: № 1
// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.

// let a = 10;
// if (a === 5) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// console.log(a === 5 ? true : false);

//TODO: № 2
// У змінній min лежить число від 0 до 59. Визначте у котру чверть години
// Попадає це число (у першу, другу, третю або четверту).

// const min = 66;

// if (min >= 0 && min <= 15) {
// console.log(`Перша чверть`);}
// else if (min > 15 && min <= 30) {
// console.log(`Друга чверть`);
// }
// else if (min > 30 && min <= 45) {
//     console.log(`Третя чверть`);
//     }
// else if (min > 45 && min <= 59) {
//     console.log(`Четверта чверть`);
//         }
// else {
//     console.log(`Виходить за межі`);
// }

//TODO: № 3
// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.
// const num = 7;
// let result = '';

// switch (num) {
//     case 1:
//         result='зима';
//         break;
//     case 2:
//         result='весна';
//         break;
//     case 3:
//         result='літо';
//         break;
//     case 4:
//         result='осінь';
//         break;
//     default:
//         result = 'введіть щось нормальне :)';
//         break;
// }
// console.log(result);

//TODO: № 4
//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max

// const max = 10;
// const min = 0;
// let total = 0;

// for (let i = max; i >= min; i -= 1) {
//   if (i % 2 !== 0) {
//     console.log("не парні i = ", i);
//     continue;
//   }
//   console.log("парні i = ", i);
//   total += i;
// }

// console.log(total);


//TODO: № 5 ==============================================================
//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.
//['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп']

// const music = ['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп'];
// function logItems(array) {
// for (let i = 0; i < array.length; i+=1) {
//     console.log(`${i+1}) ${array[i]}`)
    
// }
// }
// logItems(music);

//TODO:    № 6 ==========================
// Напишіть if..else, що відповідає наступному switch:
// const browser = "Opera"
// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }
// const browser = 'Brave';
// if (browser === 'Edge') {
//     console.log('Youve got the Edge!');
// }
// else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
//     console.log('Okay we support these browsers too');
// }
// else { console.log('We hope that this page looks ok!'); }
