import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(false);

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
            ? <div >
              <img />
            </div>
            : <button onClick={() => navigate('/login')} className='hidden md:block bg-primary-600 hover:bg-primary-700 text-white lg:text-lg px-8 py-3 rounded-full font-semibold cursor-pointer transition '>Create account</button>
        }

      </div>
    </nav>
  )
}
export default Navbar