// import React from "react";
import Header from "../components/Header";
import img from "../assets/home/lascasasqc/QuezonCity-Cover.png";
import packages from "../assets/home/lascasasqc/main/Package.jpg";
import venue from "../assets/home/lascasasqc/main/Venue_1.jpg";
import menu from "../assets/home/lascasasqc/main/Menus.jpg";
import lookbook from "../assets/home/lascasasqc/main/Lookbook.jpg";
import logobrown from "../assets/logos/lasBodasLogo/Lascasasqc.png";
import ImageHover from "../Reusable Components/ImageHover";
import { AttentionSeeker, Fade } from "react-awesome-reveal";
import Button from "../Reusable Components/Button";
import { Link } from "react-router-dom";
const LCBataan = () => {
 const imageSections = [
  {
    image: packages,
    title: "Packages",
    link: "/qc/packages",
  },
  {
    image: venue,
    title: "Venue",
    link: "/qc/venue",
  },
  {
    image: menu,
    title: "Menu",
    link: "/qc/menu",
  },
  {
    image: lookbook,
    title: "Look Book",
    link: "/qc/lookbook",
  },
];
  return (
    <Fade triggerOnce id="bataan">

      <Header Header className="relative h-auto">
      <img src={img} className="w-full object-cover xsm:h-auto h-[700px]" />
        <div className="absolute top-1/3">
          <h1 className="font-playfair p-10 text-3xl text-[#fff] xmd:text-xl xxsm:text-xl xmd:p-5 ">
            Weddings at Las Casas - Quezon City
          </h1>
        </div>
      </Header>

      <div className="max-w-[63rem] mx-auto mb-20 xmd:mb-10 xxsm:mt-10">
        <h3 className="text-2xl text-center text-[#424242] font-opensans xmd:text-base xsm:mx-[1rem]">
          Create endless magical moments in the metro while still having that timeless Filipino-Spanish
          inspired feels. Las Casas Quezon City offers a variety of green spaces and can turn your dream
          wedding into life!
        </h3>
      </div>
      <div className="flex gap-5 mb-20 justify-center mx-[1rem] xmd:mb-10 xmd:flex-wrap ">
      {imageSections.map((sec) => (
        <div className="flex relative" key={sec.title}>
          <Link to={sec.link}>
          <div className="flex-1 w-[280px] h-[348px] overflow-hidden">
          <ImageHover>
            <img
              src={sec.image}
              alt={sec.title}
              className="w-[280px] h-[348px] object-cover"
            />
            </ImageHover>
          </div>
          <div className="absolute bottom-0 bg-[#804B00] w-[100%]">
            <div className="h-[40px] flex justify-center items-center">
              <p className="capitalize font-normal tracking-wide font-opensans text-[#fff]">
                {sec.title}
              </p>
            </div>
            </div>
            </Link>
        </div>
      ))}
      </div>
      <div className="flex justify-center mb-10">
        <div className="w-[281px]">
          <img src={logobrown} />
        </div>
      </div>
      <div className="max-w-[63rem] mx-auto mb-20 xmd:mb-10">
        <h3 className="text-2xl text-center text-[#424242] font-opensans xmd:text-base xsm:mx-[1rem]">
        Las Casas Quezon City is the first venture under the Las Casas Heritage Collection by Las Casas
        Filipinas de Acuzar. It is an events space, restaurant, and museum that brings the well-loved Las
        Casas experience from Bataan into the city.
        </h3>
        <div className="flex justify-center mt-20 xmd:mt-10">
        <AttentionSeeker effect="rubberBand" triggerOnce>
        <a href="https://lascasasqc.com/">
          <Button>
            learn more
          </Button>
        </a>
          </AttentionSeeker>
        </div>
      </div>
    </Fade>
  );
};

export default LCBataan;
