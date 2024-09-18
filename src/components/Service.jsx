import React, { useState } from "react";

const services = [
  {
    id: 1,
    title: "Web Developer",
    description: "Developed and maintained modules using the .NET Core MVC framework, ensuring that accessibility guidelines were strictly followed during content changes across the College of Medicine website and its related modules. This focus on accessibility led to a 30% increase in website engagement. Additionally, I conducted comprehensive WCAG accessibility reviews, resulting in a 20% improvement in user satisfaction. I was also responsible for coordinating and maintaining the content of the UC ShareIT and UC Medicine websites, which included detailed information about programs and mentors.",
  },
  {
    id: 2,
    title: "Software Engineer",
    description: "Actively participated in all stages of the software development life cycle, including design, analysis, requirement gathering, and the development of applications tailored to customer specifications. Working in an Agile environment, I was involved in sprint planning, daily stand-up meetings, and Jira ticket management, as well as retrospectives and reviews. I developed client-side interfaces using Angular and designed REST-based microservices with Spring Boot, contributing to a healthcare platform that improved appointment scheduling and increased bookings by 25%. By optimizing SQL queries, I reduced API response time by 40%, and utilized Maven for building and JBoss for deployment. I collaborated with the Quality Assurance team, implementing JUnit test cases, debugging, and raising code coverage from 50% to 85%. I also gained hands-on experience with Jenkins for Continuous Integration/Continuous Delivery (CI/CD) and performed thorough unit testing using Karma Jasmine, achieving a 95% defect-free production rate.",
  },
  {
    id: 3,
    title: "Analyst",
    description: "As a ServiceNow system administrator, I effectively managed system configuration, optimization, and provided user assistance to ensure smooth platform operation. I played a key role in creating tables, fields, forms, and service catalogs, which resulted in a 25% increase in user productivity and process efficiency. Additionally, I enhanced user interactions and service requests by writing custom JavaScript for the ServiceNow platform, improving and personalizing the service catalog functionality to better meet the needs of the users.",
  }
];

const Service = () => {
  const [expanded, setExpanded] = useState({}); // State to keep track of expanded items

  const toggleReadMore = (id) => {
    setExpanded((prevExpanded) => (
      {
      ...prevExpanded,
      [id]: !prevExpanded[id], // Toggle the specific service's expanded state
    }));
  };

  const getShortDescription = (description) => {
    return description.length > 150
      ? description.substring(0, 150) + "..." // Limit the text to 150 characters
      : description;
  };

  return (
    <div className="bg-black text-white py-8" id="experience">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-8">My Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold  bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-400"
              >
                {/* {service.id} */}
              </div>
              <h3 className="mt-2 text-2xl font-bold  bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">
                {expanded[service.id]
                  ? service.description // Show full description if expanded
                  : getShortDescription(service.description)}
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-green-400 hover:text-blue-500"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  toggleReadMore(service.id); // Toggle read more
                }}
              >
                {expanded[service.id] ? "Read Less" : "Read More"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
