import React from 'react'
import { assets } from '../assets/assets'
import { FiArrowRight } from "react-icons/fi";

const Header = () => {
  return (
    <header className='relative overflow-hidden rounded-2xl h-95 sm:h-108 lg:h-120'>
      {/* Background image */}
      <img src={assets.header_img} alt="Doctors" className="w-full h-full object-cover" />

      {/* left side */}
      <div className="absolute left-6 sm:left-10 lg:left-16 top-1/2 -translate-y-1/2 max-w-xs sm:max-w-sm lg:max-w-md text-primary-800 font-semibold">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Your Health,
          <br />
          Our Priority
        </h1>
        <p className="max-w-md mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg leading-relaxed">
          Find trusted doctors, explore medical specialties, and book your appointment quickly and easily.
        </p>
        <a
          href="#specialties"
          className="inline-flex items-center gap-2 mt-6 sm:mt-7 bg-primary-600 text-white px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-sm sm:text-base hover:bg-primary-700 transition-colors duration-300"
        >
          Book an Appointment
          <FiArrowRight />
        </a>
      </div>
    </header>
  )
}

export default Header