import React from "react";
import projects from "../utils/projects.json";

export default function ProjectSection() {
  return (
    <>
      <section>
        <div className="xs:max-lg:my-10 my-20 mb-24 xs:max-lg:mx-8 mx-8 ">
          <h1 className="xs:max-lg:text-4xl text-6xl text-center text-white font-black xs:max-lg:mb-10 lg:max-4xl:mb-20">
            Projects By Kapil
          </h1>
          <div className="grid xs:max-md:grid-cols-1 md:max-lg:grid-cols-2 justify-items-center  grid-cols-3 xs:max-md:gap-8 md:max-4xl:gap-8">
            {projects &&
              projects.map((item) => (
                <div className="border-2 xs:max-sm:w-[17rem] sm:max-4xl:w-80  bg-[#0d1b2a] border-solid border-white rounded-2xl">
                  <span>
                    <img
                      className="rounded-t-2xl h-56"
                      src={item.img_src}
                      alt=""
                    />
                  </span>
                  <div className="xs:max-md:px-4 px-6 xs:max-md:mt-0 mt-4">
                    <h4 className="xs:max-md:text-sm text-xl text-white xs:max-md:my-2 my-6">{item.name}</h4>
                    <p className="xs:max-md:text-xs text-gray-300">{item.desc}</p>
                    <div className="my-6">
                      <a href={item.project} target="_blank">
                        <button className="group rounded-3xl bg-white py-1 xs:max-md:text-sm xs:max-md:px-2 px-4">
                          Check it out
                          <img
                            className="transition-all duration-150 ease-in-out inline group-hover:relative relative left-0 group-hover:left-1 ml-3 xs:max-md:w-4"
                            src="/images/next.png"
                            alt=""
                          />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
