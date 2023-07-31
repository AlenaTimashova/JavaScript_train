function unique(arr) {
    const result = [];
    arr.forEach(element => {
        if(!result.includes(element)) {
            result.push(element);
        }
    });

    return result;
  }
  
  let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  
  alert( unique(strings) ); // кришна, харе, :-O