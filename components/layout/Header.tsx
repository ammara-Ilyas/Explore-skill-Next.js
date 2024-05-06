"use client";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { FaStaylinked } from "react-icons/fa";
import { IoReorderThree } from "react-icons/io5";
import style from "./Header.module.css";
import Link from "next/link";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log(menuOpen);

    setMenuOpen(!menuOpen);
  };
  const navLink = [
    {
      path: "/",
      navlink: "home",
    },
    {
      path: "/course",
      navlink: "Courses",
    },
    {
      path: "/blog",
      navlink: "blog",
    },
    {
      path: "/about",
      navlink: "About",
    },
    {
      path: "/contact",
      navlink: "Contact",
    },
  ];
  return (
    <section className="absolute top-0 left-0 w-full text-white bg-opacity-0 px-5">
      <nav className="flex items-center justify-between flex-wrap p-6 px-10">
        <div className="flex text-2xl justify-center items-center font-extrabold">
          Xplore
          <FaStaylinked className="text-5xl text-emerald-300" />
          kill
        </div>
        <div>
          {" "}
          <ul className="hidden  md:flex flex-row uppercase gap-7 text-[16px]  text-center">
            {navLink.map((item, i) => (
              <li
                key={i}
                className={`${style.lin} flex flex-col items-center justify-center`}
              >
                <Link href={item.path} className={`${style.lin} block `}>
                  {item.navlink}
                </Link>
                <div className={`${style.div} `}></div>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden">
          <div className="">
            <IoReorderThree
              className={`${
                menuOpen ? "hidden" : "block"
              }cursor-pointer text-3xl  `}
              onClick={toggleMenu}
            />

            <div
              className={` ransition-transform duration-1000  ${
                style.hoverEffect
              } ${
                menuOpen
                  ? "block right-0 transition-transform duration-1000 "
                  : "hidden right-full"
              } md:block h-screen w-1/3 bg-[#47b19efa] bg-opacity-70 text-xl absolute top-0 `}
            >
              {/* Responsive bar open and close */}
              <RxCross1
                className="cursor-pointer text-2xl absolute top-4 left-4 font-bold"
                onClick={toggleMenu}
              />
              <ul className="flex flex-col md:flex-row uppercase  text-white text-left md:text-left h-screen  pt-20 pl-5">
                {navLink.map((item, i) => (
                  <li key={i} className={`${style.lin}`} onClick={toggleMenu}>
                    <Link href={item.path} className={`block px-4 my-2`}>
                      {item.navlink}
                    </Link>
                    <div className={style.div}></div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Header;
