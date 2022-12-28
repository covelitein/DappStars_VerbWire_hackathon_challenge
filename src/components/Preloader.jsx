import React from 'react'
import img from "../assets/image/loader.svg"

const Preloader = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-full flex bg-black text-xl text-red-600 justify-center items-center">
      <img src={img} alt={img} />
    </div>
  );
}

export default Preloader
