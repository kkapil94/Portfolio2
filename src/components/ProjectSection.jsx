import React from "react";
import projects from "../utils/projects.json";

export default function ProjectSection() {
  return (
    <>
      <section>
        <div className="my-20 mb-24 mx-28 ">
          <h1 className="text-6xl text-center text-white font-black mb-20">
            Projects By Kapil
          </h1>
          <div className="grid grid-cols-3 gap-4">
            {projects &&
              projects.map((item) => (
                <div className="border-2 bg-[#0d1b2a] border-solid border-white rounded-2xl">
                  <span>
                    <img
                      className="rounded-t-2xl h-56"
                      src={item.img_src}
                      alt=""
                    />
                  </span>
                  <div className="px-6 mt-4">
                    <h4 className="text-xl text-white my-6">{item.name}</h4>
                    <p className=" text-gray-300">{item.desc}</p>
                    <div className="my-6">
                      <a href={item.project} target="_blank">
                        <button className=" rounded-3xl bg-white py-1 px-4">
                          Check it out &nbsp;&nbsp;&nbsp;&nbsp;
                          <img
                            className="inline"
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
