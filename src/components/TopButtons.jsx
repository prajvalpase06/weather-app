import React from 'react'

const TopButtons = () => {
  
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

    return (
    <div className='flex items-center justify-around my-6'>
        {cities.map((city) => (
            <button className='text-white text-xl font-medium' key={city.id}>{city.title}</button>
        ))}
    </div>
  )
}

export default TopButtons