import React from "react";
import Toggle from "./Toggle";
import { useSelector, useDispatch } from "react-redux";
import Desktop from "./Menu/Desktop";
import Mobile from "./Menu/Mobile";
const Navbar = () => {
  const { mobile, open } = useSelector((state) => state.mobile);
  return (
    <div className=" bg-gr1 py-4 px-2 md:px-0 absolute w-full z-50">
      <div className="max-w-container mx-auto relative flex items-center justify-between">
        <a href="" className="text-2xl font-bold text-white ">
          2310 W Main
        </a>
        {mobile ? <Toggle /> : <Desktop />}
      </div>
      {open && <Mobile />}
    </div>
  );
};

export default Navbar;
