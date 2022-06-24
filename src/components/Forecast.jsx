import React from 'react'
import { iconURL } from '../services/weatherService'

const Forecast = ({ title, item }) => {
  return (
    <div>
        <div className='flex items-center justify-start mt-6'>
            <p className='text-white font-medium uppercase'>{title}</p>
        </div>
            <hr className='my-2'/>

        <div className='flex flex-row items-center justify-between text-white'>
            {item.map(item => (
                <div className='flex flex-col items-center justify-center'>
                <p className='text-sm'>{`${item.title}`}</p>
                <img className='w-12 my-1' src={iconURL(item.icon)}></img>
                <p className='font-medium'>{`${item.temp.toFixed()}°`}</p>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Forecast