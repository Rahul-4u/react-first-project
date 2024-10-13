import React, { useState } from "react"; // Import useState
import Data from "../data/Data";
import Card from "../Card";
import CategoryBtn from "./CategoryBtn";
import Api from "./Api";

export default function About() {
  const [show, setShow] = useState("");

  const dats = Data.map((data) => {
    return (
      <Card key={data.key} title={data.title} id={data.id} dec={data.dec} />
    );
  });

  return (
    <div className="max-w-[1440px] mx-auto bg-black">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col justify-between lg:flex-row">
          <img
            src="/about-8.jpg"
            className="max-w-sm rounded-lg shadow-2xl h-full"
            alt="About"
          />
          <div className="px-8">
            <h1 className="text-5xl text-white font-bold">About Me</h1>
            <p className="lg:py-6 text-slate-200">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered <a href="#">alteration</a> in some
              form, by injected humour, or randomised words which don't look
              even slightly believable. If you are going to use a passage of
              Lorem Ipsum,
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">{dats}</div>

      <h1>Pet Adoption Platform</h1>
      <CategoryBtn onSelectCategory={setShow} />
      <Api selectedCategory={show} />
    </div>
  );
}
