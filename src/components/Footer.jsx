// import React from "react";
import lasbodas from "../assets/logos/lasbodaslogowhite.png";
import LCBataan from "../assets/logos/websiteLogos/LC Bataan.png";
import LCQC from "../assets/logos/websiteLogos/LC QC.png";
import VShotel from "../assets/logos/websiteLogos/VS hotel convention center white.png";
import footer from "../assets/footer/footerpatern.png";

const Footer = () => {
  return (
    <footer className="bg-[#804B00] flex-shrink-0">
      {/* Newsletter Sign-up Section */}
      <div className="flex flex-col justify-center items-center mb-10">
        <h1 className="font-opensans text-[#ffffff] font-light text-2xl py-7 tracking-wide xxsm:text-xl">
          Join Our Mailing List!
        </h1>
        <div className="flex xmd:max-w-[320px]">
          <form
            action="https://lascasasfilipinas.us1.list-manage.com/subscribe/post?u=2dc85a100274ce1d29cb7076c&amp;id=81f43e7f29"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="relative"
            target="_blank"
            noValidate=""
          >
            {/* Email Input */}
            <input
              type="email"
              name="EMAIL"
              id="mce-EMAIL"
              placeholder=""
              required=""
              className="outline-none w-[300px] xmd:w-full xmd:mb-2 h-10 rounded-tl xmd:rounded-sm rounded-bl text-[#424242] font-opensans text-sm pl-4 focus:outline-none focus:ring-1 focus:ring-[#F0AF59] focus:border-[#F0AF59]"
            />
            {/* Real people should not fill this in and expect good things */}
            <div className="absolute left-[-5000px]" aria-hidden="true">
              <input
                type="text"
                name="b_2dc85a100274ce1d29cb7076c_81f43e7f29"
                tabIndex="-1"
                className="w-[300px] h-10 rounded-tl rounded-bl text-[#424242] font-opensans text-sm pl-4 focus:outline-none focus:ring-1 focus:ring-[#F0AF59] focus:border-[#F0AF59]"
              />
            </div>
            {/* Subscribe Button */}
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="bg-[#e29633] w-[120px] xmd:w-full h-10 rounded-br xmd:rounded-sm cursor-pointer rounded-tr text-[#fff] font-opensans transition-all duration-75 active:ring-yellow-900 xmd:text-sm"
            />
          </form>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="mx-[50px] mb-4" />

      {/* Footer Logos and Contact Information */}
      <div className="flex justify-center items center mb-5">
        <img
          src={lasbodas}
          alt="footer"
          className="object-contain w-[350px] xmd:w-[300px]"
        />
      </div>

      <div className="grid grid-cols-3 xmd:grid-cols-1 gap-10 w-5/6 mx-auto mb-10">
        <div className="">
            <div className="w-[220px] mb-4 mx-auto">
              <img src={LCQC} alt="" className="object-contain" />
            </div>
            <div className="text-[#fff] text-center font-opensans text-sm ml-2">
              <p>134 Roosevelt Avenue, San Francisco</p>
              <p>Del Monte, Metro Manila</p>
              <p>+63 956 346 9582</p>
              <p>weddings@lascasasqc.com</p>
            </div>
        </div>
        <div className="">
            <div className="w-[220px] mb-4 mx-auto">
              <img src={LCBataan} alt="logo" className="object-contain" />
            </div>
            <div className="text-[#fff] text-center font-opensans text-sm ml-2">
              <p>Brgy. Ibaba, Bagac, Bataan</p>
              <p>+63 917 872 9368</p>
              <p>weddings@lascasasfilipinas.com</p>
            </div>
        </div>
        <div className="">
            <div className="w-[220px] mb-4 mx-auto">
              <img src={VShotel} alt="" className="object-contain" />
            </div>
            <div className="text-[#fff] text-center font-opensans text-sm ml-2">
              <p>9th Floor Victoria Sports Tower 2,</p>
              <p>799 EDSA 1103, Quezon City</p>
              <p>+63 927 370 6269</p>
              <p>reservations@vshotel.com.ph</p>
            </div>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="flex justify-center mb-5">
        <p className="text-[#fff] font-opensans text-sm xxsm:text-xs italic ">
          Copyright © 2024 Las Casas Weddings. All Rights Reserved
        </p>
      </div>

      {/* Footer Pattern Image */}
      <div>
        <img src={footer} className="w-screen" />
      </div>
    </footer>
  );
};

export default Footer;
