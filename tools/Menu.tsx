"use client";
import React, { Dispatch, SetStateAction } from "react";
import { Sling as Hamburger } from "hamburger-react";

type Props = {
  setOpenNav: Dispatch<SetStateAction<boolean>>;
};
function Menu({ setOpenNav }: Props) {
  return (
    <div>
      <Hamburger
        onToggle={() => setOpenNav((prev) => !prev)}
        duration={0.3}
        color="currentColor"
        size={32}
      />
    </div>
  );
}

export default Menu;
