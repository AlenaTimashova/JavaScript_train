/* Liskov substitution principle - функции, которые используют базовый тип, 
должны иметь возможность использовать подтипы базового типа, не зная об этом.*/

class Person {

}

class Employee extends Person {
  access() {
    console.log('У тебя есть доступ')
  }
}

class Guest extends Person {
  isGuest = true
}

class Frontend extends Employee {
  canCreateFrontend() {}
}

class Backend extends Employee {
  canCreateBackend() {}
}

class PersonFromDifferentCompany extends Guest {
  access() {
    throw new Error('У тебя нет доступа! Иди к себе!')
  }
}

function openSecretDoor(Employee) {
  Employee.access()
}

openSecretDoor(new Frontend())
openSecretDoor(new Backend())
openSecretDoor(new PersonFromDifferentCompany())  // There should be Employee!
