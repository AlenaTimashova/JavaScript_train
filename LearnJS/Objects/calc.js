/* Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.

*/


let calculator = {

    read() {

    this.num1 = +prompt("Введите первое значение: ", 0);
    this.num2 = +prompt("Введите второе значение: ", 0);
    },

    sum() {
        return this.num1 + this.num2;
    },

    mul() {
        return this.num1 * this.num2;
    }

};
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );

  /* Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму этих свойств.
mul() возвращает произведение этих свойств.

*/

function Calculator() {

this.read = function() {
    this.num1 = +prompt("Введите первое значение: ", 0);
    this.num2 = +prompt("Введите второе значение: ", 0);
};

this.sum = function() {
    return this.num1 + this.num2;
};

this.mul = function() {
    return this.num1 * this.num2;
};

}

let newCalculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );