//state
let currCity='London'
let units='metric'

//Selectors
let city=document.querySelector('.weather-city');
let datetime = document.querySelector(".weather-datetime");
let weather_forcast=document.querySelector('.weather-forcast');
let weather_temp = document.querySelector(".weather-tempreture");
let weather_icon=document.querySelector('.weather-icon');
let weather_minmax = document.querySelector(".weather-minmax");
let weather_realfeel = document.querySelector(".weather-realfeel");
let weather_humidity = document.querySelector(".weather-humidity");
let weather_wind = document.querySelector(".weather-wind");
let weather_pressure = document.querySelector(".weather-pressure");

//search
document.querySelector('.weather-search').addEventListener('submit',e=>{
    let search=document.querySelector('.weather-searchform');
    //prevent default actions
    e.preventDefault();

    currCity=search.value;
    //get weather forecast
    getWeather();
    //clear form
    search.value='';
})

//units
document.querySelector('.weather-unit-celcius').addEventListener('click',()=>{
    if(units!=='metric'){
      //change to metric
      units = "metric";
      //get the weather forcast
      getWeather();
    }
})

document
  .querySelector(".weather-unit-farenheight")
  .addEventListener("click", () => {
    if (units !== "imperial") {
      //change to imperial
      units = "imperial";
      //get the weather forcast
      getWeather();
    }
  });

//convert country Code to name

const convertCountryCode=(country)=>{
    let regionNames=new  Intl.DisplayNames(['en'],{type:'region'});
    return(regionNames.of(country))

}

//convert timezone and time stamp
const convertTimeStamp=(timeStamp,timeZone)=>{
    const convertTimeZone=timeZone/3600;
    const date=new Date(timeStamp*1000);
    const options={
        weekDay:'lang',
        day:'numeric',
        month:'long',
        year:'numeric',
        hour:'numeric',
        minute:'numeric',
        timeZone:`Etc/GMT${convertTimeZone>=0? "-":"+"}${Math.abs(convertTimeZone)}`,
        hour12:true
    }
    return date.toLocaleString('en-US',options)


}

// let 

const getWeather=()=>{
    const API_KEY = "a9ea75c3911512734ecb522c590b65aa";
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${currCity}&appid=${API_KEY}&units=${units}`).then
      (res=>res.json()).then(data=>{
        city.innerHTML=`${data.name},${convertCountryCode(data.sys.country)}`
        datetime.innerHTML=convertTimeStamp(data.dt,data.timezone)
        weather_forcast.innerHTML=`<p>${data.weather[0].main}`
        weather_temp.innerHTML=`${data.main.temp.toFixed()}&#176`
        weather_icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" alt="" />`;
        weather_minmax.innerHTML = `<p>Min: ${data.main.temp_min.toFixed()}&#176</p><p>Max: ${data.main.temp_max.toFixed()}&#176</p>`;
        weather_realfeel.innerHTML = `${data.main.feels_like.toFixed()}&#176`;
        weather_humidity.innerHTML = `${data.main.humidity}%`;
        weather_wind.innerHTML = `${data.wind.speed}${units==='imperial'?'mph':'m/s'}`;
        weather_pressure.innerHTML = `${data.main.pressure}hPa`;

      })
   

}

document.addEventListener('load',getWeather())