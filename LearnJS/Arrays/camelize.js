// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

function camelize(str) {
    arr = str.split('-');
    for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    return arr.join('');
}

// второй вариант через map

function camelize1(str) {
    return str
                .split("-")
                .map((word, index) => index == 0 ? word : word[0].toUpperCase + word.slice(1))
                .join('');
}

console.log(camelize('my-short-string'));
console.log(camelize("background-color") )// 'backgroundColor';
console.log(camelize("list-style-image")) // 'listStyleImage';
console.log(camelize("-webkit-transition") )// 'WebkitTransition';