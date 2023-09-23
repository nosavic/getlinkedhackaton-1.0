import React from "react";
import Image from "next/image";
import TBI from "../assets/tbi.png";
import Line from "../tools/Line";
import { clash } from "@/app/layout";

function Middle2() {
  return (
    <main>
      <div className="mt-[50px] mx-[40px]">
        <div className="justify-evenly flex  flex-wrap items-center     ">
          <div className="relative items-center justify-center flex  max-w-[768px] mb-[30px] ">
            <div className="hover:scale-[110%] ease-in-out duration-300">
              <Image
                width={600}
                height={600}
                src={TBI}
                alt="Picture of the author"
              />
            </div>
            <div className="absolute text-center justify-center flex font-bold text-2xl w-[100px]">
              The Big Idea
            </div>
          </div>
          <div className=" phone:text-center max-w-[535px]">
            <p
              className={`text-4xl font-extrabold leading-normal ${clash.className}`}
            >
              Introduction to getlinked{" "}
              <b className="text-[#D434FE]">tech Hackathon 1.0</b>
            </p>
            <p className="leading-10 ">
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether
              you&#39;re a coding genius, a design maverick, or a concept
              wizard, you&#39;ll have the chance to transform your ideas into
              reality. Solving real-world problems, pushing the boundaries of
              technology, and creating solutions that can change the world,
              that&#39;s what we&#39;re all about!
            </p>
          </div>
        </div>
        <div className="mt-[60px]"></div>
      </div>
      <Line />
    </main>
  );
}

export default Middle2;
