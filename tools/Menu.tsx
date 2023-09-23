"use client";
import React from "react";
import { Sling as Hamburger } from "hamburger-react";

function Menu(prop: any) {
  function theClick3() {
    prop.theClick2();
  }

  return (
    <div>
      <Hamburger
        onToggle={theClick3}
        duration={0.3}
        color="currentColor"
        size={32}
      />
    </div>
  );
}

export default Menu;
