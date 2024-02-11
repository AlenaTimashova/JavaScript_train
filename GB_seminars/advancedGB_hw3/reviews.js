// Страница просмотра отзывов:

// Показывает список всех продуктов, о которых были оставлены отзывы.
// При клике на название продукта отображается список всех отзывов по этому продукту.
// Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).

const reviewList = document.querySelector(".review-list");
console.log(reviewList);

// Восстановление списка из локального хранилища

if (localStorage) {
  for (let index = 0; index < localStorage.length; index++) {
    reviewList.insertAdjacentHTML(
      "afterbegin",
      `
    <li class="product_name">
    <h2 class="product_title">${localStorage.key(index)}</h2>
    </li>
    `
    );
    getReviews(localStorage.key(index));
  }
}

/**
 * Функция для создания блока отзывов о продукте (product)
 * @param {String} product Название продукта (ключ LocalStorage)
 * @returns html разметку - блок отзывов о продукте
 */

function getReviews(product) {
  const productReviews = JSON.parse(localStorage.getItem(product));
  let reviewBox = document.createElement("ul");
  for (let index = 0; index < productReviews.length; index++) {
    reviewBox.insertAdjacentHTML(
      "afterbegin",
      `
    <li class="product-review">
    ${productReviews[index]}
    <button class="delete-btn">Удалить</button>
    </li>
    
    `
    );
  }
  reviewBox.style.display = "none";

  return reviewBox;
}

const productList = reviewList.children;

for (let i = 0; i < productList.length; i++) {
  let reviewBlock = getReviews(productList[i].innerText);

  productList[i].insertAdjacentElement("beforeEnd", reviewBlock);

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

reviewList.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    const listItem = event.target.closest("li");
    console.log(listItem);
    listItem.parentNode.removeChild(listItem);
  }
});
