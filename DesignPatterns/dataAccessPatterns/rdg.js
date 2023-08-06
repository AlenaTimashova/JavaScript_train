// Row Data Gateway

/*
Этот паттерн описывает объекты-шлюзы (gateways), которые служат для доступа к строкам данных в базе данных. Они предоставляют методы для сохранения, извлечения, обновления и удаления отдельных записей данных. Минус паттерна, что каждый класс представлен отдельным объектом
 */

class User {

    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    getUserId() {
        return this.id;
    }

    getUserName() {
        return this.name;
    }
}
// класс выступает шлюзом между классом User и БД
class UserRawGateway {

    constructor(arr) {
        this.data = arr;
    }

    insert(user) {
        //для вставки строки в бд
        this.data.push(user);

    }

    update(user) {
        //для обновления строки в бд
        const index = this.data.findIndex(element => element.id === user.id);
        this.data[index] = user;

    }

    delete(id) {
        //для удаления строки из бд
        const index = this.data.findIndex(element => element.id === id);
        this.data.splice(index, 1)
    }

}
const users = [];
const petr = new User(1, 'Петр');
const masha = new User(2, 'Мария');
const gateway = new UserRawGateway(users);
console.log(petr.getUserId());
console.log(masha.getUserName())
gateway.insert(petr);
gateway.insert(masha);
console.log(users);
const pavel = new User(1, 'Павел');
gateway.update(pavel)
console.log(users);
gateway.delete(1);
console.log(users);



