import React from "react";
import Button from "@/components/widgets/Button";
import Link from "next/link";
import bg from "@/images/background/back2.png";
function Future() {
  return (
    <div
      className="relative w-4/5 mx-auto rounded-md flex flex-col  items-center justify-center gap-5  text-white h-80"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className=" text-[58px] font-extrabold uppercase  leading-tight	mt-8">
        GET READY FOR A BRIGHT FUTURE
      </h1>
      <Link href="/contact">
        {" "}
        <Button text="Contact us" />
      </Link>
    </div>
  );
}

export default Future;
