import React from "react";
import Form from "./Form";
import { FaHome, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const data = [
    {
      icon: <FaHome />,
      address: "NH9 Road, ABC Building      ",
      des: "Ghaziabad, Uttar Pradesh, IN      ",
    },
    {
      icon: <FaPhone />,
      address: "+91 7445546525      ",
      des: "Monday To Saturday, 9AM To 6PM      ",
    },
    {
      icon: <MdEmail />,
      address: "xyz@email.com",
      des: "Email Us Yor Query      ",
    },
  ];
  return (
    <div className="flex justify-center flex-wrap  gap-5 ">
      <div className=" flex flex-col gap-10 w-10/12 md:w-1/3 mt-16 pt-5 text-gray-600">
        {data.map((item, i) => (
          <div className="flex gap-5  w-11/12  items-center" key={i}>
            <div className="text-customColor-primary text-3xl">{item.icon}</div>
            <div className="flex flex-col justify-between  text-left gap-1">
              <h4 className="text-2xl">{item.address}</h4>
              <p>{item.des}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-[95%] md:1/2 lg:w-5/12">
        <Form />
      </div>
    </div>
  );
};

export default Contact;
