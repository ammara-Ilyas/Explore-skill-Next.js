import React from "react";
import bg from "@/images/course/banner.png";
type HeroType = {
  text: string;
};
const Hero: React.FC<HeroType> = ({ text }) => {
  return (
    <div
      className="font-extrabold	flex  items-center pt-5 flex-col gap-5 h-[50vh] justify-center mb-32"
      style={{
        backgroundImage: ` linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className=" text-[42px] mt-24 text-customColor-primary uppercase">
        {text}
      </h1>
    </div>
  );
};

export default Hero;
