import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>HapScale is dedicated to help enterprises improve their culture through personalized happiness plans and innovative strategies which comprises our HapScale Product and Services. Our mission is to improve enterprise well-being and boost productivity for organisations around the world</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li><NavLink to={`/`} onClick={() => scrollTo(0, 0)} >
                        Home
            </NavLink></li>
            <li><NavLink to={`/about`} onClick={() => scrollTo(0, 0)} >
                        About Us
            </NavLink></li>
            <li><NavLink to={`/terms-and-conditions`} onClick={() => scrollTo(0, 0)} >
                        Terms And Conditions
            </NavLink></li>
            <li><NavLink to={`/careers`} onClick={() => scrollTo(0, 0)} >
                        Careers
            </NavLink></li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li><a href="tel:+919250799201" className="text-blue-600 hover:underline">+91 92 5079 9201</a></li>
            <li> info@hapscale.com
            </li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025 powered by iaehi - All Rights Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
