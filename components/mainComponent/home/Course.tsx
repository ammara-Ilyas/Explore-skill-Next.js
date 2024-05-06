import React from "react";
import { courseType } from "../../types/Type";
import Heading from "@/components/widgets/Heading";
import Para from "@/components/widgets/Para";
type CourseType = {
  heading: string;
};
const Course: React.FC<CourseType> = ({ heading }) => {
  const data: courseType[] = [
    {
      heading: "Undergraduate Programs            ",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas soluta labore quisquam impedi distinctio explicabo aut minima quos pariatur unde aliquam earum laborum velit non.            ",
    },
    {
      heading: "Graduate Programs           ",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas soluta labore quisquam impedi distinctio explicabo aut minima quos pariatur unde aliquam earum laborum velit non.            ",
    },
    {
      heading: " Adult Learning & Degree Completion    ",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas soluta labore quisquam impedi distinctio explicabo aut minima quos pariatur unde aliquam earum laborum velit non.            ",
    },
  ];
  return (
    <div className="flex flex-col text-center justify-center items-center gap-7 my-5">
      <Heading text={heading} />
      <Para text="Lorem ipsum dolor, sit amet consectetur adipisicing elit." />
      <div className="sm:w-[98%] md:w-11/12 w-full  mt-5 mx-auto flex flex-wrap gap-10  items-center  justify-center mb-2">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-red-50 w-3/4 sm:w-[45%] min-[800px]:w-[40%] lg:w-[30%] p-6 min-h-min rounded-md text-center transition duration-150 h-auto sm:h-[300px] hover:boxShadow-primary "
          >
            <h2 className="text-xl font-bold pb-3">{item.heading}</h2>
            <p className="font-extralight">{item.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
