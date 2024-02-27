// import {useState} from "react";
import Header from "../components/Header";
import img from "../assets/home/lascasasbataan/BataanCover.png";
import packages from "../assets/home/lascasasbataan/main/packagesb.jpg";
import venue from "../assets/home/lascasasbataan/main/Venue.jpg";
import menu from "../assets/home/lascasasbataan/main/Menu.jpg";
import lookbook from "../assets/home/lascasasbataan/main/Lookbook.jpg";
import logobrown from "../assets/logos/Lascasas_B_brown.png";
import ImageHover from "../Reusable Components/ImageHover";
import { AttentionSeeker, Fade } from "react-awesome-reveal";
import Button from '../Reusable Components/Button'
import { Link } from "react-router-dom";

const LCBataan = () => {
  const imageSections = [
  {
    image: packages,
    title: "Packages",
    link: "/bataan/packages",
  },
  {
    image: venue,
    title: "Venue",
    link: "/bataan/venue",
  },
  {
    image: menu,
    title: "Menu",
    link: "/bataan/menu",
  },
  {
    image: lookbook,
    title: "Look Book",
    link: "/bataan/lookbook",
  },
];


  return (
    <Fade triggerOnce id="bataan">
      <Header className="!mb-0 relative">
        <img src={img} className="w-full object-cover" />
        <div className="absolute top-1/3">
          <h1 className="font-playfair p-10 text-3xl text-[#fff] xmd:text-5xl xxsm:text-xl xmd:p-5">
            Weddings at Las Casas - Bataan
          </h1>
        </div>
      </Header>

      <div className="max-w-[63rem] mx-auto mb-20 xmd:mb-10 mt-14 xxsm:mt-10">
        <h3 className="text-2xl text-center text-[#424242] font-opensans xmd:text-base xsm:mx-[1rem]">
          Las Casas has been the ultimate dream wedding destination. It offers a variety of green gardens,
          grand ballrooms, and Filipino-Spanish inspired Casas which will surely be a unique wedding from the rest.
        </h3>
      </div>
        <div className="flex gap-5 mb-20 justify-center mx-[1rem] xmd:mb-10 xmd:flex-wrap"
        >
      {imageSections.map((sec, index) => (
        <div className="flex relative" key={index}>
          <Link to={sec.link}>
          <div className="flex-1 w-[280px] h-[348px] overflow-hidden"
          >
          <ImageHover>
            <img
              src={sec.image}
              alt=""
              className="w-[280px] h-[348px] object-cover z-0"
            />
            </ImageHover>
          </div>
          <div className="absolute bottom-0 bg-[#CEAA77] w-[100%]">
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
        Las Casas Filipinas de Acuzar in Bagac, Bataan is a beach resort, convention center, and heritage
        destination rolled into one. Home to Jose Acuzar’s collection of Spanish-Filipino Houses that have
        been renovated and rebuilt by a team of artisans and craftsmen in the town of Bagac, Las Casas
        features the finest of Filipino craftsmanship, artistry, and skill giving the property a look and
        feel that is distinctive and its own.
        </h3>
        <div className="flex justify-center mt-20 xmd:mt-10">
        <AttentionSeeker effect="rubberBand" triggerOnce>
        <a href="https://lascasasfilipinas.com/">
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
