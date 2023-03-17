import React from "react";
import { TfiLocationPin } from "react-icons/tfi";
const Located = () => {
  return (
    <div className="relative px-2 md:px-0">
      <div className="max-w-container mx-auto flex flex-col md:flex-row py-10 gap-4 items-center ">
        <div className="w-full">
          <div className="flex justify-center md:justify-start gap-4 items-center">
            <TfiLocationPin className="md:text-4xl text-lg text-blue-500 " />
            <h3 className="md:text-4xl text-base  font-bold uppercase text-indigo-500">
              LOCATED IN SOUTHERN INDIANA
            </h3>
          </div>
          <div className="mt-4 text-base">
            <p>
              <strong>Lorem Ipsum</strong> is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s,
            </p>
            <p className="mt-4">
              <strong>Lorem Ipsum</strong> is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s,
            </p>
          </div>
        </div>
        <div className="w-full">
          <figure>
            <img src={"images/map.png"} alt="map" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Located;
