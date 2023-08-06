// data access object
/*
Паттерн проектирования, который предоставляет интерфейс для работы с базой данных или другим хранилищем данных.
DAO полностью скрывает детали реализации источника данных от клиентов.
В JavaScript, DAO pattern может быть имплементирован с помощью функций или классов, или их комбинации.
В примере ниже основная программа имеет доступ к БД (представлена в виде массива) через класс UserDao и не имеет прямого
доступа к самой базе данных. Класс UserDao выступает в роли объекта для доступа к данным.
 */

class UserDao {
    constructor() {
        // имитация БД через массив
        this.users = [];
    }

    /**
     * функция для сохранения пользователя в системе
     * @param {Object} user - данные о пользователе в виде объекта
     */
    save(user) {
        this.users.push(user);
    }

    /**
     * Функция возвращает данные пользователя по его идентификатору
     * @param {number} id - номер id пользователя в системе
     * @returns {Object} - возвращает данные пользователя
     */
    getById(id) {
        return this.users.find(user => user.id === id);
    }

    /**
     * Функция обновляет информацию о пользователе
     * @param {Object} user - обновленная информация о пользователе
     */
    update(user) {
        const index = this.users.findIndex(u => u.id === user.id);
        if (index !== -1) {
            this.users[index] = user;
        }
    }

    /**
     * Функция удаляет пользователя из системы
     * @param {number} id - номер id пользователя
     */

    delete(id) {
        this.users = this.users.filter(user => user.id !== id);
    }

    /**
     * Функция выводит всех пользователей в системе
     * @returns {Array} - возвращает массив объект
     */

    getAll() {
        return this.users;
    }
}

// Usage
const userDao = new UserDao();
const user1 = { id: 1, name: 'John' };
const user2 = { id: 2, name: 'Jane' };

userDao.save(user1);
userDao.save(user2);

console.log(userDao.getById(1)); // { id: 1, name: 'John' }

userDao.update({ id: 1, name: 'Johnny' });
console.log(userDao.getById(1)); // { id: 1, name: 'Johnny' }

userDao.delete(1);

console.log(userDao.getAll()); // [ { id: 2, name: 'Jane' } ]

