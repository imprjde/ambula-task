/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import NavBar from "./NavBar";
import { motion } from "framer-motion";
// import IMAGE from "../../../public/assets/image.png";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div
        name="home"
        className="h-screen w-screen bg-gradient-to-b from-black via-black to-gray-800  "
      >
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-between h-full px-4 md:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-center h-full sm:w-[500px]"
          >
            <motion.h2 className="text-4xl sm:text-7xl font-bold text-white">
              I'm a Software Developer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 0.5, 0.8, 1] }}
              transition={{ duration: 3 }}
              className="text-gray-500 py-4 max-w-md"
            >
              I am an aspiring Junior Software Developer hailing from India. My
              professional experience encompasses a proficiency in web
              technologies such as React JS, Next JS, and Redux Toolkit, among
              others.
            </motion.p>

            <div>
              <div>
                <span>My Personal Portfolio: </span>
                <a
                  className="text-blue-400 font-semibold"
                  href="https://prajwal-portfolio-7.netlify.app/"
                  target="_blank"
                >
                  Click Here
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "tween" }}
            className="md:w-[355px]  w-[300px]"
          >
            <img
              src="https://prajwal-portfolio-7.netlify.app/static/media/heroImage.d465827684de2000e122.png"
              alt="my profile"
              className="rounded-2xl mx-auto md:w-full"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
