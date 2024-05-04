import React from "react";
import Hero from "@/components/mainComponent/courses/Hero";
import Contact from "@/components/mainComponent/contact/Contact";
import Map from "@/components/mainComponent/contact/Map";
function page() {
  return (
    <>
      <Hero text="CONTACT US" />
      <Map />
      <Contact />
    </>
  );
}

export default page;
