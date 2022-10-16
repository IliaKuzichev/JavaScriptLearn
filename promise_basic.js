/* 1
Можно ли "перевыполнить" промис?
Что выведет код ниже?

let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);
*/

// 1 .Будет выполнен только первый вызов resolve(), последующие вызовы будут проигнорированны.

/* 2
Задержка на промисах
Встроенная функция setTimeout использует колбэк-функции. 
Создайте альтернативу, использующую промисы.

Функция delay(ms) должна возвращать промис, который перейдёт в состояние 
«выполнен» через ms миллисекунд, так чтобы мы могли добавить к нему .then:

function delay(ms) {
  // ваш код
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));
*/

function delay(ms) {
    return new Promise(resolve => {
    setTimeout(resolve, ms)});
};