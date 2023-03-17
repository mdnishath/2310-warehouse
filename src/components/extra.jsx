import React from "react";

const extra = () => {
  return (
    <div className="grid grid-cols-2 mt-10">
      <div className="">
        <h4 className="text-2xl font-semibold text-indigo-500">
          Proximity to Interstates:
        </h4>
        <ul className="list-disc pl-5">
          <li>I-264 -1 mile</li>
          <li>I-64 – 1 mile</li>
          <li>I-65 – 3 miles</li>
          <li>I-71 – 4 miles</li>
          <li>I-265 – 6 miles</li>
        </ul>
      </div>
      <div className="">
        <h4 className="text-2xl font-semibold text-indigo-500">
          Proximity to Cities:
        </h4>
        <ul className="list-disc pl-5">
          <li>Jeffersonville, IN - 4 miles</li>
          <li>New Albany, IN - 4 miles</li>
          <li>Clarksville, IN – 6 miles</li>
          <li>Shepherdsville, KY – 23 miles</li>
          <li>Lebanon Junction, KY – 35 miles</li>
        </ul>
      </div>
    </div>
  );
};

export default extra;
