const Person = {
    name: "",
    age: 0,
    gender: "",

    introduce: function() {
        console.log(`My name is ${this.name}. I'm ${this.age} years old and I identify as ${this.gender}.`)
    },

    changeName: function(name) {
        this.name = name;
    }
};
Person.name = "John";
Person.age = 25;
Person.gender = "male";

Person.introduce();

Person.changeName("Mike");
Person.introduce();

const Animal = {
    name: "",
    eat() {
        console.log(`${this.name} is eating.`)
    }
}

const Dog = {
    name: "Rex",
    bark() {
        console.log(`${this.name} is barking.`)
    }
}

Dog.bark();
// Одалживание метода eat() из объекта Animal к объекту Dog
Dog.eat = Animal.eat;
Dog.eat(); // Вывод: Rex is eating.


const calculator = {

    add(num1, num2) {
        return num1 + num2;
    },

    subtract(num1, num2) {
        return num1 - num2;
    },

    multiply(num1, num2) {
        return num1 * num2;
    },
}
console.log(calculator.add.call(null, 5, 3)); // Вывод: 8
console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2

class Person1 {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`My name is ${this.name}. I'm ${this.age} years old.`)
    }

}
const person = new Person1("John", 25);
person.introduce(); // Вывод: My name is John and I'm 25 years old.

class BankAccount {
    constructor( accountNumber, balance) {

        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount} into account ${this.accountNumber}. New balance: ${this.balance}`)
    }
    withdraw(amount) {
        if(this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from account ${this.accountNumber}. New balance: ${this.balance}`)
        }
        console.log(`Not enough money on account ${this.accountNumber}`)
    }
}