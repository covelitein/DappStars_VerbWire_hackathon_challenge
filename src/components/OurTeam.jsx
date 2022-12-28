import React from 'react'
import Covey from '../assets/image/Covenant.jpg'
import {BsGithub} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'

const OurTeam = () => {
  return (
    <div className="min-h-[4rem] w-full  mt-[8rem] p-3 flex justify-center items-center flex-col">
      <h1 className="font-[Bellota] text-4xl text-center mb-7 text-white font-bold">
        About Creator
      </h1>
      <img
        src={Covey}
        alt="About me image"
        className="h-[18rem] w-[15rem] object-cover mx-auto mb-6 rounded-xl border-2 border-zinc-600 md:h-[21rem] md:w-[20rem]"
      />
      <p className="md:w-3/4 mx-auto text-center font-[Opensans] px-4 w-full">
        I am Abraham Covenant, and I am a full-stack developer with a
        passion for building beautiful and functional web applications. I have a
        strong understanding of HTML, CSS, and JavaScript, as well as experience
        with popular CSS frameworks such as Tailwind CSS and Bootstrap5. I am
        also proficient in React,Solidity and PHP and I enjoy using these
        technologies to create scalable and responsive front-end interfaces.
        I am always looking for ways to improve and expand my skills, and I am
        eager to learn new technologies and techniques to stay at the forefront
        of web development.
      </p>
    </div>
  );
}

export default OurTeam
