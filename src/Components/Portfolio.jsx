import React, { useState, useEffect, useRef } from 'react';

// Import Digital Marketing images
import dm1 from './images/marketing/dm1.jpg';
import dm2 from './images/marketing/dm2.jpg';
import dm3 from './images/marketing/dm3.jpg';

// Import Communication images
import comm1 from './images/communication/comm1.png';
import comm2 from './images/communication/comm2.jpg';
import comm3 from './images/communication/comm3.webp';

// Import Development images
import mern1 from './images/development/mern1.jpg';
import mern2 from './images/development/mern2.avif';
import mern3 from './images/development/mern3.jpg';

// Import Aptitude images
import apt1 from './images/aptitude/apt1.jpg';
import apt2 from './images/aptitude/apt2.png';
import apt3 from './images/aptitude/apt3.webp';

const ProjectDetails = ({ project, onBack, containerRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`min-h-screen bg-white text-gray-800 py-20 px-6
      transform transition-all duration-700
      ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
      <div className="max-w-7xl mx-auto">
        <button onClick={onBack}
          className="mb-8 flex items-center gap-2 text-teal-500 hover:text-teal-600
            transition-all duration-300 group">
          <svg className="w-5 h-5 transform transition-transform group-hover:-translate-x-1"
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <span className="px-4 py-2 bg-teal-500 text-white rounded-full uppercase shadow-md">
              {project.category}
            </span>
            <h1 className="text-5xl font-bold text-teal-600">{project.title}</h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              {project.description}
            </p>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800">Key Features</h2>
              <ul className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <svg className="w-6 h-6 text-orange-500 flex-shrink-0" fill="none" 
                      stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
            
            <button
              className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full
                transition-all duration-300 shadow-md flex items-center gap-2">
              <span>Get Started</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          <div className="space-y-6">
            {project.images.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-2xl shadow-lg
                transform transition-all duration-500 hover:scale-105">
                <img src={image} alt={`${project.title} view ${index + 1}`}
                  className="w-full h-64 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const AppleStyleSection = ({ project, index, onProjectClick, selectedProjectId, sectionRefs }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sectionRef = useRef(null);
  const { id, category, title, description, images } = project;
  
  // Store section ref in the parent's refs array
  useEffect(() => {
    if (sectionRef.current && sectionRefs) {
      sectionRefs.current[id] = sectionRef.current;
    }
  }, [id, sectionRefs]);
  
  // Image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);
  
  // Intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When element is 20% visible
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2, // Trigger when 20% visible
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  // Alternate layout for even and odd indices
  const isEven = index % 2 === 0;
  
  // Check if this project is selected
  const isSelected = selectedProjectId === id;
  
  // Don't render section if another project is selected
  if (selectedProjectId !== null && !isSelected) {
    return null;
  }
  
  // If this is the selected project, render ProjectDetails instead
  if (isSelected) {
    return (
      <div ref={sectionRef} className="min-h-screen snap-start">
        <ProjectDetails 
          project={project}
          onBack={() => onProjectClick(null)}
          containerRef={{ current: sectionRef.current }}
        />
      </div>
    );
  }
  
  // Determine background color for alternating sections
  const bgColor = isEven ? 'bg-white' : 'bg-gray-50';
  
  return (
    <div 
      ref={sectionRef}
      className={`min-h-screen flex items-center py-20 snap-start ${bgColor}`}
      id={`project-${id}`}
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6">
        {/* Image Section */}
        <div 
          className={`relative overflow-hidden rounded-2xl shadow-lg h-96 
            transform transition-all duration-1000 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}
            ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
          style={{ transitionDelay: '200ms' }}
        >
          {images.map((image, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-all duration-1000 ease-out
                ${idx === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
            >
              <img
                src={image}
                alt={`${title} ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          
          {/* Image Navigation Dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 
                  ${idx === currentImageIndex ? 'bg-teal-500 w-6' : 'bg-white/80'}`}
              />
            ))}
          </div>
        </div>
        
        {/* Text Section */}
        <div 
          className={`
            transform transition-all duration-1000 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}
            ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="space-y-6">
            <span className="px-4 py-2 bg-teal-500 text-white rounded-full uppercase inline-block shadow-md">
              {category}
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              <span className="text-teal-600">{title}</span>
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              {description.split(' ').slice(0, 30).join(' ')}...
            </p>
            
            <button onClick={() => onProjectClick(id)}
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full
                transition-all duration-300 flex items-center gap-2 group/btn shadow-md">
              <span>Explore Features</span>
              <svg className="w-5 h-5 transform transition-transform group-hover/btn:translate-x-1" 
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const sectionRefs = useRef({});
  
  // Header animation on load
  useEffect(() => {
    const timeout = setTimeout(() => {
      setHeaderVisible(true);
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  // Handle project click
  const handleProjectClick = (id) => {
    setSelectedProjectId(id);
  };

  const projects = [
    { 
      id: 1, 
      category: 'MARKETING', 
      title: 'DIGITAL MARKETING',
      description: "A data-driven approach to promoting brands, products, and services through online channels like SEO, social media, email, and paid ads. It focuses on reaching the right audience, increasing engagement, and driving conversions through targeted strategies.",
      challenges: [
        "Keeping Up with Trends: Digital marketing evolves rapidly, requiring constant adaptation to new algorithms and platforms.",
        "Audience Targeting: Identifying and reaching the right audience with personalized content and ads",
        "Measuring ROI: Tracking campaign performance and ensuring marketing spend translates into real business growth."
      ],
      images: [dm1, dm2, dm3]
    },
    { 
      id: 2, 
      category: 'COMMUNICATION', 
      title: 'Professional Communication',
      description: "Effective communication is the foundation of success, enabling individuals and businesses to convey ideas clearly, build relationships, and establish credibility. It includes verbal, written, and non-verbal skills essential for professional growth.",
      challenges: [
        "Clarity & Precision: Crafting messages that are clear, concise, and impactful.",
        "Consistency Across Channels: Maintaining a unified communication style across emails, presentations, and meetings.",
        "Overcoming Barriers: Handling language, tone, and perception challenges effectively."
      ],
      images: [comm1, comm2, comm3]
    },
    {
      id: 3,
      category: 'DEVELOPMENT',
      title: 'FULL STACK DEVELOPER MERN',
      description: "A robust, end-to-end web application built using MongoDB, Express.js, React, and Node.js, designed for high performance, scalability, and seamless user experience. The MERN stack enables dynamic, real-time applications with efficient backend and frontend integration.",
      challenges: [
        "Secure Payment Processing: Ensuring safe transactions with encryption and fraud prevention.",
        "Scalable Inventory Management: Handling large product databases efficiently without performance issues.",
        "Mobile Optimization: Creating a responsive design that enhances user experience on all devices.",
        "Third-Party Service Integration: Seamlessly connecting APIs for payment gateways, analytics, and logistics."
      ],
      images: [mern1, mern2, mern3]
    },
    {
      id: 4,
      category: 'APTITUDE',
      title: 'LOGICAL & ANALYTICAL THINKING',
      description: "A comprehensive approach to developing critical thinking skills, problem-solving abilities, and quantitative reasoning essential for academic and professional success. Our aptitude training enhances logical reasoning, numerical aptitude, and analytical skills through structured learning and practice.",
      challenges: [
        "Pattern Recognition: Identifying complex patterns and relationships in data and scenarios.",
        "Quantitative Problem Solving: Mastering mathematical concepts and their practical applications.",
        "Time Management: Developing strategies to solve problems efficiently under time constraints.",
        "Adaptive Reasoning: Building flexibility to approach problems from multiple perspectives."
      ],
      images: [apt1, apt2, apt3]
    }
  ];

  return (
    <div className="bg-white text-gray-800 overflow-x-hidden">
      {/* Header Section */}
      {!selectedProjectId && (
        <div className="py-20 px-6 flex items-center justify-center min-h-screen snap-start bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h1 
              className={`text-5xl md:text-7xl font-bold mb-8 transition-all duration-1000
                ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <span className="text-teal-600">Our Core </span>
              <span className="text-orange-500">Services</span>
            </h1>
            
            <p 
              className={`text-xl text-gray-600 max-w-3xl mx-auto mb-12 transition-all duration-1000 delay-200
                ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              We excel in delivering comprehensive solutions across key areas that are essential for 
              success in today's digital landscape. Scroll down to explore our expertise.
            </p>
            
            <div 
              className={`animate-bounce transition-all duration-1000 delay-500
                ${headerVisible ? 'opacity-100' : 'opacity-0'}`}
            >
              <svg className="w-10 h-10 text-teal-500 mx-auto" 
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      )}
      
      {/* Apple-style Scrolling Sections */}
      <div className="snap-y snap-mandatory">
        {projects.map((project, index) => (
          <AppleStyleSection 
            key={project.id}
            project={project}
            index={index}
            onProjectClick={handleProjectClick}
            selectedProjectId={selectedProjectId}
            sectionRefs={sectionRefs}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;