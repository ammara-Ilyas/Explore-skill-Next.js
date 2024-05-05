import React from "react";

type ParaType = {
  text: string;
};
const Para: React.FC<ParaType> = ({ text }) => {
  return (
    <p className="font-extralight w-10/12 mx-auto md:w-full text-center border-2">
      {text}
    </p>
  );
};

export default Para;
