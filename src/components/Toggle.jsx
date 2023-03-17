import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { isMenuOpen } from "../features/mobile-screen/mobileScreenSlice";

const Toggle = () => {
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.mobile);

  return (
    <div className="absolute top-0 right-0 origin-center">
      {open ? (
        <button onClick={() => dispatch(isMenuOpen(!open))}>
          <AiOutlineClose className="text-2xl text-white" />
        </button>
      ) : (
        <button onClick={() => dispatch(isMenuOpen(!open))}>
          <AiOutlineMenu className="text-2xl text-white" />
        </button>
      )}
    </div>
  );
};

export default Toggle;
