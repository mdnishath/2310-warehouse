import React from "react";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

const Desktop = () => {
  return (
    <div className="flex items-center gap-8">
      <ul className="flex gap-6 font-semibold text-white">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="flex justify-center gap-4">
        <button className="btn btn-primary border-0">
          <BsFillTelephoneInboundFill />
        </button>
        <button className="btn btn-primary border-0">
          <FaMapMarkerAlt />
        </button>
      </div>
    </div>
  );
};

export default Desktop;
