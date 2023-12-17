//TODO: № 1 ==============================================
// Натискання на кнопку "SHOW ME" має виводити значення з 
// поля введення(дивіться на елементи в html - розмітці)

// const btn = document.querySelector('#alertButton');
// const inputText = document.querySelector('#alertInput');


// btn.addEventListener('click', () => {
//     // inputText.value
//     console.log(inputText.value);
// })

//TODO: № 2 ==============================================
// Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
// Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.

// const btnEl = document.querySelector('#swapButton');
// const inputLeft = document.querySelector('#leftSwapInput');
// const inputRight = document.querySelector('#rightSwapInput');

// btnEl.addEventListener('click', () => {
//     const textInput = inputLeft.value;
//     inputLeft.value = inputRight.value;
//     inputRight.value = textInput;
 
// })

//TODO: № 3 ==============================================
// При кліку на кнопку текст параграфів змінюється на їх порядковий номер

// const textEls = document.querySelectorAll("p");  // зробили псевдо масив елементів
// const btnEl = document.querySelector("button");

// btnEl.addEventListener('click', changeText);
// function changeText(){
// textEls.forEach((p, index) => (p.textContent = index + 1));
// }
// console.log(btnEl);

//TODO: № 4 ==============================================
// Кнопка "Приховати" ховає текст і замінює назву кнопки на
// "Розкрити", при повторному натисканні текст знову стає доступним
// і кнопка набуває початкового вигляду.

// const btnClick = document.querySelector('#passwordButton');
// const inputPass = document.querySelector('#passwordInput');

// btnClick.addEventListener('click', passHidden);
// function passHidden() {
//     const typeInput = inputPass.getAttribute('type');
//     const toggleTypeInput = typeInput === "password" ? "text" : "password";
//     inputPass.setAttribute("type", toggleTypeInput);

//     console.log(typeInput);

//    const btnText = btnClick.textContent;
//    const toggleTextBtn = btnText === "Приховати" ? "Розкрити" : "Приховати";
//    btnClick.textContent = toggleTextBtn;
// }

//TODO: № 5 ==============================================

// Кнопка "Зменшити" робить квадрат менше на 10 пікселів, допопка "Збільшити" - більше на 10 пікселів.

// Підказка до 5 задачі:
//.offsetWidth - знайти значення для збільшення на діві
//.offsetHeight

//TODO: № 7 ==============================================
// Натиснувши кнопку "Подвоювати", збільшити значення
// у кожному елементі списку у 2 рази

//TODO: № 6 ==============================================
// Додайде слухач кліку і визначте, коли клік відбувається
// всередині елемента з id "place" і коли клік припадає поза зоною елемента
// https://developer.mozilla.org/en-US/docs/Web/API/Node/contains

// const element = document.querySelector("#place");
// window.addEventListener("click", event => {
// // console.dir(event.target);
// const isInEL = element.contains(event.target);
// // console.log(isInEL);
// if (isInEL) {
// console.log("Ви клікнули зелений прямокутник"); 
// return 
// }
// console.log("Ви промахнулись)))"); 
// })

// TODO: ЗАДАЧА 1 на LocalStorage =========================================

// Створи перелік справ.
// Є інпут, який вводиться назва завдання.
// Після натискання на кнопку "Додати" завдання додається до списку #list.
// Поруч із кожним завданням знаходиться кнопка "Видалити", щоб можна було
// Забрати завдання зі списку.
// Список із завданнями має бути доступним після перезавантаження сторінки.

const taskForm = document.querySelector("#task-form");
const taskName = document.querySelector('input[name="taskName"]');
const taskList = document.querySelector("#task-list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


taskForm.addEventListener("submit", addTask);

function addTask(event) {
    event.preventDefault();
    const task = taskName.value.trim();
 
    if (task !== "") {
        tasks.push(task);
        taskName.value = '';
        renderTask();
        saveTasks();
    }
}

 
function deleteTask(event) {

    const taskIndex = event.target.dataset.index;
    tasks.splice(taskIndex, 1);
    renderTask();
    saveTasks();


 }


function renderTask() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerText = task;
        const button = document.createElement("button");
        button.innerText = "DELETE";
        button.dataset.index = index;
        button.addEventListener("click", deleteTask);

        li.appendChild(button);
        taskList.appendChild(li);
    })
}
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

renderTask();


