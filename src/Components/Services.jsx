import React, { useState, useEffect } from 'react';

const ServiceCard = ({ icon, title, description, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 200 * (index + 1));
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div 
      className={`
        border border-gray-200 rounded-lg p-8 
        hover:border-teal-500 transition-all duration-500
        transform hover:scale-105 hover:shadow-lg
        opacity-0 translate-y-10
        ${isVisible ? 'opacity-100 translate-y-0' : ''}
        relative overflow-hidden group
        bg-white
      `}
    >
      {/* Animated Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-500/5 to-transparent 
        opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      <div 
        className="mb-6 text-5xl transform transition-transform duration-300 
        group-hover:rotate-6 group-hover:scale-110 inline-block text-teal-500"
      >
        {icon}
      </div>
      
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 
        transform transition-transform duration-300 
        group-hover:translate-x-2">
        {title}
      </h3>
      
      <p className="text-gray-600 relative">
        <span className="block transform transition-transform duration-500 
          group-hover:translate-x-2">
          {description}
        </span>
      </p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: "💻",
      title: "Full Stack Development",
      description: "Master end-to-end web development with our comprehensive MERN stack training program."
    },
    {
      icon: "📱",
      title: "Digital Marketing",
      description: "Learn to create and execute effective digital marketing strategies for business growth."
    },
    {
      icon: "🧮",
      title: "Quantitative Aptitude",
      description: "Develop strong mathematical and logical reasoning skills for professional success."
    },
    {
      icon: "🗣️",
      title: "Professional Communication",
      description: "Enhance your verbal and written communication skills for the corporate world."
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-gray-800 text-center mb-6 
          transform transition-transform duration-700 
          hover:scale-105 hover:text-transparent 
          bg-clip-text bg-gradient-to-r from-orange-500 to-teal-500">
          Our Expertise
        </h2>
        
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16 
          transform transition-transform duration-500 
          hover:translate-x-2">
          We offer expert-led courses in Full Stack Development, Digital Marketing, Quantitative Aptitude, and Professional Communication. Our hands-on training ensures practical learning and real-world readiness. Join us to enhance your skills and unlock new career opportunities!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              {...service} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;