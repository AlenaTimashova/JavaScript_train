// Задание 1: ""Управление библиотекой книг""
//
// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:
//
//     Свойство title (название) - строка, название книги.
//     Свойство author (автор) - строка, имя автора книги.
//     Свойство pages (количество страниц) - число, количество страниц в книге.
//     Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    displayInfo() {
        console.log(`
        Название: ${this.title}
        Автор: ${this.author}
        Количество страниц: ${this.pages}`)
    }
}

const book1 = new Book("Преступление и наказание", "Достоевский Ф.М.", 325);
book1.displayInfo();

// Задание 2: ""Управление списком студентов""
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:
//
//     Свойство name (имя) - строка, имя студента.
//     Свойство age (возраст) - число, возраст студента.
//     Свойство grade (класс) - строка, класс, в котором учится студент.
//     Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).

class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    displayInfo() {
        console.log(`
        Name: ${this.name}
        Age: ${this.age} 
        Grade: ${this.grade} `)
    }
}

const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();
// Вывод:
// Name: John Smith
// Age: 16
// Grade: 10th grade

const student2 = new Student("Jane Doe", 17, "11th grade");
student2.displayInfo();
// Вывод:
// Name: Jane Doe
// Age: 17
// Grade: 11th grade"

// Создать класс "Телефонная книга" с методами для добавления, удаления и поиска контактов по имени или номеру телефона.

class Phonebook {
    contacts = [];

    addContact(name, phone) {
        const contact = {
            name: name,
            phone: phone,
        }
        this.contacts.push(contact);
    }

    findContactByName(name) {
        for (const contact of this.contacts) {
            if (contact.name === name) {
                return contact
            }
        }
        return "no info found"
    }

    findContactByPhone(phone) {
        for (const contact of this.contacts) {
            if (contact.phone === phone) {
                return contact
            }
        }
        return "no info found"
    }
    deleteContact(name) {
        // for (let i = 0; i < this.contacts.length; i++) {
        //     if (this.contacts[i].name === name) {
        //         this.contacts.splice(i, 1);
        //     }
        // }
        this.contacts = this.contacts.filter((contact) => contact.name !== name);

    }

}

// Пример использования
    let phonebook = new Phonebook();
phonebook.addContact("Иванов", "123-45-67");
phonebook.addContact("Петров", "987-65-43");
console.log(phonebook.findContactByName("Иванов")); // { name: "Иванов", phone: "123-45-67" }
console.log(phonebook.findContactByPhone("987-65-43")); // { name: "Петров", phone: "987-65-43" }
phonebook.deleteContact("Иванов");
console.log(phonebook.contacts); // [{ name: "Петров", phone: "987-65-43" }]