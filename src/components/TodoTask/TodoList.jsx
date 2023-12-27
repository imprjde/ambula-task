import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { IoMdDoneAll } from "react-icons/io";

const TodoList = ({
  index,
  todo,
  handleCompleted,
  handleCompletedTask,
  handleDelete,
}) => {
  const myStyles = {
    textDecoration: "line-through",
    textDecorationColor: "#A10035",
    textDecorationThickness: "3px",
    color: "#150050",
  };
  return (
    <div
      key={index}
      className="bg-white bg-opacity-30 rounded-md m-auto mt-2 py-2 justify-between px-5 items-center flex space-x-6"
    >
      <div>
        <span className="text-white font-semibold">{index + 1}</span>
      </div>
      <div>
        <span
          className="text-white font-medium"
          style={todo.isCompleted ? myStyles : {}}
        >
          {todo.todo}
        </span>
      </div>
      <div className="flex space-x-4 items-center">
        <span
          onClick={() => {
            handleCompleted(index);
            handleCompletedTask(index);
          }}
          className="cursor-pointer"
        >
          <IoMdDoneAll
            size={20}
            className={`${!todo.isCompleted ? "text-white" : "text-blue-500"}`}
          />
        </span>

        <span onClick={() => handleDelete(index)} className="cursor-pointer">
          <AiFillDelete size={20} className="text-rose-600" />
        </span>
      </div>
    </div>
  );
};

export default TodoList;
