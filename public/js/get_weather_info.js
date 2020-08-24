function getWeather(lat, lon){
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )
      .then(function(response){
      return response.json();
    })
      .then(function(json){
        console.log(json);
        const temparature = json.main.temp;  //온도
        const place = json.name;   // 사용자 위치
        weather.innerText = `${temparature} @${place}`;
      });
  }