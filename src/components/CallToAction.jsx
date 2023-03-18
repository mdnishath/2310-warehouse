import React from "react";

const CallToAction = ({ image, title, number }) => {
  return (
    <div className=" md:h-[600px] h-[500px] bg-hero bg-cover bg-center relative">
      <div className="bg-gradient-to-r from-violet-600 w-full to-indigo-600 opacity-80 absolute top-0 left-0 h-full z-[1]"></div>
      <div className="absolute z-[100] w-full top-0 left-0 h-full px-2">
        <div className="max-w-container mx-auto flex justify-center items-center h-full !z-[100]">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl md:text-6xl font-bold bg-gradient-to-r text-white text-center">
              {title}
            </h1>
            <h2 className="font-bold text-lg md:text-2xl text-white uppercase text-center mt-2">
              Your One-Stop Solution for Warehousing Needs
            </h2>
            <p className="mb-5 md:w-[700px] text-lg mt-2 text-white text-center">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="flex justify-center">
              <button className="btn bg-transparent hover:bg-transparent hover:border-white border-2 border-white">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-gradient-to-r from-violet-600 w-full to-indigo-600 opacity-80 absolute top-0 left-0 h-full">
        <div className="max-w-container mx-auto flex justify-center items-center h-full">
          <div className="max-w-md px-4">
            <h4 className="mb-5 text-2xl md:text-6xl font-bold bg-gradient-to-r text-white text-center">
              {title}
            </h4>
            <p className="mb-5 md:w-[700px] text-lg mt-2 text-white text-center">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="flex justify-center">
              <button className="btn bg-transparent hover:bg-transparent hover:border-white border-2 border-white">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CallToAction;
