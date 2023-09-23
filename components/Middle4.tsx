import React from "react";
import Image from "next/image";
import SIT from "../assets/sit.png";
import ELL from "../assets/Ellipse.png";
import PEO from "../assets/people.png";
import Line from "../tools/Line";
import Button from "../tools/Button";
import Flare from "../tools/Flare";

function Middle4() {
  return (
    <main>
      <div className="mt-[50px] mx-[40px]">
        <div className="justify-evenly flex  flex-wrap items-center     ">
          <div className="relative items-center justify-center flex  max-w-[768px] mb-[30px] ">
            <div className="hover:scale-[110%] ease-in-out duration-300">
              <Image
                width={600}
                height={600}
                src={PEO}
                alt="Picture of the author"
              />
            </div>
            <div className="absolute right-[400px] top-[10px] -z-10 phone:right-[260px] phone:top-[10px] phone:w-[100px] phone:h-[100px] ">
              <div className="animate-bounce">
                <Image
                  width={150}
                  height={150}
                  src={ELL}
                  alt="Picture of the author"
                />
              </div>
            </div>
          </div>
          <div className=" phone:text-center max-w-[535px]">
            <p className="text-4xl font-extrabold custom:w-[300px]">
              Judging Criteria
              <b className="text-[#D434FE]"> Key attributes</b>
            </p>
            <div className="leading-[26px]  mt-[40px]  ">
              <p className="pb-[30px]">
                <b className="text-[#D434FE]">Innovation and Creativity: </b>
                Evaluate the uniqueness and creativity of the solution. Consider
                whether it addresses a real-world problem in a novel way or
                introduces innovative features.
              </p>
              <p className="pb-[30px]">
                <b className="text-[#D434FE]"> Functionality: </b>
                Assess how well the solution works. Does it perform its intended
                functions effectively and without major issues? Judges would
                consider the completeness and robustness of the solution.
              </p>
              <p className="pb-[30px]">
                <b className="text-[#D434FE]"> Impact and Relevance: </b>
                Determine the potential impact of the solution in the real
                world. Does it address a significant problem, and is it relevant
                to the target audience? Judges would assess the potential
                social, economic, or environmental benefits.
              </p>
              <p className="pb-[30px]">
                <b className="text-[#D434FE]"> Technical Complexity: </b>
                Evaluate the technical sophistication of the solution. Judges
                would consider the complexity of the code, the use of advanced
                technologies or algorithms, and the scalability of the solution.
              </p>
              <p className="pb-[30px]">
                <b className="text-[#D434FE]">Adherence to Hackathon Rules: </b>
                Judges will Ensure that the team adhered to the rules and
                guidelines of the hackathon, including deadlines, use of
                specific technologies or APIs, and any other
                competition-specific requirements.
              </p>
              <Button name={"Read More"} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[40px]">
        <Line />
      </div>
    </main>
  );
}

export default Middle4;
