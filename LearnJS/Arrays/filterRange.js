/*Напишите функцию filterRange(arr, a, b), которая принимает массив arr, 
ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

Функция должна возвращать новый массив и не изменять исходный.
*/

// function filterRange(arr, a, b) {
//     return arr.filter(value => (a <= value && value <= b));
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (совпадающие значения)

// alert( arr ); // 5,3,8,1 (без изменений)

/* Напишите функцию filterRangeInPlace(arr, a, b), 
которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. 
То есть, проверка имеет вид a ≤ arr[i] ≤ b.

Функция должна изменять принимаемый массив и ничего не возвращать.
*/

function filterRangeInPlace(arr, a, b) {

    for(let i = 0; i < arr.length; i++) {
        
        if ( a > arr[i] || arr[i] > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

let arr1 = [5, 3, 8, 1];

filterRangeInPlace(arr1, 1, 4); // удалены числа вне диапазона 1..4

alert( arr1 ); // [3, 1]