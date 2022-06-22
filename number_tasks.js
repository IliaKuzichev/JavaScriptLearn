/*
Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
P.S. Есть «подводный камень» при работе с типами.
*/

let firstNumber = +prompt( "Введите первое число", '0' );
let secondNumber = +prompt( "Введите второе число", '0' );
let sum = firstNumber + secondNumber;
alert( "Сумма равна " + sum.toString() );