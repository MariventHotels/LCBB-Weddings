// import React from "react";
import Header from "../components/Header";
import img from "../assets/packages/coverimg/DSC_1203.jpg";
import BataanFlipBook from "../components/BataanFlipBook";

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
          Choose from the variety of food and beverage to compliment your grand
          wedding celebration.
        </p>
      </div>
      <div className="flex justify-center mb-20 max-w-full mx-[1rem] xxsm:mb-0">
        <BataanFlipBook />
      </div>
    </div>
  );
};

export default LookBook;
