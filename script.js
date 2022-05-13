/* function User (name, id) { // функция - конструктор
    this.name = name; //Чтобы обратиться к свойству функции используем this.
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log('Hello ' + this.name + ' ушел');
    };
};

User.prototype.exit = function(name, id) { // prototype - свойство конструктор, наследует свйоства протоипного объекта. в данном случае объекта -функции 
    console.log('Пользователь ' + this.name + ' сыбался ' + this.id  + ' раз');
};

let ivan = new User('Ivan', 25), // создаем переменную-функцию(объект), которая передается в функцию User.
    alex = new User('Alex', 20);


ivan.exit();
ivan.hello(); */


/* let user = {
    name: 'John'
};

function sayName(surname, age) {
    console.log(this);
    console.log(this.name + surname + age);
}

console.log(sayName.call(user, ' Smith', ' 25')); //метод call привязывает обьект к функции
console.log(sayName.apply(user, ['Smith', ' 25'])); //apply делает тоже самое, но аргументы передаются в виде массива

function countNumber(number) {
    return this * number; // 2 * 3; 2 * 10;
}
let double = countNumber.bind(2); // при передаче функции метода bind, аргумент bind будет передаваться в this;
console.log(double(3));
console.log(double(10));
//контекст вызова this:
//1) просто вызов функции window/undefined;
//2) метод объекта - this = объект;
//3) конструктор (new) - this = обращение к новому созданному объекту;
//4) указание конкретного контекста (связка новой переменной/объекта с функцией - call, apply, bind)

// работа с this с элементами страницы

let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(this); // выдаст в консоль тег <button>
    this.style.backgroundColor = 'red'; // после клика по кнопке покрасит кнопку в красный цвет;
    function showThis() {
        console.log(this); // выдаст в консоль window;
    }
    showThis();
}) */

//<input id="age" value="30">
/* let age = document.getElementById('age');

function showUser(surname, name) {

    alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);

}
showUser.call(age, 'John', 'Smith'); */

class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
        }
        createElem() {
            let element = document.createElement('div');
            document.body.appendChild(element);
            let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign} `;
            element.style.cssText = param;
        }
}

let item = new Options(prompt('введите высоту'), prompt('введите ширину'), 'red', 12, 'center');

item.createElem();