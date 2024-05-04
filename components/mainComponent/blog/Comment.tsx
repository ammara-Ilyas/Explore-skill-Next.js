import React from "react";
import Input from "@/components/widgets/Input";
import Textarea from "@/components/widgets/Textarea";
import Button from "@/components/widgets/Button";
function Comment() {
  return (
    <form className="border-[1px] border-gray-200 flex flex-col gap-5 p-5 my-10">
      <h3 className="font-extrabold text-xl">Leave a Comment</h3>
      <Input text="Name" bg="bg-gray-100 border-none outline-none p-2" />
      <Input text="Email" bg="bg-gray-100 border-none outline-none p-2" />
      <Textarea
        text="Your Comment"
        bg="bg-gray-100 border-none outline-none p-2"
      />
      <div>
        {" "}
        <Button text="POST COMMENT" className="text-blue-600 border-blue-600" />
      </div>
    </form>
  );
}

export default Comment;
