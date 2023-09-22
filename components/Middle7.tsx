import React from "react";
import Image from "next/image";
import ELL from "../assets/Ellipse.png";
import QMA from "../assets/qmark.png";
import CAS from "../assets/casual.png";
import CUP from "../assets/cup.png";
import FIRST from "../assets/first.png";
import SECOND from "../assets/second.png";
import THIRD from "../assets/third.png";
import Line2 from "../tools/Line2";
import Questions from "../tools/Questions";

function Middle5() {
  return (
    <main className="mt-[150px] mx-[40px] mb-[60px]">
      <div className="tablet:text-center phone:text-center flex justify-end tablet:justify-center phone:justify-center mb-[40px]  ">
        <div>
          <p className="text-[35px] font-bold  ">
            Prizes <b className="text-[#D434FE]"> and Rewards</b>{" "}
          </p>
          <p>
            Highlight of the prizes or rewards for winners and for participants
          </p>
        </div>
      </div>
      <div className="justify-evenly flex phone:flex-wrap tablet:flex-wrap  items-center  tablet:flex-row     ">
        <div className=" ">
          <div className="hover:scale-[85%] phone:scale-[80%] ease-in-out duration-300 mb-[30px]  ">
            <Image
              width={600}
              height={600}
              src={CUP}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className="flex  ">
          <div className="hover:scale-[110%] hover:-translate-y-[40px] ease-in-out duration-300 ">
            <Image src={SECOND} alt="Picture of the author" />
          </div>
          <div className="hover:scale-[110%]    hover:-translate-y-[40px] ease-in-out duration-300 ">
            <Image src={FIRST} alt="Picture of the author" />
          </div>
          <div className="hover:scale-[115%] hover:-translate-y-[40px] ease-in-out duration-300 ">
            <Image src={THIRD} alt="Picture of the author" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Middle5;
