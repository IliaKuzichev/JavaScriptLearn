/* 1
Работа с прототипами
В приведённом ниже коде создаются и изменяются два объекта.

Какие значения показываются в процессе выполнения кода?

let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

alert( rabbit.jumps ); // ? (1)

delete rabbit.jumps;

alert( rabbit.jumps ); // ? (2)

delete animal.jumps;

alert( rabbit.jumps ); // ? (3)
Должно быть 3 ответа.
*/

/*
1 - true, значение берется из rabbit
2 - null, значение берется через [[Prototype]] ссылающийся на animal
3 - undefiend - значение не определено ни в самом объекте, ни в его прототипе
*/