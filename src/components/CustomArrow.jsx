import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

/**
 * CustomArrow Component
 * @param {object} props - Component props
 * @param {string} props.direction - The direction of the arrow ('left' or 'right')
 * @param {function} props.onClick - The function to be executed when the arrow is clicked
 */
const CustomArrow = ({ direction, onClick }) => {
  // Define the color of the arrow icon
  const iconColor = "#424242";

  return (
    <div className={`${direction}`} onClick={onClick}>
      {direction === "left" ? (
        // Render the left arrow icon
        <FaAngleLeft
          color={iconColor}
          className="slick-prev opacity-75 xxsm:w-5 xxsm:h-5"
        />
      ) : (
        // Render the right arrow icon
        <FaAngleRight
          color={iconColor}
          className="slick-next opacity-75 xxsm:w-5 xxsm:h-5"
        />
      )}
    </div>
  );
};

export default CustomArrow;
