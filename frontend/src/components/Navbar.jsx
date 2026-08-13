import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";


const Navbar = () => {

  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <nav className='flex items-center justify-between py-4 mb-5 border-b border-b-primary-200'>
      {/* Logo */}
      <img
        onClick={() => navigate("/")}
        className="w-14 sm:w-16 md:w-20 h-auto object-contain cursor-pointer"
        src={assets.logo} alt="Doc997 logo"
      />
      <ul className='hidden md:flex flex-1 justify-center items-start gap-6 lg:gap-12  lg:text-lg font-medium'>
        <li>
          <NavLink to="/">
            <span className="py-1 block">Home</span>
            <hr className="border-none h-0.5 bg-primary-300 w-full mx-auto hidden" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/doctors">
            <span className="py-1 block">Doctors</span>
            <hr className="border-none h-0.5 bg-primary-300 w-full mx-auto hidden" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            <span className="py-1 block">About</span>
            <hr className="border-none h-0.5 bg-primary-300 w-full mx-auto hidden" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            <span className="py-1 block">Contact</span>
            <hr className="border-none h-0.5 bg-primary-300 w-full mx-auto hidden" />
          </NavLink>
        </li>
      </ul>
      <div className='flex items-center gab-4'>
        {
          token
            ? <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img src={assets.profile_img} alt='Profile' className='w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full object-cover' />
              <FiChevronDown className='text-base sm:text-lg md:text-xl' />
              <div className="absolute top-full right-0 pt-2 z-50 hidden group-hover:flex flex-col w-40 sm:w-44 md:w-48 text-sm sm:text-base font-medium text-gray-600 bg-stone-100 rounded shadow-lg p-3 sm:p-4 gap-3">
                <p onClick={() => navigate('my-profile')} className='hover:text-primary-500 cursor-pointer'>My Profile</p>
                <p onClick={() => navigate('my-appointments')} className='hover:text-primary-500 cursor-pointer'>My Appointments</p>
                <p onClick={() => setToken(false)} className='hover:text-primary-500 cursor-pointer'>Logout</p>
              </div>
            </div>
            : <button onClick={() => navigate('/login')} className='hidden md:block bg-primary-600 hover:bg-primary-700 text-white lg:text-lg px-8 py-3 rounded-full font-semibold cursor-pointer transition '>Create account</button>
        }

      </div>
    </nav>
  )
}
export default Navbar