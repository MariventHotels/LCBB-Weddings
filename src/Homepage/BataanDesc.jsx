import Slider from "react-slick";
import bataan from "../data/bataan";

const BataanDesc = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <div className="mb-10 xmd:mt-10">
      <Slider {...settings}>
        {bataan.map((item) => (
          <div key={item.id}>
            <div className="bg-[#CEAA77] flex justify-center items-center gap-x-20 lg:gap-5 md:flex-col xmd:h-[85vh] xxsm:h-[75vh]">
              <div className="flex xmd:py-0 py-12">
                <img
                  src={item.imgUrl}
                  className="object-contain h-[auto] w-[500px] pt-5 xxsm:w-[300px] xxsm:h-auto"
                  alt={item.title}
                />
              </div>
              <div className="max-w-[438px] flex flex-col mb-8">
                <h2 className="font-playfair text-white text-3xl py-2 xmd:text-center xmd:text-xl xmd:p-0">
                  {item.title}
                </h2>
                <p className="font-opensans text-white xxsm:text-center text-sm py-2 text-justify xmd:mx-3 xmd:text-[13px]">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BataanDesc;
