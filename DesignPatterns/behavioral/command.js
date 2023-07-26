//  класс двигатель

class Engine {
    constructor() {
      this.state = false
    }
  
    on() {
        this.state = true
    }
    
    off() {
        this.state = false
    }
  }

  //класс команд для старта и остановки - "ключи зажигания"
class Command {

    constructor(engine) {
        this.engine = engine;
    }

    start() {
        this.engine.on();
      }
    
    stop() {
        this.engine.off();
      }
}

// водитель - класс прослойка между двигателем и командами
  
  class Driver {
    constructor(subject) {
      this.subject = subject; 
      this.commandsExecuted = [];
    }
  
    execute(command) { 
      this.commandsExecuted.push(command)
      this.subject[command]();
    }
  }

  const car = new Engine; // создаем машину
  console.log(car); // false - выключен двигатель
  const commands = new Command(car); // создаем экземпляр класса команд / "ключи"
  const driver = new Driver(commands); // даем водителю "ключи" (команды для машины)
  driver.execute('start')
  console.log(car) // true - включен двигатель
  driver.execute('stop')
  console.log(car) // false - выключен двигатель
  driver.execute('start')
  console.log(car) // true - включен двигатель
  driver.execute('stop') // false - выключен двигатель
  console.log(car) // true - включен двигатель
  
  console.log(driver.commandsExecuted) 