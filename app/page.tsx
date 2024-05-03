import Image from "next/image";
import Hero from "@/components/mainComponent/home/Hero";
import VerticalLine from "@/components/widgets/VerticalLine";
import Course from "@/components/mainComponent/home/Course";
import VirtualTour from "@/components/mainComponent/home/VirtualTour";
import Facility from "@/components/mainComponent/home/Facility";
import Testimonial from "@/components/mainComponent/home/Testimonial";
import Future from "@/components/mainComponent/home/Future";
export default function Home() {
  return (
    <>
      <Hero />
      <VerticalLine />
      <Course />
      <VerticalLine />
      <VirtualTour />
      <VerticalLine />
      <Facility />
      <VerticalLine />
      <Testimonial />
      <Future />
    </>
  );
}
