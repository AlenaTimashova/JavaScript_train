/* Реализация паттерна медиатор( посредник). Иммитация чата, 
в котором есть пользователи, экземпляры класса User. И посредником между
ними выступает класс ChatRoom - чат, как связь между объектами
 */


class User {
    constructor(name) {
        this.name = name
        this.room = null // для связи с классом медиатором
    }

    // метод отправки сообщения

    send(message, to) {
        this.room.send(message, this, to)
    }
    // метод получения сообщения
    receive(message,from) {
        console.log(`${from.name} => ${this.name} : ${message}`)
    }
}

class ChatRoom {
    constructor() {
        this.users = {}
    }
    //метод регистрации в чате, для связи экземпляров класса User с медиатором
    register(user) {
        this.users[user.name] = user;
        user.room = this;
    }

    // метод, переопределенный в классе User

    send(message, from, to) {
        if (to) {
            to.receive(message, from);
        } else {
            Object.keys(this.users).forEach(key => {
                if(this.users[key] !== from) {
                    this.users[key].receive(message, from);
                }
            })
        }
    }
}

const vera = new User("Вера");
const vasya = new User("Вася");
const masha = new User("Маша");

const room = new ChatRoom();
room.register(vasya);
room.register(vera);
room.register(masha);

vera.send('Привет!', masha);
masha.send('Привет, подруга!', vera);
vasya.send('Привет всем!');
