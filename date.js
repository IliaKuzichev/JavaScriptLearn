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

/* 3
День недели в европейской нумерации
В Европейских странах неделя начинается с понедельника (день номер 1), 
затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), 
которая возвращает «европейский» день недели для даты date.

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getLocalDay(date) );       // вторник, нужно показать 2
*/

function getLocalDay(date) {
    switch (date.getDay()) {
        case 0:
            return 7;
        case 1:
            return 1;
        case 2:
            return 2;
        case 3:
            return 3;
        case 4:
            return 4;
        case 5:
            return 5;
        case 6:
            return 6;
    };
};

/* 4
Какой день месяца был много дней назад?
Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

Функция должна надёжно работать при значении days=365 и больших значениях:

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
P.S. Функция не должна изменять переданный ей объект date.
*/

function getDateAgo(date, days) {
    let dateAgo = new Date(0);
    dateAgo.setMilliseconds(date.getTime() - (days * 24 * 3600 * 1000));
    return dateAgo.getDate();
};

/* 5
Последнее число месяца?
Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

Параметры:

year – год из четырёх цифр, например, 2012.
month – месяц от 0 до 11.
К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
*/

function getLastDayOfMonth(year, month) {
    let monthPlusOne = new Date(year, month + 1);
    let lastDayOfMonth = new Date(0);
    lastDayOfMonth.setMilliseconds(monthPlusOne.getTime() - 24 * 3600 * 1000);
    return lastDayOfMonth.getDate();
};

/* 6
Сколько сегодня прошло секунд?
Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

getSecondsToday() == 36000 // (3600 * 10)
Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
*/

function getSecondsToday() {
    let today = new Date();
    return today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds;
};

/* 7
Сколько секунд осталось до завтра?
Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

Например, если сейчас 23:00, то:

getSecondsToTomorrow() == 3600
P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
*/

function getSecondsToTomorrow() {
    let today = new Date();
    let tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
    return Math.round((tomorrow.getTime() - today.getTime()) / 1000);
};

/* 8
Форматирование относительной даты
Напишите функцию formatDate(date), форматирующую date по следующему принципу:

Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
Например:

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );
*/

function formatDate(date) {
    let now = new Date();

    if ((+now - +date) < 1000) {
        return (`прямо сейчас`);
    } else if ((+now - +date) < 60 * 1000) {
        return (`${Math.round((+now - +date) / 1000)} сек. назад`);
    } else if ((+now - +date) < 3600 * 1000) {
        return (`${Math.round((+now - +date) / (60 * 1000))} мин. назад`);
    } else {
        let year = date.getFullYear().toString(10).slice(-2);
        return `0${date.getDate()}.0${date.getMonth() + 1}.${year} ${date.getHours()}:${date.getMinutes()}`;
    };
};