//Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users)
// и отобразить их на странице.

const URL = "https://jsonplaceholder.typicode.com/users";
const userList = document.querySelector(".myList");

async function myAsync(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

try {
  const myData = await myAsync(URL);
  myData.forEach((el) => {
    userList.insertAdjacentHTML(
      "beforeend",
      `
                    <li>${el.name}</li>
         `
    );
  });
} catch (error) {
  console.log(error.message);
}

//Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.

const dogAPI = "https://dog.ceo/api/breeds/image/random";
const imgContainer = document.querySelector(".img-container");

async function showImg() {
  let myData1 = await myAsync(dogAPI);
  imgContainer.insertAdjacentHTML(
    "beforeend",
    `
    <img class="dogImg" src="${myData1.message}">
           `
  );
}
setInterval(showImg, 3000);
