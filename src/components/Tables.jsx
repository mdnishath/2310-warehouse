import React from "react";
import Constructions from "./Constructions";
import Features from "./Features";
import Mechanical from "./Mechanical";
const Tables = () => {
  return (
    <div className="py-10 relative px-2">
      <div className="max-w-container mx-auto grid md:grid-cols-2 gap-4 r">
        <Features />
        <div className="grid grid-cols-1 gap-4">
          <Constructions />
          <Mechanical />
          <figure>
            <img src="images/hero.jpg" alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Tables;
