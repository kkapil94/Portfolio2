import React from "react";
import connect from "../utils/connect.json";

export default function ConnectSection() {
  return (
    <>
      <section>
        <div className="xs:max-lg:mt-8 mt-28 xs:max-lg:mb-14 mb-20 xs:max-4xl:mx-8">
          <h1 className="xs:max-lg:text-4xl lg:max-4xl:text-6xl text-6xl text-center text-white font-black xs:max-md:mb-32 md:max-4xl:mb-44 mb-52">
            Connect with Kapil
          </h1>
          <div className="grid xs:max-md:grid-cols-1 md:max-lg:grid-cols-2 justify-items-center grid-cols-3 xs:max-md:gap-28 gap-4 md:max-lg:[&>*:last-child]:mt-32">
            {connect.map((item) => (
              <div className="border-2 bg-[#0d1b2a] xs:max-sm:w-64 sm:max-md:w-80 border-solid border-white rounded-2xl relative">
                <a href={item.href} target="_blank">
                  <span className="block xs:max-sm:w-48 sm:max-md:w-52 md:max-4xl:w-60 m-auto">
                    <img
                      className="absolute xs:max-sm:w-44 sm:max-md:w-52 md:max-4xl:w-60 xs:max-sm:-translate-y-24 sm:max-md:-translate-y-28 md:max-4xl:-translate-y-32"
                      src={item.img_src}
                      alt=""
                    />
                    {/* <img className="absolute w-44 xs:max-md:bottom-40  bottom-52" src={item.img_src} alt="" /> */}
                  </span>
                </a>
                <div className="xs:max-md:px-4 px-12 xs:max-sm:mt-20 sm:max-md:mt-28 md:max-4xl:mt-36">
                  <h4 className="xs:max-md:text-xl text-2xl text-white xs:max-md:mb-0 ">
                    {item.name}
                  </h4>
                  <p className="xs:max-md:text-lg text-xl text-slate-400 ">
                    {item.desc}
                  </p>
                  <a
                    className="my-6 text-md rounded-2xl px-4 py-1 bg-white font-md inline-block"
                    href={item.href}
                    target="_blank"
                  >
                    Follow on {item.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
