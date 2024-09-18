import React from 'react'
import { FaEnvelope, FaLinkedin, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
  return (
    <center className="bg-black text-white py-8" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <div className='mb-4 mt-4'>
                <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
                <a href="mailto:youremail@example.com" className='hover:underline'>
                    vitalprem24@gmail.com
                </a>
            </div>
            <div className='mb-4'>
                <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
                <a href='tel:513-307-3484'>+1(513)-307-3484</a>
            </div>
           <div className='mb-4'>
            <FaLinkedin className='inline-block text-green-400 mr-2'></FaLinkedin>
            <a href="https://www.linkedin.com/in/vitalpremkumar/" className="hover:underline">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </center>
  )
}

export default Contact