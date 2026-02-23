import React from 'react'
import { assets } from '../assets/assets'

const HeroSection = () => {
  return (
    <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("/daredevil.png")] bg-cover bg-center h-screen'>
        <img src={assets.bookingmovie} alt="" className='max-h-11 lg:h-11 mt-20'/>

        <h1 className='text-5xl md:text-[70px] md:leading-18 font-bold max-w-110'>Book <br /> your shows</h1>

        <div>
            
        </div>
    </div>
  )
}

export default HeroSection