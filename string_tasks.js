/*
Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

ucFirst("вася") == "Вася";
*/
function ucFirst(str) {
    if (str.length != 0) {
        firstSymbol = str[0].toUpperCase();
        str = str.slice(1);
        return firstSymbol + str;
    } else {
        return str;
    };
};

/*
Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
*/

function checkSpam(str) {
    return (str.toLowerCase().includes(`xxx`) || str.toLowerCase().includes(`viagra`));
};