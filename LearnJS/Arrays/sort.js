// сортировка по убыванию

let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert( arr ); // 8, 5, 2, 1, -10


// function copySorted(arr) {
//     let arrSort = arr.slice();
//     return arrSort.sort((a, b) => a.localeCompare(b));
// }

function copySorted(arr) {
    return arr.slice().sort();
}

let arrStr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arrStr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arrStr ); // HTML, JavaScript, CSS (без изменений)