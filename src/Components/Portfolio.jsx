import React, { useState, useEffect } from 'react';

const ProjectCard = ({ category, title, index, id, onProjectClick, delay = true }) => {
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
        <img src="/api/placeholder/600/400" alt={title} 
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
    window.history.pushState({}, '', `/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`);
    return () => {
      window.history.pushState({}, '', '/');
    };
  }, [project.title]);

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
                <img src={image} alt={`Project view ${index + 1}`}
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
      category: 'WEBSITE', 
      title: 'Creative landing page',
      description: "A modern and responsive landing page designed to capture user attention and drive conversions. Built with React and Tailwind CSS, featuring smooth animations and interactive elements.",
      challenges: [
        "Optimizing performance for large-scale deployments",
        "Implementing complex animations while maintaining smooth performance",
        "Creating a responsive design that works across all devices"
      ],
      images: ["/api/placeholder/800/600", "/api/placeholder/800/600", "/api/placeholder/800/600"]
    },
    { 
      id: 2, 
      category: 'BRANDING', 
      title: 'Creative Branding',
      description: "Comprehensive brand identity development including logo design, color palette selection, and brand guidelines documentation.",
      challenges: [
        "Developing a unique visual identity",
        "Ensuring consistency across all brand touchpoints",
        "Creating flexible design systems"
      ],
      images: ["/api/placeholder/800/600", "/api/placeholder/800/600", "/api/placeholder/800/600"]
    },
    {
      id: 3,
      category: 'DEVELOPMENT',
      title: 'E-commerce Platform',
      description: "A full-featured e-commerce solution with integrated payment processing, inventory management, and customer analytics. Built using modern web technologies.",
      challenges: [
        "Implementing secure payment processing",
        "Building scalable inventory system",
        "Optimizing for mobile commerce",
        "Integrating multiple third-party services"
      ],
      images: ["/api/placeholder/800/600", "/api/placeholder/800/600", "/api/placeholder/800/600"]
    },
    {
      id: 4,
      category: 'MARKETING',
      title: 'Digital Marketing Campaign',
      description: "Comprehensive digital marketing strategy including social media, email campaigns, and SEO optimization to increase brand visibility and engagement.",
      challenges: [
        "Creating engaging content strategy",
        "Optimizing conversion rates",
        "Managing multi-channel campaigns",
        "Analyzing performance metrics"
      ],
      images: ["/api/placeholder/800/600", "/api/placeholder/800/600", "/api/placeholder/800/600"]
    },
    {
      id: 5,
      category: 'UI/UX',
      title: 'Mobile App Design',
      description: "User-centered mobile application design focusing on intuitive navigation, accessibility, and engaging user experience across multiple platforms.",
      challenges: [
        "Creating consistent cross-platform experience",
        "Optimizing app performance",
        "Implementing gesture-based interactions",
        "Ensuring accessibility compliance"
      ],
      images: ["/api/placeholder/800/600", "/api/placeholder/800/600", "/api/placeholder/800/600"]
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
            Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat 
            scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt.
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