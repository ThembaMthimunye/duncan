import React from "react";
import image from "../assets/images/img.png";

const Navbar = () => {
  return (
    <div className="flex justify-around font-mono">
      <div>
        <img src={image} alt=""  className="w-[340px] hover:scale-110 duration-300"/ >
      </div>
      <div className="grid grid-cols-6 items-center text-2xl space-x-15 font-semibold  ">
        <a className="hover:underline hover:text-red-500" href="">LEARN</a>
        <a className="hover:underline hover:text-red-500" href="">PRICE</a>
        <a className="hover:underline hover:text-red-500" href="">TRAINERS-</a>
        <a className="hover:underline hover:text-red-500" href="">CARS</a>
        <a className="hover:underline hover:text-red-500" href="">ON-LINE</a>
        <a className="hover:underline hover:text-red-500" href="">FEEDBACK</a>
      </div>

      
    </div>
  );
};

export default Navbar;
