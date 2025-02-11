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
        border border-gray-700 rounded-lg p-6 
        hover:border-orange-500 transition-all duration-500
        transform hover:scale-105 hover:shadow-2xl
        opacity-0 translate-y-10
        ${isVisible ? 'opacity-100 translate-y-0' : ''}
        relative overflow-hidden group
      `}
    >
      {/* Animated Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
        opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      <div 
        className="mb-4 text-5xl transform transition-transform duration-300 
        group-hover:rotate-6 group-hover:scale-110 inline-block"
      >
        {icon}
      </div>
      
      <h3 className="text-2xl font-semibold text-white mb-3 
        transform transition-transform duration-300 
        group-hover:translate-x-2">
        {title}
      </h3>
      
      <p className="text-gray-400 relative">
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
      icon: "🎨",
      title: "Branding",
      description: "Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices"
    },
    {
      icon: "💻",
      title: "Web development",
      description: "Integer ante non nunc, eget est justo vel semper nunc. Lacus"
    },
    {
      icon: "📱",
      title: "Digital marketing",
      description: "Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est."
    },
    {
      icon: "📱",
      title: "Mobile App",
      description: "Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices"
    },
    {
      icon: "🔍",
      title: "SEO",
      description: "Integer ante non nunc, eget est justo vel semper nunc. Lacus"
    },
    {
      icon: "👥",
      title: "User testing",
      description: "Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est."
    }
  ];

  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-4 
          transform transition-transform duration-700 
          hover:scale-105 hover:text-transparent 
          bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
          We Offer
        </h2>
        
        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12 
          transform transition-transform duration-500 
          hover:translate-x-2">
          Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat 
          scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a 
          tincidunt.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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