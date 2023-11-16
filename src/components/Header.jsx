import React from "react";

export default function Header() {
  return (
    <>
      <header className="bg-[#171321]">
        <div className="h-20 flex items-center justify-center">
          <span className="flex justify-center ">
            <img className="h-12" src="/images/kLogo.png" alt="" />
          </span>
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-[#ff87d4] via-[#ffe742] to-[#87fffb]"></div>
      </header>
    </>
  );
}
