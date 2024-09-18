import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
      <div className='container py-2 flex justify-between items-center'>
        {/* Logo */}
        <div className='text-2xl font-bold'>Vital Prem Kumar Maloth</div>
        
        {/* Menu Items (for larger screens) */}
        <div className={`space-x-6 lg:flex hidden items-center`}>
          <a href="/home" className='hover:text-gray-400'>Home</a>
          <a href="#about" className='hover:text-gray-400'>About Me</a>
          <a href="#experience" className='hover:text-gray-400'>Experience</a>
          <a href="#projects" className='hover:text-gray-400'>Projects</a>
          <a href="#contact" className='hover:text-gray-400'>Contact</a>
        </div>

        {/* Hamburger Icon (for mobile/tablet screens) */}
        <div className='lg:hidden'>
          <button onClick={toggleMenu} className='focus:outline-none'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Dropdown Menu */}
      <div className={`lg:hidden ${isOpen ? 'flex-end' : 'hidden'} space-y-4 mt-4`}>
        <a href="/home" className='block hover:text-gray-400'>Home</a>
        <a href="#about" className='block hover:text-gray-400'>About Me</a>
        <a href="#experience" className='block hover:text-gray-400'>Experience</a>
        <a href="#projects" className='block hover:text-gray-400'>Projects</a>
        <a href="#contact" className='block hover:text-gray-400'>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
