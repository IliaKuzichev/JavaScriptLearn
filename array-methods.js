/*
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


/*
Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.

Функция должна возвращать новый массив и не изменять исходный.

Например:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (совпадающие значения)

alert( arr ); // 5,3,8,1 (без изменений)
*/
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

// Какой вариант предпочтительнее?)