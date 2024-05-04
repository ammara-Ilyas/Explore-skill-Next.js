import React from "react";
type InputType = {
  text: string;
  bg: string;
  // border: string;
};
const Input: React.FC<InputType> = ({ text, bg }) => {
  return (
    <>
      <input
        type={text}
        placeholder={`Enter ${text}`}
        className={`w-full ${bg}  placeholder:text-sm   placeholder:text-gray-600 placeholder:font-normal `}
      />
    </>
  );
};

export default Input;
