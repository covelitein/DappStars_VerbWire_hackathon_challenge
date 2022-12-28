import React from "react";
import img from "../assets/image/cartoonr.png"
import { FaRegTimesCircle, FaTimes } from "react-icons/fa"
import { setGlobalState, useGlobalState } from "../store"

const Loader = () => {
    const [opacity] = useGlobalState("AddToursModalOpacity");
    const [visibility] = useGlobalState("AddToursVisibility");
    const [translate] = useGlobalState("AddTourModalTranslate");

    const handleClick = () => {
      setGlobalState("AddToursModalOpacity", "opacity-0");
      setGlobalState("AddToursVisibility", "invisible");
      setGlobalState("AddTourModalTranslate", "-translate-y-5");
    };
  return (
    <div
      className={`fixed h-full w-full z-50 top-0 left-0 flex justify-center items-center ${opacity} ${visibility} transition-all duration-300 max-md:px-4`}
    >
      <div
        className={`w-[20rem] min-h-[5rem] max-md:w-[17rem] rounded-md bg-gray-900 relative z-50 ${translate} transition-all duration-300 pb-5 shadow-md shadow-pink-500`}
      >
        <FaRegTimesCircle
          className="text-3xl max-lg:text-2xl absolute top-2 right-4 text-red-600 hover:text-red-700 cursor-pointer transition-[color] duration-100"
          onClick={handleClick}
        />
        <div className="flex items-center md:mt-5 space-x-6 md:px-11 mt-7 px-6">
          <div className="border-4 border-[transparent] border-t-white border-b-white rounded-full h-9 w-9 spin max-sm:h-6 max-sm:w-6 "></div>
          <h1 className="font-[Opensans]">Loading...</h1>
        </div>
      </div>
      <div
        className="absolute w-full h-full bg-[rgba(0,0,0,0.9)] left-0 top-0"
        onClick={handleClick}
      ></div>
    </div>
  );
};

export default Loader;
