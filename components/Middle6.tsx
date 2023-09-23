import React from "react";
import Image from "next/image";
import ELL from "../assets/Ellipse.png";
import QMA from "../assets/qmark.png";
import CAS from "../assets/casual.png";
import Line2 from "../tools/Line2";
import Questions from "../tools/Questions";
import VerticalStepper from "../tools/VerticalStepper";
import { clash } from "@/app/layout";
import Line from "../tools/Line";

function Middle5() {
  return (
    <main>
      <div className="mt-[50px] mx-[40px] mb-[60px] justify-evenly  flex-col">
        <div className="text-center mb-[50px] ">
          <p
            className={`text-4xl font-extrabold leading-normal ${clash.className}`}
          >
            Timeline
          </p>
          <p>
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
        </div>
        <VerticalStepper />
      </div>
      <Line />
    </main>
  );
}

export default Middle5;
