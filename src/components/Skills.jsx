import React from "react";

const Skills = () => {
  const skills = [
    {
      name: "Node Js",
      logo: "logo-nodejs",
      level: "Intermediate",
      count: 65,
    },
    {
      name: "React Js",
      logo: "logo-react",
      level: "Advanced",
      count: 80,
    },
    {
      name: "AWS",
      logo: "logo-amazon",
      level: "Beginner",
      count: 40,
    },
    {
      name: "UI/UX",
      logo: "person",
      level: "Intermediate",
      count: 60,
    },
    {
      name: "MongoDB",
      logo: "leaf",
      level: "Intermediate",
      count: 65,
    },
    {
      name: "MySQL",
      logo: "server-outline",
      level: "Intermediate",
      count: 65,
    },
    {
      name: "Redux Toolkit",
      logo: "file-tray-stacked-outline",
      level: "Intermediate",
      count: 65,
    },
    {
      name: "C++",
      logo: "code-slash-outline",
      level: "Advanced",
      count: 85,
    },

    {
      name: "CSS",
      logo: "logo-css3",
      level: "Advanced",
      count: 70,
    },
  ];
  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-white text-center">
        <h3 className="text-3xl text-white tracking-widest">My Skills</h3>
        <p className="text-gray-300 mt-3 text-lg">My knowledge</p>
        <div className="skills-container">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="group border-lime-800 relative min-w-[8rem] max-w-[16rem] bg-gray-900 p-4 md:p-10 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(lime ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="skill-icon"
              >
                <div className="text-6xl bg-gray-900 rounded-full flex items-center justify-center skills-logo">
                  <ion-icon name={skill.logo}></ion-icon>
                </div>
              </div>
              <h3 className="mt-8 text-2xl tracking-widest">{skill.name}</h3>
              <p className="text-sm text-gray-300">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
