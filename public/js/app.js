var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


getWeather = (name) => {
fetch('https://api.openweathermap.org/data/2.5/weather?q='+'busan'+'&appid=cf1df7b7e7d0f667d7732170209de042')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  tempValue = tempValue - 273.;
  tempValue = Math.floor(tempValue);
  
  switch(descValue){
    case "few clouds":
      descValue = "구름 적음";
      break;
    case "broken clouds":
      descValue = "구름 많음";
      break;
    case "light rain":
      descValue = "여우비";
      break;
    case "clear sky":
      descValue = "맑은 하늘";
      break;
    case "scattered clouds":
      descValue = "보통 수준의 구름";
      break;
    case "moderate rain":
      descValue = "비내리는 중";
      break;
    case "overcast clouds":
      descValue = "구름이 잔뜩 꼈음";
      break;
    case " light intensity shower rain":
      descValue = "세친 소나기";
      break;
    case "mist":
      descValue = "안개낌"
  }

  main.innerHTML = nameValue;
  desc.innerHTML = "날씨 - "+descValue;
  temp.innerHTML = "온도 - "+tempValue +"°C";
  input.value ="";

})}

init = () => {
    getWeather();
}

init();
