// отфильтровать анаграммы

function aclean(arr) {
    const sorted = new Map();
    arr.forEach(word => {
        const updated = word
                            .toLowerCase()
                            .split("")
                            .sort()
                            .join("");
        sorted.set(updated, word);
    });
    return Array.from(sorted.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr)); // "PAN,hectares,era"