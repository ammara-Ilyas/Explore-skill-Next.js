import React from "react";
import Image from "next/image";
import user from "@/images/background/user.png";
import Star from "@/components/widgets/Star";
import { FaStar } from "react-icons/fa";

function Testimonial() {
  return (
    <div className="  flex flex-col gap-7 items-center justify-center ">
      <h2 className="text-5xl text-customColor-primary font-extrabold">
        WHAT OUR STUDENT SAYS
      </h2>
      <p className="font-extralight ">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>
      <div className="w-10/12 mx-auto flex flex-wrap justify-center items-center border-2 pb-6 border-black ">
        {/* {data.map((item, i) => ( */}
        <div className="flex border-2 border-blue-800 w-5/12">
          <Image
            src={user}
            alt="campus image"
            width={20}
            height={20}
            className="rounded-lg basis-1/3 border-2 border-red-700 "
          />
          <div className="basis-3/4">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
              dolores animi aliquam corrupti ipsa in?
            </p>
            <h3>Student Name</h3>
            {[...Array(4)].map((_, index) => (
              <FaStar
                key={index}
                className="text-customColor-primary text-2xl"
              />
            ))}
          </div>
        </div>
        {/* ))}  */}
      </div>
    </div>
  );
}

export default Testimonial;
