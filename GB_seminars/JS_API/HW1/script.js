const fitActivities = [
  {
    fitName: "Аэробика",
    fitTime: "вт, чт 17:00",
    maxPeople: 20,
    placesLeft: 20,
  },
  {
    fitName: "Пилатес",
    fitTime: "пн, ср 17:00",
    maxPeople: 15,
    placesLeft: 15,
  },
  {
    fitName: "Кроссфит",
    fitTime: "вт, пт 18:00",
    maxPeople: 10,
    placesLeft: 10,
  },
];

const fitActivitiesList = document.querySelector(".list-group");

//Рендер списка на странице

fitActivities.forEach((fitItem) => {
  fitActivitiesList.insertAdjacentHTML(
    "afterbegin",
    `<a
    href="#"
    class="list-group-item list-group-item-action"
    aria-current="true"
  >
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-3">${fitItem.fitName}</h5>
      <small class="places-left">Осталось мест: ${fitItem.placesLeft}</small>
    </div>
    <p class="mb-1"><b>Время проведения: ${fitItem.fitTime}</b></p>
    <p>Максимальное количество человек: ${fitItem.maxPeople}</p>
    <button type="button" class="btn btn-success sign">Записаться</button>
    <button type="button" class="btn btn-danger cancel">Отменить занятие</button>
  </a>`
  );
});

fitActivitiesList.addEventListener("click", function (event) {
  const fitNameSigned =
    event.target.parentNode.firstElementChild.firstElementChild.textContent;
  const placesLeft = event.target.parentNode.firstElementChild.lastElementChild;

  fitActivities.forEach((fitItem) => {
    if (fitItem.fitName === fitNameSigned) {
      if (event.target.classList.contains("sign")) {
        fitItem.placesLeft -= 1;
        if (fitItem.placesLeft == 0) {
          event.target.disabled = true;
        }
      }
      if (event.target.classList.contains("cancel")) {
        if (fitItem.placesLeft < fitItem.maxPeople) {
          fitItem.placesLeft += 1;
          if (event.target.previousElementSibling.disabled) {
            event.target.previousElementSibling.disabled = false;
          }
        }
      }
      placesLeft.textContent = `Осталось мест: ${fitItem.placesLeft}`;
    }
  });
});
