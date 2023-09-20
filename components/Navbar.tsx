import React from "react";
import Line from "../tools/line";

function Navbar() {
  return (
    <div>
      <div className="flex justify-between mt-[30px] mb-[30px] px-[20px] items-center">
        <div className=" flex text-2xl font-extrabold">
          <p>get</p>
          <p className="text-[#D434FE]">linked</p>
        </div>
        <div className="flex gap-[56px] ml-[100px] ">
          <p>Timeline</p>
          <p>Overview</p>
          <p>FAQs</p>
          <p>Contacts</p>
        </div>
        <div className="rbutton">Register</div>
      </div>
      <Line />
    </div>
  );
}

export default Navbar;
