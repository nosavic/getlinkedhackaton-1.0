import React from "react";
import Image from "next/image";
import PLF from "../assets/plf.png";

function Flare() {
  return (
    <div>
      <Image width={1500} height={1500} src={PLF} alt="Picture of the author" />
    </div>
  );
}

export default Flare;
