import React from "react";
import Image from "next/image";
import post from "@/images/background/post.png";
import Sidebar from "./Sidebar";
import Comment from "./Comment";
const Blog = () => {
  return (
    <div className="flex gap-5 lg:w-4/5 md:w-11/12 w-4/5 mx-auto flex-wrap justify-center font-bold">
      <div className="md:w-[65%] w-[95%]  flex flex-col gap-4 py-5">
        <h3 className="text-2xl cursor-pointer">
          Our Certificate & Online Program
        </h3>
        <p className="text-customColor-primary cursor-pointer">Aug 1, 2021</p>
        <Image src={post} alt="post" className="w-full" />
        <div className=" flex flex-col gap-6 font-extralight">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            corrupti blanditiis deserunt incidunt itaque ut laudantium a amet
            omnis nihil, dolor doloribus. Voluptatum, accusantium? Quo, aperiam
            nobis labore pariatur, esse vitae amet repellendus libero architecto
            nisi facere unde ducimus perspiciatis, laudantium alias porro.
            Sapiente voluptatem eligendi at voluptatum optio facilis?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            corrupti blanditiis deserunt incidunt itaque ut laudantium a amet
            omnis nihil, dolor doloribus. Voluptatum, accusantium? Quo, aperiam
            nobis labore pariatur, esse vitae amet repellendus libero architecto
            nisi facere unde ducimus perspiciatis, laudantium alias porro.
            Sapiente voluptatem eligendi at voluptatum optio facilis?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            corrupti blanditiis deserunt incidunt itaque ut laudantium a amet
            omnis nihil, dolor doloribus. Voluptatum, accusantium? Quo, aperiam
            nobis labore pariatur, esse vitae amet repellendus libero architecto
            nisi facere unde ducimus perspiciatis, laudantium alias porro.
            Sapiente voluptatem eligendi at voluptatum optio facilis?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            corrupti blanditiis deserunt incidunt itaque ut laudantium a amet
            omnis nihil, dolor doloribus. Voluptatum, accusantium? Quo, aperiam
            nobis labore pariatur, esse vitae amet repellendus libero architecto
            nisi facere unde ducimus perspiciatis, laudantium alias porro.
            Sapiente voluptatem eligendi at voluptatum optio facilis?
          </p>
        </div>
        <Comment />
      </div>
      <div className="w-[95%] md:w-[32%]  mx-auto">
        <Sidebar />
      </div>
    </div>
  );
};

export default Blog;
