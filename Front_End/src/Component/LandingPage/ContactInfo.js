import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

 const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 group">
        <div className="p-3 bg-white/10 rounded-full transform group-hover:scale-110 transition duration-200">
          <Phone className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-white font-medium">Phone</h3>
          <p className="text-white/80">+251 918 123-4567</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-4 group">
        <div className="p-3 bg-white/10 rounded-full transform group-hover:scale-110 transition duration-200">
          <Mail className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-white font-medium">Email</h3>
          <p className="text-white/80">blogify@gmail.com</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-4 group">
        <div className="p-3 bg-white/10 rounded-full transform group-hover:scale-110 transition duration-200">
          <MapPin className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-white font-medium">Address</h3>
          <p className="text-white/80">123 Blog Street, Suite 100<br />Bahirdar, BD 10001</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;