import React from "react";
import resume from "../assets/Resume@RiteshPatil.pdf";

const About = () => {
  const info = [
    { text: "Years experience", count: "02" },
    { text: "Completed Projects", count: "05" },
    { text: "Endorsements", count: "30" },
  ];
  const space = " +";
  return (
    <section
      id="about"
      className="py-10 text-white bg-lime-900/80 flex flex-col items-center text-center"
    >
      <>
        <h1 className="text-3xl text-white tracking-widest">About Me</h1>
        <p className="text-gray-300 mt-3 text-xl">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 md:p-10 mx-auto w-full">
          <div className="text-gray-300 md:flex flex justify-between md:justify-center gap-8 md:w-1/2 w-4/5 mx-auto ">
            {info.map((content) => (
              <div key={content.text}>
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  {content.count}
                  <span className="text-lime-400">{space}</span>
                </h3>
                <span className="md:text-base text-xs">{content.text}</span>
              </div>
            ))}
          </div>
          <p className="text-justify leading-7 md:w-3/5  w-4/5 mx-auto my-0 about-para">
            Greetings! I'm Ritesh Patil, Third Year Computer Engineering
            Undergraduate at the Savitribai Phule Pune University. I have a
            great passion for problem solving and analytical thinking. Apart
            from having a great experience in Full Stack Web Developing using
            MERN stack technology, I have a great hands-on experience over cloud
            platforms like AWS. I can thus create both serverless and
            server-based web applications from absolute scratch and maintain
            them. Throughout my learning I have made quite a few projects that
            gave me the best hands-on skills ever. Done saying that, I have also
            made few market based professional projects as a part of my
            learning. I'm open to connect with like-minded enthusiasts and
            exploring the world of technology together.
          </p>

          <br />
          <br />
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center"></div>
        </div>
      </>
      <a href={resume} className="btn-primary mt-12" download>
        Resume
      </a>
    </section>
  );
};

export default About;
