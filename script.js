    const apikey = "6271247778652bc5df7804f8f41b28ae";
    const apiurl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

    const searchbox = document.querySelector(".search input");
    const searchbtn = document.querySelector(".search button");
    const weathericon = document.querySelector(".weather-icon");   

    async function checkweather(city){
      const response = await fetch(apiurl + city + `&appid=${apikey}`);
      var data = await response.json();
      console.log(data);

      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

      if(data.weather[0].main == "Clouds"){
        weathericon.src = "img/images/cloud.png";
      }
      else if(data.weather[0].main == "Clear"){
        weathericon.src = "img/images/clear.png";
      }
      else if(data.weather[0].main == "Rain"){
        weathericon.src = "img/images/rain.png";
      }
      else if(data.weather[0].main == "Drizzle"){
        weathericon.src = "img/images/drizzle.png";
      }
      else if(data.weather[0].main == "Mist"){
        weathericon.src = "img/images/mist.png";
      }

    }

    searchbtn.addEventListener("click", ()=> {
      checkweather(searchbox.value);
    })

    // checkweather();
