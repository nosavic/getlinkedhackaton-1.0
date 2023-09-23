import React from "react";
import { clash } from "@/app/layout";

function Middle10() {
  return (
    <main>
      <div className="flex flex-wrap justify-evenly phone:flex-col tablet:flex-col mx-[70px]  phone:gap-[30px] tablet:gap-[30px] mb-[30px]">
        <div className="flex flex-col max-w-[400px]">
          <p
            className={`text-3xl font-extrabold leading-normal ${clash.className}`}
          >
            get<b className="text-[#D434FE]">linked</b>
          </p>
          <p className="leading-normal">
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
        </div>
        <div className="flex flex-col gap-[20px]">
          <p className="text-[#D434FE] font-bold">Useful Links</p>
          <p>Overview</p>
          <p>Timeline</p>
          <p>FAQs</p>
          <p>Register</p>
          <div>
            <p>Follow Us</p>
          </div>
        </div>
        <div>
          <p className="text-[#D434FE] font-bold mb-[10px] gap-[30px] ">
            Contact Us
          </p>
          <div className="mb-[20px]">
            <p>+234 6707653444</p>
          </div>
          <div>
            <p className="max-w-[140px] leading-normal">
              27,Alara Street Yaba 100012 Lagos State
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Middle10;
