import React from "react";
import { BiMenuAltLeft, BiBell } from "react-icons/bi";
const TopBar = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#FFB800] to-[#FF7A00] flex justify-between items-center flex-row h-[6rem] px-4 text-xl text-white mb-5">
      <BiMenuAltLeft />
      <h1 className="text-red-700 font-bold">
        Wasi<span className="text-white">Mart</span>
      </h1>
      <BiBell />
      
      <input
        placeholder=" What are you looking for?"
        className="absolute bottom-0 w-[90%] h-8 left-[5%] rounded-xl bg-[#FFFFFF] text-slate-700 pl-5 py-2 shadow-md shadow-[0px_4px_5px_rgba(157_157_157_0.14) translate-y-3 focus:outline-none"
      />
    </div>
  );
};

export default TopBar;
