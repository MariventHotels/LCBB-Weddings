import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import links from "../data/dropgallery";

const Dropdown = ({ handleButton }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("bataan");

  const handleItemClick = (item) => {
    handleButton({ target: { value: item.value } });
    setIsOpen((prev) => !prev);
    setSelectedOption(item.link);
  };

  return (
    <div className="relative flex flex-col items-center w-[250px] mb-10  rounded-[4px] border border-[#CEAA77] active:border-white xxsm:mb-5">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="p-1 w-[250px] h-[40px] flex items-center font-opensans font-bold rounded-[2px] tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white"
      >
        <p className="uppercase text-xs tracking-widest text-[#424242] ml-4">
          {selectedOption}
        </p>
        <div className="ml-auto">
          {!isOpen ? (
            <IoIosArrowDown className="h-8" />
          ) : (
            <IoIosArrowUp className="h-8" />
          )}
        </div>
      </button>

      {isOpen && (
        <div className="bg-white absolute left-0 top-14 flex flex-col items-start  p-2 w-[200px] rounded-[4px] border border-[#CEAA77] z-[1000]">
          {links.map((item, i) => (
            <div
              className="flex w-full justify-between p-1  hover:bg-[#F0AF59] cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4"
              key={i}
              onClick={() => handleItemClick(item)}
              value={item.value}
            >
              <button className="uppercase text-xs tracking-widest font-opensans font-bold  ml-1 text-[#424242] ">
                {item.link}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
