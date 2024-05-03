import React from "react";
import bg from "@/images/course/banner.png";
function Hero() {
  return (
    <div
      className="font-extrabold	flex items-center pt-5 flex-col gap-5 h-[50vh] justify-center mb-20"
      style={{
        backgroundImage: ` linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className=" text-5xl text-customColor-primary">OUR COURSES</h1>
    </div>
  );
}

export default Hero;
