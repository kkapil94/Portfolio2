import React from "react";
import front from "../utils/front.json";
import back from "../utils/back.json";
import other from "../utils/other.json";

export default function Skills() {
  return (
    <>
      <section className="mx-28 mt-28 mb-12">
        <h1 className="text-6xl text-center text-white font-extrabold mb-12">
          Skills & expertise
        </h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="border-2 bg-[#0d1b2a] border-solid border-white rounded-2xl py-1">
            <h2 className="text-4xl text-center text-white font-bold">
              Frontend
            </h2>
            <div className="h-[1px]  w-full bg-white"></div>
            <div className="px-4 my-4 flex flex-wrap items-center justify-center gap-4">
              {front &&
                front.map((item) => (
                  <div className="w-32 h-10 bg-gray-900 border-solid border-2 border-gray-600 flex items-center justify-between p-4 rounded-md">
                    <span className="text-md text-white">{item.name}</span>
                    <span>
                      <img className="h-7" src={item.img_src} alt="" />
                    </span>
                  </div>
                ))}
            </div>
          </div>
          <div className="border-2 bg-[#0d1b2a] border-solid border-white rounded-2xl py-1">
            <h2 className="text-4xl text-center text-white font-bold">
              Backend
            </h2>
            <div className="h-[1px]  w-full bg-white"></div>
            <div className="px-4 my-4 flex flex-wrap items-center justify-center gap-4">
              {back &&
                back.map((item) => (
                  <div className="w-32 h-10 bg-gray-900 border-solid border-2 border-gray-600 flex items-center justify-between p-4 rounded-md">
                    <span className="text-sm text-white">{item.name}</span>
                    <span>
                      <img className="h-7" src={item.img_src} alt="" />
                    </span>
                  </div>
                ))}
            </div>
          </div>
          <div className="border-2 bg-[#0d1b2a] border-solid border-white rounded-2xl py-1">
            <h2 className="text-4xl text-center text-white font-bold">
              Other
            </h2>
            <div className="h-[1px]  w-full bg-white"></div>
            <div className="px-4 my-4 flex flex-wrap items-center justify-center gap-4">
              {other &&
                other.map((item) => (
                  <div className="w-32 h-10 bg-gray-900 border-solid border-2 border-gray-600 flex items-center justify-between p-4 rounded-md">
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