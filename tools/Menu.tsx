"use client"
import React from "react";
import { Sling as Hamburger } from "hamburger-react";

function Menu() {
  return (
    <div>
      <Hamburger duration={0.3} color="currentColor" size={32} />
    </div>
  );
}

export default Menu;
