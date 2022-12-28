import React from 'react'
import { useState,useRef,useEffect } from 'react'
import { FaAngleDoubleUp } from 'react-icons/fa'

const PageScrollProgressBar = () => {
    const element = useRef()
    const [ready, setReady] = useState(false)

    const progressBar = () => {
      const scrollPosition = window.scrollY
      const documentHeight = document.body.offsetHeight - window.innerHeight
      const percentage = (scrollPosition / documentHeight) * 100

      element.current.style.strokeDasharray = `${percentage}, 100`
    }

    const check = () => {
      if (window.scrollY > 500) {
        setReady(true);
      } else {
        setReady(false);
      }
    };

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

        useEffect(() => {
          window.addEventListener("scroll", progressBar)
          window.addEventListener("load", progressBar)
          window.addEventListener("scroll", check)
          window.addEventListener("load", check)
        }, [])   


  return (
    <div className="scroll-progress-bar">
      <svg viewBox="0 0 36 36">
        <path
          className="scroll-progress-track"
          d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="scroll-progress-value"
          ref={element}
          d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
      <FaAngleDoubleUp
        className={`absolute top-[0.96rem] left-[0.96rem] text-xl text-[#D53F8C] ${
          ready ? "animate" : ""
        }
       cursor-pointer`}
        onClick={scrollToTop}
      />
    </div>
  );
}

export default PageScrollProgressBar
