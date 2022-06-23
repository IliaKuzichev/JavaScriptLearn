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