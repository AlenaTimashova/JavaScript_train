// Страница просмотра отзывов:

// Показывает список всех продуктов, о которых были оставлены отзывы.
// При клике на название продукта отображается список всех отзывов по этому продукту.
// Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).

/**
 * Функция отрисовывает список продуктов в браузере
 * @param {*} arr Список продуктов в виде массива
 */
function renderProductList(arr) {
  if (localStorage) {
    arr.forEach((arrItem) => {
      reviewList.insertAdjacentHTML(
        "afterbegin",
        `
              <li class="product_name">
              <h2 class="product_title">${arrItem}</h2>
              </li>
              `
      );
    });
  }
}

/**
 * Функция возвращает список продуктов в виде массива
 * @returns arr Список продуктов (ключей)
 */
function getProducts(collection) {
  const productsArr = [];
  for (let index = 0; index < collection.length; index++) {
    productsArr.push(localStorage.key(index));
  }

  return productsArr;
}

/**
 * Функция для создания блока отзывов о продукте (product)
 * @param {String} product Название продукта
 * @returns html разметку - блок отзывов о продукте
 */

function getReviews(product) {
  const productReviews = getProductReviews(product);
  let reviewBox = document.createElement("ul");
  productReviews.forEach((reviewItem) => {
    reviewBox.insertAdjacentHTML(
      "afterbegin",
      `<li class="product-review"> ${reviewItem}
      <button class="delete-btn">Удалить</button>
      </li>`
    );
  });

  reviewBox.style.display = "none";

  return reviewBox;
}

/**
 * функция возвращает список отзывов по указанному продукту из LocalStorage
 * @param {String} product
 * @returns arr
 */
function getProductReviews(product) {
  return JSON.parse(localStorage.getItem(product));
}

/**
 * Функция обновления локального хранилища
 * @param {*} product
 * @param {*} arr
 */
function updateLocalStorageProduct(product, arr) {
  localStorage.setItem(product, JSON.stringify(arr));
}

const reviewList = document.querySelector(".review-list");

// Восстановление списка из локального хранилища
const products = getProducts(localStorage); //получаем список продуктов
renderProductList(products); // рендер на странице продуктов

const productList = reviewList.children; // html collection

for (let i = 0; i < productList.length; i++) {
  let reviewBlock = getReviews(productList[i].innerText); //создаем отзывы по каждому продукту из списка

  productList[i].insertAdjacentElement("beforeEnd", reviewBlock); //вставляем отзывы под продукт

  //меняем по клику видимость:

  productList.item(i).addEventListener("click", (event) => {
    if (event.target.classList.contains("product_title")) {
      if (reviewBlock.style.display == "none") {
        reviewBlock.style.display = "block";
      } else {
        reviewBlock.style.display = "none";
      }
    }
  });
}

//удаляем по кнопке отзыв:

reviewList.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    const listItem = event.target.closest("li");
    const coll = listItem.parentNode.children;
    const productName =
      listItem.parentNode.parentNode.firstElementChild.innerText; // ключ - продукт
    listItem.parentNode.removeChild(listItem);
    console.log(Array.from(coll));
    for (let i = 0; i < coll.length; i++) {
      console.log(productName, coll[i]);
      //   addToStorage(productName, coll[i]);
    }
  }
});
