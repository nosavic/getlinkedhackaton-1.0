import React from "react";
import Line2 from "./Line2";

function Questions(props: any) {
  return (
    <main className="space">
      <div className="">
        <div className="flex items-center justify-between ">
          <p>{props.text}</p>
          <p className="text-[#D434FE] text-3xl ">+</p>
        </div>
        <div className="text-[#D434FE] ">
          <Line2 />
        </div>
      </div>
    </main>
  );
}

export default Questions;
