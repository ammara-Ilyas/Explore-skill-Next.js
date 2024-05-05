import React from "react";
import Link from "next/link";
import { IoIosHeart } from "react-icons/io";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="border-t-2 mt-28 flex flex-col items-center text-center gap-4 pb-7 w-[98%] mx-auto ">
      <hr />
      <h3 className="text-xl font-bold ">About Us</h3>
      <p className="font-extralight w-10/12 mx-auto md:w-11/12">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima
        incidunt odio nam facilis, eligendi Itaque fugiat cupiditate
        consectetur. Aliquid ab deserunt exercitationem, illum molestiae
        dolorem.
      </p>
      <div className=" flex text-xl  w-1/6 justify-between items-center text-blue-600 transition delay-150 ease-in-out ">
        <FaFacebookF className="hover:text-customColor-primary cursor-pointer" />
        <FaInstagramSquare className="hover:text-customColor-primary cursor-pointer" />
        <FaTwitter className="hover:text-customColor-primary cursor-pointer" />
        <FaLinkedin className="hover:text-customColor-primary cursor-pointer" />
      </div>
      <p className="flex font-extralight gap-1 justify-center items-center">
        Made with <IoIosHeart className="text-customColor-primary " /> by{" "}
        <Link
          href="/"
          className="text-indigo-300 hover:text-customColor-primary font-bold"
        >
          Ammara Ilyas
        </Link>
      </p>
      <p className="flex font-extralight gap-1 justify-center items-center">
        Copyright © 2021
        <Link
          href="/"
          className="text-indigo-300 hover:text-customColor-primary font-bold"
        >
          Xplore Skill
        </Link>{" "}
        . All Rights Reserved
      </p>
    </div>
  );
}

export default Footer;
