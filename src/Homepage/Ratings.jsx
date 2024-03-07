import Slider from "react-slick";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { AiFillStar } from "react-icons/ai";
import ratings from "../data/ratings";

const Ratings = () => {
 
  return (
    <>
      <div className="w-[800px] xmd:w-full mx-auto my-24 xmd:my-10">
        <div className="text-center my-10">
          <p className="text-normal font-medium mb-2 text-[#262626]">From Our Customers</p>
          <h1 className="text-4xl xmd:text-3xl font-playfair font-medium text-[#804B00]">TESTIMONIALS</h1>
        </div>

       <Carousel
        showArrows={false}
        autoPlay={true}
        showStatus={false}
        infiniteLoop={true}
       >
       
       {ratings.map((rating) => (
        <div key={rating.id}>
          <div className="mx-auto">
            <div className="">

              <div className="flex justify-center text-center flex-col pb-2">
                <h2 className="text-[#424242] text-normal font-bold">
                  {rating.name}
                </h2>
              {/**      <p className="text-[#424242] text-xs">Client</p> */}
              </div>

              <div className="flex justify-center pb-4 text-center mx-auto">
                {Array.from({ length: rating.stars }, (index) => (
                  <AiFillStar key={index} className="text-[#804B00] bg-red" />
                ))}
              </div>
              <div className="px-5 pb-6 mb-8">
                <p className="font-opensans text-base xmd:text-sm text-center text-[#424242] xxsm:text-xs">
                  {rating.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
            </Carousel>
      </div>
    </>
  )
}

export default Ratings