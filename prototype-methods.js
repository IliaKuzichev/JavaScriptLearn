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

dictionary.toString = Object.prototype.toString;
// ваш код, который добавляет метод dictionary.toString

Object.defineProperty(dictionary, "toString", {
    value() {
        return Object.keys(this).join()
    },
    // для нового свойства необходимо явно указывать все флаги, для которых значение true
    writable: false,
    enumerable: false,
    configurable: true
});
/*
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

//let descriptor = Object.getOwnPropertyDescriptor(dictionary, 'toString');

//alert( JSON.stringify(descriptor, null, 2 ) );

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