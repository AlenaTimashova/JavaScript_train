function unique(arr) {
    const result = [];
    arr.forEach(element => {
        if(!result.includes(element)) {
            result.push(element);
        }
    });

    return result;
  }

  function unique1(arr) {
    const unique = new Set();
    arr.forEach(element => {
      unique.add(element);
    })
    return Array.from(unique);
  }

  // в короткой записи с Set

  function unique2(arr) {
    return Array.from(new Set(arr));
  }
  
  let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  
  alert( unique1(strings) ); // кришна, харе, :-O