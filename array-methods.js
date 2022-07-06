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
