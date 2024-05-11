import React from "react";
import Image from "next/image";
import { faculityType } from "@/components/types/Type";
import Para from "@/components/widgets/Para";
import Heading from "@/components/widgets/Heading";
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
    <div className="flex flex-col text-center justify-center items-center gap-5 my-5 pb-6">
      <Heading text="OUR FACILITIES" />
      <Para text="Lorem ipsum dolor, sit amet consectetur adipisicing elit." />

      <div className="lg:w-11/12 sm:w-[98%] md:w-11/12 w-full   mt-5 mx-auto text-left flex flex-wrap gap-16 items-center justify-center mb-6">
        {data.map((item, i) => (
          <div
            key={i}
            className="p-3 w-3/4 sm:w-[45%] lg:w-[29%] group duration-300 hover:shadow-primary group-hover:shadow-primary"
          >
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
