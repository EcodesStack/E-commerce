import React from 'react'
import { assets } from '../admin_assets/assets' 

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-5 px-[4%] justify-between bg-gray-100'>
      <img className='w-40 invert' src={assets.logo} alt="" />
      <button onClick={()=>setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2
       rounded-full text-xs sm:text-sm font-semibold cursor-pointer'>
        Logout
      </button>
    </div>
  )
}

export default Navbar
