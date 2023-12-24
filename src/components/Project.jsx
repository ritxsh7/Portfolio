import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

//images
import kustomizer from "../assets/images/kustomizer.png";
import aquadrop from "../assets/images/aquadrop.png";
import sppukar from "../assets/images/sppukar.png";
import brains from "../assets/images/brains.webp";
import sumz from "../assets/images/sumz.png";

const Project = () => {
  const projects = [
    {
      name: "brAIns",
      image: brains,
      github_link: "",
      live_link: "",
      isLive: false,
    },
    {
      name: "AquaDrop",
      image: aquadrop,
      github_link: "",
      live_link: "https://aquadrop-7f434.web.app/",
      isLive: true,
    },
    {
      name: "sumZ",
      image: sumz,
      github_link: "",
      live_link: "https://sumz-ai-extractor.web.app/",
      isLive: true,
    },
    {
      name: "SppuKar",
      image: sppukar,
      github_link: "",
      live_link: "",
      isLive: false,
    },
    {
      name: "Kustomizer",
      image: kustomizer,
      github_link: "",
      live_link: "",
      isLive: true,
    },
  ];

  return (
    <section id="projects" className="text-white h-fit">
      {/* <div className="h-[10rem] w-[10rem] bg-white test-anim"></div> */}
      <div className="text-center h-full w-full py-12 projects-container">
        <h3 className="text-3xl text-lime-300 tracking-widest">My Projects</h3>
        <p className="text-gray-300 mt-3 text-lg">My awesome works</p>
        <br />
        <div className="flex max-w-6xl gap-6 pt-8 px-5 mx-auto items-center relative">
          <div className="w-full slider">
            <Swiper
              slidesPreview={3}
              spaceBetween={30}
              breakpoints={{
                600: {
                  slidesPerView: 2,
                },
                1045: {
                  slidesPerView: 3,
                },
              }}
              loop={true}
              autoplay={{
                delay: 3000,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
            >
              {projects.map((project_info, i) => (
                <SwiperSlide key={i}>
                  <div
                    id={`project${i + 1}`}
                    className={`h-fit w-full py-6 px-2 bg-gray-900/90 rounded-xl ${
                      !project_info.isLive ? "text-3xl " : ""
                    }`}
                  >
                    <h3 className="text-xl my-4">{project_info.name}</h3>
                    <img
                      src={project_info.image}
                      alt={project_info.name}
                      className="w-11/12 h-[15rem] mx-auto my-8"
                    />
                    {!project_info.isLive ? (
                      <div className="text-lg pb-[2.6rem]">
                        <h1 className="animate">Project Under Progress...</h1>
                      </div>
                    ) : (
                      <div className="flex gap-3 justify-center mb-10">
                        <a
                          href="https://github.com/ritxsh7/"
                          target="_blank"
                          className="text-black w-[6rem] md:w-2/5 text-sm leading-6 bg-lime-400 py-1 inline-block rounded-lg hover:bg-black hover:text-white transition-all"
                        >
                          Github
                        </a>
                        <a
                          href={project_info.live_link}
                          target="_blank"
                          className="text-black text-sm leading-6 w-[6rem] bg-lime-400 md:w-2/5 py-1 inline-block rounded-lg hover:bg-black hover:text-white transition-all"
                        >
                          Live Demo
                        </a>
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="lg:block hidden"></div>
        </div>
      </div>
    </section>
  );
};

export default Project;
