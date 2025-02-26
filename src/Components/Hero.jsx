import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationStage(1), 100);
    const timer2 = setTimeout(() => setAnimationStage(2), 600);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section className="relative bg-white text-gray-900 min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-teal-100 to-white opacity-90 z-0"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 w-full">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className={`
              inline-block transform transition-all duration-1000 ease-out-expo
              ${animationStage === 0 ? 'opacity-0 -translate-x-full' : animationStage === 1 ? 'opacity-50 -translate-x-1/2' : 'opacity-100 translate-x-0'}
            `}>
              Fueling 
            </span>
            <span className={`
              my-4 inline-block transform transition-all duration-1000 ease-out-expo
              ${animationStage === 0 ? 'opacity-0 scale-50 rotate-12' : animationStage === 1 ? 'opacity-50 scale-75 rotate-6' : 'opacity-100 scale-100 rotate-0'}
            `}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-teal-500">
                Ambitions with 
              </span>
            </span>
            <span className={`
              inline-block transform transition-all duration-1000 ease-out-expo
              ${animationStage === 0 ? 'opacity-0 translate-x-full' : animationStage === 1 ? 'opacity-50 translate-x-1/2' : 'opacity-100 translate-x-0'}
            `}>
              The Right Skills
            </span>
          </h1>

          <p className={`
            text-xl text-gray-600 max-w-2xl mx-auto
            transform transition-all duration-1000 delay-700
            ${animationStage === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}>
            Transforming Your Future with Expert Digital Marketing, Full-Stack Development, and Professional English.
          </p>

          <div className={`
            flex justify-center space-x-4 mt-8
            transform transition-all duration-1000 delay-1000
            ${animationStage === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}>
            <button className="px-10 py-4 rounded-full bg-gradient-to-r from-teal-500 to-orange-500 text-white font-semibold hover:scale-105 transition-transform shadow-lg">
              Get Started
            </button>
            <button className="px-10 py-4 rounded-full border-2 border-teal-500 text-teal-600 hover:border-orange-500 hover:text-orange-500 transition-all shadow-md">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
