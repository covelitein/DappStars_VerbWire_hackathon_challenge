import React from 'react'
import { BsGithub } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai"
import { AiOutlineWhatsApp } from "react-icons/ai"
import {RiShieldStarFill} from 'react-icons/ri'


const Footer = () => {
  return (
    <div className="min-h-[5rem] mt-[7rem] pb-4  pt-5">
      <div className="max-w-4xl mx-auto flex justify-between items-center max-lg:px-3 md:flex-row flex-col max-md:space-y-6">
        <div className="flex flex-row  items-center">
          <RiShieldStarFill className="text-4xl text-pink-600" />
          <h1 className="text-white text-lg mx-1 font-[Bellota] font-bold ">
            Dapp Stars NFT
          </h1>
        </div>
        <div className="font-[Barlow]">&#169; Copyright 2020</div>
        <div className="flex flex-row space-x-4 items-center">
          <h1 className="font-[Barlow]">Socials</h1>
          <div className="flex space-x-2">
            <BsGithub />
            <a href="https://www.facebook.com/covelitein" target={'_blank'}>
              <AiFillFacebook />
            </a>
            <AiOutlineWhatsApp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
