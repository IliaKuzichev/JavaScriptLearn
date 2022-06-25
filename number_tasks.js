/*
Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
P.S. Есть «подводный камень» при работе с типами.
*/

let firstNumber = +prompt("Введите первое число", '0');
let secondNumber = +prompt("Введите второе число", '0');
let sum = firstNumber + secondNumber;
alert("Сумма равна " + sum.toString());

/*
Методы Math.round и toFixed, согласно документации, округляют до ближайшего целого числа:
 0..4 округляется в меньшую сторону, тогда как 5..9 в большую сторону. Например:

alert( 1.35.toFixed(1) ); // 1.4

Но почему в примере ниже 6.35 округляется до 6.3?

alert( 6.35.toFixed(1) ); // 6.3

Как правильно округлить 6.35?
*/

// В двоичном виде .035 является бесконечной дробью, необходимо привести к большему 
//числу для избежания потери точности при переходе к двоичному виду
alert(Math.round(6.35 * 10) / 10);

/*
Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
Функция должна возвращать числовое значение.
Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.
*/

function readNumber() {
    let userNumber;
    do {
        userNumber = prompt("Введите число", 0);
    } while ( !isFinite(userNumber) ) {

        if (userNumber === null || userNumber === '') {
            return null;
            
        } else {
            return +userNumber;
        };
    };
};
/*
Этот цикл – бесконечный. Он никогда не завершится, почему?

let i = 0;
while (i != 10) {
  i += 0.2;
};
*/
// Происходит потеря точности при вычислении дроби 1/5, значение в i=10 перескакивается

/*
Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)

Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

Пример работы функции:

alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525
*/

function random(min, max) {
    let randomNumber = min + Math.random() * ( max - min );
    return randomNumber.toFixed(10);
};

/*
Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

Любое число из интервала min..max должно появляться с одинаковой вероятностью.

Пример работы функции:

alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5
*/

function randomInteger(min, max) {
    let randomNumber = min - 0.5 + Math.random() * ( max - min + 1 );
    return randomNumber.Math.round();
};