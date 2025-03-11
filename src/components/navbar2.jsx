import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar2 = () => {
    const [nav, setNav] = useState(false);
    // Toggle menu open/close
  const handleNav = () => {
    setNav(!nav);
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setNav(false);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
        <Link to='/' className='w-full'>
            <img src="/icons/logo.png" alt="logo" className="h-20 w-auto"/>
        </Link>

      {/* Desktop Navigation */}
      <ul className='hidden sm:flex'>
        <li className='p-4'>
          <Link to='/projects' className='text-gray-600'>Projects</Link>
        </li>
        <li className='p-4'>
          <Link to='/highlights' className='text-gray-600'>Highlights</Link>
        </li>
        <li className='p-4'>
          <Link to='/photography' className='text-gray-600'>Photography</Link>
        </li>
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block sm:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Menu */}
      <div className={nav ? 'fixed left-0 top-0 h-full w-[60%] border-r-gray-900 bg-white ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <Link to='/' className='w-full'>
            <h1 className='w-full text-3xl font-bold text-gray-900 m-4'>SOPHIA NGUYEN</h1>
        </Link>
        <ul className='p-4 uppercase'>
          <li className='p-4 border-b border-gray-600'>
            <Link to='/projects' className='text-black'onClick={closeMenu}>Projects</Link>
          </li>
          <li className='p-4 border-b border-gray-600'>
            <Link to='/highlights' className='text-black' onClick={closeMenu}>Highlights</Link>
          </li>
          <li className='p-4 border-b border-gray-600'>
            <Link to='/photography' className='text-black' onClick={closeMenu}>Photography</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar2;