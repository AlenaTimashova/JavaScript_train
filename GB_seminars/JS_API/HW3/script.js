// Application ID 568604
// Access Key Qx7uclc0oZnhSaYHUk2DMrJi6LI-GNmJ7R7Ar3QO0JM
// Secret key SbvcQJIoRRNo4SfokMA1Br22U9KKO_7g0iZ5xN3EQYo
const CLIENT_KEY = "Qx7uclc0oZnhSaYHUk2DMrJi6LI-GNmJ7R7Ar3QO0JM";

const picture = document.querySelector(".picture");
const photographersName = document.querySelector(".photographerName");
let counterLikes = document.querySelector(".counter");
const likeBtn = document.querySelector(".like");

const fetchPhotos = async () => {
  const url = `https://api.unsplash.com/photos/random?client_id=${CLIENT_KEY}`;
  const response = await fetch(url);
  const data = await response.json();

  const src = data.urls.regular;
  picture.setAttribute("src", src);

  const userName = data.user.name;
  photographersName.textContent = userName;

  const likes = data.likes;
  counterLikes.textContent = likes;
};

fetchPhotos();

likeBtn.addEventListener("click", () => {
  const counterLikes = document.querySelector(".counter");
  let counter = parseInt(counterLikes.textContent);
  counterLikes.textContent = ++counter;
});
