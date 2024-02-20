/* eslint-disable react/prop-types */

import { useState } from "react"

const ImageHover = ({children}) => {
  const [hoveredImage, setHoveredImage] = useState(false)

  const hoveredOnImage = () => {
    setHoveredImage(true);
  }
  const notHoveredOnImage = () => {
    setHoveredImage(false);
  }
  
  return (
    <div
      className="scale-100 hover:scale-125 transition-all duration-500 hover:left-0 cursor-pointer"
      onMouseEnter={hoveredOnImage}
      onMouseLeave={notHoveredOnImage}
    >
      {children}
      {hoveredImage ? (
        <div className="absolute w-full h-full bg-[#424242] top-0 left-0 opacity-25 transition-opacity duration-500"></div>
      ) : (
        ""
      )}
    </div>
  );
}

export default ImageHover