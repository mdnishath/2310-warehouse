import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="bg-indigo-500 pt-20 px-2">
      <div>
        <div className="max-w-container mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <a href="" className="text-2xl font-bold text-white ">
              2310 W Main
            </a>
            <p className="text-white mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
              perspiciatis dicta quia autem voluptatum totam, dignissimos iusto
              quam nemo ex.
            </p>
          </div>
          <div className="md:pl-20">
            <h4 className="text-2xl font-bold text-white">Quicklinks:</h4>
            <ul className="text-white pl-4 mt-4 text-lg font-semibold">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Locations</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-white">Contacts:</h4>
            <div className="mt-4">
              <div className="flex gap-4 items-center text-white">
                <FaMapMarkerAlt />
                <p>2310 W Main St, Louisville, KY 40212, United States</p>
              </div>
              <div className="flex gap-4 items-center text-white mt-4">
                <BsFillTelephoneOutboundFill />
                <p>+15029560427</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 text-white bg-indigo-600 py-5">
        <p className="text-center">© 2023 Nishth. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
