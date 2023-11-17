import React from "react";
import Typewriter from "./Typewriter";

export default function HeroSection() {
  return (
    <>
      <main className="bg-[#171321] pt-20 px-28 h-[calc(100vh-5.25rem)]">
        <div className="grid grid-cols-3  items-center">
          <div className="col-span-2"> 
            <div className="text-white font-bold text-6xl flex">
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#d86bff] via-[#57bac6] to-[#c7ff70]">
                <Typewriter />
              </h1>
              <h1>Everyone,</h1>
            </div>
            <h1 className="text-6xl font-bold text-white mt-12 leading-[5rem]">
              I'm <span className="text-teal-400">Kapil</span>,<br />a
              Full-Stack Developer
            </h1>
          </div>
          <div className="m-auto">
            <span><img className="w-80" src="/images/profile-pic.png" alt="" /></span>
          </div>
        </div>
      </main>
    </>
  );
}
