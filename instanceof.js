/*
Странный instanceof
Почему instanceof в примере ниже возвращает true? Мы же видим, что a не создан с помощью B().

function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B ); // true
*/


/*
Оператор instanceof при проверке использует не функцию конструктор, 
а свойство a.__proto__ == B.prototype == A.prototype приравненные в строке 8.
*/