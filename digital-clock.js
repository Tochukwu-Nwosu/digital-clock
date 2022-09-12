let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");

const getTime = () => {
    let time = new Date();
    let hoursValue = time.getHours();
    let minutesValue = time.getMinutes();
    let secondsValue = time.getSeconds();

    hours.innerHTML = lessThanTen(hoursValue);    
    minutes.innerHTML = lessThanTen(minutesValue);
    seconds.innerHTML = lessThanTen(secondsValue);
}

const lessThanTen = (value) => {
    if (value < 10) {
        return `0${value}`;
    }
    else {
        return value;
    }
}

setInterval(getTime, 0);