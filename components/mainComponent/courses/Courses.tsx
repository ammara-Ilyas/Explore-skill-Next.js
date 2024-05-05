import React from "react";
import Image from "next/image";
import { faculityType } from "@/components/types/Type";
import Para from "@/components/widgets/Para";
import Heading from "@/components/widgets/Heading";
import course1 from "@/images/course/course1.png";
import course2 from "@/images/course/course2.png";
import course3 from "@/images/course/course3.png";
function Courses() {
  const data: faculityType[] = [
    {
      img: course1.src,
      heading: "Web Development  ",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.            ",
    },
    {
      img: course2.src,
      heading: "Artificial Intelligence    ",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.            ",
    },
    {
      img: course3.src,
      heading: "Data Science      ",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.            ",
    },
  ];
  return (
    <div className="flex flex-col text-center justify-center items-center gap-7 mt-16 pb-6">
      <Heading text="BEST COURSES" />
      <Para text="Lorem ipsum dolor, sit amet consectetur adipisicing elit." />

      <div className="lg:w-11/12 sm:w-[98%] md:w-11/12 w-full mt-5 mx-auto text-left flex flex-wrap gap-16 items-center justify-center mb-6">
        {data.map((item, i) => (
          <div
            key={i}
            className=" w-3/4 sm:w-[45%] min-[800px]:w-[40%] lg:w-[30%]"
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

export default Courses;
