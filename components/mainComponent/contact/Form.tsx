import React from "react";
import Input from "@/components/widgets/Input";
import Textarea from "@/components/widgets/Textarea";
import Button from "@/components/widgets/Button";
const Form = () => {
  return (
    <form className=" flex flex-col gap-5 p-5 my-10">
      <Input text="Name" bg="bg-white p-3 border-[1px] border-gray-300" />
      <Input text="Email" bg="bg-white p-3 border-[1px] border-gray-300" />
      <Input text="Subject" bg="bg-white p-3 border-[1px] border-gray-300" />
      <Textarea
        text="Message"
        bg="bg-white border-[1px] h-[200px] p-3 border-gray-300"
      />
      <div>
        {" "}
        <Button
          text="Send Message"
          className="text-blue-600 border-blue-600 w-2/5"
        />
      </div>
    </form>
  );
};

export default Form;
