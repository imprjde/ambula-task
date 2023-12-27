/* eslint-disable no-lone-blocks */
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  {
    /*This Set of code is mainly used to navigate between Tasks withing the project*/
  }
  return (
    <div className="mt-10">
      <span className="tracking-wider font-semibold">
        Click to view the Task !!{" "}
      </span>
      <div className="flex flex-col space-y-16  text-left mt-10">
        <Link to="/todolist-task">
          <button className="bg-sky-500 py-1 px-6 rounded-md font-bold w-[330px] ">
            1) To-Do List Task
          </button>
        </Link>
        <Link to="/shoppingCart-task">
          <button className="bg-sky-500 py-1 px-6 rounded-md font-bold w-[330px] ">
            2) & 3) Shopping Cart Task
          </button>
        </Link>

        <Link to="/routingTask/home">
          <button className="bg-sky-500 py-1 px-6 rounded-md font-bold w-[330px] ">
            4) Routing Task
          </button>
        </Link>
      </div>
      <div className="mt-10">
        <span className="">
          Note: The Task 2 and Task 3 ( ie: Shopping Cart <br /> Task and API
          Intergration Task ) has been <br /> implemented in{" "}
          <span className="cursor-pointer text-blue-400">
            <Link to="/shoppingCart-task">Task 2</Link>
          </span>{" "}
          itself
        </span>
      </div>
    </div>
  );
};

export default Home;
