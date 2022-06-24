
import React, { useState } from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'


const Inputs = ({ setQuery, units, setUnits }) => {

  const [city, setCity] = useState("");
  const [searchValue, setSearchValue] = useState();
  
  const handleSearchClick = () => {
    if(city !== '') setQuery({q: city});  
    setCity("");
  }

  const handleLocationClick = () => {
    if(navigator.geolocation){          // if you are allowed to use the users location
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        setQuery({lat, long});
      })
    }
  }

  const handleUnitsClick = (e) => {
    const selectedUnit = e.target.name;

    if(units !== selectedUnit) setUnits(selectedUnit);
  }

  return (
    <div className='flex justify-center my-6 flex-row'>
        <div className='flex flex-row items-center justify-center w-3/4 space-x-4'>
            <input 
            type="text" 
            onChange={(e) => {setCity(e.target.value)}}
            className='text-xl p-2 w-full shadow-xl focus:outline-none capitalize' 
            placeholder='Search...' 
            value={city} 
            />
            <UilSearch size={25} className="text-white cursor-pointer transition ease-out hover:scale-125" onClick={handleSearchClick}/>
            <UilLocationPoint size={25} className="text-white cursor-pointer transition ease-out hover:scale-125" onClick={handleLocationClick}/>

        </div>

        <div className='flex flex-row items-center justify-center w-1/4'>
            <button name='metric' className='text-xl text-white transition ease-out hover:scale-125' onClick={handleUnitsClick}> °C </button>
            <p className='text-xl text-white mx-1'> | </p>
            <button name='imperial' className='text-xl text-white transition ease-out hover:scale-125' onClick={handleUnitsClick}>°F</button>
        </div>
    </div>
  )
}

export default Inputs

