class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello() {
    console.log(`Hello! ${this.name}`)
    }
    exit() {
    console.log(`Пользователь ${this.name} ушел`)
    }
}

let ivan = new User ('Ivan', 23);
let alex = new User ('Alex', 20);

console.log(ivan);
console.log(alex);

ivan.hello();
alex.hello();

