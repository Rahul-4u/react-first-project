import React, { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import About from "./About";

export default function () {
  const [text] = useTypewriter({
    words: ["Js developer", "From", "Typewriter", "Hook!"],
    loop: true,
  });

  return (
    <div className="max-w-[1440px] mx-auto  bg-neutral-950 md:py-2 lg:py-0 py-10">
      <div className=" w-11/12 mx-auto flex lg:flex-row flex-col-reverse items-center space-y-8 text-white ">
        <div className="grid lg:col-span-6 col-span-12">
          <div className=" lg:space-y-5 flex-col ">
            <p className=" ">Welcome to my World</p>
            <h1 className="lg:text-5xl text-2xl font-bold">Hi, I’m Jone Doe</h1>
            <div>
              <span className="flex gap-2 lg:text-5xl text-3xl font-bold text-green-500">
                <h1 className="text-white">I am a, </h1> {text}
              </span>
              <Cursor cursorColor="red" />
            </div>
            <p className="py-1">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>

            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
        <div className="grid lg:col-span-6 col-span-10  ">
          <img src="/about-9.jpg" alt="" />
        </div>
      </div>
      <About />
    </div>
  );
}
