import React from "react";
import Image from "next/image";
import PAS from "../assets/PAS.png";
import LP from "../assets/LP.png";
import WW from "../assets/WW.png";
import CUP from "../assets/cup.png";
import FIRST from "../assets/first.png";
import SECOND from "../assets/second.png";
import THIRD from "../assets/third.png";
import Line2 from "../tools/Line2";
import Questions from "../tools/Questions";
import VerticalLine from "../tools/VerticalLine";
import VerticalLine2 from "../tools/VerticalLine2";
import HoriLine from "../tools/HoriLine";
import { clash } from "@/app/layout";

function Middle5() {
  return (
    <main className="mt-[150px] mx-[40px] mb-[60px]">
      <div className="text-center  mb-[40px]  ">
        <div>
          <p
            className={`text-4xl font-extrabold leading-normal ${clash.className}`}
          >
            Partners and Sponsors
          </p>
          <p>
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>
      </div>
      <div className="justify-evenly flex phone:flex-wrap tablet:flex-wrap  items-center  tablet:flex-row     ">
        <div>
          <div className=" ">
            <Image src={PAS} alt="Picture of the author" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Middle5;
