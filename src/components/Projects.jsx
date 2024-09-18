import React from "react";
import calculatorImage from "../assets/calculator.jpg";
import blogImage from "../assets/WebBlog.jpg";
import portfolioImage from "../assets/portfolio.webp";

const projects = [
  {
    id: 1,
    name: "Calculator",
    image: calculatorImage,
    github: "https://github.com/Maloth-12/Calculator",
  },
  {
    id: 2,
    name: "Web Blog App",
    image: blogImage,
    github: "https://github.com/Maloth-12/Blogweb",
  },
  {
    id: 3,
    name: "Portfolio",
    image: portfolioImage,
    github: "https://github.com/Maloth-12/Portfolio",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-8" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a href={project.github} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
