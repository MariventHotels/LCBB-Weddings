import Slider from "react-slick";
import { AiFillStar } from "react-icons/ai";
import ratings from "../data/ratings";
import CustomArrow from "../components/CustomArrow";
const Ratings = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 0,
    arrows: false,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
    responsive: [
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false
        },
      },
      {
        breakpoint: 736,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false
        },
      },
      {
        breakpoint: 485,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        },
      },
    ],
  };

  return (
    <div className="mb-20 max-w-[70rem] mx-auto">
      <Slider {...settings}>
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
                  <p className="font-opensans text-sm text-center text-[#424242] xxsm:text-xs">
                    {rating.text}
                  </p>
                </div>
                <div className="px-3">
                  {/* <div className="w-[50px] h-[50px]">
                    <img
                      src={rating.image}
                      className="rounded-full object-cover w-[50px] h-[50px] bg-black"
                    />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Ratings;
