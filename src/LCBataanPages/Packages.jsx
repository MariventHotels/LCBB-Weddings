import { useState } from "react";
import Header from "../components/Header";
import img from "../assets/about/lcbb-cvpg.jpg";
import logo from "../assets/logos/Lascasas_B_brown.png";
import prenup from "../assets/about/prenup.jpg";
import classic from "../assets/packages/packages/classic.jpg";
import signature from "../assets/packages/packages/SignatureWeddingPackage.jpg";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import package0 from "../assets/LasCasasBataan/Package/LCBB Prenup packages1.jpg";
import package1 from "../assets/LasCasasBataan/Package/LCBB Classic Wedding.jpg";
import package2 from "../assets/LasCasasBataan/Package/LCBB Signature Wedding.jpg";
import Button from "../Reusable Components/Button";

const Packages = () => {
  const [index, setIndex] = useState(-1);
  const handleClick = (index) => setIndex(index);
  const images = [package0, package1, package2];
  const [wheelZoomDistanceFactor, setWheelZoomDistanceFactor] = useState(100);
  const [pinchZoomDistanceFactor, setPinchZoomDistanceFactor] = useState(100);
  const [scrollToZoom, setScrollToZoom] = useState(false);

  return (
    <div id="packages">
      <Header className="h-auto">
        <img src={img} alt="" className="w-full object-bottom object-cover xsm:h-auto h-[700px]" />
      </Header>
      <div className="flex justify-center mb-20 xsm:mb-10">
        <img src={logo} alt="" className="xsm:w-[250px] w-[320px]" />
      </div>
      <section className="mx-[50px] xmd:mx-2 mb-20 xxsm:mx-[12px] xxsm:mb-10 border border-[#d9d9d9] hover:border-[#CEAA77]">
        <div className="flex xmd:flex-col">
          <figure className="flex-1">
            <img
              src={prenup}
              className="w-full object-contain p-4"
              alt="Prenup"
            />
          </figure>
          <div className="flex-1 flex flex-col justify-center items-center p-1">
            <div className="p-5 xsm:p-0">
              <p className="font-playfair text-3xl text-[#424242] xsm:text-2xl">
                Pre-nuptial Package
              </p>
            </div>
            <div className="p-5 text-center font-opensans">
              <p className="text-[#424242] xsm:text-sm">
                Las Casas is the perfect destination and unique backdrop for
                your memorable occasion. Be it preparation for your journey to
                forever, a beginning of womanhood or simply a gathering of
                families and friends. All with breathtaking picturesque heritage
                and nature landscape.
              </p>
            </div>
            <div className="py-5 xsm:py-2">
              <Button
                onClick={() => handleClick(0)}
              >
                Package details
              </Button>
            </div>
          </div>
        </div>
      </section>
      <div className="mb-20 xxsm:mb-10">
        <h2 className="text-center font-playfair text-4xl mb-5 xxsm:mb-2 xmd:text-2xl text-[#804B00]">
          Wedding Packages
        </h2>
        <p className="text-center font-opensans mb-5 text-lg mx-[1rem] xmd:text-sm text-[#242424]">
          Our special offers compliments the couple’s personalities. Choose from
          our regular or our signature Las Casas classic wedding package.
        </p>
      </div>

      <section className="mx-[50px] xmd:mx-2 xxsm:mx-[12px] mb-10 border border-[#d9d9d9] hover:border-[#CEAA77]">
        <div className="flex xmd:flex-col">
          <figure className="flex-1">
            <img
              src={classic}
              className="w-full object-contain p-4"
              alt="Prenup"
            />
          </figure>
          <div className="flex-1 flex flex-col justify-center items-center p-1">
            <div className="p-5 xsm:p-0">
              <p className="font-playfair text-3xl text-[#242424] xsm:text-2xl">
                Classic Weddings
              </p>
            </div>
            <div className="p-5 text-justify font-opensans">
              <p className="xsm:text-sm text-[#424242] text-center">
                Let the romantic yet elegant vibe of Las Casas Filipinas de
                Acuzar be the perfect venue to start your journey to “happily
                ever after”
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
      <section className="mx-[50px] xmd:mx-2 mb-20 border border-[#d9d9d9] hover:border-[#CEAA77] xxsm:mx-[12px] xxsm:mb-5">
        <div className="flex xmd:flex-col">
          <figure className="flex-1">
            <img
              src={signature}
              className="w-full object-contain p-4"
              alt="Prenup"
            />
          </figure>
          <div className="flex-1 flex flex-col justify-center items-center p-1">
            <div className="p-5 xsm:p-0">
              <p className="font-playfair text-3xl text-[#424242] xsm:text-2xl">
                Signature Weddings
              </p>
            </div>
            <div className="p-5 text-justify font-opensans">
              <p className="text-[#424242] xsm:text-sm text-center">
                Let our team of experts help you tailor your dream nuptial to
                perfection with the unique and majestic Las Casas architecture
                as your backdrop.
              </p>
            </div>
            <div className="py-5">
              <Button
                onClick={() => handleClick(2)}
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
