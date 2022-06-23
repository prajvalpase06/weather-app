import React from 'react'

const Forecast = ({ title }) => {
  return (
    <div>
        <div className='flex items-center justify-start mt-6'>
            <p className='text-white font-medium uppercase'>{title}</p>
        </div>
        <hr className='my-2'/>

        <div className='flex flex-row items-center justify-between text-white'>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-sm'>02:31 PM</p>
                <img className='w-12 my-1' src="http://openweathermap.org/img/wn/10d@2x.png"></img>
                <p className='font-medium'>22º</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-sm'>02:31 PM</p>
                <img className='w-12 my-1' src="http://openweathermap.org/img/wn/10d@2x.png"></img>
                <p className='font-medium'>22º</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-sm'>02:31 PM</p>
                <img className='w-12 my-1' src="http://openweathermap.org/img/wn/10d@2x.png"></img>
                <p className='font-medium'>22º</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-sm'>02:31 PM</p>
                <img className='w-12 my-1' src="http://openweathermap.org/img/wn/10d@2x.png"></img>
                <p className='font-medium'>22º</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-sm'>02:31 PM</p>
                <img className='w-12 my-1' src="http://openweathermap.org/img/wn/10d@2x.png"></img>
                <p className='font-medium'>22º</p>
            </div>
        </div>
    </div>
  )
}

export default Forecast