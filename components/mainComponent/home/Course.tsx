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
      <div className="w-10/12 mt-5 mx-auto flex gap-16 items-center justify-center mb-6">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-red-50 p-6 rounded-md text-center transition duration-150 h-[280px] hover:shadow-xl"
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
