import React from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'


const Inputs = () => {
  return (
    <div className='flex justify-center my-6 flex-row'>
        <div className='flex flex-row items-center justify-center w-3/4 space-x-4'>
            <input 
            type="text" 
            className='text-xl p-2 w-full shadow-xl focus:outline-none capitalize' 
            placeholder='Search...'    
            />
            <UilSearch size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"/>
            <UilLocationPoint size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"/>

        </div>
    </div>
  )
}

export default Inputs