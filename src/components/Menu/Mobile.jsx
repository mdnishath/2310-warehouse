import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { isMenuOpen } from "../../features/mobile-screen/mobileScreenSlice";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Mobile = () => {
  const dispatch = useDispatch();
  const { mobile, open } = useSelector((state) => state.mobile);
  return (
    <div className="absolute w-3/4 top-0 right-0 bg-indigo-500 h-screen shadow-lg">
      <ul className=" py-8 px-6 font-semibold text-white">
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
      <button onClick={() => dispatch(isMenuOpen(!open))}>
        <AiOutlineClose className="text-2xl text-white absolute top-4 right-2" />
      </button>
    </div>
  );
};

export default Mobile;
