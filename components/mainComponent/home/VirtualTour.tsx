"use client";
import React, { useState } from "react";
import Image from "next/image";
import Heading from "@/components/widgets/Heading";
import Para from "@/components/widgets/Para";
import { tourType } from "@/components/types/Type";
import campus1 from "@/images/campus/Campus1.png";
import campus2 from "@/images/campus/Campus2.png";
import campus3 from "@/images/campus/Campus3.png";
import style from "./style.module.css";
function VirtualTour() {
  const [isHovered, setIsHovered] = useState<Boolean>(false);
  const data: tourType[] = [
    {
      city: "DELHI      ",
      img: campus1.src,
    },
    {
      city: "HYDERABAD      ",
      img: campus2.src,
    },
    {
      city: "MUMBAI      ",
      img: campus3.src,
    },
  ];
  return (
    <div className="  flex flex-col gap-7 items-center justify-center ">
      <Heading text="TAKE OUR VIRTUAL TOUR" />
      <Para text="Lorem ipsum dolor, sit amet consectetur adipisicing elit." />
      <div className="lg:10/12 sm:w-[98%] md:w-11/12 w-full mx-auto flex flex-wrap justify-center gap-10 bordet-2 pb-6 border-black ">
        {data.map((item, i) => (
          <div
            key={i}
            className="relative  w-3/4 sm:w-[45%] min-[800px]:w-[40%] lg:w-[30%] border-2 overflow-hidden transition-all duration-1000 ease-in-out"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              src={item.img}
              alt="campus image"
              width={500}
              height={650}
              className={`rounded-md  border-2 border-red-900 h-full transition-all duration-1000 ease-in-out `}
            />
            <h3
              className={`${
                isHovered ? "bottom-0 top-2/4" : "-bottom-full"
              } text-2xl text-center absolute left-0  flex items-center justify-center text-white bg-opacity-20 bg-blue-300 border-2 h-full w-full`}
            >
              {item.city}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
  <style></style>;
}

export default VirtualTour;
