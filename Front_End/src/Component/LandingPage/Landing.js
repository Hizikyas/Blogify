import React, { useEffect, useState, useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css'; 
import Marquee from "react-fast-marquee";
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import BlurText from "../../UI/BlurText";
import BlogCard from "../../UI/BlogCard";
import SplitText from "../../UI/SplitText";
import { Feather, ChevronLeft, ChevronRight , ArrowRight , Mail, ExternalLink } from 'lucide-react';
import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Carousels from "../../UI/Carousel";
import TestimonialCard from "../../UI/TestimonialCard"

import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

import power from "../../Asset/Power of Networking.png";
import seo from "../../Asset/SEO Strategies.png";
import mastering from "../../Asset/Mastering.png";
import explore from "../../Asset/explore.png"
import explore_picture from "../../Asset/explore-computer.png"
import slide2 from "../../Asset/slide-2.png"
import write from "../../Asset/writing.png"


import alice from "../../Asset/Testimonials/alice.jpg";
import bob from "../../Asset/Testimonials/bob.jpg";
import charlie from "../../Asset/Testimonials/charlie.jpg";
import eva from "../../Asset/Testimonials/eva.jpg";
import jane from "../../Asset/Testimonials/jane.jpg";
import John from "../../Asset/Testimonials/john.jpg";
import contact from "../../Asset/contact.png"

import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';



const Landing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const sectionRef = useRef();

  const [isContactVisible, setIsContactVisible] = useState(false);
  const contactRef = useRef();

  const [Visible, setVisible] = useState([]); 
  const slideRefs = useRef([]); 
  const splideRef = useRef(null);
  
  const [isLoaded, setIsLoaded] = useState(false);
  
  const history = useHistory() ;


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500); // Adjust the delay as needed
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observers = [];

    slideRefs.current.forEach((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible((prev) => {
              const newVisibility = [...prev];
              newVisibility[index] = true;
              return newVisibility;
            });
            observer.unobserve(ref); // Stop observing once visible
          }
        },
        { threshold: 0.1 }
      );

      if (ref) {
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsContactVisible(true);
          observer.unobserve(contactRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);



  useEffect(() => {
    const header = document.querySelector('.header-animate');
    const paragraph = document.querySelector('.paragraph-animate');
    
    if (header) {
      header.classList.add('opacity-100', 'translate-y-0');
    }
    
    if (paragraph) {
      setTimeout(() => {
        paragraph.classList.add('opacity-100', 'translate-y-0');
      }, 300);
    }
  }, []);

  const goNext = () => {
    if (splideRef.current) {
      splideRef.current.splide.go('+1');
    }
  };

  const goPrev = () => {
    if (splideRef.current) {
      splideRef.current.splide.go('-1');
    }
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const testimonials = [
    {
      name: "John Doe",
      username: "@johndoe",
      testimonial: "Blogify has completely transformed the way I share my ideas. The platform is intuitive and user-friendly!",
      imageUrl: John,
      rating: 5,
    },
    {
      name: "Jane Smith",
      username: "@janesmith",
      testimonial: "I love how easy it is to connect with other writers and readers. Blogify is a game-changer!",
      imageUrl:jane,
      rating: 5,
    },
    {
      name: "Alice Johnson",
      username: "@alicej",
      testimonial: "The support team is amazing, and the features are top-notch. Highly recommend Blogify!",
      imageUrl: alice,
      rating: 4,
    },
    {
      name: "Bob Brown",
      username: "@bobb",
      testimonial: "Blogify has helped me grow my audience and improve my writing skills. Fantastic platform!",
      imageUrl: bob,
      rating: 5,
    },
    {
      name: "Charlie Davis",
      username: "@charlied",
      testimonial: "The analytics tools are incredibly helpful. Blogify is a must-have for any blogger!",
      imageUrl:charlie,
      rating: 5,
    },
    {
      name: "Eva Green",
      username: "@evag",
      testimonial: "I’ve never seen such a seamless blogging experience. Blogify is simply the best!",
      imageUrl: eva,
      rating: 4,
    },
  ];

  
  return (
    <React.Fragment>
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center py-4 bg-gray-200/70 text-gray-700 px-12 z-50 backdrop-blur-lg">
      <div>
        <p className="font-Pacifico text-2xl text-black">blogify</p>
      </div>
      <ul className="list-none font-Poppins font-light text-sm flex justify-between items-center gap-6">
        <li><a href="#explore" className={`hover:text-white ${ activeLink === "explore" ? "text-white" : "" }`} onClick={() => handleLinkClick("explore")}> explore  </a> </li> 
        <li><a href="#features" className={`hover:text-white ${ activeLink === "features" ? "text-white" : ""}`} onClick={() => handleLinkClick("features")}> features </a> </li>
        <li> <a href="#latestBlogs"className={`hover:text-white ${ activeLink === "latestBlogs" ? "text-white" : "" }`}onClick={() => handleLinkClick("latestBlogs")} > latest blogs</a></li>
        <li> <a href="#testimonials" className={`hover:text-white ${ activeLink === "testimonials" ? "text-white" : "" }`}onClick={() => handleLinkClick("testimonials")} > testimonials</a></li>
        <li> <a href="#contact_us"className={`hover:text-white ${ activeLink === "contact_us" ? "text-white" : ""  }`} onClick={() => handleLinkClick("contact_us")}> contact us</a> </li>
        <li> <a href="#createBlog" className={`hover:text-white ${ activeLink === "createBlog" ? "text-white" : "" }`} onClick={() => handleLinkClick("createBlog")} > create blog </a></li>
      </ul>
      <div className="flex justify-between items-center gap-2 px-4">
        <button onClick={() => history.push("/authentication/login")} className="text-black rounded-l-lg px-6 py-2 border border-gray-700 hover:bg-gray-300 hover:text-gray-800">
          Login
        </button>
        <button onClick={() => history.push("/authentication/sign_up")} className="bg-gray-800 text-white font-bold rounded-r-lg px-6 py-2 border border-gray-700 hover:bg-gray-200 hover:text-gray-800">
          Sign Up
        </button>
      </div>
    </nav>

    <section id="explore" className="relative bg-custom-gradient w-full mx-auto rounded-[2rem] h-[85vh] mt-[6rem] overflow-hidden scroll-mt-[16vh]">
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Splide
          ref={splideRef}
          options={{
            type: 'loop',
            autoplay: true,
            interval: 4000,
            pauseOnHover: true,
            arrows: false,
            pagination: false,
            speed: 1000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
          extensions={{ AutoScroll }}
        >
          <SplideSlide>
            <div
              ref={(el) => (slideRefs.current[0] = el)} // Attach ref to this slide
              className="min-h-screen relative"
            >
              <div
                className="min-h-screen bg-cover bg-center relative flex items-center justify-center p-6"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${explore_picture})`,
                  backgroundBlendMode: 'overlay',
                }}
              >
                <div className="custom-shape-divider-top-1740384623">
                  <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                      className="shape-fill"
                    ></path>
                  </svg>
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-purple-900/40 z-0"></div>

                <div className="flex flex-col md:flex-row items-center justify-center w-11/12 max-w-7xl relative z-10">
                  <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
                    <h1
                      className={`text-4xl md:text-5xl font-bold text-white mb-4 leading-tight ${
                        Visible[0] ? 'animate-slide-in-left' : ''
                      }`}
                    >
                      Effortlessly Manage Your Blogging Journey
                    </h1>
                    <p
                      className={`text-lg text-gray-100 mb-8 max-w-xl ${
                        Visible[0] ? 'animate-slide-in-left animation-delay-200' : ''
                      }`}
                    >
                      Blogify is your all-in-one platform designed for creators and readers. Dive into a network where you can publish thoughts, engage with authors, and discover diverse perspectives.
                    </p>
                    <button
                      onClick={() => history.push('/authentication/sign_up')}
                      className={`bg-white text-blue-600 hover:bg-gray-100 transition-colors px-8 py-3 rounded-md text-lg font-medium flex items-center gap-2 group ${
                        Visible[0] ? 'animate-slide-in-bottom animation-delay-400' : ''
                      }`}
                    >
                      Join Us Today
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                  <div className="w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] flex justify-center">
                    <div
                      className={`bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-2xl transform hover:translate-y-[-5px] hover:scale-105 transition-all duration-300 ${
                        Visible[0] ? 'animate-slide-in-right animation-delay-300 animate-pulse-slow' : ''
                      }`}
                    >
                      <img
                        src={explore}
                        alt="Person writing a blog on laptop"
                        className="w-full h-auto rounded shadow-md"
                      />
                      <div className="text-center px-4 md:px-6 lg:px-10">
                        <h3
                          className={`text-sm sm:text-base md:text-lg font-semibold text-gray-800 ${
                            Visible[0] ? 'animate-fade-in animation-delay-500' : ''
                          }`}
                        >
                          Start Creating Today
                        </h3>
                        <p
                          className={`text-xs sm:text-sm md:text-base text-gray-600 mt-2 ${
                            Visible[0] ? 'animate-fade-in animation-delay-700' : ''
                          }`}
                        >
                          Join thousands of content creators
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div
              ref={(el) => (slideRefs.current[1] = el)} // Attach ref to this slide
              className="absolute inset-0 flex items-center justify-center"
              style={{
                backgroundImage: `url(${write})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/60"></div>
              <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <div
                  className={`mb-8 transform transition-all duration-1000 ${
                    Visible[1] ? 'opacity-100 translate-y-0 animate-pulse-slow' : 'opacity-0 -translate-y-10'
                  }`}
                >
                  <Feather className="h-16 w-16 mx-auto text-white" strokeWidth={1.5} />
                </div>
                <h1
                  className={`text-4xl md:text-6xl font-bold text-white mb-6 leading-tight transition-all duration-1000 ${
                    Visible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    textShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  Discover Inspiring Stories and Insights
                </h1>
                <p
                  className={`text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
                    Visible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
                >
                  Join our community of writers, thinkers, and storytellers exploring ideas that matter.
                </p>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div
              ref={(el) => (slideRefs.current[2] = el)} // Attach ref to this slide
              className="relative min-h-screen flex items-center justify-center overflow-hidden"
              style={{
                backgroundImage: `url(${slide2})`,
                backgroundSize: 'cover',
                backgroundPosition: `center`,
              }}
            >
              <div
                className="absolute inset-0 z-10"
                style={{
                  background:
                    'linear-gradient(90deg, rgba(2, 0, 36, 0.5) 0%, rgba(1, 8, 97, 0.5) 100%, rgba(1, 10, 110, 0.5) 100%, rgba(1, 83, 165, 0.5) 100%, rgba(1, 56, 144, 0.5) 100%, rgba(0, 119, 192, 0.5) 100%, rgba(0, 212, 255, 0.5) 100%, rgba(1, 11, 118, 0.5) 100%, rgba(1, 112, 187, 0.5) 100%)',
                }}
              ></div>
              <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
                <div
                  className={`h-0.5 w-24 bg-amber-400 mx-auto mb-8 transition-all duration-1000 ease-out ${
                     Visible[2] ? 'opacity-100' : 'opacity-0 -translate-y-8'
                  }`}
                ></div>
                <h1
                  className={`font-serif text-4xl md:text-6xl text-white leading-tight mb-6 transition-all duration-1000 ease-out ${
                    Visible[2] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                  }`}
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  Dive into a World of Ideas & Knowledge
                </h1>
                <p
                  className={`text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto transition-all duration-1000 delay-300 ease-out ${
                    Visible[2] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                  }`}
                >
                  Your go-to destination for articles, tips, and expert insights
                </p>
              </div>
            </div>
          </SplideSlide>
        </Splide>

        <button
          onClick={goPrev}
          className="absolute left-4 z-10 top-1/2 -translate-y-1/2 bg-white/30 p-2 rounded-full hover:bg-white/50 transition-all"
        >
          <ChevronLeft size={24} className="text-white" />
        </button>
        <button
          onClick={goNext}
          className="absolute right-4 z-10 top-1/2 -translate-y-1/2 bg-white/30 p-2 rounded-full hover:bg-white/50 transition-all"
        >
          <ChevronRight size={24} className="text-white" />
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => splideRef.current.splide.go(index)}
              className={`w-3 h-1.5 bg-white/50 rounded-full transition-all duration-300 ${
                splideRef.current?.splide?.index === index ? 'h-3 bg-white' : ''
              }`}
            />
          ))}
        </div>
      </div>
    </section>

      <section id="features" className=' mt-[1rem] h-[90vh]'>
        <div className="container mx-auto py-12 px-4">
          <BlurText
            text="Discover How Blogify Empowers Your Blogging Journey"
            delay={20}
            animateBy="letters"
            direction="top"
            className="text-3xl md:text-[2.5rem] leading-normal font-bold text-white text-center flex justify-center mb-[6rem]"
          />
          <Carousels />
        </div>
      </section>
      
      <section id="latestBlogs" className=" h-[90vh] relative py-12" ref={sectionRef}>
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-16">
            <SplitText
              text="Latest Blog Highlights"
              className="text-4xl font-bold text-center text-white"
              delay={100}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
            />
          </div>

          <div className="w-11/12 mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <BlogCard
            id="Mastering the Art of Storytelling in Blogging"
              date="15 FEB 2023"
              title="Mastering the Art of Storytelling in Blogging"
              description="Uncover the secrets to captivating your audience by weaving compelling narratives that resonate and inspire further engagement."
              imageUrl={mastering}
              altText="Person typing on a laptop with social media icons floating around"
              className={`transition-all duration-1000 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
            />
            <BlogCard
            id= "Networking Power"
              date="20 FEB 2023"
              title="Networking Power: Building Connections via Blogs"
              description="Learn how to effectively network within the blogosphere and leverage relationships to broaden your reach and enhance your influence."
              imageUrl={power}
              altText="Person holding a heart icon in front of a laptop with books and plants in the background"
              className={`transition-all duration-2000 ease-out delay-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
            />
            <BlogCard
            id="SEO Strategies for Bloggers"
              date="25 FEB 2023"
              title="SEO Strategies for Bloggers: Boost Your Visibility"
              description="Equip yourself with essential SEO techniques that can amplify your blog's presence and attract a wider audience to your unique voice."
              imageUrl={seo}
              altText="Person using a laptop with SEO icons on the screen"
              className={`transition-all duration-3000 ease-out delay-3600 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
            />
          </div>
        </div>
      </section>

      <section id="testimonials" className="h-[90vh] py-[2rem] relative">
      <div className="flex justify-between items-center w-full h-full">
        <div className="w-5/12 text-left px-12 text-white">
          <h1 className="header-animate text-4xl md:text-5xl pb-[1.5rem] font-bold text-white opacity-0 -translate-y-[2rem] transform transition-all duration-2000 ease-out">
            What Our Clients Say
          </h1>
          <p className="paragraph-animate w-10/12 text-xl text-gray-700 leading-relaxed opacity-0 -translate-y-[2rem] transform transition-all duration-700 delay-2500 ease-out">
            The support and expertise we received were beyond exceptional. Our goals were not just met—they were exceeded!
          </p>
        </div>

        <div className="w-7/12 h-[70vh] relative overflow-hidden flex flex-col justify-center rounded-l-[10rem]">
          {isLoaded ? (
            <>
              {/* First Marquee Row */}
              <Marquee pauseOnHover speed={40} gradient={false} className="mb-4">
                {testimonials.slice(0, 3).map((testimonial, index) => (
                  <div key={index} className="mx-4 mb-8">
                    <TestimonialCard {...testimonial} />
                  </div>
                ))}
              </Marquee>

              <Marquee pauseOnHover speed={40} gradient={false} direction="right" className="mt-4">
                {testimonials.slice(3, 6).map((testimonial, index) => (
                  <div key={index} className="mx-4 mb-8">
                    <TestimonialCard {...testimonial} />
                  </div>
                ))}
              </Marquee>
            </>
          ) : (
            <div className="flex justify-center items-center h-full">
              <p className="text-white">Loading testimonials...</p>
            </div>
          )}
        </div>
      </div>
    </section>

      <section id="contact_us" className="h-[90vh] relative" ref={contactRef}>
        <div>
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${contact})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[3px]"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 overflow-hidden">
                <h1
                  className={`text-5xl md:text-6xl font-bold text-white mb-8 transition-all duration-1000 ease-out ${
                    isContactVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                  }`}
                >
                  Contact Us
                </h1>
                <div className="space-y-1">
                  <p
                    className={`text-xl text-white/90 transition-all duration-1000 delay-300 ease-out ${
                      isContactVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
                    }`}
                  >
                    Feel free to ask any questions or call us anytime.
                  </p>
                  <p
                    className={`text-xl text-white/90 transition-all duration-1000 delay-500 ease-out ${
                      isContactVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
                    }`}
                  >
                    We're here to help you with any queries related to our blog.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div
                  className={`transition-all duration-1000 delay-700 ease-out ${
                    isContactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <ContactInfo />
                </div>
                <div
                  className={`transition-all duration-1000 delay-1000 ease-out ${
                    isContactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <footer className="bg-gray-900 text-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Recent Posts */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Recent Posts</h3>
              <ul className="space-y-4">
                {['Mastering the Art of Storytelling in Blogging', 'Networking Power', 'SEO Strategies for Bloggers'].map((post) => (
                  <li key={post} className="group">
                    <a href="#latestBlogs" className="flex items-center hover:text-white transition-colors">
                      <span className="flex-grow">{post}</span>
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ml-2" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Connect With Us</h3>
              <div className="space-y-4">
                <a href="https://web.facebook.com/" className="flex items-center group">
                  <FiFacebook className="w-5 h-5 mr-3 text-gray-400 group-hover:text-white transition-colors" />
                  <span className="group-hover:text-white transition-colors">Facebook</span>
                </a>
                <a href="https://x.com/" className="flex items-center group">
                  <FaXTwitter className="w-5 h-5 mr-3 text-gray-400 group-hover:text-white transition-colors" />
                  <span className="group-hover:text-white transition-colors">Twitter</span>
                </a>
                <a href="https://www.instagram.com/" className="flex items-center group">
                  <FaInstagram  className="w-5 h-5 mr-3 text-gray-400 group-hover:text-white transition-colors" />
                  <span className="group-hover:text-white transition-colors">Instagram</span>
                </a>
                <a href="https://www.linkedin.com/" className="flex items-center group">
                  <FaLinkedin   className="w-5 h-5 mr-3 text-gray-400 group-hover:text-white transition-colors" />
                  <span className="group-hover:text-white transition-colors">Linkedin</span>
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Newsletter</h3>
              <p className="text-gray-400 mb-4">Stay updated with our latest posts and announcements.</p>
              <form className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Contact Us</h3>
              <div className="space-y-4 text-gray-400">
                <p>123 Blog Street</p>
                <p>Bahirdar, BD 10001</p>
                <a href="mailto:contact@blog.com" className="flex items-center group">
                  <Mail className="w-5 h-5 mr-2 group-hover:text-white transition-colors" />
                  <span className="group-hover:text-white transition-colors">blogify@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} <span className='font-Poppins font-bold'>BLOGIFY</span> . All rights reserved.</p>
          </div>
        </div>
      </footer>
    
    </React.Fragment>
  );
};

export default Landing;
