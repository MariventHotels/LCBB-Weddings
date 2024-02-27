// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VenueA from "../assets/LasCasasBataan/Venue/vn1.jpg";
import VenueB from "../assets/LasCasasBataan/Venue/vn2.jpg";
import VenueC from "../assets/LasCasasBataan/Venue/vn3.jpg";
import VenueD from "../assets/LasCasasBataan/Venue/vn4.jpg";
import VenueE from "../assets/LasCasasBataan/Venue/vn5.jpg";
import VenueF from "../assets/LasCasasBataan/Venue/vn6.jpg";
import VenueG from "../assets/LasCasasBataan/Venue/vn7.jpg";
import VenueH from "../assets/LasCasasBataan/Venue/vn8.jpg";


import "../styles/carousel.css";

const BtCarousel = () => {
  // Define an array of images to display in the carousel
  const images = [VenueA, VenueB, VenueC, VenueD, VenueE, VenueF, VenueG, VenueH];

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
    <div className="mx-14 xsm:m-0">
      {/* Initialize the Slider component with the defined settings */}
      <Slider {...settings}>
        {images.map((image, index) => (
          // Create individual slides with images
          <div key={index} className="flex">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[700px] xsm:w-[500px] xsm:h-[300px]"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BtCarousel;
