/* 1
Деструктурирующее присваивание
У нас есть объект:

let user = {
  name: "John",
  years: 30
};
Напишите деструктурирующее присваивание, которое:

свойство name присвоит в переменную name.
свойство years присвоит в переменную age.
свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
Пример переменных после вашего присваивания:

let user = { name: "John", years: 30 };

// ваш код должен быть с левой стороны:
// ... = user

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false
*/

let { name, years: age, isAdmin = false } = user;

/* 2
Максимальная зарплата
У нас есть объект salaries с зарплатами:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.
*/
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};


function topSalary(salaries) {
    let topSalary = null;
    let topSalaryName = null;
    let topSalarys = Object.entries(salaries);

    for (let [name, salary] of topSalarys) {
      if (salary >= topSalary) {
        topSalaryName = name;
        topSalary = salary;
      };
    };

    return topSalaryName;
};