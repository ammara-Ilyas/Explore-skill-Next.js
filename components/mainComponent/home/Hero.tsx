import React from "react";
import Link from "next/link";
import bg from "@/images/background/back1.png";
import Button from "@/components/widgets/Button";
function Hero() {
  return (
    <div
      className="font-extrabold	flex items-center text-center  pt-5 flex-col gap-5 h-screen justify-center mb-20"
      style={{
        backgroundImage: `linear-gradient(#517e86c4, #949fdf1a), url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-4xl sm:text-4xl md:text-7xl mt-10 md:mt-5  text-customColor-primary">
        GET READY
      </h1>
      <h2 className="md:text-5xl sm:text-4xl text-3xl text-emerald-200">
        TO DISCOVER CAMPUS
      </h2>
      <p className="w-[80%] md:w-2/3 text-center text-xs sm:text-xl font-normal text-white">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
        consequuntur corrupti sapiente aut porro esse blanditiis in quae
        perspiciatis quo.
      </p>
      <Link href="/">
        <Button
          text=" Visit us to know More"
          className="text-white border-white"
        />
      </Link>
    </div>
  );
}

export default Hero;
