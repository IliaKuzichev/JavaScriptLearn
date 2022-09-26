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

/* 2
Алгоритм поиска
Задача состоит из двух частей.

У нас есть объекты:

let head = {
  glasses: 1
};

let table = {
  pen: 3
};

let bed = {
  sheet: 1,
  pillow: 2
};

let pockets = {
  money: 2000
};

С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства 
выполнялся по следующему пути: pockets → bed → table → head. Например, pockets.pen 
должно возвращать значение 3 (найденное в table), а bed.glasses – значение 1 
(найденное в head).

Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или 
через head.glasses? При необходимости составьте цепочки поиска и сравните их.
*/

let head = {
    glasses: 1,
  };
  
  let table = {
    pen: 3,
    __proto__: head,
  };
  
  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table,
  };
  
  let pockets = {
    money: 2000,
    __proto__: bed,
  };

  //Современные движки запоминают где было найдено свойство, и в следующий раз именно там его и будут искать.

