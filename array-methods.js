/* 1
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву.

Примеры:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.
*/

function camelize(str) {
    if (!str) return str; //Проверка на пустое входящее значение
    let finalStr;           //Наглядное обьявление переменных только для данного блока кода
    let arrayStr = str.split('-'); // -//-

    finalStr = arrayStr.map(function ucFirst(word, index) {
        if (index == 0) {               // Если 
            return word;
        } else {
            return word[0].toUpperCase() + word.slice(1);
        };
    });

    return finalStr.join('');
};

function camelize(str) {
    if (!str) return str; //Проверка на пустое входящее значение
    return str.split(`-`).map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join(``);
};

/* 2
Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.

Функция должна возвращать новый массив и не изменять исходный.

Например:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (совпадающие значения)

alert( arr ); // 5,3,8,1 (без изменений)
*/
// Какой вариант предпочтительнее?)
//Вариант 1
function filterRange(arr, a, b) {
    let filtered = [];

    arr.forEach(element => {
        if (element >= a && element <= b) {
            filtered.push(element)
        }
    });

    return filtered;
};
// Вариант 2
function filterRange(arr, a, b) {
    let filtered = [];

    arr.forEach(element => (element >= a && element <= b) ? filtered.push(element) : 0);

    return filtered;
};

//Вариант 3
function filterRange(arr, a, b) {
    return arr.filter(element => (element >= a && element <= b));
};

/* 3
Фильтрация по диапазону "на месте"
Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, 
которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
Функция должна изменять принимаемый массив и ничего не возвращать.

Например:

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert( arr ); // [3, 1]
*/

function filterRangeInPlace(arr, a, b) {

    arr.forEach(function fn(item, index) {
        if (item < a || item > b) {
            arr.splice(index, 1)
        };
    });
};

/* 4
Сортировать в порядке по убыванию
let arr = [5, 2, 1, -10, 8];

// ... ваш код для сортировки по убыванию

alert( arr ); // 8, 5, 2, 1, -10
*/
arr.sort((a, b) => a - b).reverse();

/* 5
Скопировать и отсортировать массив
У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)
*/

function copySorted(arr) {
    let sorted = [];
    sorted.concat(arr);
    return sorted.sort();
};

/* 6
Создать расширяемый калькулятор
Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

Задание состоит из двух частей.

Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" 
в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.

Пример использования:

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10
Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции.
Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

Например, давайте добавим умножение *, деление / и возведение в степень **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
Для этой задачи не нужны скобки или сложные выражения.
Числа и оператор разделены ровно одним пробелом.
Не лишним будет добавить обработку ошибок.
*/

function Calculator(str) {
    this.addMethod = function (name, func) {
        let newAction = new Object();
        this.newAction[name] = func;
    },
    this.calculate = function (str) {

        let inputStr = str.split(` `);
        switch (inputStr[1]) {

            case `+`:
                return +inputStr[0] + +inputStr[2];

            case `-`:
                return +inputStr[0] - +inputStr[2];

            case newAction.find(name):
                return newAction[newAction.find(name) + 1];

            default:
                break;
        };
    };
};

/* 7
Трансформировать в массив имён
У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names =  ... ваш код 

alert( names ); // Вася, Петя, Маша
*/

let names = users.map(item => item.name);

/* 8
Трансформировать в объекты
У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

Например:

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped =  ... ваш код ... 


usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]


alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин
Итак, на самом деле вам нужно трансформировать один массив объектов в другой. Попробуйте использовать =>. Это небольшая уловка.
*/

let usersMapped = users.map(user => ({
    fullName: user.name + ` ` + user.surname,
    id: user.id 
    }));

/* 9
Отсортировать пользователей по возрасту
Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);

// теперь: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя
*/
function sortByAge(users) {
    users.sort(function(userA, userB) { return userA.age - userB.age; });
};

/* 10
Перемешайте массив
Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...
Все последовательности элементов должны иметь одинаковую вероятность. Например, [1,2,3] может быть 
переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д., с равной вероятностью каждого случая.
*/

function shuffle(array) {
    array.sort(function nearRandom(params) {
        
    });
};