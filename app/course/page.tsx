import React from "react";
import Hero from "@/components/mainComponent/courses/Hero";
import Course from "@/components/mainComponent/home/Course";
import Courses from "@/components/mainComponent/courses/Courses";
function page() {
  return (
    <>
      <Hero text="Our course" />
      <Course heading="COURSE WE OFFER" />
      <Courses />
    </>
  );
}

export default page;
