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

/* 2
Создайте новый объект с помощью уже существующего
Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно,
 но хотелось бы создать ещё один объект такого же типа.

Можем ли мы сделать так?

let obj2 = new obj.constructor();
Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает.
И пример функции-конструктора, с которой такой код поведёт себя неправильно.
*/

function Creator () {
    this.name = name;
// По умолчанию свойство Creator.prototype.constructor == Creator
//Если не перезаписывать свойство Creator.prototype целиком (удаляя {constructor: Creator} код будет работать корректно)
};

let obj = new Creator(); 

/*
obj {
    name: obj,
    prototype: {
        constructor: Creator,
    },
}
*/

let obj2 = new obj.constructor();

/*
obj2 {
    name: obj2
}
*/

//Сработает корректно

function Creator () {
    this.name = name;
// По умолчанию свойство Creator.prototype.constructor == Creator
//Если не перезаписывать свойство Creator.prototype целиком (удаляя {constructor: Creator} код будет работать корректно)
};

Creator.prototype = {}; // После перезаписи этого свойства теряется цепочка наследования.

let obj = new Creator(); 

/*
obj {
    name: obj
    prototype: {}, //Пустой объект, а прототип пустого объекта это Object.prototype.
}
*/

let obj2 = new obj.constructor(); // При создании ссылается на пустой объект игнорируя аргументы и создается пустой объект.

/*
obj2 {

}
*/