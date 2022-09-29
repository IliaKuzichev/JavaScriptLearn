/* 1
Добавить функциям метод "f.defer(ms)"
Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.

После этого должен работать такой код:

function f() {
  alert("Hello!");
}

f.defer(1000); // выведет "Hello!" через 1 секунду
*/

Function.prototype.defer = function (ms) {
    let f = this;
    return function (...args) {
        setTimeout(() => f.apply(this, args), ms)
    };
};

//Понимать понимаю что происходит, а вот сам такую конструкцию пока не смогу придумать -_-