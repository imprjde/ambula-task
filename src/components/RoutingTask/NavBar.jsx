import React, { useState } from "react";
import { Link } from "react-router-dom";

const navigations = [
  { id: 1, title: "HOME", link: "home" },
  { id: 2, title: "ABOUT", link: "about" },
  { id: 3, title: "CONTACT", link: "contact" },
];

const NavBar = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="m-auto flex w-screen h-16 bg-black">
      <ul className="m-auto justify-center items-center flex">
        {navigations.map((nav) => (
          <li
            onClick={() => setActiveIndex(nav.id)}
            key={nav.id}
            className="px-4 cursor-pointer capitalize flex flex-col justify-center items-center font-medium text-gray-500"
          >
            <Link
              to={`/routingTask/${nav.link}`}
              className={`${
                activeIndex === nav.id ? "text-cyan-500" : "text-gray-500"
              }`}
              smooth={true}
              duration={500}
            >
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>
      {children}
    </div>
  );
};

export default NavBar;
