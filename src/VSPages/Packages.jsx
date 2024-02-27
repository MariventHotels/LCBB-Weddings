import { useState } from "react";
import Header from "../components/Header";
import img from "../assets/home/vshotel/VSH-Coverpage.png";
import logo from "../assets/logos/VSH.png";
import basicpackage from "../assets/vs/01 VS.jpg";
import roompackage from "../assets/vs/04 VS.jpg";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import package0 from "../assets/VSHotel/2024 Wedding Package no price.jpg";
import package1 from "../assets/VSHotel/2024 Wedding Room Package no price.jpg";
import Button from "../Reusable Components/Button";

const Packages = () => {
  const [index, setIndex] = useState(-1);
  const handleClick = (index) => setIndex(index);
  const images = [package0, package1];
  const [wheelZoomDistanceFactor, setWheelZoomDistanceFactor] = useState(100);
  const [pinchZoomDistanceFactor, setPinchZoomDistanceFactor] = useState(100);
  const [scrollToZoom, setScrollToZoom] = useState(false);

  return (
    <div id="packages">
      <Header>
        <img src={img} alt="" className="w-full object-bottom object-cover" />
      </Header>
      <div className="flex justify-center mb-20 xsm:mb-10">
        <img src={logo} alt="" className="xsm:w-[250px] w-[320px]" />
      </div>

      <div className="mb-20 xxsm:mb-10">
        <h2 className="text-center font-playfair text-4xl mb-5 xxsm:mb-2 xmd:text-2xl">
          Wedding Packages
        </h2>
        <p className="text-center font-opensans mb-5 text-lg mx-[1rem] xmd:text-base text-[#424242]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis pariatur in sunt, expedita suscipit voluptatibus laudantium officiis quam quasi culpa ex, maiores consectetur aliquam nisi!
        </p>
      </div>

      <section className="mx-[50px] xxsm:mx-[12px] mb-10 border border-[#d9d9d9] hover:border-[#CEAA77]">
        <div className="flex xmd:flex-col">
          <figure className="flex-1">
            <img
              src={basicpackage}
              className="w-full object-contain p-4"
              alt="Prenup"
            />
          </figure>
          <div className="flex-1 flex flex-col justify-center items-center p-1">
            <div className="p-5 xsm:p-0">
              <p className="font-playfair text-3xl text-[#424242] xsm:text-2xl">
                Basic Wedding Package
              </p>
            </div>
            <div className="p-5 text-justify font-opensans">
              <p className="xsm:text-sm text-[#424242] text-center">
              Celebrate your love with our Basic Wedding Package, a seamless blend of simplicity and elegance. Our package includes a beautifully decorated venue and a personalized ceremony to make your vows truly unforgettable.
              </p>
            </div>
            <div className="py-5">
              <Button
                onClick={() => handleClick(0)}
              >
                Package details
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-[50px] mb-20 border border-[#d9d9d9] hover:border-[#CEAA77] xxsm:mx-[12px] xxsm:mb-5">
        <div className="flex xmd:flex-col">
          <figure className="flex-1">
            <img
              src={roompackage}
              className="w-full object-contain p-4"
              alt="Prenup"
            />
          </figure>
          <div className="flex-1 flex flex-col justify-center items-center p-1">
            <div className="p-5 xsm:p-0">
              <p className="font-playfair text-3xl text-[#424242] xsm:text-2xl">
                Wedding Room Package
              </p>
            </div>
            <div className="p-5 text-justify font-opensans">
              <p className="text-[#424242] xsm:text-sm text-center">
              Elevate your wedding experience with our exquisite Wedding Room Package. Immerse yourself in luxury with a beautifully decorated room, tailored to create a romantic and intimate atmosphere for your special day. 
              </p>
            </div>
            <div className="py-5">
              <Button
                onClick={() => handleClick(1)}
              >
                Package details
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Lightbox
        slides={images.map((image) => ({ src: image }))}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Zoom]}
        zoom={{
          wheelZoomDistanceFactor,
          pinchZoomDistanceFactor,
          scrollToZoom,
        }}
      />
    </div>
  );
};

export default Packages;
