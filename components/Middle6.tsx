import React from "react";
import Image from "next/image";
import ELL from "../assets/Ellipse.png";
import QMA from "../assets/qmark.png";
import CAS from "../assets/casual.png";
import Line2 from "../tools/Line2";
import Questions from "../tools/Questions";
import VerticalStepper from "../tools/VerticalStepper";

function Middle5() {
  return (
    <main className="mt-[150px] mx-[40px] mb-[60px] justify-evenly flex-col">
      <div className="text-center mb-[91px]">
        <p className="font-[700px] text-[32px]">Timeline</p>
        <p>
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
      </div>
      <VerticalStepper />
    </main>
  );
}

export default Middle5;
