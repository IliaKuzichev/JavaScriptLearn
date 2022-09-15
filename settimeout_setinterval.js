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