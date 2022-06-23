import React from 'react'

const TimeAndLocation = () => {
  return (
    <div>
        <div className='flex items-center justify-center my-6'>
            <p className='text-white text-xl font-medium'>
                Wednesday, 22 June 2022 | Local Time: 1:19 PM
            </p>
        </div>
        <div className='flex items-center justify-center my-3'>
            <p className='text-white text-3xl'>
                Berlin, DE
            </p>
        </div>
    </div>
  )
}

export default TimeAndLocation