import React from "react";
type HeadingType = {
  text: string;
};

const Heading: React.FC<HeadingType> = ({ text }) => {
  return (
    <h1 className="text-customColor-primary text-[45px] font-extrabold leading-tight		    ">
      {text}
    </h1>
  );
};

export default Heading;
