import React from "react";
import { courseType } from "../../types/Type";
function Course() {
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
      <h1 className="text-customColor-primary text-5xl font-extrabold">
        EXPLORE OUR 60+ <br />
        MAJOR PROGRAMS
      </h1>
      <p className="font-extralight">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>
      <div className="w-10/12 mt-5 mx-auto flex gap-16 items-center justify-center mb-6">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-red-50 p-6 rounded-md text-center transition duration-150 h-[300px] hover:shadow-xl"
          >
            <h2 className="text-xl font-bold pb-3">{item.heading}</h2>
            <p className="font-extralight">{item.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Course;
