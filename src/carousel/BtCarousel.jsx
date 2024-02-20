// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import courtyard from "../assets/LasCasasBataan/Venue/courtyard.jpg";
import hoteldeoriente from "../assets/LasCasasBataan/Venue/Hotel De Oriente.jpg";
import island2 from "../assets/LasCasasBataan/Venue/Island 2.jpg";
import "../styles/carousel.css";

const BtCarousel = () => {
  // Define an array of images to display in the carousel
  const images = [courtyard, hoteldeoriente, island2];

  // Configure carousel settings
  const settings = {
    dots: true, // Show navigation dots for the carousel
    infinite: true, // Allow infinite looping of carousel items
    speed: 500, // Speed of the carousel animation in milliseconds
    slidesToShow: 1, // Number of slides to display at a time
    slidesToScroll: 1, // Number of slides to scroll when navigating
    autoplay: true, // Automatically play the carousel in a loop
    centerMode: true, // Center the active slide in the carousel
  };

  return (
    <div className="mb-20 max-w-full">
      {/* Initialize the Slider component with the defined settings */}
      <Slider {...settings}>
        {images.map((image, index) => (
          // Create individual slides with images
          <div key={index} className="flex">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto xsm:w-[500px] xsm:h-[300px]"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BtCarousel;
