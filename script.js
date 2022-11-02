const result = document.getElementById("result");
const searchBtn = document.getElementById("searchBtn");
const city = document.getElementById("city");

//function to fetch weather information from api and display them 
let getWeatherData = () => {

    let cityvalue = city.value;
x
    //if input is empty
    if (cityvalue.length == 0) {
        result.innerHTML = `<h3 class="msg">please enter a city name<h3>`;
    }
    //if input is not empty
    else {
        console.log("start");
        let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&appid=${key}&units=metric`;
        console.log(api);

        //clear the inp.innerut field
        city.value = "";

        fetch(api)
            .then(Response => Response.json())
            .then(data => {
                console.log(data);
                console.log(data.weather[0].icon);
                console.log(data.weather[0].main);
                console.log(data.weather[0].description);
                console.log(data.name);
                console.log(data.main.temp);
                console.log(data.main.temp_min);
                console.log(data.main.temp_max);

                result.innerHTML = `<h2>${data.name}</h2>
                                    <h4 class="weather">${data.weather[0].main}</h4>
                                   <h4 class="descr">${data.weather[0].description} </h4>
                                   <img src="https://openweathermap.org//img/w/${data.weather[0].icon}.png">
                                   <h1>${data.main.temp} &#8451</h1>

                                   <div class="tempContainer">
                                   
                                        <div>
                                        <h4 class="tempTitle">min<h4>
                                        <h4 class="temp">${data.main.temp_min}<h4>
                                        </div>

                                        <div>
                                        <h4 class="tempTitle">max<h4>
                                        <h4 class="temp">${data.main.temp_max}<h4>
                                        </div>

                                   </div>
                
                    `;

            })
            //if city name is not valid 
            .catch(() => {
                result.innerHTML = `<h3 class="msg">City Not found</h3>`;

            })

    }
}
searchBtn.addEventListener("click", getWeatherData);
window.addEventListener("load", getWeatherData);



