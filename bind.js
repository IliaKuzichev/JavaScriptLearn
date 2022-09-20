/* 1
Связанная функция как метод
Что выведет функция?

function f() {
  alert( this ); // ?
}

let user = {
  g: f.bind(null)
};

user.g();
*/

// null

/*
При обьявлении свойства user.g четко зафиксировано this = null.
Не смотря на ссылку на функцию f() объявленную ранее this остается фиксированным
*/

/* 2
Повторный bind
Можем ли мы изменить this дополнительным связыванием?

Что выведет этот код?

function f() {
  alert(this.name);
}

f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

f();
*/

//Вася

/*
Первый вызов bind создает "экзотический объект" с привязкой this, 
повторынй вызов bind не изменяет уже созданную привязку.
*/

/* 3
Свойство функции после bind
В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.

function sayHi() {
  alert( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася"
});

alert( bound.test ); // что выведет? почему?

console.log( bound.test ); 
*/

/* undefined
Ответ получен методом прогона через console.log( bound.test ); 
результатом bind является другой объект у него уже нет собственного свойства test
*/

/* 4
Исправьте функцию, теряющую "this"
Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать 
user.loginOk/loginFail в зависимости от ответа.

Однако, его вызов приводит к ошибке. Почему?

Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'Вася',

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },

};

askPassword(user.loginOk, user.loginFail);                         !Выделенная строка!
*/

/*
В последней строке при вызове методов объекта user в качестве аргументов функции askPassword() происходит потеря this,
необходима привязка в виде askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
*/