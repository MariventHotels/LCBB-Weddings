import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillStar } from "react-icons/ai";
import ratings from "../data/ratings";

const Ratings = () => {
  var settings_3 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 0,
    centerPadding: "0px"
  };

  return (
    <>
      <div className="w-[800px] xmd:w-[430px] xxxsm:w-full  mx-auto my-24">
        <div className="text-center my-10">
          <p className="text-normal font-medium mb-2 text-[#262626]">From Our Customers</p>
          <h1 className="text-4xl xmd:text-3xl font-playfair font-medium text-[#804B00]">TESTIMONIALS</h1>
        </div>

        <Slider {...settings_3}>
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
                  <div className="px-5 pb-6">
                    <p className="font-opensans text-base xmd:text-sm text-center text-[#424242] xxsm:text-xs">
                      {rating.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </Slider>
      </div>
    </>
  )
}

export default Ratings