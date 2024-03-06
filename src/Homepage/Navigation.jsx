import { useState } from "react";
import img1 from "../assets/gallery/bataannew/05 Nice Print Photography & Exige Weddings.jpeg";
import img2 from "../assets/gallery/qcnew/06 Nice print photography & exige .jpeg";
import img3 from "../assets/gallery/vshotel/vsw-6.jpg";
import ImageHover from "../Reusable Components/ImageHover";
import { Slide, AttentionSeeker } from "react-awesome-reveal";
import {VscLinkExternal} from 'react-icons/vsc'

const Navigation = () => {
  const images = [
    {
      src: img1,
      link: "https://lascasasfilipinas.com/Weddings",
      title: "LAS CASAS, BAGAC BATAAN",
    },
    {
      src: img2,
      link: "https://lascasasqc.com/Home/Weddings",
      title: "LAS CASAS, QUEZON CITY",
    },
    {
      src: img3,
      link: "https://vshotel.com.ph/",
      title: "VS HOTEL",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => () => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="mb-20 md:mb-5 max-w-[70rem] mx-auto p-2">
      <div className="flex justify-center items-center gap-8 lg:gap-5 xmd:flex-col">
        {images.map((image, index) => (
          <a
            key={index}
            href={image.link}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className=" relative overflow-hidden"
              onMouseEnter={handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <ImageHover>
                <img src={image.src} className="object-cover h-[400px] xmd:h-[400px] w-full xxsm:h-[280px] xxsm:mx-[5px] xxsm:object-contain z-0" />
              </ImageHover>
              {hoveredIndex === index && (
                <Slide
                  triggerOnce
                  direction="up"
                  className="absolute bottom-0 left-0 w-full h-[55px] xxsm:h-[40px] bg-[#804B00] z-[2]"
                >
                  <div className="text-[#fff] pl-4 pt-1 font-opensans">
                    <h1 className="text-base font-medium font-playfair xxsm:text-xs" >{image.title}</h1>
                    <div className="flex">
                      <p className="text-sm xxsm:text-xs">Learn more </p>
                      <AttentionSeeker effect="tada"><VscLinkExternal size={13} className="mt-1 ml-1 xxsm:mt-0.5" /></AttentionSeeker>
                    </div>
                  </div>
                </Slide>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
