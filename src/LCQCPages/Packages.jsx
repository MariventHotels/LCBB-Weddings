import {useState} from "react";
import Header from "../components/Header";
import img from "../assets/home/lascasasqc/main/Hero Page_Balong Photography.jpeg";
import logo from "../assets/logos/lasBodasLogo/Lascasasqc.png";
import prenup from "../assets/gallery/prenup/03.jpg";
import intimate from "../assets/LasCasasQC/Packages/01 Intimate Weddings.jpg";
import classic from "../assets/LasCasasQC/Packages/02 Classic Wedding.jpg";
import signature from "../assets/LasCasasQC/Packages/03 Signature Wedding.jpeg";
import grand from "../assets/LasCasasQC/Packages/04 Grand Weddings.jpeg";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import package0 from '../assets/LasCasasQC/Packages/01 LCQC Photo shoot package-rev.jpg'
import package1 from '../assets/LasCasasQC/Packages/intimate/02 LCQC Intimate Wedding.jpg'
import package2 from "../assets/LasCasasQC/Packages/classic/03 Classic Wedding.jpg";
import package3 from '../assets/LasCasasQC/Packages/signature/04 Signature Wedding.jpg'
import package4 from '../assets/LasCasasQC/Packages/grand/05 Grand Wedding.jpg'
import Button from "../Reusable Components/Button";

