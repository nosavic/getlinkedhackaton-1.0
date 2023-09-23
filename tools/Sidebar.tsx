import React from "react";
import Button from "./Button";

function Sidebar() {
  return (
    <div className="flex flex-col gap-[20px] bg-[#150E28] w-[50%] px-[30px] py-[50px] absolute right-[0] top-[0px] pt-[100px] z-1">
      <p>Timeline</p>
      <p>Overview</p>
      <p>FAQs</p>
      <p>Contacts</p>
      <Button name={"Register"} />
    </div>
  );
}

export default Sidebar;
