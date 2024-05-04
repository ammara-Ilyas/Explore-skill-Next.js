import React from "react";
import { blogType } from "@/components/types/Type";
function Sidebar() {
  const data: blogType[] = [
    {
      name: "Business Analytics",
      number: 12,
    },
    {
      name: "Machine Learning",
      number: 29,
    },
    {
      name: "Computer Science",
      number: 15,
    },
    {
      name: "Data Analytics",
      number: 22,
    },
    {
      name: "Full Stack",
      number: 20,
    },
  ];
  return (
    <>
      <h2 className="text-white bg-customColor-primary text-center py-2 mb-6">
        Post Categories
      </h2>
      <div className="flex flex-col justify-center gap-4">
        {data.map((item, i) => (
          <p
            key={i}
            className=" flex justify-between items-center font-normal cursor-pointer hover:text-customColor-primary  text-gray-600 px-2 text-[18px]"
          >
            <span>{item.name}</span>
            <span>{item.number.toString()}</span>
          </p>
        ))}
      </div>
    </>
  );
}

export default Sidebar;
