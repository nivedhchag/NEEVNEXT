import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/home", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/work", label: "Work" },
    { path: "/about", label: "#", label: "About" }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent"
            >
              Agency
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`
                  relative text-gray-300 hover:text-white 
                  transition-all duration-300 group
                  ${isActive(item.path) ? 'text-white' : ''}
                `}
              >
                {item.label}
                <span 
                  className={`
                    absolute -bottom-2 left-0 w-full h-0.5 bg-orange-500 
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
              className="bg-orange-500 text-white px-6 py-2 rounded-full 
              hover:bg-orange-600 transition-all duration-300 
              transform hover:scale-105 active:scale-95"
            >
              Contact Us
            </Link>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-gray-300 transform transition-transform active:scale-90"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 border-b border-gray-800 animate-slide-in-top">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  block px-3 py-2 
                  transition-all duration-300
                  ${isActive(item.path) 
                    ? 'bg-orange-500/20 text-white' 
                    : 'text-gray-300'
                  }
                  hover:bg-orange-500/20 hover:text-white
                `}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            <Link
              to="/contact"
              className="block w-full mt-2 bg-orange-500 text-white 
              px-6 py-2 rounded-full text-center
              hover:bg-orange-600 transition-all duration-300
              transform hover:scale-105 active:scale-95"
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