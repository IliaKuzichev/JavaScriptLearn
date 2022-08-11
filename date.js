/* 1
Создайте дату
Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

Для вывода используйте alert.
*/
let certainDate = new Date(2012, 01, 20, 3, 12)
alert(certainDate);

/* 2
Покажите день недели
Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

Например:

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getWeekDay(date) );        // нужно вывести "ВТ"
*/

function getWeekDay(date) {
    switch (date.getDay()) {
        case 0:
            return `ВС`;
        case 1:
            return `ПН`;
        case 2:
            return `ВТ`;
        case 3:
            return `СР`;
        case 4:
            return `ЧТ`;
        case 5:
            return `ПТ`;
        case 6:
            return `СБ`;
    };
};