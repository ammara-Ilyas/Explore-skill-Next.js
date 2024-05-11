import React from "react";
import Image from "next/image";
import user from "@/images/background/user.png";
import Heading from "@/components/widgets/Heading";
import Para from "@/components/widgets/Para";
import StarRating from "@/components/widgets/StarRating";
function Testimonial() {
  const data = [
    {
      img: { user },
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a deserunt. In quia repellat maxime.",
      name: "Student Name",
    },
    {
      img: { user },
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a deserunt. In quia repellat maxime.",
      name: "Student Name",
    },
  ];
  return (
    <div className="  flex flex-col gap-5 items-center justify-center pb-16">
      <Heading text="WHAT OUR STUDENT SAYS" />
      <Para text="Lorem ipsum dolor, sit amet consectetur adipisicing elit." />
      <div className=" lg:10/12  md:w-11/12 w-11/12 mx-auto flex flex-wrap justify-center gap-8 lg:gap-16 pt-4 items-center pb-6">
        {data.map((item, i) => (
          <div
            className="rounded-lg duration-300 hover:shadow-primary group-hover:shadow-primary sm:w-[45%] w-3/4  xl:w-[45%] flex justify-center p-5 gap-5 font-extralight  bg-rose-50"
            key={i}
          >
            <div className=" w-[12%] ">
              <Image
                src={user}
                alt="campus image"
                className="rounded-full  w-full  "
              />
            </div>
            <div className="basis-4/5 ">
              <p className="text-[16px]">{item.des}</p>
              <h3 className="text-xl font-bold mt-4 mb-2">{item.name}</h3>
              <StarRating />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
