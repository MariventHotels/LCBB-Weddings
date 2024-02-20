import React from "react";
import Header from "../components/Header";
import img from "../assets/packages/coverimg/Menu.jpg";
import menu from "../assets/packages/menu/Las bodas LCBB menu.jpg";
import { useState } from "react";
import { saveAs } from "file-saver";
import Lightbox from "yet-another-react-lightbox";
import Button from "../Reusable Components/Button";
const Menu = () => {
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const downloadImage = () => {
    saveAs(menu, "Menu.jpg");
  };

  return (
    <div id="menu">
      <Header>
        <img src={img} alt="" className="w-full object-cover"/>
      </Header>
      <div className="mb-20 xmd:mb-10 xmd:mx-[1rem]">
        <h1 className="text-center font-playfair text-4xl mb-5 xmd:text-2xl">Menu</h1>
        <p className="text-center text-[#424242] font-opensans text-lg mb-5 xmd:text-base">
          Choose from the variety of food and beverage to compliment your grand
          wedding celebration.
        </p>
      </div>
      <div
        className="relative mx-auto xmd:mx-[1rem] max-w-[1080px] mb-10 overflow-hidden group cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setOpen(true)}
      >
        <div
          className={`absolute inset-0 ${
            hovered ? "bg-[#424242] bg-opacity-30" : ""
          } transition-opacity duration-1000 z-10`}
        ></div>
        <img
          src={menu}
          alt=""
          className={`transform transition-transform ease-in-out duration-500 ${
            hovered ? "scale-110" : ""
          }`}
          
        />
      </div>

      <div className="flex justify-center mb-20 xxsm:mb-5">
        <Button
          onClick={downloadImage}
        >
          Download
        </Button>
      </div>
      <Lightbox 
      open={open}
      close={() => setOpen(false)}
      slides={[{ src: menu }]}
      />
    </div>
  );
};

export default Menu;
