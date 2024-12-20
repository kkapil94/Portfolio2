import React from "react";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <>
      <header className="bg-[#171321] ">
        <Navbar />
        <div
          id="home"
          className="h-1 w-full bg-gradient-to-r from-[#ff87d4] via-[#ffe742] to-[#87fffb] xs:max-md:mt-[4.5rem] md:mt-24 "
        ></div>
      </header>
    </>
  );
}
