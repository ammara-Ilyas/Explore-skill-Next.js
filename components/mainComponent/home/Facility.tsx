import React from "react";
import Image from "next/image";
import { faculityType } from "@/components/types/Type";
import food from "@/images/faculity/food.png";
import playground from "@/images/faculity/playground.png";
import llibrary from "@/images/faculity/libary.png";
function Faculity() {
  const data: faculityType[] = [
    {
      img: llibrary.src,
      heading: "Best Libary            ",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.            ",
    },
    {
      img: playground.src,
      heading: "Athletics        ",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.            ",
    },
    {
      img: food.src,
      heading: "Tasty and Healthy Food        ",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.            ",
    },
  ];
  return (
    <div className="flex flex-col text-center justify-center items-center gap-7 my-5 pb-6">
      <h1 className="text-customColor-primary text-5xl font-extrabold">
        OUR FACILITIES
      </h1>
      <p className="font-extralight">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>
      <div className="w-10/12 mt-5 mx-auto text-left flex gap-16 items-center justify-center mb-6">
        {data.map((item, i) => (
          <div key={i}>
            <Image
              src={item.img}
              alt="images"
              width={500}
              height={650}
              className="rounded-md "
            />
            <h2 className="text-xl font-bold py-3">{item.heading}</h2>
            <p className="font-extralight">{item.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faculity;
