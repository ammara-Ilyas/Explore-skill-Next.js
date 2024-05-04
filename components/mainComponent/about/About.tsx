import React from "react";
import Heading from "@/components/widgets/Heading";
import Button from "@/components/widgets/Button";
import about from "@/images/background/about.png";

import Image from "next/image";
const About = () => {
  return (
    <div className="flex gap-5 justify-center mx-auto w-[80%] ">
      <div className="w-[50%]   ">
        <Heading text="WE ARE THE WORLD'S LARGEST UNIVERSITY" />
        <p className="font-extralight py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          cumque in accusantium molestias maiores fuga vitae eos, ducimus
          officiis repudiandae voluptatem error. Laboriosam, numquam blanditiis
          aspernatur, nobis tempora consequatur id aliquam asperiores voluptatum
          iste animi voluptatem fugiat totam excepturi dolor.
        </p>
        <Button
          text="Explore Now"
          color="text-blue-600"
          border="border-blue-600"
        />
      </div>
      <div className="w-[48%]">
        <Image src={about} alt="about" className="w-full" />
      </div>
    </div>
  );
};

export default About;
