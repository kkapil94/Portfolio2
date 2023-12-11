import React from "react";

export default function ConnectSection() {
  return (
    <>
      <section>
        <div className="mt-28 mb-20 mx-28">
          <h1 className="text-6xl text-center text-white font-black mb-52">
            Connect With Kapil
          </h1>
          <div className=" grid grid-cols-3 gap-4">
            <div className="border-2 bg-[#0d1b2a] border-solid border-white rounded-2xl relative">
              <a href="https://www.linkedin.com/in/kapil-khatri-151413249/" target="_blank">
                <span className="block w-60 m-auto pb-20">
                <img className="absolute bottom-52" src="/images/linkedin-logo.svg" alt="" />
              </span>
              </a>
              <div className="px-12 mt-12">
                <h4 className="text-2xl text-white mb-8">LinkedIn</h4>
                <p className="text-xl text-slate-400 mb">You can follow Kapil on LinkedIn</p>
                <a className="my-6 text-md rounded-2xl px-4 py-1 bg-white font-md inline-block" href="https://www.linkedin.com/in/kapil-khatri-151413249/" target="_blank">Follow on LinkedIn</a>
              </div>
            </div>
            <div className="border-2 bg-[#0d1b2a] border-solid border-white rounded-2xl relative">
              <a href="https://github.com/kkapil94" target="_blank">
                <span className="block w-60 m-auto pb-20">
                <img className="absolute bottom-52" src="/images/github.png" alt="" />
              </span>
              </a>
              <div className="px-12 mt-12">
                <h4 className="text-2xl text-white mb-8">Github</h4>
                <p className="text-xl text-slate-400 mb">You can see Kapil's work on github.</p>
                <a className="my-6 text-md rounded-2xl px-4 py-1 bg-white font-md inline-block" href="https://github.com/kkapil94" target="_blank">Follow on Github</a>
              </div>
            </div>
            <div className="border-2 bg-[#0d1b2a] border-solid border-white rounded-2xl relative">
              <a href="https://twitter.com/_kapil_94" target="_blank">
                <span className="block w-60 m-auto pb-20">
                <img className="absolute bottom-52" src="/images/twitter.svg" alt="" />
              </span>
              </a>
              <div className="px-12 mt-12">
                <h4 className="text-2xl text-white mb-8">Twitter</h4>
                <p className="text-xl text-slate-400 mb">You can follow Kapil on Twitter</p>
                <a className="my-6 text-md rounded-2xl px-4 py-1 bg-white font-md inline-block" href="https://twitter.com/_kapil_94" target="_blank">Follow on Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
