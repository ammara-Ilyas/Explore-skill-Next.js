import React from "react";
import Hero from "@/components/mainComponent/courses/Hero";
import Blog from "@/components/mainComponent/blog/Blog";
function page() {
  return (
    <>
      <Hero text="our post" />
      <Blog />
    </>
  );
}

export default page;
