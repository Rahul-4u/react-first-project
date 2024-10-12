import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className="bg-neutral-950 max-w-[1440px]  mx-auto ">
      <div className="navbar  w-11/12 mx-auto text-white justify-center items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100  rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                {" "}
                <Link to={"/"}>Home</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to={"/about"}>About</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to={"/demo"}>Demo</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to={"/contact"}>Contact</Link>{" "}
              </li>
            </ul>
          </div>
          <a className="btn-ghost i text-xl">
            <img src="/logo.png" alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-4">
            <li>
              {" "}
              <Link to={"/"}>Home</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to={"/about"}>About</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to={"/demo"}>Demo</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to={"/contact"}>Contact</Link>{" "}
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn  bg-black text-white">Buy Now</a>
        </div>
      </div>
    </div>
  );
}
