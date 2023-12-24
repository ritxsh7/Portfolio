import React, { useEffect, useState } from "react";
import profileImageComp from "../assets/images/profileImageComp.png";
import { Typewriter } from "typewriting-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { slideAnimation } from "../config/motion";

const Hero = () => {
  const social_media = [
    {
      link: "https://www.linkedin.com/in/ritesh-patil-b90a68231/",
      name: "logo-linkedin",
    },
    {
      link: "https://www.twitter.com/ritxsshh/",
      name: "logo-twitter",
    },
    {
      link: "https://www.instagram.com/ritxsshh/",
      name: "logo-instagram",
    },
  ];
  return (
    <>
      <section
        id="home"
        className="md:min-h-screen flex md:pt-12 pt-24 pb-8 md:px-48 md:flex-row flex-col-reverse items-center md:justify-between"
      >
        <div className="flex-col md:items-left md:w-1/4 w-3/4 md:ml-12 hero-info">
          <h2 className="text-white md:text-4xl text-xl mb-4 mt-8">
            Hello! I'm
            <br />
          </h2>
          <div className="md:text-left md:flex md:flex-col name-header">
            <h1 className="md:text-6xl text-4xl text-lime-400 md:mb-4 tracking-widest">
              Ritesh
            </h1>
            <h1 className="md:text-6xl text-4xl text-lime-400">P A T I L</h1>
          </div>
          <h4 className="md:text-2xl text-xl mt-4 text-gray-300">
            <span>A </span>
            <Typewriter
              words={["Web Developer", "Cloud Practitioner", "Student"]}
              loop={true}
              typingSpeed={100}
              cursorClassName="cursor"
            />
          </h4>

          <button
            href="#contact"
            className="btn-primary md:mt-16 border-white hover:bg-lime-500 transition-all"
            onClick={() => {
              document.getElementById("contact").scrollIntoView();
            }}
          >
            Contact Me
          </button>
          <div className="mt-8 md:ml-2 text-3xl flex items-center gap-5">
            {social_media?.map((icon) => (
              <div
                key={icon.name}
                className="text-white hover:text-amber-400 transition-all cursor-pointer"
              >
                <a href={icon.link} target="_blank">
                  <ion-icon name={icon.name}></ion-icon>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center h-full">
          <img
            src={profileImageComp}
            alt=""
            className="md:w-full w-2/3 profile-image"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
