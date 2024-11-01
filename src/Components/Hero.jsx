import React from "react";
import car from "../assets/images/car.png";
import CardSection from "./CardSection";

const Hero = () => {
  return (
    <div className="font-mono">
      <div className="flex justify-center items-center  ">
        <div className="flex flex-col items-center justify-center space-y-10">
          <h1 className="text-6xl font-bold max-w-[600px]">
            BECOME A DRIVER QUICK & EASY
          </h1>
          <p className="text-2xl">Drivers Licence And Learners Licence </p>
          <div className="flex gap-10">
            <button className="bg-red-500 px-[5rem] py-4 text-white">
              ENTRY
            </button>
            <button className="underline px-10 py-4 text-xl hover:no-underline duration-700">
              CALL ME HERE
            </button>
          </div>
        </div>
        <div className=" right-20  right-20 -mr-[30rem] bg-red-500 rounded-l-full rounded-b h-full w-[800px]">
          <img src={car} alt="" className="w-[900px] mt-[20vh]" />
        </div>
      </div>
      <div className="flex justify-center items-center gap-10">
        <CardSection />
        <CardSection />
      </div>
    </div>
  );
};

export default Hero;
