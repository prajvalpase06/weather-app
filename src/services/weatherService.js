import { DateTime } from "luxon";

const API_KEY = "59ae73be96d81fa278f2e11866b17d9a";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType, searchParams) => {
     const url = new URL(BASE_URL + '/' +infoType);
     url.search = new URLSearchParams({...searchParams, appid:API_KEY});

     return fetch(url).then((res) => res.json()).then((data) => data);
};

const formatCurrentWeather  = (data) => {
     const {
          coord: {lat, lon},
          main : {temp, feels_like, temp_min, temp_max, humidity},
          name,
          dt,
          sys : {country, sunrise, sunset},
          weather,
          wind : {speed}
     } = data;

     const {main: details, icon} = weather[0]          //renaming main as detail  

     return {lat, lon, temp, feels_like, temp_max, temp_min, humidity, name, 
     dt, country, sunrise, sunset,speed, details, icon}
} 

const formatForcastWeather = (data)  => {
     let { timezone, daily, hourly  } = data;
     daily = daily.slice(1,6).map(d => {
          return {
               title: formatToLocalTime(d.dt, timezone, 'ccc'),
               temp: d.temp.day,
               icon: d.weather[0].icon
          }
     })
     hourly = hourly.slice(1,6).map(d => {
          return {
               title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
               temp: d.temp,
               icon: d.weather[0].icon
          }
     })

     return {timezone, daily, hourly}
}

const getFormattedWeatherData = async (searchParams) => {
     const formattedCurrentWeather = await getWeatherData('weather', searchParams).then(
          (data) => formatCurrentWeather(data)
          );

     const {lat, lon} = formattedCurrentWeather;
     const formattedForcastWeather = await getWeatherData('onecall', {
          lat, lon, units: searchParams.units, exclude: "current, minutely, alerts",
     }).then(formatForcastWeather)
     return {...formattedCurrentWeather, ...formattedForcastWeather};
}

const formatToLocalTime = (secs, zone, format = "cccc, dd LLL yyyy' | Local Time: 'hh:mm a") => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconURL = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`

export default getFormattedWeatherData;
export { formatToLocalTime, iconURL };