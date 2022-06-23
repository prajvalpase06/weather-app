import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getWeatherData from './services/weatherService';
import getFormattedWeatherData from './services/weatherService';


function App() {

  const fetchWeatherData = async () => {
    const data = await getFormattedWeatherData({q: 'Mumbai', units: 'metric'}); 
    console.log(data);
  }

  fetchWeatherData();

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />
      
      <TimeAndLocation />
      <TemperatureAndDetails />
      <Forecast title= "hourly Forecast" />
      <Forecast title= "daily Forecast" />
    </div>
  );
}

export default App; 