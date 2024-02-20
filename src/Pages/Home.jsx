import Header from "../components/Header";
import video from "../assets/video/weddingVid.mp4";
import BataanDesc from "../Homepage/BataanDesc";
import Navigation from "../Homepage/Navigation";
import Description from "../Homepage/Description";
import Ratings from "../Homepage/Ratings";
import Form from "../Homepage/Form";
import Label from "../Homepage/Label";
import { Fade } from "react-awesome-reveal";

const HeroSection = () => {
  return (
    <Fade triggerOnce id="home">
      <Header>
        <video className="w-full object-cover !mb-0" src={video} autoPlay loop muted />
      </Header>
      <Label />
      <Navigation />
      <BataanDesc />
      <Description />
      <Ratings />
      <Form />
    </Fade>
  );
};

export default HeroSection;
