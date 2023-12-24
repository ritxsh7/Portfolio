import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ];
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] ${
        sticky ? "bg-black/60  text-white" : "text-white"
      }`}
    >
      <div className="flex items-center justify-between">
        <a href="#home" className="mx-7">
          <h4 className="text-4xl font-bold">
            ri<span className="text-lime-400">te</span>sh
            <span className="text-lime-400">.</span>
          </h4>
        </a>
        <div
          className={` ${
            sticky ? "md:bg-white/0 bg-white" : ""
          } md:block text-white hidden px-7 py-2 font-medium rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className={`px-6 ${"hover:text-lime-500"}`}>
                <a href={menu.link}>{menu.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999]  ${
            open ? "text-lime-400" : "text-gray-100"
          } text-3xl md:hidden m-5 cursor-pointer`}
        >
          <ion-icon name="menu"></ion-icon>
        </div>
        <div
          className={`md:hidden text-lime-400 absolute w-1/2 h-screen
      px-7 py-2 font-medium bg-black/90 top-0 right-0 duration-300 ${
        open ? "block" : "hidden"
      }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-6 hover:text-blue-600"
              >
                <a className="hover:text-white" href={menu?.link}>
                  {menu?.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
