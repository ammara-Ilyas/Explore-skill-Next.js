import React from "react";
type HeadingType = {
  text: string;
};

const Heading: React.FC<HeadingType> = ({ text }) => {
  return (
    <h1 className="text-customColor-primary text-3xl sm:text-4xl md:text-[45px] font-extrabold		 text-center   ">
      {text}
    </h1>
  );
};

export default Heading;
