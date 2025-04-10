import React from 'react'
import logo from '../assets/ecodev e.png'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={logo} className='mb-5 w-36 invert' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
              Your one-stop shop for the best e-commerce experience.
              Shop with us for quality products and exceptional customer
              service.
            </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH!</p>
          <ul className='flex flex-col gap1 text-gray-600'>
            <li>+234-913-525-7462</li>
            <li>elijahkylealexander@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>
          &copy; {new Date().getFullYear()} Ecodev-enterprise. All rights reserved.
        </p>
      </div>

    </div>
  )
}

export default Footer
