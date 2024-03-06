import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`font-opensans w-[159px] h-[40px] bg-[#e29633] uppercase text-sm text-[#fff] rounded hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
