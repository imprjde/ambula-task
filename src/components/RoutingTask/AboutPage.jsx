import React from "react";
import NavBar from "./NavBar";

const skills = [
  "Problem Solving",
  "HTML",
  "CSS",
  "Javascript",
  "React JS",
  "TailwindCSS",
  "Redux toolkit",
  "Node JS",
  "Express JS",
  "Mongo DB",
  "Git, GitHub",
];
const AboutPage = () => {
  return (
    <>
      <NavBar />
      <div
        name="about"
        className="w-full h-full overflow-x-hidden bg-gradient-to-b from-gray-800 to-black text-white pt-[120px] md:pt-0"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              About
            </p>
          </div>

          <p className="text-xl mt-12">
            I'm Prajwal Devadiga, a dedicated Software Developer with a
            background in IT. Armed with a Bachelor's degree in engineering, my
            passion for technology fuels my drive to create innovative
            solutions. With a keen focus on showcasing my expertise and past
            projects, my portfolio is a gateway into my journey as a developer.
          </p>

          <br />

          <div className="pb-8 mt-10">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              My Skills
            </p>
            <ul className="mt-6">
              {skills.map((skill, index) => (
                <li key={index} className="font-semibold tracking-wider">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
