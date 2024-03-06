import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { Slide } from "react-awesome-reveal";
import { useMediaQuery } from "@react-hook/media-query";

const MenuItem = ({ to, label, hasDropdown, dropdownItems, handleNav }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const belowMd = useMediaQuery("(max-width: 852px)");
  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 300);
  };

  const handleDropdownMouseEnter = () => {
    clearTimeout(timeoutRef.current);
  };

  const handleDropdownMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <div
      onMouseEnter={!belowMd ? handleMouseEnter : null}
      onMouseLeave={!belowMd ? handleMouseLeave : null}
      className="relative"
    >
      <Link to={belowMd && hasDropdown ? null : to}>
        <li
          className="flex justify-center items-center text-white hover:text-[#F0AF59] transition-colors duration-300 active:scale-90 active:text-[#CEAA77] rounded-lg px-4 py-2"
          onClick={(belowMd && hasDropdown) ? () => {setShowDropdown(!showDropdown);} : () => {handleNav();}}
        >
          <span>{label}</span>
          {hasDropdown && <IoMdArrowDropdown size="1.4em" />}
        </li>
      </Link>
      { hasDropdown && showDropdown && !belowMd && (
          <Slide direction="down" className="absolute left-0 mt-2 py-2 z-[-2] xmd:static transition-all">
        <div
          ref={dropdownRef}
          onMouseEnter={handleDropdownMouseEnter }
          onMouseLeave={handleDropdownMouseLeave }
        >
            <ul className="bg-white z-[2] shadow-2xl h-[150px] flex flex-col justify-center rounded-sm rounded-t-none xmd:shadow ">
              {dropdownItems.map((item, index) => (
                <Link to={item.to} key={index}>
                  <li
                    className="px-4 py-2 text-[#424242] hover:text-[#F0AF59] transition-colors duration-300 active:scale-90"
                    onClick={() => {handleNav(); setShowDropdown(!showDropdown);}}
                  >
                    {item.label}
                  </li>
                </Link>
              ))}
            </ul>
        </div>
          </Slide>
      )}
      { hasDropdown && showDropdown && belowMd && (
          <div
          className="transition-all duration-500"
          >
            <ul className="bg-white z-[2] shadow-2xl h-[150px] flex flex-col justify-center rounded-sm rounded-t-none xmd:shadow">
              {dropdownItems.map((item, index) => (
                <Link to={item.to} key={index}>
                  <li
                    className="px-4 py-2 text-[#424242] hover:text-[#F0AF59] transition-colors duration-300 active:scale-90"
                    onClick={() => {handleNav(); setShowDropdown(!showDropdown);}}
                  >
                    {item.label}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
      )}
    </div>
  );
};

export default MenuItem;
