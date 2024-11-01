import React from "react";
import { PiProjectorScreenChartThin } from "react-icons/pi";

const CardItem = ({ title, description }) => (
  <div className="flex items-start space-x-4">
    <PiProjectorScreenChartThin className="text-7xl text-red-500" />
    <div>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p>{description}</p>
    </div>
  </div>
);

const CardSection = () => {
  return (
    <section className="space-y-10 bg-slate-100 p-10 max-w-[40rem]">
      <div className="space-y-8">
        <h1 className="text-2xl font-bold">Drivers License</h1>
        <p className="max-w-[20rem]">
          Theoretical driving instruction and passing the exam at the testing
          station.
        </p>
      </div>

      <CardItem
        title="Learn"
        description="Do online at convenient locations or attend classes at driving schools."
      />
      <CardItem
        title="Learn"
        description="Do online at convenient locations or attend classes at driving schools."
      />
      <CardItem
        title="Learn"
        description="Do online at convenient locations or attend classes at driving schools."
      />
      <CardItem
        title="Learn"
        description="Do online at convenient locations or attend classes at driving schools."
      />

      <p className="text-3xl font-semibold">R1000</p>
      <button className="bg-red-500 px-[5rem] py-4 text-white  hover:bg-red-600 transition duration-300">
        ENTRY
      </button>
    </section>
  );
};

export default CardSection;
