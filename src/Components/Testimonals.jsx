import React, { useState, useEffect } from 'react';

const TestimonialCard = ({ avatar, name, company, text, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 200 * (index + 1));
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div 
      className={`
        border border-gray-800 rounded-lg p-6 h-full flex flex-col
        transform transition-all duration-500
        ${isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-10 scale-95'
        }
        hover:shadow-2xl hover:border-orange-500
        group relative overflow-hidden
      `}
    >
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
        opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      <div className="flex items-center gap-3 mb-4">
        <img 
          src={avatar} 
          alt={name} 
          className="w-12 h-12 rounded-full 
            transform transition-transform duration-300 
            group-hover:rotate-6 group-hover:scale-110"
        />
        <div>
          <h3 className="text-white font-semibold transform transition-transform duration-300 group-hover:translate-x-2">
            {name}
          </h3>
          <p className="text-gray-400 text-sm transform transition-transform duration-300 group-hover:translate-x-2">
            {company}
          </p>
        </div>
      </div>
      <p className="text-gray-300 flex-grow transform transition-transform duration-500 group-hover:translate-x-1">
        {text}
      </p>
    </div>
  );
};

const Testimonials = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  // Calculate visible testimonials based on screen size
  const getVisibleTestimonials = () => {
    // Use typeof window to prevent SSR issues
    if (typeof window === 'undefined') return 4;
    
    const screenWidth = window.innerWidth;
    let visibleCount = 4; // default for large screens
    
    if (screenWidth < 640) visibleCount = 1; // mobile
    else if (screenWidth < 1024) visibleCount = 2; // tablet
    else if (screenWidth < 1280) visibleCount = 3; // smaller desktops
    
    return visibleCount;
  };

  const handleNext = () => {
    setDirection('next');
    setCurrentIndex((prevIndex) => 
      (prevIndex + getVisibleTestimonials()) % testimonials.length
    );
  };

  const handlePrev = () => {
    setDirection('prev');
    setCurrentIndex((prevIndex) => {
      const visibleCount = getVisibleTestimonials();
      return prevIndex === 0 
        ? testimonials.length - visibleCount 
        : Math.max(0, prevIndex - visibleCount);
    });
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex, 
    currentIndex + getVisibleTestimonials()
  );

  // If less testimonials than visible count, pad with more from the beginning
  while (visibleTestimonials.length < getVisibleTestimonials() && testimonials.length > 0) {
    const remainingNeeded = getVisibleTestimonials() - visibleTestimonials.length;
    visibleTestimonials.push(
      ...testimonials.slice(0, remainingNeeded)
    );
  }

  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl font-bold text-white 
            transform transition-transform duration-500 
            hover:scale-105 hover:text-transparent 
            bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
            Hear what our customers say :)
          </h2>
          <div className="flex gap-4">
            <button 
              onClick={handlePrev}
              className="p-3 border border-orange-500 rounded-lg 
                text-orange-500 hover:bg-orange-500 hover:text-white 
                transition-colors transform hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={handleNext}
              className="p-3 border border-orange-500 rounded-lg 
                text-orange-500 hover:bg-orange-500 hover:text-white 
                transition-colors transform hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div 
          className={`
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6
            transition-all duration-500
            ${direction === 'next' ? 'translate-x-5' : direction === 'prev' ? '-translate-x-5' : ''}
          `}
        >
          {visibleTestimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={`${testimonial.name}-${index}`} 
              {...testimonial} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default function TestimonialsWrapper() {
  const testimonials = [
    {
      avatar: "/api/placeholder/48/48",
      name: "Brooklyn Simmons",
      company: "manam",
      text: "Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar. Placerat sapien, dolor, aenean vivamus in tincidunt et. Mauris dolor vestibulum et lacus a ante orci."
    },
    {
      avatar: "/api/placeholder/48/48",
      name: "Esther Howard",
      company: "Offmax",
      text: "Vitae tellus bibendum nibh integer auctor pretium sed. Sollicitudin tristique euismod elit."
    },
    {
      avatar: "/api/placeholder/48/48",
      name: "Arlene McCoy",
      company: "bloopixel",
      text: "Eu eu eget lorem commodo sagittis enim in viverra. Urna egestas ipsum gravida tempor. Libero, consectetur urna in enim magnis. Est."
    },
    {
      avatar: "/api/placeholder/48/48",
      name: "Jane Cooper",
      company: "unpexel",
      text: "Amet aliquam, volutpat nisl, duis sed at. Vehicula proin consectetur risus dictumst nec amet consequat at tempus. Ornare dapibus nunc fames nibh morbi viverra su sed mattis."
    },
    {
      avatar: "/api/placeholder/48/48",
      name: "Additional Testimonial",
      company: "Extra Company",
      text: "This is an additional testimonial to show how the slider handles more than 4 items."
    }
  ];

  return <Testimonials testimonials={testimonials} />;
}