//Задание 1. Библиотека

class Library {
  #books = [];

  constructor(books) {
    if (this.duplicateExists(books)) {
      throw new Error("В массиве дубликаты");
    } else {
      this.#books = [...books];
    }
  }

  get allBooks() {
    return this.#books;
  }

  duplicateExists(arr) {
    const duplicates = arr.filter((number, index, values) => {
      return values.indexOf(number) !== index;
    });
    return duplicates.length;
  }

  //Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке
  //и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

  hasBook(title) {
    return this.#books.includes(title);
  }
  //Реализуйте метод addBook(title), который позволяет добавлять книгу в список.
  // Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

  addBook(title) {
    if (this.#books.includes(title)) {
      throw new Error("Книга с таким названием уже существует в списке");
    }
    this.#books.push(title);
  }

  //Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.
  removeBook(title) {
    if (!this.#books.includes(title)) {
      throw new Error("Книги с таким названием нет в списке");
    }
    let index = this.#books.indexOf(title);
    this.#books.splice(index, 1);
  }
}

// const arr = [
//   "Преступление и наказание",
//   "Приключения Буратино",
//   "Сказки народов мира",
// ];
// const myLibrary = new Library(arr);
// console.log(myLibrary.allBooks);
// myLibrary.addBook("Чебурашка");
// console.log(myLibrary.hasBook("Преступление и наказание"));
// console.log(myLibrary.hasBook("Отцы и дети"));
// myLibrary.removeBook("Приключения Буратино");
// myLibrary.removeBook("Отцы и дети");
// console.log(myLibrary.allBooks);
// myLibrary.addBook("Преступление и наказание");

// Задание 2
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

const userInput = document.querySelector(".user-input");
const btnEl = document.querySelector(".review-btn");
const itemList = document.querySelector(".review-list");
const errorMsg = document.querySelector(".error-box");

btnEl.addEventListener("click", () => {
  try {
    if (
      userInput.value.trim().length < 15 ||
      userInput.value.trim().length > 300
    ) {
      throw new Error("Длина отзыва должна быть от 50 до 100 знаков");
    }
    const li = document.createElement("li");
    li.textContent = userInput.value;
    itemList.appendChild(li);
    errorMsg.textContent = "";
  } catch (error) {
    errorMsg.textContent = error.message;
  }
});
