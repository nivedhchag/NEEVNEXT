import React from 'react';

const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white text-gray-800">
      {/* Contact Form Section - Teal Background */}
      <div className="bg-teal-500 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Let's discuss the idea</h2>
          
          <div className="flex max-w-xl mx-auto gap-4">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-6 py-3 rounded-full bg-white border-none shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button className="px-8 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors shadow-md font-medium">
              SEND
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Section - White Background */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          
          {/* Company Section */}
          <div>
            <h3 className="font-bold mb-6 text-teal-600">Company</h3>
            <ul className="space-y-4 text-gray-600">
              <li><a href="#" className="hover:text-orange-500 transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Team</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="font-bold mb-6 text-teal-600">Services</h3>
            <ul className="space-y-4 text-gray-600">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Full Stack Development</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Professional Communication</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Mobile app</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">SEO</a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="font-bold mb-6 text-teal-600">Resources</h3>
            <ul className="space-y-4 text-gray-600">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Case study</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="font-bold mb-6 text-teal-600">Follow us</h3>
            <ul className="space-y-4 text-gray-600">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Linkedin</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-orange-500 text-2xl font-bold">NEEVNEXT</span>
            </div>
            <p className="text-gray-600 mb-4">Get latest updates</p>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-lg bg-white border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none shadow-sm"
            />
            <button className="w-full mt-3 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors shadow-sm font-medium">
              Subscribe
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 my-12"></div>
        
        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2025 NEEVNEXT. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-teal-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-teal-600 transition-colors">Terms of Service</a>
          </div>
        </div>

        {/* Back to Top Button */}
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 flex items-center justify-center bg-white text-orange-500 rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition-colors border border-gray-200"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default FooterSection;