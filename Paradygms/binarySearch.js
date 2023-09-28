function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (array[middle] === target) {
            return middle;
        } else if (array[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return -1;
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 7;

const result = binarySearch(sortedArray, target);
console.log(result); // Выведет 3, так как 7 находится на позиции 3 в массиве
