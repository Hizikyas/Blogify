import React, { useState, useEffect, useRef } from "react";
import { MoveRight } from 'lucide-react';

const BlogCard = ({ date, title, description, imageUrl, altText }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(cardRef.current);
        }
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative flex w-85 flex-col rounded-xl bg-white/80 bg-clip-border text-gray-700 shadow-md group transition-all duration-1000 ease-out transform hover:-translate-y-1  ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
        <img
          src={imageUrl}
          alt={altText}
          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300 ease-out"
        />
      </div>

      <div className="p-6">
        <p className="mb-2 text-[0.8rem] font-Poppins text-gray-500">
          {date}
        </p>
        <h3 className="mb-2 font-Montserrat text-xl font-semibold leading-snug tracking-normal text-gray-900">
          {title}
        </h3>
        <p className="mb-8 font-Poppins text-base font-light text-[0.9rem] leading-relaxed text-gray-700">
          {description}
        </p>
      </div>

      <div className="absolute bottom-[3px] border-t-[1px] h-[2.5rem] p-6 pt-0 w-full pt-2">
        <a
          href={imageUrl}
          className="select-none py-2 text-center font-Poppins text-xs font-bold text-blue-500 transition-all hover:text-blue-600"
        >
         <span className="relative flex items-center gap-1 text-[1rem] ">
            Read more
            <MoveRight className="h-5 w-5 transition-transform duration-300 ease-out group-hover:translate-x-3" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default BlogCard;