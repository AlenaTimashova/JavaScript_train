let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function sumSalaries(obj) {
    let sum = 0;
    for (const value of Object.values(obj)) {
        sum += value;
    };
    return sum;
}
//второй вариант
// reduce перебирает массив значений salaries,
// складывает их
// и возвращает результат

function sumSalaries1(salaries) {
    return Object.values(salaries).reduce((sum, salary) => sum + salary, 0) // 650
}
 console.log( sumSalaries1(salaries) ); // 650