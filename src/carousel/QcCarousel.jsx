import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import frisco from "../assets/LasCasasQC/Venue/Frisco 1 and 2.jpg";
import garden from "../assets/LasCasasQC/Venue/Garden 3.jpg";
import plaza from "../assets/LasCasasQC/Venue/Plaza.jpg";
import roosevelt from "../assets/LasCasasQC/Venue/Roosevelt Function Room.jpg";

const QcCarousel = () => {
  // Define an array of images to display in the carousel
  const images = [frisco, garden, plaza, roosevelt];

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

export default QcCarousel;
