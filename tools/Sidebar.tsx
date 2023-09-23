import React from "react";
import Button from "./Button";

function Sidebar() {

  return (
    <div
      className={`flex flex-col gap-[20px] bg-[#150E28] max-w-fit  px-[30px] py-[50px] `}
    >
      <p>Timeline</p>
      <p>Overview</p>
      <p>FAQs</p>
      <p>Contacts</p>
      <Button name={"Register"} />
    </div>
  );
}

export default Sidebar;
