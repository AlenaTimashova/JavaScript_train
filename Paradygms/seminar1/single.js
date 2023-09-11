// У вас есть массив целых чисел, в котором каждое число, кроме одного, повторяется дважды. Вам нужно найти это одиночное число.

//Поскольку каждый элемент в массиве встречается дважды, кроме одного, XOR для всех дубликатов вернет 0. А XOR для
// любого ненулевого числа с нулем вернет то же самое число. Нам нужно пройтись итерациями по массиву
// и выполнить XOR для всех элементов.

let singleNumber = function(nums) {
    let singleNum = 0;

    for(let i = 0; i < nums.length; i++) {
        singleNum ^= nums[i]; // арифметический оператор XOR ^. Оператор XOR возвращает 0, если операнды одинаковы.
    }

    return singleNum;
};

const arr =  [4, 3, 2, 4, 1, 3, 2];
console.log(singleNumber(arr));

// 2 вариант

let single = new Map();
for (let i = 0; i < arr.length; i++) {
    if(single.has(arr[i])) {
        single.set(arr[i], single.get(arr[i]) + 1)
    } else {
        single.set(arr[i], 1);
        }
}
single.forEach((key, value) => {
    if(value == 1) {
        console.log(key)
    }
});


