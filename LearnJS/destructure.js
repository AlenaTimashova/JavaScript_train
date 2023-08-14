// Деструктурирующее присваивание

let user = {
    name: "John",
    years: 30
};

let {name, years: age, isAdmin = false} = user;

console.log(name);
console.log(age);
console.log(isAdmin);

// Максимальная зарплата

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

/*
Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.
 */

function topSalary(obj) {
    let max = 0;
    let maxName = null;
    for (const [name,salary] of Object.entries(obj)) {
        if(max < salary) {
            max = salary;
            maxName = name;
        }
    }

    return maxName;
}

console.log(topSalary(salaries));

// обмен переменных

let guest = "Jane";
let admin = "Pete";

// Давайте поменяем местами значения: сделаем guest = "Pete", а admin = "Jane"
[guest, admin] = [admin, guest];

alert(`${guest} ${admin}`); // Pete Jane (успешно заменено!)

// остаточные значения с помощью "..."

let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// rest это массив элементов, начиная с 3-го
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2