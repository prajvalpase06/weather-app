import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getWeatherData from './services/weatherService';
import getFormattedWeatherData from './services/weatherService';
import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


function App() {

  
  const [query, setQuery] = useState({q: 'Los Angeles'});
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {

      const message = query.q ? query.q : 'current location.'
      // toast.info("Fetching weather for " + query.q );

      await getFormattedWeatherData({...query, units}).then((data) => {
        toast.success(`Showing weather details for ${data.name}, ${data.country}`)
        setWeather(data);
      }); 
    };
  
    fetchWeatherData();
  
  }, [query, units])          // upadte / fetch new data everytime query/units change


  const changeBackground = () => {
    if(!weather) return "from-cyan-700 to-blue-700"
    const threshold = units === 'metric' ? 35 : 95

    if(weather.temp <= threshold) return "from-cyan-700 to-blue-700"
    else return "from-yellow-700 to to-orange-700"
  }
  
  return (
    <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br h-fit shadow-xl shadow-gray-400 ${changeBackground()}`}>
      <TopButtons setQuery={setQuery} units={units} setUnits={setUnits}/>
      <Inputs  setQuery={setQuery} units={units} setUnits={setUnits}/>
      
      {weather && (
      <div>
        <TimeAndLocation weather={weather}/>
        <TemperatureAndDetails weather={weather}/>
        <Forecast title= "hourly Forecast" item={weather.hourly}/>
        <Forecast title= "daily Forecast" item={weather.daily}/>
      </div>
      )}

      {/* <ToastContainer autoClose={5000} theme={}/> */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        theme="dark"
      />
    </div>
  );
}

export default App; 