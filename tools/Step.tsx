import React from "react";
import VerticalLine from "./VerticalLine";

function Step(prop: any) {
  return (
    <div>
      <div className="vertical-stepper ">
        <div className="step w-[100%] ">
          <div className="step-label-left w-[50%] ">
            <p className="text-[20px]  font-bold text-[#D434FE] mb-[10px]">
              {prop.left}
            </p>
            <p className="max-w-[400px] font-[400px] text-[14px]">
              {prop.leftt}
            </p>
          </div>
          <div className="">
            <div className="">
              <VerticalLine />
            </div>
            <div className="step-number   ">{prop.num}</div>
          </div>
          <div className="step-label-right w-[50%]">
            <p className="text-[20px] font-bold text-[#D434FE]">{prop.right}</p>
            <p className="max-w-[400px] font-[400px] text-[14px] ">
              {prop.rightt}
            </p>
          </div>
        </div>

        {/* Repeat the above structure for each step */}
      </div>
    </div>
  );
}

export default Step;
