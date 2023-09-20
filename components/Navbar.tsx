import React from "react";
import Line from "../tools/line";

function Navbar() {
  return (
    <div >
      <div className="flex justify-between mt-[30px] mb-[30px] px-[20px] items-center">
        <div className=" flex text-2xl font-extrabold">
          <p>get</p>
          <p className="text-[#D434FE]">linked</p>
        </div>
        <div className="flex items-center ">
          <div className="flex mr-[20px] ml-[20px] justify-evenly min-w-[200px] w-[600px]">
            <div>Timeline</div>
            <div>Overview</div>
            <div>FAQs</div>
            <div>Contacts</div>
          </div>
          <div className="rbutton">Register</div>
        </div>
      </div>
      <Line />
    </div>
  );
}

export default Navbar;
