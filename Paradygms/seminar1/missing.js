//У вас есть массив, содержащий числа от 1 до N, где N - длина массива.
// Одно из чисел в массиве повторяется дважды, а одно число пропущено. Найдите повторяющееся число и пропущенное число.

const nums =  [2, 3, 1, 5, 3];

    let missing;                               //объявляем переменную для поиска отсутствующего значения
    let double;                                // объявляем переменную для поиска задвоенного значения
    for (let i = 0; i <= nums.length; i++) {
        let count = 0;                          // считаем количество повторений
        for (let j = 0; j < nums.length; j++) { //
            if (i === nums[j]) count++;          //если задвоение, то увеличиваем счетчик
        }
        if (count === 0) missing = i;           //i отсутствующее значение
        if (count === 2) double = i;            // i задвоенное значение
    }

console.log(`Пропущенное число: ${missing}, повторяющееся число: ${double}`)

//2 вариант

function findDuplicates(arr) {
    const duplicates = [];
    const missingNumbers = [];

    for (let i = 0; i < arr.length; i++) {
        const index = Math.abs(arr[i]) - 1;

        if (arr[index] > 0) {
            arr[index] *= -1;
        } else {
            duplicates.push(Math.abs(arr[i]));
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            missingNumbers.push(i + 1);
        }
    }

    return [duplicates, missingNumbers];
}

const array = [2, 4, 1, 5, 2, 6, 7];
const [duplicates, missingNumbers] = findDuplicates(array);

console.log("Повторяющееся число: " + duplicates[0]);
console.log("Пропущенное число: " + missingNumbers[0]);
