/*
Что выведет следующий код?

let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert( fruits.length ); // ?
*/
//Ответ: 4 , так как операция присваивания копирует метод как простой обьект то есть по ссылке.
// Действия с копией через ссылку отражаются и на оригинальном массиве.

/*
Давайте произведём 5 операций с массивом.

Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте Рэп и Регги в начало массива.
Массив по ходу выполнения операций:

Джаз, Блюз
Джаз, Блюз, Рок-н-ролл
Джаз, Классика, Рок-н-ролл
Классика, Рок-н-ролл
Рэп, Регги, Классика, Рок-н-ролл
*/

let styles = [`Джаз`, `Блюз`];

styles.push(`Рок-н-ролл`);

styles[Math.floor((styles.length - 1) / 2)] = `Классика`;

alert(styles.shift());

styles.unshift(`Рэп`, `Регги`);

/*
Каков результат? Почему?

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // ?
*/

//Ответ: arr , к массиву как к объекту добавляется свойство в конце являющееся функией.
//this возвращает ссылку на свой объект

/*
Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
*/
function sumInput() {
    let sumArray = [];
    let sum = 0;
    let inputValue = prompt("Введите число", 0);

    while (true) {
        if (inputValue == null || inputValue == `` || !isFinite(inputValue)) {
            break;
        };
        sum += +inputValue;
        sumArray.push(+inputValue);
        inputValue = prompt("Введите число", 0);
    };
    return sum;
};
alert(sumInput());

/*
На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

Функция getMaxSubSum(arr) должна возвращать эту сумму.

Например:

getMaxSubSum([-1, 2, 3, -9]) == 5 
getMaxSubSum([2, -1, 2, 3, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, 11]) == 11
getMaxSubSum([-2, -1, 1, 2]) == 3
getMaxSubSum([100, -9, 2, -3, 5]) == 100
getMaxSubSum([1, 2, 3]) == 6 (берём все)
Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:

getMaxSubSum([-1, -2, -3]) = 0
Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.
*/

function getMaxSubSum(arr) {
    let maxSum = 0;
    partialSum = 0;

    for (let item of arr) {                    // Для каждого элемента массива
        partialSum += item;                    // Запоминаем значение
        maxSum = Math.max(maxSum, partialSum); // Проверка и присваивание на предмет максимального значения
        if (patrialSum < 0) patrialSum = 0;    //Если значение меньше 0 присваиваем 0.
    };

    return maxSum;
}; //Решение копипаста с сайта учебника, но вроде разобрался как оно работает, если что будет шпоргалкой.)