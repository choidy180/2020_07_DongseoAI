const bgimg = document.getElementById('bgimg');

getTime = () => {
    const date = new Date();
    const hours = date.getHours();
}


changeBGImg = () => {
    const date = new Date();
    const hours = date.getHours();
    const Minutes = date.getSeconds();
    if(hours < 12){
        document.getElementById("bgimg").style.backgroundImage="url(rain.jpg)"
    }
    if(hours > 11){
        document.getElementById("bgimg").style.backgroundImage="url(sunset.jpg)"
    }
}

init = () => {
    getTime();
    setInterval(getTime, 500);
    setInterval(changeBGImg, 500);
}

init();