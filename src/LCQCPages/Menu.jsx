import React, { useState } from "react";
import Header from "../components/Header";
import { saveAs } from "file-saver";
import img from "../assets/LasCasasQC/Menu/menus/00 LCQC Menu Hero.jpg";
import imgData from "../data/lcqcmenu"; // Import your image data
import Lightbox from "yet-another-react-lightbox";
import ImageHover from "../Reusable Components/ImageHover";

const Menu = () => {
  const [index, setIndex] = useState(-1);
  const handlePhotoClick = ({ index }) => {
    setIndex(index);
  };

  const downloadImage = (index) => {
    saveAs(imgData[index].image, imgData[index].name);
  };


  return (
    <div id="menu">
      <Header>
        <img src={img} alt="" className="w-full object-cover" />
      </Header>
      <div className="mb-20 xmd:mb-10 xmd:mx-[1rem]">
        <h1 className="text-center font-playfair text-4xl mb-5 xmd:text-2xl">
          Menu
        </h1>
        <p className="text-center text-[#424242] font-opensans text-lg mb-5 xmd:text-base">
          Choose from the variety of food and beverage to compliment your grand
          wedding celebration.
        </p>
      </div>
      <div className="flex flex-wrap mx-auto max-w-[63rem] gap-4 xsm:flex-col xmd:mx-[1rem]">
        {imgData.map((item, index) => (
          <div
            key={item.id}
            className="relative mb-10 overflow-hidden group flex-1"
            onClick={() => handlePhotoClick({ index })}
          >
            <ImageHover>
              <img src={item.image} alt="" />
            </ImageHover>
          </div>
        ))}
      </div>
      <div className="flex justify-center mb-20 xxsm:mb-5">
        <button
          className="font-opensans w-[159px] h-[40px] bg-[#F0AF59] uppercase text-sm text-[#fff] rounded hover:scale-105 active:scale-95"
          onClick={() => downloadImage(0)}
        >
          Download
        </button>
      </div>
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={imgData.map((item) => ({ src: item.image }))}
      />
    </div>
  );
};

export default Menu;
