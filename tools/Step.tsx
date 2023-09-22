import React from "react";
import VerticalLine from "./VerticalLine";

function Step(prop: any) {
  return (
    <div>
      <div className="vertical-stepper shrink ">
        <div className="step w-[100%] ">
          <div className="step-label-left phone:hidden tablet:hidden w-[50%] pr-[30px]  ">
            <p className="text-[20px]  font-bold text-[#D434FE] mb-[10px]">
              {prop.left}
            </p>
            <p className=" font-[400px] text-[14px]">{prop.leftt}</p>
          </div>
          <div className="flex-col ">
            <div className="flex justify-center">
              <VerticalLine />
            </div>
            <div className="step-number">{prop.num}</div>
          </div>
          <div className="step-label-right w-[50%] pl-[30px] phone:scale-[90%] phone:w-fit">
            <p className="text-[20px] phone:block tablet:block hidden font-bold text-[#D434FE] mb-[10px]">
              {prop.top}
            </p>
            <p className=" font-[400px] phone:block tablet:block hidden text-[14px]">
              {prop.leftt}
            </p>
            <p className="text-[20px] font-bold text-[#D434FE]">{prop.right}</p>
            <p className="max-w-[400px] font-[400px] text-[14px] ">
              {prop.rightt}
            </p>
            <p className="phone:block tablet:block hidden text-[20px] font-bold text-[#D434FE] ">
              {prop.date}
            </p>
          </div>
        </div>

        {/* Repeat the above structure for each step */}
      </div>
    </div>
  );
}

export default Step;
