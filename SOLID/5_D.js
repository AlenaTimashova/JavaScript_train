//Dependency Inversion Principle, DIP
/*
Зависимости на абстракциях. Нет зависимостей на что-то конкретное". 
Это означает, что высокоуровневые модули, которые обеспечивают сложную логику, 
должны быть независимы от низкоуровневых модулей, которые обеспечивают утилитарные функции. 
Оба типа модулей должны зависеть от абстракций.
 */


/*
В данном примере есть класс Printer, в который мы можем передавать любые данные для распечатки в консоль */

class Text {
    constructor(text) {
        this.text = text;
    }

    getData() {
        console.log(text)
    }
}

class Printer {
    constructor(client){
        this.client = client;
    }

    printData() {
        return this.client.getData();
    }
}

const text = new Text("Это тест");
const printer = new Printer(text);
printer.printData();

class Fetch {
    request(url) {
      // return fetch(url).then(r => r.json())
      return Promise.resolve('data from fetch')
    }
  }


class FetchClient {
    constructor() {
      this.fetch = new Fetch()
    }
  
    getData() {
      return this.fetch.request('vk.com')
    }
}

const printer2 = new Printer(new FetchClient);
console.log(printer2.printData());