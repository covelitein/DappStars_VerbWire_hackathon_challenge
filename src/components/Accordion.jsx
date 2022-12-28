import React from 'react'
import { useState,useRef } from "react"
import { FaChevronDown } from "react-icons/fa"

const Accordion = ({question,children}) => {
    const [isOpen, setOpen] = useState(false)
    const el = useRef()

    const handleClick = () => {
      if (!isOpen) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    };
  return (
    <li className='list-none'>
      <div
        className="flex justify-between py-3 border-[0.1px] border-slate-500 px-3 items-center  hover:bg-[#444]  focus:bg-slate-200 duration-300 transition-all cursor-pointer rounded-lg my-1"
        onClick={handleClick}
      >
        <h2 className="font-[Barlow] text-white text-xl max-sd:text-[0.9rem]">
          {question}
        </h2>
        <FaChevronDown
          className={`text-lg text-gray-400 font-light max-sd:text-[0.8rem] cursor-pointer duration-400 transition-all ${
            !isOpen ? "rotate-0" : "rotate-180"
          }`}
        />
      </div>
      <ul>
        <li
          ref={el}
          className={`duration-400 transition-all overflow-y-hidden text-[0.9rem] px-5 text-justify shadow-inner font-[Barlow] list-none`}
          style={
            isOpen
              ? { maxHeight: el.current.scrollHeight }
              : { maxHeight: "0px" }
          }
        >
          <div className="font-[Noto] py-5 text-white text-sm">{children}</div>
        </li>
      </ul>
    </li>
  );
}

export default Accordion
