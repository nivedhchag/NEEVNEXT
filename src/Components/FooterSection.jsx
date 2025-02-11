import React from 'react';

const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black text-white">
      <div className="bg-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-black mb-4">Let's discuss the idea</h2>
          <p className="text-black/80 mb-8 max-w-2xl mx-auto">
            Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit.
          </p>
          <div className="flex max-w-xl mx-auto gap-4">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-6 py-3 rounded-full"
            />
            <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-900 transition-colors">
              SEND
            </button>
          </div>
        </div>
      </div>

     
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          
          <div>
            <h3 className="font-bold mb-6">Company</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white">About us</a></li>
              <li><a href="#" className="hover:text-white">Team</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>

          
          <div>
            <h3 className="font-bold mb-6">Services</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white">Branding</a></li>
              <li><a href="#" className="hover:text-white">Web development</a></li>
              <li><a href="#" className="hover:text-white">Digital marketing</a></li>
              <li><a href="#" className="hover:text-white">Mobile app</a></li>
              <li><a href="#" className="hover:text-white">SEO</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-6">Resources</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Case study</a></li>
              <li><a href="#" className="hover:text-white">Testimonials</a></li>
            </ul>
          </div>

          
          <div>
            <h3 className="font-bold mb-6">Follow us</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white">Instagram</a></li>
              <li><a href="#" className="hover:text-white">Figma</a></li>
            </ul>
          </div>

       
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-orange-500 text-2xl font-bold">S</span>
              <span className="text-xl font-bold">hadient.co</span>
            </div>
            <p className="text-gray-400 mb-4">Get latest updates</p>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-800 focus:border-orange-500 outline-none"
            />
          </div>
        </div>

        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 px-6 py-2 border border-white-500 text-orange-500 rounded-full hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-colors"
        >
          GO TO TOP
        </button>
      </div>
    </footer>
  );
};

export default FooterSection;