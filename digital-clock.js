let firstClock = document.querySelector(".firstClock");
let secondClock = document.querySelector(".secondClock");
let hoursFirstClock = document.querySelector("#hoursFirstClock");
let minutesFirstClock = document.querySelector("#minutesFirstClock");
let secondsFirstClock = document.querySelector("#secondsFirstClock");
let hoursSecondClock = document.querySelector("#hoursSecondClock");
let minutesSecondClock = document.querySelector("#minutesSecondClock");
let secondsSecondClock = document.querySelector("#secondsSecondClock");
let session = document.querySelector("#session");

const lessThanTen = (value) => {
    if (value < 10) {
        return `0${value}`;
    }
    else {
        return value;
    }
}

const getTimeFor24Hrs = () => {
    let time = new Date();
    let hoursValue = time.getHours();
    let minutesValue = time.getMinutes();
    let secondsValue = time.getSeconds();

    hoursFirstClock.innerHTML = lessThanTen(hoursValue);
    minutesFirstClock.innerHTML = lessThanTen(minutesValue);
    secondsFirstClock.innerHTML = lessThanTen(secondsValue); 
}

const getTimeFor12Hrs = () => {
    let time = new Date();
    let hoursValue = time.getHours();
    let minutesValue = time.getMinutes();
    let secondsValue = time.getSeconds();

    if (hoursValue >= 12) {
        session.innerHTML = "PM";
    }
    else {
        session.innerHTML = "AM";
    }
    
    if (hoursValue > 12) {
        hoursValue %= 12;
        hoursSecondClock.innerHTML = lessThanTen(hoursValue);
    }
    else {
        hoursSecondClock.innerHTML = lessThanTen(hoursValue);
    }
    
    minutesSecondClock.innerHTML = lessThanTen(minutesValue);
    secondsSecondClock.innerHTML = lessThanTen(secondsValue); 


}

setInterval(getTimeFor24Hrs, 0);
setInterval(getTimeFor12Hrs, 0);