/* 1
Фильтрация уникальных элементов массива
Допустим, у нас есть массив arr.

Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

Например:
let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function unique(arr) {
   ваш код 
}


alert( unique(values) ); // Hare,Krishna,:-O
P.S. Здесь мы используем строки, но значения могут быть любого типа.

P.P.S. Используйте Set для хранения уникальных значений.
*/

function unique(arr) {
    let uniqueArr = new Set();
    for (let value of arr) {
        uniqueArr.add(value);
    };
    return Array.from(uniqueArr);
};

/* 2
Отфильтруйте анаграммы
Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

Например:

nap - pan
ear - are - era
cheaters - hectares - teachers
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

Например:

Из каждой группы анаграмм должно остаться только одно слово, не важно какое.
*/

function aclean(arr) {
    let sortMap = new Map();
    for (let word of arr) {
        let sorted = word.toLowerCase().split(``).sort().join(``);
        sortMap.set(sorted, word);
    };
    return Array.from(sortMap.values());
};
/*
function aclean(arr) {
    let sortMap = new Set();
    for (let word of arr) {
        sortMap.add(word.toLowerCase().split(``).sort().join(``));
    };
    return Array.from(sortMap);
};

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
function aclean(arr) {
    let sortMap = new Map();
    for (let word of arr) {
        let sorted = word.toLowerCase().split(``).sort().join(``);
        sortMap.set(sorted, word);
    };
    return Array.from(sortMap.values()), console.log(Array.from(sortMap.values()));
};
alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
function aclean(arr) {
    let sortMap = new Set();
    for (let word of arr) {
        sortMap.add(word.toLowerCase().split(``).sort().join(``));
    };
    return Array.from(sortMap), console.log(Array.from(sortMap));
};
alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
*/

/* 3
Перебираемые ключи
Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.

Но это не выходит:

let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");
Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?
*/

//Необходимо преобразовать map.keys() в массив перед присваиванием что бы рабтали методы массивов
let keys = Array.from(map.keys());