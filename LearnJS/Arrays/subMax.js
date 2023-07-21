/* На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
Функция getMaxSubSum(arr) должна возвращать эту сумму.
Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:
*/

function getMaxSubSum(arr) {
    bestSum = 0;
    currentSum = 0;
    for (const value of arr) {
        currentSum = Math.max(0, currentSum + value);
        bestSum = Math.max(bestSum, currentSum);
    }
    return bestSum;
}
alert(getMaxSubSum([1, -2, 3, 4, -9, 6])) // 7
alert(getMaxSubSum([-1, 2, 3, -9])); // 5
alert(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
alert(getMaxSubSum([-2, -1, 1, 2])); // 3
alert(getMaxSubSum([1, 2, 3])); // 6
alert(getMaxSubSum([100, -9, 2, -3, 5])); // 100