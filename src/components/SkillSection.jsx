import React from "react";
import front from "../utils/front.json";
import back from "../utils/back.json";
import devops from "../utils/devops.json";

export default function SkillSection() {
  return (
    <>
      <section className="xs:max-md:mx-4 md:max-lg:mx-4 lg:mx-4 xs:max-lg:mt-10 lg:mt-14 xs:max-lg:mb-16 lg:mb-24">
        <h1 className="xs:max-lg:text-4xl text-6xl text-center text-white font-extrabold xs:max-lg:mb-10 mb-14">
          Skills & expertise
        </h1>
        <div className="grid  xs:max-md:grid-cols-1 justify-items-center md:max-lg:grid-cols-2  grid-cols-3 gap-4">
          <div className="border-2 xs:max-sm:w-38 sm:max-md:w-80 md:w-[21rem] bg-[#0d1b2a] border-solid border-white rounded-2xl py-1">
            <h2 className="xs:max-lg:text-2xl text-4xl xs:max-lg:my-2 my-4 text-center text-white font-bold">
              Frontend
            </h2>
            <div className="h-[1px]  w-full bg-white"></div>
            {/* <div className="px-4 my-8 flex flex-wrap items-center justify-center gap-4"> */}
            <div className="px-4 my-8 grid grid-cols-2 justify-items-center gap-4">
              {front &&
                front.map((item) => (
                  <div className="xs:max-md:w-28 w-32 h-10 bg-gray-900 border-solid border-2 border-gray-600 flex items-center justify-between p-4 rounded-md">
                    <span className="text-md text-white">{item.name}</span>
                    <span>
                      <img className=" h-7" src={item.img_src} alt="" />
                    </span>
                  </div>
                ))}
            </div>
          </div>
          <div className="border-2 xs:max-sm:w-38 sm:max-md:w-80 md:w-[21rem] bg-[#0d1b2a] border-solid border-white rounded-2xl py-1">
            <h2 className="xs:max-lg:text-2xl text-4xl xs:max-lg:my-2 my-4 text-center text-white font-bold">
              Backend
            </h2>
            <div className="h-[1px]  w-full bg-white"></div>
            <div className="px-4 my-8 grid grid-cols-2 justify-items-center gap-4">
              {back &&
                back.map((item) => (
                  <div className="xs:max-md:w-28 w-32 h-10 bg-gray-900 border-solid border-2 border-gray-600 flex items-center justify-between p-4 rounded-md">
                    <span className="text-sm text-white">{item.name}</span>
                    <span>
                      <img className="h-7" src={item.img_src} alt="" />
                    </span>
                  </div>
                ))}
            </div>
          </div>
          <div className="border-2 xs:max-sm:w-38 sm:max-md:w-80 md:w-[21rem] bg-[#0d1b2a] border-solid border-white rounded-2xl py-1">
            <h2 className="xs:max-lg:text-2xl text-4xl xs:max-lg:my-2 my-4 text-center text-white font-bold">
              Devops
            </h2>
            <div className="h-[1px]  w-full bg-white"></div>
            <div className="px-4 my-8 grid grid-cols-2 justify-items-center gap-4">
              {devops &&
                devops.map((item) => (
                  <div className="xs:max-md:w-28 w-32 h-10 bg-gray-900 border-solid border-2 border-gray-600 flex items-center justify-between p-4 rounded-md">
                    <span className="text-md text-white">{item.name}</span>
                    <span>
                      <img className="h-7" src={item.img_src} alt="" />
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
