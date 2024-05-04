import React from "react";
type ButtonProps = {
  text: string;
  className: string;
};
const Button: React.FC<ButtonProps> = ({ text, className }) => {
  return (
    <button
      className={`border-[1px] ${className}  text-sm  p-3 px-5 rounded-md transition  ease-out hover:border-emerald-400 duration-300 hover:text-white	 hover:bg-emerald-400 font-normal `}
    >
      {text}
    </button>
  );
};

export default Button;
