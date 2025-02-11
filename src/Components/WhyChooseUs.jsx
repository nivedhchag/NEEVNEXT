import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactModal = ({ isOpen, setIsOpen }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('contactFormData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // Save to localStorage whenever form data changes
  useEffect(() => {
    localStorage.setItem('contactFormData', JSON.stringify(formData));
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const submissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
    submissions.push({
      ...formData,
      submittedAt: new Date().toISOString()
    });
    localStorage.setItem('formSubmissions', JSON.stringify(submissions));
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Rest of the modal content remains the same */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">Let's Connect</h2>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          
          <p className="text-lg text-gray-600 mb-8">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-500"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-500"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-500"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    required
                    rows="4"
                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-500"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="text-orange-500" />
                    <p>hello@company.com</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="text-orange-500" />
                    <p>+1 (555) 000-0000</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="text-orange-500" />
                    <p>123 Business Ave, Suite 100<br />New York, NY 10001</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-6">Office Hours</h3>
                <div className="space-y-2">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-purple-400 via-orange-500 to-purple-600">
              <img 
                src="/api/placeholder/600/400" 
                alt="Person with binoculars" 
                className="w-full h-full object-cover mix-blend-overlay"
              />
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">Why choose us</h2>
            <p className="text-gray-400">
              Commodo diam vulputate dui proin quis enim nibh. Non integer ac 
              libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. 
              Morbi aliquam porttitor mattis consequat neque, tellus blandit.
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3 bg-transparent border border-orange-500 text-orange-500 
                       rounded-full hover:bg-orange-500 hover:text-white transition-colors"
            >
              LET'S CONNECT
            </button>
          </div>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </section>
  );
};

export default WhyChooseUs;