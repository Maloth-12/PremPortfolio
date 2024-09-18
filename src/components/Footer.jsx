import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className='text-2xl font-bold'>Vital Prem Kumar Maloth</div>
        {/* Menu Items (for larger screens) */}
        <div className={`space-x-6 lg:flex hidden items-center`}>
          <a href="/home" className='hover:text-gray-400'>Home</a>
          <a href="#about" className='hover:text-gray-400'>About Me</a>
          <a href="#experience" className='hover:text-gray-400'>Experience</a>
          <a href="#projects" className='hover:text-gray-400'>Projects</a>
          <a href="#contact" className='hover:text-gray-400'>Contact</a>
        </div>
        </div>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Vital Prem Kumar Maloth. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="https://www.linkedin.com/in/vitalpremkumar/" className="text-gray-400 hover:text-white">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Maloth-12" className="text-gray-400 hover:text-white">
              <FaGithub />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
