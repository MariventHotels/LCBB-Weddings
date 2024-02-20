// import React from 'react'
import img from '../assets/about/Replace 00 About Hero .jpg'
import Header from '../components/Header'
import profile from '../assets/about/images.jpeg'
import { PiChurch } from 'react-icons/pi'
import {GiDiamondRing} from 'react-icons/gi'
import { Fade } from 'react-awesome-reveal'
const AboutUs = () => {
  const aboutUs = [
    {
      img: profile,
      fname: 'Frank',
      lname: 'Sy',
      role: 'Weddings and Social Events Manager',
      location: 'Las Casas Bataan',
      },

    {
      img: profile,
      fname: 'Anika Colleen',
      lname: 'del Mundo',
      role: 'Weddings and Social Events Executive',
      location: 'Las Casas Quezon City',
      },

    {
      img: profile,
      fname: 'Terrence Jan',
      lname: 'Sartiga',
      role: 'Sales Manager',
      location: 'VS Hotel',
      },
    ]

  return (
    <Fade triggerOnce>
      <Header>
        <img src={img} alt="" className="w-full object-cover" />
      </Header>
      <div className="mx-auto max-w-[63rem]">
        <h1 className="text-2xl text-center text-[#424242] font-opensans mb-10 xmd:text-base xsm:mx-[1rem]">
          Las Casas' timeless aura makes it the premier destinations for
          intimate or grand celebrations.' Say "I do" to the picturesque Las
          Casas and open new wanders of a lifetime love story leading to the
          "happily ever after.
        </h1>
      </div>
      <div className="h-auto flex justify-center mb-10 items-center gap-8 xxsm:gap-4 xxsm:flex-col xxsm:mx-5 ">
        <div className="flex flex-col items-center my-10 xxsm:my-0 xxsm:mt-10 w-[452px] h-[362px] xxsm:w-full xxsm:h-[200px] bg-[#CEAA77] rounded-md">
          <div className="mb-5 mt-16 xxsm:mt-3 xxsm:mb-1">
            <PiChurch size={54} className="text-[#ffffff] xxsm:w-10" />
          </div>
          <div className="mb-5 xxsm:mb-3">
            <p className="font-playfair text-white text-3xl font-medium xxsm:text-xl">
              Mission
            </p>
          </div>
          <div className="mb-5 mx-8">
            <p className="font-opensans text-normal text-center text-[#e9e9e9]">
              To ensure client satisfaction and deliver personal and unique
              experiences beyond expectations.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center my-10 xxsm:my-0 xxsm:mb-10 w-[452px] h-[362px] xxsm:w-full xxsm:h-[250px] bg-[#CEAA77] rounded-md">
          <div className="mb-5 mt-16 xxsm:mt-3 xxsm:mb-1">
            <GiDiamondRing size={54} className="text-[#ffffff] xxsm:w-10" />
          </div>
          <div className="mb-5 xxsm:mb-3">
            <p className="font-playfair text-white text-3xl font-medium xxsm:text-xl">
              Vision
            </p>
          </div>
          <div className="mb-5 mx-8">
            <p className="font-opensans text-normal text-center text-[#ffffff] xxsm:text-sm">
              Las Bodas en Las Casas' vision is to be the leading one-stop shop
              for wedding services and deliver high-quality and value-driven
              wedding services while promoting Filipino Heritage and Culture.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center mb-10">
          <h1 className="font-playfair text-4xl xxsm:text-2xl mb-3">
            Our Team
          </h1>
          <p className="font-opensans text-xl xxsm:text-base xxsm:mx-2 text-[#424242] text-center mx-48">
            Our team pays thorough attention to even the smallest details. Walk
            down the aisle without a hitch and The Las Casas team can make your
            dream wedding a reality.
          </p>
        </div>
        <div className="flex items-center justify-center gap-6 mb-20 xxsm:flex-col">
          {aboutUs.map((item, index) => (
            <div className="overflow-hidden relative" key={index}>
              <img
                src={item.img}
                className="object-cover object-center w-[324px] h-[362px]"
              />
              <div className="absolute bottom-0 left-0 h-[74px] w-full bg-[#f9f9f9] bg-opacity-[80%]">
                <h1 className="font-opensans text-xl text-[#A8834E] pl-3 pt-2 tracking-wide">
                  <span className="font-bold">{item.fname}</span> {item.lname}
                </h1>
                <p className="text-[#535353] text-xs pl-3 tracking-wide">
                  {item.role}
                </p>
                <p className="text-[#535353] text-xs pl-3 tracking-wide">
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
}

export default AboutUs