// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
/*
const date = new Date(2012,1,20, 3,12);
console.log(date)
*/

// Напишите функцию getWeekDay(date),
/**
 * Функция показывает день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
 * @param date - дата
 * @returns {string} - возвращает день недели на заданную дату
 */
function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

    return days[date.getDay()];
}

/**
 * Функция показывает день недели в европейском представлении, где 1 - понедельник, 7 - воскресенье
 * @param date - дата
 * @returns {number} - порядковый номер дня недели для указанной даты
 */
function getLocalDay(date) {

    let day = date.getDay();

    if (day == 0) { // день недели 0 (воскресенье) в европейской нумерации будет 7
        day = 7;
    }

    return day;
}

/**
 * Функция показывает число, которое было столько дней назад, сколько укажет пользователь в параметре days
 * @param date - дата
 * @param days - количество дней, которые необходимо вычесть
 * @returns {number} - число, которое было days назад
 */
function getDateAgo(date, days) {
    let dateCopy = new Date(date);

    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
}

/**
 * Функция показывает последнее число месяца
 * @param year - год из четырёх цифр
 * @param month - месяц от 0 до 11, где 0 - январь, 11 - декабрь
 * @returns {number} - последнее число месяца
 */
function getLastDayOfMonth(year, month) {
    const date = new Date(year, month + 1, 0);
    //Обычно даты начинаются с 1, но технически возможно передать любое число, и дата сама себя поправит.
    // Так что если передать 0, то это значение будет соответствовать «один день перед первым числом месяца»,
    // другими словами: «последнее число прошлого месяца».
    return date.getDate();
}

function getSecondsToday() {
    let now = new Date();

    // создаём объект с текущими днём/месяцем/годом
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    let diff = now - today; // разница в миллисекундах
    return Math.round(diff / 1000); // получаем секунды
}

console.log( getSecondsToday() );

let date = new Date(2012, 0, 3);  // 3 января 2012 года
console.log( getWeekDay(date) );        // нужно вывести "ВТ"
console.log(getLocalDay(date));

let date1 = new Date(2015, 0, 2);

console.log( getDateAgo(date1, 1) ); // 1, (1 Jan 2015)
console.log( getDateAgo(date1, 2) ); // 31, (31 Dec 2014)
console.log( getDateAgo(date1, 365) ); // 2, (2 Jan 2014)
console.log(getLastDayOfMonth(2012, 1)) // 29 (Feb, 2012)