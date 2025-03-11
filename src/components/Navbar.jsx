import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeMenu = () => {
    setNav(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-24 px-4 bg-white z-50 shadow-md">
      <div className="max-w-[1240px] mx-auto flex justify-between items-center h-full">
        {/* Logo */}
        <Link to='/'>
          <img src="/icons/logo.png" alt="logo" className="h-16 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex space-x-6">  
          <li>
            <Link to='/projects' className='text-gray-600'>Projects</Link>
          </li>
          <li>
            <Link to='/highlights' className='text-gray-600'>Highlights</Link>
          </li>
          <li>
            <Link to='/photography' className='text-gray-600'>Photography</Link>
          </li>
        </ul>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="block sm:hidden cursor-pointer">
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={nav ? 'fixed left-0 top-0 h-full w-[60%] border-r-gray-900 bg-white ease-in-out duration-500 z-50' : 'fixed left-[-100%]'}>
        <Link to='/' className="w-full" onClick={closeMenu}>
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">SOPHIA NGUYEN</h1>
        </Link>
        <ul className="p-4 uppercase">
          <li className="p-4 border-b border-gray-600">
            <Link to='/projects' className='text-black' onClick={closeMenu}>Projects</Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to='/highlights' className='text-black' onClick={closeMenu}>Highlights</Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to='/photography' className='text-black' onClick={closeMenu}>Photography</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
