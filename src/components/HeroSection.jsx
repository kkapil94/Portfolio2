import React from "react";
import Typewriter from "./Typewriter";

export default function HeroSection() {
  return (
    <>
      <main className="bg-[#171321] md:max-2xl:py-24 xs:max-md:py-12 xs:max-md:px-6 md:max-xl:px-8 xl:max-2xl:px-28 ">
        <div className="grid grid-cols-3 xs:max-md:grid-cols-1 items-center">
          <div className="col-span-2 xs:max-md:mt-8">
            <div className="text-white font-bold text-6xl flex">
              <h1 className="text-transparent xs:max-sm:text-3xl sm:max-md:4xl md:max-lg:text-5xl bg-clip-text bg-gradient-to-r from-[#d86bff] via-[#57bac6] to-[#c7ff70]">
                <Typewriter />
              </h1>
              <h1 className="xs:max-sm:text-3xl sm:max-md:4xl md:max-lg:text-5xl">Everyone,</h1>
            </div>
            <h1 className="xs:max-sm:text-3xl sm:max-md:4xl md:max-lg:text-5xl lg:max-2xl:text-6xl font-bold text-white xs:max-md:mt-2 md:max-lg:mt-8 lg:max-2xl:mt-12 leading-[5rem]">
              I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFDEE9] to-[#B5FFFC]">
                Kapil
              </span>
              ,<br />
              <div className="md:max-2xl:text-xl xs:max-sm:text-sm md:max-2xl:w-4/6 xs:max-md:mt-2 md:max-4xl:mt-6">
                a full-stack developer driven by a passion for technology and
                a curious mind, I love diving into both front-end and back-end
                aspects, crafting user-friendly experiences, and building
                strong, adaptable systems.
              </div>
            </h1>
          </div>
          <div className="m-auto xs:max-md:order-first">
            <span>
              <img className="w-80" src="/images/profile-pic.png" alt="" />
            </span>
          </div>
        </div>
      </main>
    </>
  );
}
