import React from "react";
type ButtonProps = {
  text: string;
};
const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="border-white text-white border p-3 px-5 rounded-md transition  ease-out hover:border-emerald-400 duration-300	 hover:bg-emerald-400 font-normal ">
      {text}
    </button>
  );
};

export default Button;
