import React from 'react'
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconURL } from '../services/weatherService';


const TemperatureAndDetails = ({ weather: {
    details, 
    icon,
    temp_min,
    temp_max,
    temp,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone, 
    wind
} }) => {
  return (
    <div>
        <div className='items-center justify-center text-2xl py-6 flex text-cyan-300'>
            <p>{details}</p>
        </div>
        <div className='flex flex-row items-center justify-between text-white py-3'>
            <img src={iconURL(icon)} className=''/>
            <p className='text-5xl'>{`${temp.toFixed()}°`}</p>
            <div className='flex-col flex space-y-2'>
                <div className='flex items-center justify-center'>
                    <UilTemperature size={18} className="mr-1"/>
                    Real fell: 
                    <span className='ml-1 font-medium'>{`${feels_like.toFixed()}°`}</span>
                </div>
                <div className='flex items-center justify-center'>
                    <UilTear size={18} className="mr-1"/>
                    Humidity: 
                    <span className='ml-1 font-medium'>{`${humidity.toFixed()}%`}</span>
                </div>
                <div className='flex items-center justify-center'>
                    <UilWind size={18} className="mr-1"/>
                    Wind: 
                    <span className='ml-1 font-medium'>{`${speed.toFixed()} km/hr`}</span>
                </div>
            </div>
        </div>

        <div className='flex flex-row items-center justify-center space-x-1 text-white text-sm py-3'>
            <UilSun />
            <p className='font-light'>Rise: <span className='font-medium ml-1'>{formatToLocalTime(sunrise, timezone, "hh:mm a")}</span></p>
            <p className='font-light text-lg'> | </p>
            <UilSunset />
            <p className='font-light'>Set: <span className='font-medium ml-1'>{formatToLocalTime(sunset, timezone, "hh:mm a")}</span></p>
            <p className='font-light text-lg'> | </p>
            <UilArrowUp />
            <p className='font-light'>High: <span className='font-medium ml-1'>{`${temp_max.toFixed()}°`}</span></p>
            <p className='font-light text-lg'> | </p>
            <UilArrowDown />
            <p className='font-light'>Low: <span className='font-medium ml-1'>{`${temp_min.toFixed()}°`}</span></p>
        </div>

    </div>
  )
}

export default TemperatureAndDetails