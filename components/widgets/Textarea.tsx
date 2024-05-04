import React from "react";
type TextType = {
  text: string;
  bg: string;
};
const Textarea: React.FC<TextType> = ({ text, bg }) => {
  return (
    <div>
      <textarea
        name=""
        id=""
        rows={5}
        placeholder={text}
        className={`   w-full ${bg}  placeholder:text-gray-700 placeholder:font-normal placeholder:text-sm`}
      ></textarea>
    </div>
  );
};

export default Textarea;
