let user = {
    name: "John",
    age: 30
  };
  
  let clone = {}; // новый пустой объект
  
  // давайте скопируем все свойства user в него
  for (let key in user) {
    clone[key] = user[key];
  }
  
  // теперь clone это полностью независимый объект с тем же содержимым
  clone.name = "Pete"; // изменим в нём данные
  
  alert( user.name ); // все ещё John в первоначальном объекте

// копирование свойств с помощью Object.assign

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// копируем все свойства из permissions1 и permissions2 в user
Object.assign(user, permissions1, permissions2);

// теперь user = { name: "John", age: 30, canView: true, canEdit: true }

// Если свойство уже есть, то оно перезаписывается

Object.assign(user, { name: "Pete" });

alert(user.name); // теперь user = { name: "Pete" }

let copy = Object.assign({}, user); // замена цикла for для создания клона. В пустой объект копируются все свойства user и возвращается объект