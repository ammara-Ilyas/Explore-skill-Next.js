import React from "react";
import Image from "next/image";
import { tourType } from "@/components/types/Type";
import campus1 from "@/images/campus/Campus1.png";
import campus2 from "@/images/campus/Campus2.png";
import campus3 from "@/images/campus/Campus3.png";
function VirtualTour() {
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
      <h2 className="text-5xl text-customColor-primary font-extrabold">
        TAKE OUR VIRTUAL TOUR
      </h2>
      <p className="font-extralight ">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>
      <div className="w-10/12 mx-auto flex gap-10 bordet-2 pb-6 border-black ">
        {data.map((item, i) => (
          <div key={i} className="">
            <Image
              src={item.img}
              alt="campus image"
              width={500}
              height={650}
              className="rounded-md"
            />
            <h3 className="text-2xl text-center">{item.city}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VirtualTour;
