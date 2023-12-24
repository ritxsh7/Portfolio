import React from "react";

const JoinMe = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-3xl tracking-widest">
          Join <span className="text-lime-400">Me</span>
        </h3>
        <h2 className="text-lg mt-3 text-gray-300 text-center">
          Do you want to work with me?
        </h2>
      </div>
      <div className="bg-lime-900/80 relative px-8 rounded-lg lg:max-w-4xl mx-auto py-[2rem] mt-8 flex gap-3 lg:flex-row flex-col items-center lg:justify-around">
        <p className="lg:text-left text-justify max-w-lg lg:text-lg text-sm mt-4 text-gray-200 leading-6 lg:justify-around">
          In case you're excited to join with me on this special journey, I'm
          all for you. Be frank to just hit me with a mail or contact me.
          Together we'll be stronger and of course, we'll build stronger! 💪
        </p>
        <button
          className="btn-primary mx-auto mt-6"
          onClick={() => {
            document.getElementById("contact").scrollIntoView();
          }}
        >
          Drop a "Hi" 📧
        </button>
      </div>
    </section>
  );
};

export default JoinMe;