const Packages = () => {
  const [index, setIndex] = useState(-1);
  const handleClick = (index) => setIndex(index);
  const images = [package0, package1, package2, package3, package4]
  const [wheelZoomDistanceFactor, setWheelZoomDistanceFactor] = useState(100);
  const [pinchZoomDistanceFactor, setPinchZoomDistanceFactor] = useState(100);
  const [scrollToZoom, setScrollToZoom] = useState(false);

  return (
    <div id="packages">
      <Header>
        <img src={img} alt="" className="w-full object-cover" />
      </Header>
      <div className="flex justify-center mb-20 xsm:mb-10">
        <img src={logo} alt="" className="w-[281px]" />
      </div>
      <section className="mx-[50px] mb-20 xxsm:mb-10 border border-[#d9d9d9] xxsm:mx-[12px] hover:border-[#F0AF59]">
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
              <p className="font-playfair text-3xl text-[#424242] xsm:text-2xl">Pre-nuptial Package</p>
            </div>
            <div className="p-5 text-justify font-opensans">
              <p className="text-[#424242] xsm:text-sm text-center">
                Capture your best moments at Las Casas Quezon City. Create a
                stunning imagery for your next prenuptial shoot.
              </p>
            </div>
            <div className="py-5">
              <Button   onClick={() => handleClick(0)}>
                Package details
              </Button>
            </div>
          </div>
        </div>
      </section>
      <div className="mb-20 xxsm:mb-10">
        <h2 className="text-center font-playfair text-4xl mb-5 xmd:text-2xl">
          Wedding Packages
        </h2>
        <p className="text-center font-opensans text-lg mb-5 mx-[1rem] xmd:text-base text-[#424242]">
          Our wedding packages are designed to ease the burden to you, our
          lovely couples, and just enjoy this special stage in your lives. Go
          beyond the conventional as our dedicated professional team help you
          create a ceremony that is distinctively you, as each wedding should
          highlight the couple’s personalities.
        </p>
      </div>

      <section className="mx-[50px] mb-10 border border-[#d9d9d9] hover:border-[#CEAA77] xxsm:mx-[12px]">
        <div className="flex xmd:flex-col">
          <figure className="flex-1">
            <img
              src={intimate}
              className="w-full object-contain p-4"
              alt="Prenup"
            />
          </figure>
          <div className="flex-1 flex flex-col justify-center items-center p-1">
            <div className="p-5  xsm:p-0">
              <p className="font-playfair text-3xl text-[#424242] xsm:text-2xl">Intimate Weddings</p>
            </div>
            <div className="p-5 text-justify font-opensans">
              <p className="text-center mb-8 xsm:text-sm text-[#424242]">
                "Smaller" doesn't have to be "simpler."
              </p>
              <p className="xsm:text-sm text-[#424242] text-center" >
                Your nuptial is beautiful celebration of your love story, a
                special atmosphere to create more magical moments with the
                people that truly matter. Skip the dreaded guest list and
                surround yourselves with loved ones and close-knit friends in an
                intimate environment that they too can enjoy.
              </p>
            </div>
            <div className="py-5">
              <Button onClick={() => handleClick(1)}>
                Package details
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-[50px] mb-10 border border-[#d9d9d9] hover:border-[#CEAA77] xxsm:mx-[12px]">
        <div className="flex xmd:flex-col">
          <figure className="flex-1">
            <img
              src={classic}
              className="w-full object-contain p-4"
              alt="Prenup"
            />
          </figure>
          <div className="flex-1 flex flex-col justify-center items-center p-1">
            <div className="p-5">
              <p className="font-playfair text-3xl text-[#424242] xsm:text-2xl">Classic Weddings</p>
            </div>
            <div className="p-5 text-justify font-opensans">
              <p className="text-[#424242] xsm:text-sm text-center">
                For coupleswho prefer timelessness over trends. declicate
                florals and minimal decor over extravagant details, then an
                enduring classic wedding is the ideal choice for you and you
                special day. Let the romantic yet elegant vibe of Las Casas
                Filipinas de Acuzar - Quezon City be the perfect venue to start
                you journey to &quot;happily-ever-after&quot;
              </p>
            </div>
            <div className="py-5">
              <Button onClick={() => handleClick(2)}>
                Package details
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-[50px] mb-10 border border-[#d9d9d9] hover:border-[#CEAA77] xxsm:mx-[12px]">
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
              <p className="font-playfair text-3xl text-[#424242] xsm:text-2xl">Signature Weddings</p>
            </div>
            <div className="p-5 text-justify font-opensans">
              <p className="text-[#424242] xsm:text-sm text-center">
                What better way to pull of a beautiful wedding than
                incorporating the couple&apos;s touches? Elevate your special
                day with Las Casas Filipinas de Acuzar - Quezon City&apos;s
                Signature Wedding Package. Create endless magical moments while
                enjoying a unique and personalized experience for you and your
                loved ones.
              </p>
            </div>
            <div className="py-5">
              <Button onClick={() => handleClick(3)}>
                Package details
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-[50px] mb-20 xxsm:mb-5 border border-[#d9d9d9] hover:border-[#CEAA77] xxsm:mx-[12px]">
        <div className="flex xmd:flex-col">
          <figure className="flex-1">
            <img
              src={grand}
              className="w-full object-contain p-4"
              alt="Prenup"
            />
          </figure>
          <div className="flex-1 flex flex-col justify-center items-center p-1">
            <div className="p-5 xsm:p-0">
              <p className="font-playfair text-3xl text-[#424242] xsm:text-2xl">Grand Weddings</p>
            </div>
            <div className="p-5 text-justify font-opensans">
              <p className="text-[#424242] xsm:text-sm text-center">
                Choosing a perfect wedding venue that compliments the
                couple&apos;s personalities that can be arduous beyond
                imagination. But a place that pays through attention to even the
                smallest details sure emphasizes one point - that it&apos;s the
                one. Let our team of experts help you tailor your dream nuptial
                to perfection. with the unique and majestic Las Casas
                architectures as your backdrop.
              </p>
            </div>
            <div className="py-5">
              <Button onClick={() => handleClick(4)}>
                Package details
              </Button> 
            </div>
          </div>
        </div>
      </section>
      <Lightbox slides={images.map((image) => ({ src: image }))}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Zoom]}
        zoom={{
          wheelZoomDistanceFactor,
          pinchZoomDistanceFactor,
          scrollToZoom,
        }} />
    </div>
  );
};

export default Packages;
