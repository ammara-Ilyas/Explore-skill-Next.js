import React from "react";

type ParaType = {
  text: string;
};
const Para: React.FC<ParaType> = ({ text }) => {
  return (
    <p className="font-extralight">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    </p>
  );
};

export default Para;
