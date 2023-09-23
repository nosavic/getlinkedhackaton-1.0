import React from "react";
import Button from "./Button";

function Sidebar(prop: any) {
  function theClick() {
    prop.theClick();
  }

  function whenClicked() {
    theClick;
    console.log("yes");
  }

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
