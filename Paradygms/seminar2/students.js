// Дан Список студентов с их именами и оценками.
// Нам нужно найти средний балл по всем студентам и вывести имена студентов, чей балл выше среднего.

studentData = [
    {'name': 'Alice', 'score': 85},
    {'name': 'Bob', 'score': 92},
    {'name': 'Charlie', 'score': 78},
    {'name': 'David', 'score': 95},
]

let scoreSum = 0;
for (let i = 0; i < studentData.length; i++) {
    scoreSum += studentData[i].score
}

const averageScore = scoreSum / studentData.length;

let bestStudents = studentData.filter(student => student.score > averageScore);
for (let i = 0; i < bestStudents.length; i++) {
    console.log(bestStudents[i].name);
}

// 2 вариант с функциями

/**
 * Функция считает средний балл по оценкам в массиве
 * @param arr - массив
 * @returns {number} средний балл
 */
function getAverageScore(arr) {
    let scoreSum = 0;
    for (let i = 0; i < arr.length; i++) {
        scoreSum += arr[i].score
    }

    return scoreSum / arr.length;
}

/**
 * Функция показывает студентов, у которых балл выше среднего
 * @param arr - массив с данными студентов
 * @param average - средний балл
 * @returns {*} массив с данными студентов, у которых балл выше среднего
 */
function getBest(arr, average) {
    let bestStudents = arr.filter(student => student.score > average);
    return bestStudents
}

let average = getAverageScore(studentData);
console.log(average)
console.log(getBest(studentData, average))