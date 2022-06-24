import React from 'react'

const TopButtons = ({ setQuery }) => {
  
  const cities = [
    {
        id: 1,
        title: 'London',
    },
    {
        id: 2,
        title: 'Sydney',
    },
    {
        id: 3,
        title: 'New York',
    },
    {
        id: 4,
        title: 'Dubai',
    },
    {
        id: 5,
        title: 'Moscow',
    },
  ]

  let handleClick = (title) =>{
    setQuery(title);
  }

    return (
    <div>
        <div className='flex items-center justify-center'>
            <div class="box-content h-8 w-3/4 p-4 border-2 rounded-2xl flex items-center justify-center flex-row bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800">
                <p className='text-white text-lg font-semibold'>Welcome to WeatherIT!</p>
            </div>
        </div>
        <div className='flex items-center justify-around my-6'>
            {cities.map((city) => (
                <button className='text-white text-xl font-medium' key={city.id} onClick={() => {setQuery({q: city.title})}}>{city.title}</button>
            ))}
        </div>
       
    </div>
  )
}

export default TopButtons
