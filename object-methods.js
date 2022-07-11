/*
Каким будет результат выполнения этого кода?

let user = {
  name: "Джон",
  go: function() { alert(this.name) }
}

(user.go)()
P.S. Здесь есть подвох :)
*/

let user = {
  name: "Джон",
  go: function () { alert(this.name) },
};

user.go();

/*
В представленном ниже коде мы намерены вызвать obj.go() метод 4 раза подряд.
Но вызовы (1) и (2) работают иначе, чем (3) и (4). Почему?

let obj, method;

obj = {
  go: function() { alert(this); }
};

obj.go();               // (1) [object Object]

(obj.go)();             // (2) [object Object]

(method = obj.go)();    // (3) undefined

(obj.go || obj.stop)(); // (4) undefined
*/
// (1) и (2) Выполнится, скобки в данном случае не повлияют на порядок выполнения кода
// (3) и (4) За исключением вызова метода, любая другая операция (подобно операции 
// присваивания = или сравнения через логические операторы, например ||) 
// превращает это значение в обычное, которое не несёт информации, позволяющей установить this.


/*
Здесь функция makeUser возвращает объект.
Каким будет результат при обращении к свойству объекта ref? Почему?

function makeUser() {
  return {
    name: "Джон",
    ref: this
  };
};

let user = makeUser();

alert( user.ref.name ); //Каким будет результат?
*/
/*
Ошибка
Это потому, что правила, которые определяют значение this, никак не смотрят на объявление объекта. 
Важен лишь момент вызова метода. Здесь значение this внутри makeUser() является undefined, потому 
что makeUser() вызвана как функция, не через «точку» как метод. Литерал объекта сам по себе не 
влияет на this. Значение this одно для всей функции и блоков кода в ней, литеральные объекты не меняют его.
Таким образом, при создании объекта ref: this берёт текущее значение this функции makeUser().
*/

/*
Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.
let calculator = {
  // ... ваш код ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/

let calculator = {
  read() {
    this.a = +prompt("Введите значения a", '0');
    this.b = +prompt("Введите значения b", '0');
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

/*
Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
  }
};
Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

ladder.up().up().down().showStep(); // 1
*/

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
  }
};