import React from "react";
import Heading from "@/components/widgets/Heading";
import Button from "@/components/widgets/Button";
import about from "@/images/background/about.png";

import Image from "next/image";
const About = () => {
  return (
    <div className="flex flex-wrap   lg:w-4/5 md:w-[95%] w-4/5 gap-5  mx-auto  ">
      <div className=" text-left w-[95%] md:w-[50%]   ">
        <Heading text="WE ARE THE WORLD'S LARGEST UNIVERSITY" />
        <p className="font-extralight py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          cumque in accusantium molestias maiores fuga vitae eos, ducimus
          officiis repudiandae voluptatem error. Laboriosam, numquam blanditiis
          aspernatur, nobis tempora consequatur id aliquam asperiores voluptatum
          iste animi voluptatem fugiat totam excepturi dolor.
        </p>
        <Button text="Explore Now" className="text-blue-600 border-blue-600" />
      </div>
      <div className="md:w-[45%] w-[95%]">
        <Image src={about} alt="about" className="w-full" />
      </div>
    </div>
  );
};

export default About;
