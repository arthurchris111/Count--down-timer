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
const deadLineFormat = document.querySelector(".deadLineFormat")
const items = document.querySelectorAll(".deadLine h4")

const futureDate = new Date(2022, 9, 11, 12, 30, 0);
// console.log(futureDate)

const year = futureDate.getFullYear();

let month = futureDate.getMonth();
month = months[month];

let weekday = futureDate.getDay();
weekday = weekdays[weekday]
// console.log(weekday)

const hour = futureDate.getHours();
const minute = futureDate.getMinutes();
const date = futureDate.getDate();

giveaway.innerHTML = `Giveaway Ends on ${weekday}, ${date} ${month} ${year} ${hour}:${minute}`

//future time
const futureTime = futureDate.getTime();
// console.log(futureTime)

const getRemainingTime = () => {
    const currentTime = new Date().getTime();
    // console.log(today)

    let timeLeft = futureTime - currentTime;
    // console.log(timeLeft)

    //1day = 24hr
    //1hour = 30mins
    //1minute = 60sec
    //1sec = 1000ms

    //calculating the number of ms that makes a day
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    //calculating the actual time left
    let days = timeLeft / oneDay;
    days = Math.floor(days)

    let hours = Math.floor((timeLeft % oneDay) / oneHour);

    let minutes = Math.floor((timeLeft % oneHour) / oneMinute);

    let seconds = Math.floor((timeLeft % oneMinute) / 1000);

    //time format
    const format = (item) => {
        if (item < 10) {
            return (item = `0${item}`)
        } else {
            return item
        }
    }

    //set values array
    const values = [days, hours, minutes, seconds];

    items.forEach((item, index) => {
        item.innerHTML = format(values[index]);
    })

    if (timeLeft < 0) {
        clearInterval(countdownTime);
        deadLineFormat.innerHTML = `<h5 class="expired text-danger">Sorry, This Giveaway Has Ended</h5>`
    }

}
const countdownTime = setInterval(getRemainingTime, 1000)
getRemainingTime();