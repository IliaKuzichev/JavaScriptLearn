/* Следующая функция возвращает true, если параметр age больше 18.
В ином случае она задаёт вопрос confirm и возвращает его результат.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
Сделайте два варианта функции checkAge:
1) Используя оператор ?
2) Используя оператор || */

// 1)
function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

// 2)
function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}

/* Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
Пример вызовов:
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1   */
function min(a, b) {
    return (a <= b) ? a : b;
}

/* Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше. */


//<script>
"use strict";
function pow(x, n) {
    return x = x**n;
}

let x = + prompt("Введите x", '');
let n;
do {
    n = + prompt("Введенндое  n должно быть натуркальным (n >= 1) ", '');
} while (n < 1);
alert ( pow(x,n) );

//</script>

//arrow functions basic
/* Замените код Function Expression стрелочной функцией:

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);
*/

  let ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
  }
  ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
  );
