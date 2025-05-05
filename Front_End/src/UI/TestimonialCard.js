import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialCard = ({
  name,
  username,
  testimonial,
  imageUrl,
  rating = 5
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = cardRef.current; // Copy ref to a variable
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
<div 
  ref={cardRef}
  className="bg-white rounded-2xl shadow-lg p-4 max-w-sm opacity-0 translate-y-8 transform transition-all duration-700 ease-out relative h-[150px] animate-fade-in"
>
  <div className="flex items-center mb-3">
    <img 
      src={imageUrl} 
      alt={name}
      className="h-10 w-10 rounded-full object-cover"
    />
    <div className="ml-3">
      <h4 className="font-bold text-gray-900 text-sm">{name}</h4>
      <p className="text-gray-600 text-xs">{username}</p>
    </div>
  </div>
  
  <div className="text-gray-600 text-xs leading-relaxed mb-2">
    {testimonial}
  </div>
  
  <div className="flex mb-2">
    {[...Array(5)].map((_, i) => (
      <Star 
        key={i}
        size={10}
        className={`${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'} mr-1`}
      />
    ))}
  </div>
  
  <div className="absolute top-3 right-3">
    <FaQuoteLeft className="text-[#ADD8E6]" size={14} /> 
  </div>
</div>
  );
};

export default TestimonialCard;