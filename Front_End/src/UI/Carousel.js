import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import FeaturedCards from '../Component/LandingPage/FeaturedCards';
import craft from "../Asset/SVG/craft.svg";
import readers from "../Asset/SVG/readers.svg";
import explore from "../Asset/SVG/explore.svg";
import track from "../Asset/SVG/track.svg";
import collaborative from "../Asset/SVG/collaborative.svg";
import analytic from "../Asset/SVG/analytic.svg";
import customization from "../Asset/SVG/customization.svg";
import opportunities from "../Asset/SVG/opportunities.svg";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; // Use the regular version


const features = [
  { icon: craft, title: "Craft Your Content", description: "Utilize our intuitive editor to effortlessly create and refine your blog posts, ensuring your voice shines through." },
  { icon: readers, title: "Engage with Readers", description: "Interact meaningfully with your audience through comments and ratings, fostering a vibrant community around your content." },
  { icon: explore, title: "Explore and Discover", description: "Browse a wide array of blogs and discover new voices and perspectives that enrich your understanding and creativity." },
  { icon: track, title: "Track Your Growth", description: "Monitor your blogging performance, manage your posts, and gain insights to enhance your writing and engagement strategies." },
  { icon: collaborative, title: "Collaborative Writing", description: "Invite co-authors, collaborate in real-time, and create powerful content together with our seamless team writing features." },
  { icon: analytic, title: "Advanced Analytics", description: "Dive deep into comprehensive analytics that provide insights into reader engagement, traffic, and content performance." },
  { icon: customization, title: "Personalized Customization", description: "Tailor your blog's look and feel with extensive design options, making your digital space truly unique and reflective of your style." },
  { icon: opportunities, title: "Networking Opportunities", description: "Connect with fellow bloggers, join writing groups, and expand your professional network within our supportive community." },
];

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 z-10 -translate-y-1/2 top-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition-colors"
  >
    <ChevronLeft size={36} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 z-10 -translate-y-1/2 top-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition-colors"
  >
    <ChevronRight size={36} />
  </button>
);

export default function FeaturesSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500, 
    pauseOnHover: true, 
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: dots => (
      <div
        style={{
          position: "absolute",
          bottom: "-70px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <ul className="flex space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-3 h-3 bg-gray-700 rounded-full transition-colors hover:bg-gray-400"></div>
    ),
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {features.map((feature, index) => (
          <div key={index} className="px-4">
            <FeaturedCards
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          </div>
        ))}
      </Slider>

      <style>
        {`
          .slick-dots li.slick-active div {
            background-color: #FFF;               /* Active dot color */
            transform: translateY(4px);           /* Move the active dot slightly lower */
          }
        `}
      </style>
    </div>
  );
}