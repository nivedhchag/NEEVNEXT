import React, { useState, useEffect } from 'react';

// Import Digital Marketing images
import dm1 from './images/marketing/dm1.jpg';
import dm2 from './images/marketing/dm2.jpg';
import dm3 from './images/marketing/dm3.jpg';

// Import Communication images
import comm1 from './images/communication/comm1.png'
import comm2 from './images/communication/comm2.jpg';
import comm3 from './images/communication/comm3.webp';

// Import Development images
import mern1 from './images/development/mern1.jpg';
import mern2 from './images/development/mern2.avif';
import mern3 from './images/development/mern3.jpg';

const ProjectCard = ({ category, title, images, index, id, onProjectClick, delay = true }) => {
  const [isVisible, setIsVisible] = useState(!delay);

  useEffect(() => {
    if (delay) {
      const timeout = setTimeout(() => setIsVisible(true), 200 * (index + 1));
      return () => clearTimeout(timeout);
    }
  }, [index, delay]);

  return (
    <div className={`border border-gray-800 rounded-lg overflow-hidden 
      hover:border-orange-500 transition-all duration-500 
      transform hover:scale-105 hover:shadow-2xl group relative
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
        opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
      
      <div className="bg-purple-600 h-48 w-full overflow-hidden">
        <img src={images[0]} alt={title} 
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"/>
      </div>
      
      <div className="p-6">
        <span className="px-3 py-1 bg-orange-500 text-white text-sm rounded-full uppercase
          transform transition-transform duration-300 group-hover:rotate-6">
          {category}
        </span>
        
        <h3 className="text-white text-xl font-semibold mt-4 mb-2 
          transform transition-transform duration-300 group-hover:translate-x-2">
          {title}
        </h3>
        
        <button onClick={() => onProjectClick(id)}
          className="text-gray-400 hover:text-orange-500 
          transition-all duration-300 flex items-center gap-2 group/btn">
          <span className="transform transition-transform group-hover/btn:translate-x-1">
            Read more
          </span>
          <svg className="w-4 h-4 transform transition-transform group-hover/btn:translate-x-2" 
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const ProjectDetails = ({ project, onBack }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`min-h-screen bg-black text-white py-20 px-6
      transform transition-all duration-1000
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto">
        <button onClick={onBack}
          className="mb-8 flex items-center gap-2 text-orange-500 hover:text-orange-400
            transition-all duration-300 group">
          <svg className="w-5 h-5 transform transition-transform group-hover:-translate-x-1"
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <span className="px-4 py-2 bg-orange-500 text-white rounded-full uppercase">
              {project.category}
            </span>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-pink-500
              bg-clip-text text-transparent">{project.title}</h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              {project.description}
            </p>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Key Challenges</h2>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-400">
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
          </div>

          <div className="space-y-6">
            {project.images.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-2xl
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

const Portfolio = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsHeaderVisible(true);
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  const allProjects = [
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
    }
  ];

  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 3);
  const selectedProject = allProjects.find(p => p.id === selectedProjectId);

  if (selectedProject) {
    return (
      <ProjectDetails 
        project={selectedProject}
        onBack={() => setSelectedProjectId(null)}
      />
    );
  }

  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className={`mb-12 transform transition-all duration-1000
          ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-white mb-4 transform transition-transform duration-500 
            hover:scale-105 hover:text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
            Some pieces of our work
          </h2>
          <p className="text-gray-400 max-w-2xl transform transition-transform duration-500 hover:translate-x-2">
            We have successfully delivered digital marketing campaigns that boost brand visibility, full-stack web applications with seamless user experiences, and professional English training to enhance communication skills. Our work reflects innovation, efficiency, and a commitment to excellence across all our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              {...project} 
              index={index}
              onProjectClick={setSelectedProjectId}
              delay={!showAll}
            />
          ))}
        </div>

        {allProjects.length > 3 && (
          <div className="mt-12 text-center">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 border border-orange-500 text-orange-500 rounded-full 
                hover:bg-orange-500 hover:text-white transition-all duration-300 
                hover:scale-110 active:scale-95">
              {showAll ? 'SHOW LESS' : 'SHOW MORE'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;