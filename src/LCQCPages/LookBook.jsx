import React from "react";
import Header from "../components/Header";
import img from "../assets/packages/coverimg/lookbook.jpg";
import logo from "../assets/logos/lasBodasLogo/Lascasasqc.png";
import QCFlipBook from "../components/QCFlipbook";

const LookBook = () => {
  return (
    <div id="lookbook">
      <Header>
        <img src={img} alt="" className="w-full object-cover" />
      </Header>
      <div className="mb-20 xxsm:mb-5 xmd:mx-[1rem]">
        <h1 className="text-center font-playfair text-4xl mb-5 xmd:text-2xl">
          Look Book
        </h1>
        <p className="text-center text-[#424242] font-opensans text-lg mb-5 xmd:text-base">
          Host a stunning indoor celebration or a garden reception while leaving
          even the smallest details to our talented banquet team.
        </p>
      </div>
      <div className="flex justify-center mb-20 max-w-full mx-[1rem] xxsm:mb-0">
        <QCFlipBook />
      </div>
    </div>
  );
};

export default LookBook;
