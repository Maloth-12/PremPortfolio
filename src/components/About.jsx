import React from "react";
import AboutImage from "../assets/vitalpremkumar.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-black text-white py-8" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt=""
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
            A Full Stack Developer with over three years of experience, skilled in both frontend and backend development, and
have a strong background in Java technologies. Proficient with Angular, React, Spring Boot, and .NET Core. A quick
learner and a great team player, who holds a master’s degree in computer science and excited to use his skills to
bring fresh ideas and contribute effectively to your organization.
            </p>
            <div className="mt-12 flex-about justify-between text-center">
                <div>
                    <h3 className="text-2xl font-bold  bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                        3+
                    </h3>
                    <p>Years Experience</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold  bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                        <a href="https://www.linkedin.com/in/vitalpremkumar/" className="text-gray-400 hover:text-white center">
              <FaLinkedin />
            </a>
                    </h3>
                    <p>LinkedIn</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold  bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                        <a href="https://github.com/Maloth-12" className="text-gray-400 hover:text-white center">
                        <FaGithub /></a>
                    </h3>
                    <p>GitHub</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
