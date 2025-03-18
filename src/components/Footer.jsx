import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>

      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between'>
       <div className='w-full md:w-1/3 mb-8 md:mb-0'>
        <img src={assets.logo_dark} alt="" />
        <p className='text-gray-400 mt-4'>
            vhgbjnkfygbuhnijtfygb
            fyvgbuhnijmfyguhnji
            dctfvygbuhnjftvgbhn
        </p>
       </div>

       <div className='w-full md:w-1/5 mb-8 md:mb-0'>
        <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
        <ul className='flex flex-col gap-2 text-gray-400' >
            <a href="#Header" className='hover:text-white'>Home</a>
            <a href="#About" className='hover:text-white'>About</a>
            <a href="#Contact" className='hover:text-white'>Contact Us</a>
            <a href="#" className='hover:text-white'>Privacy Policy</a>
        </ul>
       </div>

       <div className='w-full md:w-1/3'>
       <h3 className='text-white text-lg font-bold mb-4'>Subscribe</h3>
       <p className='text-gray-400 mb-4 max-w-80'>The latest news are sent to your email once you subscribe</p>
       <div className='flex flex-col md:flex-row gap-2'>
        <input type="email" placeholder='Enter Email' className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto' />
        <button className='py-2 px-4 rounded bg-orange-500 hover:bg-orange-700 text-white font-bold'>Subscribe</button>
       </div>
       </div>
      </div>

      <div className='border-t border-gray-700 pt-8 mt-8 py-4 text-center text-gray-500'>
        copyright 2025 @ Prutha Sonani. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
