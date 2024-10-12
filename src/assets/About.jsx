import React from "react";

export default function About() {
  return (
    <div className="max-w-[1440px] mx-auto bg-black">
      <div className="hero  min-h-screen ">
        <div className="hero-content flex-col justify-between lg:flex-row ">
          <img
            src="/about-8.jpg"
            className="max-w-sm rounded-lg shadow-2xl h-ful"
          />
          <div className="px-8">
            <h1 className="text-5xl text-white font-bold">About Me</h1>
            <p className="lg:py-6 text-slate-200">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered <a href="#">alteration</a> in some
              form, by injected humour, or randomised words which dont look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum,
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
