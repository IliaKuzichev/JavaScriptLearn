/* 1
Независимы ли счётчики?
Здесь мы делаем два счётчика: counter и counter2, используя одну и ту же функцию makeCounter.

Они независимы? Что покажет второй счётчик? 0,1 или 2,3 или что-то ещё?

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

alert( counter2() ); // ?       0       
alert( counter2() ); // ?       1     

Счетчики были созданны и сохранены в разные переменные и имеют индивидуальные лексичиские окружения. 
Результат вызова будет сохранятся индивидуально у каждого вызываемого считчика  
*/

/* 2
Объект счётчика
Здесь объект счётчика создан с помощью функции-конструктора.

Будет ли он работать? Что покажет?

function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

let counter = new Counter();

alert( counter.up() ); // ?         1
alert( counter.up() ); // ?         2
alert( counter.down() ); // ?       1

Созданный объект будет работать с записанными в него методами.
Лексическое окружение для выполнение методов хронится в одном и том же месте для обоих методов.
*/

/* 3
Функция в if
Посмотрите на код. Какой будет результат у вызова на последней строке?

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();
*/

//Результат : Ошибка, функция объявлена в блоке if и 