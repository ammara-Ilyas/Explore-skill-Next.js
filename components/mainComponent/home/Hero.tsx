import React from "react";
import Link from "next/link";
import bg from "@/images/background/back1.png";
import Button from "@/components/widgets/Button";
function Hero() {
  return (
    <div
      className="font-extrabold	flex items-center pt-5 flex-col gap-5 h-screen justify-center mb-20"
      style={{
        backgroundImage: `linear-gradient(#517e86c4, #949fdf1a), url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className=" text-8xl text-customColor-primary">GET READY</h1>
      <h2 className="text-5xl text-emerald-200">TO DISCOVER CAMPUS</h2>
      <p className=" w-2/3 text-center text-xl font-normal text-white">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
        consequuntur corrupti sapiente aut porro esse blanditiis in quae
        perspiciatis quo.
      </p>
      <Link href="/">
        <Button text=" Visit us to know More" />
      </Link>
    </div>
  );
}

export default Hero;
