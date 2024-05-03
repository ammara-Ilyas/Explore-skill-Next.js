"use client";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { FaStaylinked } from "react-icons/fa";
import { IoReorderThree } from "react-icons/io5";

import Link from "next/link";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className="absolute top-0 left-0 w-full text-white bg-opacity-0 px-10">
      <nav className="flex items-center justify-between flex-wrap p-6 px-10">
        <div className="flex text-2xl justify-center items-center font-extrabold">
          Xplore
          <FaStaylinked className="text-5xl text-emerald-300" />
          kill
        </div>
        <div>
          {" "}
          <ul className="hidden  md:flex flex-row uppercase  text-center">
            <li>
              <Link href="/home" className="block px-4 py-2">
                Home
              </Link>
            </li>
            <li>
              <Link href="/course" className="block px-4 py-2">
                Course
              </Link>
            </li>
            <li>
              <Link href="/blog" className="block px-4 py-2">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/about" className="block px-4 py-2">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block px-4 py-2">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <div>
            <IoReorderThree
              className={`${
                menuOpen ? "hidden" : "block"
              }cursor-pointer text-3xl  `}
              onClick={toggleMenu}
            />

            <div
              className={`${
                menuOpen ? "block" : "hidden"
              } md:block h-screen w-1/2  bg-emerald-300 bg-opacity-70 text-2xl absolute top-0 right-0`}
            >
              {/* Responsive bar open and close */}
              <RxCross1
                className="cursor-pointer text-2xl absolute top-4 right-4"
                onClick={toggleMenu}
              />
              <ul className="flex flex-col md:flex-row uppercase border-2 text-white text-center md:text-left h-screen items-center justify-center">
                <li>
                  <Link href="/home" className="block px-4 py-2">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/course" className="block px-4 py-2">
                    Course
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="block px-4 py-2">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="block px-4 py-2">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="block px-4 py-2">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Header;
