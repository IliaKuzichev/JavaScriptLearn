/* 1
Добавьте toString в словарь
Имеется объект dictionary, созданный с помощью Object.create(null) для хранения любых пар ключ/значение.

Добавьте ему метод dictionary.toString(), который должен возвращать список ключей, разделённых запятой. Ваш toString не должен выводиться при итерации объекта с помощью цикла for..in.

Вот так это должно работать:

let dictionary = Object.create(null);

// ваш код, который добавляет метод dictionary.toString

// добавляем немного данных
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// только apple и __proto__ выведены в цикле
for(let key in dictionary) {
  alert(key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
alert(dictionary); // "apple,__proto__"
*/



let dictionary = Object.create(null);

// ваш код, который добавляет метод dictionary.toString :

dictionary.toString = Object.prototype.toString; 
// Почему самый лаконичный вариант не работает?)

//1) Вариант который я придумал
Object.defineProperty(dictionary, "toString", {
    value() {
        return Object.keys(this).join()
    },
    // для нового свойства необходимо явно указывать все флаги, для которых значение true
    writable: false,
    enumerable: false,
    configurable: true
});

/* 2) Вариант прилдуманный автором учебника, разница в configurable, здесь он будет false
let dictionary = Object.create(null, {
    toString: {
        value() {
            return Object.keys(this).join();
        }
    }
});
*/

// добавляем немного данных
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ


// только apple и __proto__ выведены в цикле
for (let key in dictionary) {
    alert(key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
alert(dictionary); // "apple,__proto__"

/* 2
Разница между вызовами
важность: 5
Давайте создадим новый объект rabbit:

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert(this.name);
};

let rabbit = new Rabbit("Rabbit");
Все эти вызовы делают одно и тоже или нет?

rabbit.sayHi();
Rabbit.prototype.sayHi();
Object.getPrototypeOf(rabbit).sayHi();
rabbit.__proto__.sayHi();
*/

rabbit.sayHi();                             //this == rabbit, в объекте rabbit имеется свойство name, результат Rabbit
Rabbit.prototype.sayHi();                   //this == Rabbit.prototype, в этом объекте нет свойства name результат undefiend 
Object.getPrototypeOf(rabbit).sayHi();      //this == Rabbit.prototype, в этом объекте нет свойства name результат undefiend
rabbit.__proto__.sayHi();                   //this == Rabbit.prototype, в этом объекте нет свойства name результат undefiend 