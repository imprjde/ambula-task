import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = ({ cartItems, setIsModalOpen }) => {
  return (
    <div
      id="header"
      className=" m-auto flex fixed w-full top-0 mb-5 z-10  h-16  bg-sky-300 items-center justify-between px-16 md:px-32"
    >
      <Link
        to="/"
        className="text-gray-800 border border-black px-2 py-1 rounded-md  font-extrabold text-2xl md:text-3xl"
      >
        E-SHOP
      </Link>
      <div onClick={() => setIsModalOpen(true)}>
        <div className="absolute cursor-pointer inset-y-0 right-0   flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <div className="relative rounded-full mr-2 mt-2  p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <FaShoppingCart size={28} className="text-gray-800" />
          </div>
          <span className="bg-white text-black h-8 w-8 items-center text-center justify-center rounded-full mb-4 -ml-4 z-10 font-semibold mr-5 ">
            {cartItems.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
