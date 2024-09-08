import React from 'react'
import { LOGIN_BG } from '../utils/asset-urls'

const MovieSearch = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(${LOGIN_BG})` }}
    >
        <div className='flex mt-16 justify-center'>
            <div className='flex w-1/2 bg-black p-6 rounded-lg gap-2 justify-center'>
                <input type="search" placeholder='What would you like to search today?' className='p-4 basis-3/4 rounded-lg' />
                <button className='w-full rounded-lg bg-red-600 text-white py-2 font-semibold col-span-4 basis-1/4'>Search</button>
            </div>
        </div>
    </div>
  )
}

export default MovieSearch