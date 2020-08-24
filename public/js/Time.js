const TimeText = document.getElementById('watch');
const apm = document.getElementById('am_pm');

getTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    if (hours >= 12) {
        apm.innerText = "PM"
        if (hours-12 >= 10){
            TimeText.innerText = `${hours-12}:${minutes < 10 ? `0${minutes}` : minutes}`;
        }
        if (hours-12 < 10){
            TimeText.innerText = `0${hours-12}:${minutes < 10 ? `0${minutes}` : minutes}`;
        }
    }
    if (hours < 12) {
        apm.innerText = "AM"
        TimeText.innerText = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
    }
}

init = () => {
    getTime();
    setInterval(getTime, 2000)
}

init();