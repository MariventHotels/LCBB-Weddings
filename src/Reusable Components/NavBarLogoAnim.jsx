// eslint-disable-next-line no-unused-vars
import React from "react";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const customAnimation = keyframes`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0,  0);
  }
`;
// eslint-disable-next-line react/prop-types
const NavBarLogoAnim = ({children, triggerOnce, delay}) => {
  return (
    <Reveal keyframes={customAnimation} triggerOnce={triggerOnce} delay={delay}>{children}</Reveal>
  )
}

export default NavBarLogoAnim