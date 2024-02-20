import Slider from "react-slick";
import { AiFillStar } from "react-icons/ai";
import ratings from "../data/ratings";
import CustomArrow from "../components/CustomArrow";
const Ratings = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    initialSlide: 0,
    arrows: false,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
    responsive: [
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          arrows: true
        },
      },
      {
        breakpoint: 736,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: true
        },
      },
      {
        breakpoint: 485,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true
        },
      },
    ],
  };

  return (
    <div className="mb-20 max-w-[70rem] mx-auto">
      <Slider {...settings}>
        {ratings.map((rating) => (
          <div key={rating.id}>
            <div className="flex justify-center items-center">
              <div className="w-[363px] h-[251px] border border-solid border-1 border-[#CEAA77] xxsm:w-[300px]">
                <div className="flex pt-8 pl-5 pb-4">
                  {Array.from({ length: rating.stars }, (index) => (
                    <AiFillStar key={index} className="text-[#F0AF59]" />
                  ))}
                </div>
                <div className="px-5 pb-6">
                  <p className="font-opensans text-sm text-justify text-[#424242] xxsm:text-xs">
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
                  <div className="flex justify-center flex-col pl-2">
                    <h2 className="text-[#424242] text-sm font-bold">
                      {rating.name}
                    </h2>
                    <p className="text-[#424242] text-xs">Client</p>
                  </div>
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
