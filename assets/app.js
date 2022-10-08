const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const giveaway = document.querySelector(".giveaway")
const deadLine = document.querySelector(".deadLine")
const item = document.querySelectorAll(".deadLine h4")

const futureDate = new Date(2022, 11, 25, 12, 30, 00);
console.log(futureDate)

const year = futureDate.getFullYear();

let month = futureDate.getMonth();
month = months[month];

let weekday = futureDate.getDay();
weekday = weekdays[weekday]
console.log(weekday)

const hour = futureDate.getHours();
const minute = futureDate.getMinutes();
const date = futureDate.getDate();

giveaway.innerHTML = `Giveaway Ends on ${weekday}, ${date} ${month} ${year} ${hour}:${minute}am`

//future time
const futureTime = futureDate.getTime();
// console.log(futureTime)

const getRemainingTime = () => {
    const today = new Date().getTime();
    // console.log(today)
}

getRemainingTime();