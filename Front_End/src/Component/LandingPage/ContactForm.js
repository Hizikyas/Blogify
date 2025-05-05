import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ fullName: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="animate-slide-up bg-white/10 backdrop-blur-[10px] rounded-lg p-4 shadow-lg w-[30rem] max-w-sm">
      <div className="space-y-3">
        <div>
          <label htmlFor="fullName" className="block text-white text-xs font-medium mb-1">Full Name</label>
          <input
            type="text"
            id="fullName"
            className="w-full px-3 py-1.5 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-1.5 focus:ring-blue-500 transition duration-150"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-white text-xs font-medium mb-1">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-1.5 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-1.5 focus:ring-blue-500 transition duration-150"
            placeholder="john@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-white text-xs font-medium mb-1">Message</label>
          <textarea
            id="message"
            rows={3}
            className="w-full px-3 py-1.5 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-1.5 focus:ring-blue-500 transition duration-150 resize-none"
            placeholder="Your message here..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />
        </div>
        <button
          type="submit"
          className="w-2/3 mx-auto backdrop-blur-[30px] hover:bg-gray-500 text-white font-medium py-2 px-4 rounded-md flex items-center justify-center gap-1.5 transform hover:scale-102 transition duration-150"
        >
          <Send size={16} />
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;