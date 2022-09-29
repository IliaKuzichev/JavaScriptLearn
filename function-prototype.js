/* 1
Изменяем "prototype"
В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.

Сначала у нас есть такой код:

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

alert( rabbit.eats ); // true

Добавим одну строчку (выделенную в коде ниже). Что вызов alert покажет нам сейчас?

//1)

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {};

alert( rabbit.eats ); // ?

…А если код такой (заменили одну строчку)?

//2)

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false;

alert( rabbit.eats ); // ?

Или такой (заменили одну строчку)?

//3)

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete rabbit.eats;

alert( rabbit.eats ); // ?

Или, наконец, такой:

//4)

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;

alert( rabbit.eats ); // ?
*/

/*

//1) 

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {};

alert( rabbit.eats ); // true ,изменение функции конструктора после 
создания объекта не приводят к изменениям в объекте.

//2)

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false;

alert( rabbit.eats ); // false ,свойство rabbit.eats не создается в прототипно унаследованном объекте,
ссылка на это свойство ведет в функцию конструктор.

//3)

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete rabbit.eats;

alert( rabbit.eats ); // true , свойства не находилось непосредственно в объекте rabbit,
попытка его удаления никчему не приведет.

//4)

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;

alert( rabbit.eats ); // undefiend .Так как свойство не было создано в прототипно наследованном объекте,
а на него ввела ссылка в функцию конструктор. 
После удаления в функции конструкторе этого свойства оно перестало определятся.
*/