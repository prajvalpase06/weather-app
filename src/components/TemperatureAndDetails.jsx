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

const TemperatureAndDetails = () => {
  return (
    <div>
        <div className='items-center justify-center text-xl py-6 flex text-cyan-300'>
            <p>Clear</p>
        </div>
        <div className='flex flex-row items-center justify-between text-white py-3'>
            <img src="http://openweathermap.org/img/wn/10d@2x.png" className='w-20'/>
            <p className='text-5xl'>34°</p>
            <div className='flex-col flex space-y-2'>
                <div className='flex items-center justify-center'>
                    <UilTemperature size={18} className="mr-1"/>
                    Real fell: 
                    <span className='ml-1 font-medium'>32°</span>
                </div>
                <div className='flex items-center justify-center'>
                    <UilTear size={18} className="mr-1"/>
                    Humidity: 
                    <span className='ml-1 font-medium'>41%</span>
                </div>
                <div className='flex items-center justify-center'>
                    <UilWind size={18} className="mr-1"/>
                    Wind: 
                    <span className='ml-1 font-medium'>4 km/hr</span>
                </div>
            </div>
        </div>

        <div className='flex flex-row items-center justify-center space-x-1 text-white text-sm py-3'>
            <UilSun />
            <p className='font-light'>Rise: <span className='font-medium ml-1'>06:00 AM</span></p>
            <p className='font-light text-lg'> | </p>
            <UilSunset />
            <p className='font-light'>Set: <span className='font-medium ml-1'>06:00 AM</span></p>
            <p className='font-light text-lg'> | </p>
            <UilArrowUp />
            <p className='font-light'>High: <span className='font-medium ml-1'>45°</span></p>
            <p className='font-light text-lg'> | </p>
            <UilArrowDown />
            <p className='font-light'>Low: <span className='font-medium ml-1'>22°</span></p>
        </div>

    </div>
  )
}

export default TemperatureAndDetails