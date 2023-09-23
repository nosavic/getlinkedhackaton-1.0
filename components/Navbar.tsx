import React from "react";
import Line from "../tools/Line";
import Menu from "../tools/Menu";
import Button from "../tools/Button";
import { clash , mont } from "@/app/layout";

function Navbar() {
  return (
    <div>
      <div className="flex mt-[30px] mb-[30px] px-[20px] items-center justify-between  ">
        <div className=" text-[36px] font-extrabold">
          <p className={clash.className}>
            get<b className="text-[#D434FE]">linked</b>
          </p>
        </div>
        <div className="flex items-center nav-menu  ">
          <div className={`flex gap-[50px] mr-[30px] ml-[30px] `}>
            <div>Timeline</div>
            <div>Overview</div>
            <div>FAQs</div>
            <div>Contacts</div>
          </div>
          <Button name={"Register"} />
          {/* <div className="rbutton">Register</div> */}
        </div>
        <div className="hamburger">
          <Menu />
        </div>
      </div>
      <Line />
    </div>
  );
}

export default Navbar;
