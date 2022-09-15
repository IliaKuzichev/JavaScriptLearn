/* 1
Вывод каждую секунду
Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout.
*/
// 1)

function printNumbers(from, to) {
    let current = from;

    setTimeout(function run() {
        
        alert(current);

        if (current < to) {

            current++

            run();

        };
    }, 1000);
};

// 2)
function printNumbers(from, to) {
    let current = from;

    let timerId = setInterval(function run() {
        alert(current);

        if (current == to) {
            clearInterval(timerId);
        };

        current++

    }, 1000)
};

/* 2
Что покажет setTimeout?
В приведённом ниже коде запланирован вызов setTimeout, а затем выполняется сложное вычисление, для завершения которого требуется более 100 мс.

Когда будет выполнена запланированная функция?

После цикла.
Перед циклом.
В начале цикла.
Что покажет alert?

let i = 0;

setTimeout(() => alert(i), 100); // ?

// предположим, что время выполнения этой функции >100 мс
for(let j = 0; j < 100000000; j++) {
  i++;
}
*/

/*
Запланированный код будет выполнен сразу после выполнения исполняемого кода,
так как время превышает заданные 100мс
Значение i будет равно 100000000
*/