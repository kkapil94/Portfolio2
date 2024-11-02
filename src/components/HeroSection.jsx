import React from "react";
import Typewriter from "./Typewriter";

export default function HeroSection() {
  return (
    <>
      <main className="bg-[#171321] md:py-24 xs:max-md:py-12 xs:max-md:px-6 md:max-xl:px-8 xl:px-28 ">
        <div className="grid xs:max-2xl:grid-cols-3 2xl:grid-cols-2 xs:max-md:grid-cols-1 items-center">
          <div className="xs:max-2xl:col-span-2 xs:max-md:mt-8">
            <div className="text-white font-bold text-6xl flex">
              <h1 className="text-transparent xs:max-sm:text-3xl sm:max-md:text-4xl md:max-lg:text-5xl bg-clip-text bg-gradient-to-r from-[#d86bff] via-[#57bac6] to-[#c7ff70]">
                <Typewriter />
              </h1>
              <h1 className="xs:max-sm:text-3xl sm:max-md:text-4xl md:max-lg:text-5xl ">
                Everyone,
              </h1>
            </div>
            <h1 className="xs:max-sm:text-3xl sm:max-md:4xl md:max-lg:text-5xl lg:text-6xl font-bold text-white xs:max-md:mt-2 md:max-lg:mt-8 lg:mt-12 leading-[5rem]">
              I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFDEE9] to-[#B5FFFC]">
                Kapil
              </span>
              ,<br />
              <div className="md:text-xl xs:max-md:text-sm md:w-4/6  xs:max-md:mt-2 md:mt-6">
                a full-stack developer driven by a passion for technology and a
                curious mind, I love diving into both front-end and back-end
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
