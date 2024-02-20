import Header from "../components/Header";
import img from "../assets/home/vshotel/VSH-Coverpage.png";
import { AttentionSeeker, Fade } from "react-awesome-reveal";
import logobrown from "../assets/logos/VSH.png";
import Button from '../Reusable Components/Button'

const VShotel = () => {
  return (
    <Fade triggerOnce className="mb-5">
      <Header className="!mb-0 relative">
        <img src={img} className="w-full object-cover" />
        <div className="absolute top-1/3">
          <h1 className="font-playfair p-10 text-3xl text-[#fff] xmd:text-5xl xxsm:text-xl xmd:p-5">
            Coming Soon.
          </h1>
        </div>
      </Header>

      <div className="flex justify-center mb-10 mt-10 xxsm:mb-1 xxsm:mt-1">
        <div className="w-[281px]">
          <img src={logobrown} />
        </div>
      </div>

      <div className="max-w-[63rem] mx-auto mb-10">
        <h3 className="text-2xl text-center text-[#424242] font-opensans xmd:text-base xsm:mx-[1rem]">
          Indulge in the allure of urban elegance at VS Hotel Convention Center. Celebrate love amidst the
          city's vibrant energy, where sophistication meets charm. Our exquisite venue sets the perfect stage
          for an urban wedding destination like no other. Say 'I do' in style, surrounded by breathtaking views
          and luxurious amenities. Create magical memories that will be cherished for a lifetime. Begin your
          love story in the heart of the city at the VS Hotel Convention Center.
        </h3>
        <div className="flex justify-center mt-20 xmd:mt-10">
        <AttentionSeeker effect="rubberBand" triggerOnce>
        <a href="https://vshotel.com.ph/">
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

export default VShotel;