// Interface segregation principle - класс не должен иметь неиспользуемые интерфейсы
/*
В классическом JS нет интерфейсов. Но данный принцип можно продемонстрировать благодаря composition API через прототипное наследование */

class HumanWorker {
    constructor(name) {
        this.name = name;
    }
}

class RobotWorker {
    constructor(name) {
        this.name = name;
    }
}

const worker = {
    work() {
        console.log(`${this.name} работает`)
    }
}

const eater = {
    eat() {
        console.log(`${this.name} ест`)
    }
}

Object.assign(HumanWorker.prototype, worker, eater);
Object.assign(RobotWorker.prototype, worker);

const petr = new HumanWorker('Петя');
const robot = new RobotWorker('Робот Валли');

petr.eat();
petr.work();
robot.work();