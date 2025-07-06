import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Logo = () => (
  <svg 
    className="h-10 w-10" 
    viewBox="0 0 80 80" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Base Circle */}
    <circle 
      cx="40" 
      cy="40" 
      r="36" 
      className="fill-white opacity-10"
    />
    
    {/* Graduate Figure - More stylized */}
    <path
      d="M40 24C38 24 32 35 32 48C32 56 35 60 40 60C45 60 48 56 48 48C48 35 42 24 40 24Z"
      fill="#008080"
      className="drop-shadow-lg"
    />
    
    {/* Graduation Cap - More detailed */}
    <path
      d="M30 28L40 22L50 28L40 34L30 28Z"
      fill="#008080"
      className="drop-shadow-lg"
    />
    <path
      d="M40 34V38"
      stroke="#008080"
      strokeWidth="2"
      strokeLinecap="round"
    />
    
    {/* Star - More dynamic */}
    <path
      d="M40 15L44 25L54 25L46 32L49 42L40 36L31 42L34 32L26 25L36 25L40 15Z"
      fill="#FF6B00"
      className="drop-shadow-lg"
    />
    
    {/* Decorative Circle */}
    <circle 
      cx="40" 
      cy="40" 
      r="36" 
      stroke="#008080" 
      strokeWidth="2"
      strokeDasharray="4 4"
      className="opacity-20"
    />
    
    {/* Accent Lines */}
    <path
      d="M20 40C20 30 30 20 40 20"
      stroke="#FF6B00"
      strokeWidth="2"
      strokeLinecap="round"
      className="opacity-20"
    />
    <path
      d="M60 40C60 50 50 60 40 60"
      stroke="#FF6B00"
      strokeWidth="2"
      strokeLinecap="round"
      className="opacity-20"
    />
  </svg>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/home');
    }
  }, [location.pathname, navigate]);

  const navItems = [
    { path: "/home", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/work", label: "Work" },
  ];

  const isActive = (path) => location.pathname === path;

  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (

    <nav className="fixed w-full bg-white shadow-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="https://www.teacheron.com/tutor/bMrt?r=bMrt" target="_blank" style="display: inline-block;"><img src="https://www.teacheron.com/resources/assets/img/badges/viewMyProfile.png" style="width: 336px !important; height: 144px !important"></a>
            <Link 
              to="/home" 
              onClick={handleLogoClick}
              className="flex items-center gap-3 group"
            >
              <div className="transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-[360deg]">
                <Logo />
              </div>
              <span className="text-2xl font-light tracking-tight bg-gradient-to-r from-teal-500 to-orange-400 bg-clip-text text-transparent">
                NEEVNEXT
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`
                  relative text-gray-600 hover:text-teal-600 
                  transition-all duration-300 text-sm font-medium tracking-wide
                  ${isActive(item.path) ? 'text-teal-600' : ''}
                `}
              >
                {item.label}
                <span 
                  className={`
                    absolute -bottom-1 left-0 w-full h-0.5 bg-orange-400 
                    transform scale-x-0 origin-left 
                    transition-transform duration-300 
                    group-hover:scale-x-100
                    ${isActive(item.path) ? 'scale-x-100' : ''}
                  `}
                ></span>
              </Link>
            ))}
            
            <Link 
              to="/contact" 
              className="bg-teal-500 text-white px-6 py-2 rounded-full 
              hover:bg-teal-600 transition-all duration-300 text-sm font-medium tracking-wide
              transform hover:scale-105 active:scale-95 shadow-md"
            >
              Contact Us
            </Link>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-teal-600 transform transition-transform active:scale-90 p-1"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-sm shadow-lg animate-slide-in-top">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  block px-4 py-3 rounded-lg
                  transition-all duration-300 text-sm font-medium tracking-wide
                  ${isActive(item.path) 
                    ? 'bg-teal-50 text-teal-600' 
                    : 'text-gray-600'
                  }
                  hover:bg-teal-50 hover:text-teal-600
                `}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            <Link
              to="/contact"
              className="block w-full mt-4 bg-teal-500 text-white 
              px-6 py-3 rounded-full text-center text-sm font-medium tracking-wide
              hover:bg-teal-600 transition-all duration-300
              transform hover:scale-105 active:scale-95 shadow-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
