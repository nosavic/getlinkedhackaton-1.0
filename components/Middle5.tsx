import React from "react";
import Image from "next/image";
import ELL from "../assets/Ellipse.png";
import QMA from "../assets/qmark.png";
import CAS from "../assets/casual.png";
import Line2 from "../tools/Line2";
import Questions from "../tools/Questions";
import { clash } from "@/app/layout";
import Line from "../tools/Line";

function Middle5() {
  return (
    <main>
      <div className="mt-[130px] mx-[40px] mb-[60px]">
        <div className="justify-evenly flex  flex-wrap-reverse items-center  mb-[40px]   ">
          <div className=" phone:text-center max-w-[535px]">
            <p
              className={`text-4xl font-extrabold leading-normal ${clash.className}`}
            >
              Frequently Asked
              <b className="text-[#D434FE]"> Question</b>
            </p>
            <div className="leading-[26px]  mt-[40px] mb-[20px]  ">
              <p className="">
                We got answers to the questions that you might want to ask about
                getlinked Hackathon 1.0
              </p>
            </div>
            <div className="">
              <Questions
                text={"Can I work on a project I started before the hackathon?"}
              />
              <Questions
                text={"What happens if I need help during the hackathon?"}
              />
              <Questions
                text={"What happens if I don't have an idea for a project?"}
              />
              <Questions
                text={"Can I join a team or do I have to come with one?"}
              />
              <Questions text={"What happens after the hackathon ends"} />
              <Questions
                text={"Can I work on a project I started before the hackathon?"}
              />
            </div>
          </div>
          <div className="relative items-center justify-center flex  max-w-[768px] mb-[30px]  ">
            <div className="hover:scale-[110%] ease-in-out duration-300 ">
              <Image
                width={600}
                height={600}
                src={CAS}
                alt="Picture of the author"
              />
            </div>
            <div className="absolute -z-10 phone:top-[-30px] flex top-[-80px] phone:gap-0 gap-[100px]">
              <div className="   phone:mt-[20px] mt-[60px]  phone:w-[100px] phone:h-[100px] mark ">
                <div className="">
                  <Image
                    width={40}
                    height={150}
                    src={QMA}
                    alt="Picture of the author"
                  />
                </div>
              </div>
              <div className="  phone:mt-[-50px]   phone:w-[100px] phone:h-[100px] mark ">
                <div className="">
                  <Image
                    width={60}
                    height={150}
                    src={QMA}
                    alt="Picture of the author"
                  />
                </div>
              </div>
              <div className=" phone:mt-[-10px] mt-[50px] phone:w-[100px] phone:h-[100px] mark ">
                <div className="">
                  <Image
                    width={40}
                    height={150}
                    src={QMA}
                    alt="Picture of the author"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Line />
    </main>
  );
}

export default Middle5;
