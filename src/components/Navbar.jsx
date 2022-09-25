import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

  return (
    <div className="Nav h-14 w-full flex justify-between bg-stone-800">
      <ul className="left-nav h-14 flex">
        <li className="ml-10">
          <Link to="/">
            <img
              src="/src/assets/img/logo.png"
              alt="Logo"
              className="w-32 h-14"
            />
          </Link>
        </li>
        <li className="no-underline text-white font-lg px-4 py-2 w-fit bg-stone-800 hover:bg-stone-700 flex items-center mx-2">
          <Link to="/">Home</Link>
        </li>
        <li className="no-underline text-white font-lg px-4 py-2 w-fit bg-stone-800 hover:bg-stone-700 flex items-center">
          <Link to="/photo">Kho ảnh</Link>
        </li>
      </ul>
(
        <ul className="right-nav flex justify-around w-52">
          <Link to="/register">
            <li className="rounded-md no-underline text-white font-lg px-4 py-2 w-fit h-full bg-red-700 hover:bg-red-800 flex items-center justify-center w-24">
              Register
            </li>
          </Link>
          <Link to="/login">
            <li className="rounded-md no-underline text-white font-lg px-4 py-2 w-fit h-full bg-orange-600 hover:bg-orange-700 flex items-center justify-center w-24">
              Login
            </li>
          </Link>{" "}
        </ul>
      )

      (
        <ul className="right-nav flex justify-around w-52">
          <Link to="/profile">
            <li className="rounded-md no-underline text-white font-lg px-4 py-2 w-fit h-full bg-blue-400 hover:bg-blue-500 flex items-center justify-center w-24">
              Profile
            </li>
          </Link>

          <Link to="/logout">
            <li className="rounded-md no-underline text-white font-lg px-4 py-2 w-fit h-full bg-red-700 hover:bg-red-800 flex items-center justify-center w-24">
              Logout
            </li>
          </Link>
        </ul>
      )
    </div>
  );
}
