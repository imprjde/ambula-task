/* eslint-disable no-lone-blocks */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import TodoList from "./TodoList";

const Todos = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  {
    /*This function adds a new todo into the todos array (state)*/
  }
  const handleAddTodo = (e) => {
    e.preventDefault();

    setTodos([...todos, { todo, isCompleted: false }]);
    setTodo("");
  };

  {
    /*This function is used to remove a todo from the list of todos*/
  }
  const handleDelete = (index) => {
    let todosCopy = [...todos];
    todosCopy.splice(index, 1);
    setTodos(todosCopy);
  };

  {
    /*This funtion will be used to mark any todo as completed*/
  }
  const handleCompleted = (index) => {
    let todosCopy = [...todos];
    todosCopy[index].isCompleted = !todosCopy[index].isCompleted;
    setTodos(todosCopy);
  };

  {
    /*This function is used to keep the tarck of total number of completed todos*/
  }
  const handleCompletedTask = () => {
    let filter = todos.filter((item) => item.isCompleted === true);
    setCompletedTodos(filter);
  };

  useEffect(() => {
    handleCompletedTask();
  }, [todos]);

  return (
    <div className="overflow-x-hidden">
      <div className="sticky top-0 bg-black h-20 m-auto flex items-center justify-around  text-white py-2 z-50  w-screen">
        <h1 className="text-2xl bg-sky-500 px-5 py-1 rounded-md font-bold text-center">
          Total Todos: {todos.length}
        </h1>
        <h1 className="text-2xl bg-sky-500 px-5 py-1 rounded-md font-bold text-center">
          Completed Todos: {completedTodos.length}
        </h1>
      </div>
      <div>
        <form
          onSubmit={handleAddTodo}
          className="relative m-auto  justify-end flex h-10 w min-w-[200px] w-[90%] md:w-[30%] mt-10 overflow-x-hidden"
        >
          <div className="relative w-screen items-start">
            <input
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              className="peer text-white text-base font-semibold h-full w-full rounded-[7px] border border-white bg-transparent px-3 py-2.5 pr-20 font-sans text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-2 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder-white"
              placeholder="Enter Todo..."
              required
            />
            <button
              type="submit"
              className="absolute right-1 top-1 z-10 select-none rounded bg-pink-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              data-ripple-light="true"
            >
              Add Todo
            </button>
          </div>
        </form>

        {/*If there is No Todos , then this div will be displayed*/}
        <div className="bg-gray-400 bg-opacity-50 m-auto  my-5 w-[90%] md:w-[40%] py-5  px-4 ">
          {todos && todos.length === 0 && (
            <div className=" text-white justify-center flex font-semibold text-xl">
              Opps!! No Todo Available
            </div>
          )}

          <>
            {/*If todos exist then this div will be displayed*/}
            {todos &&
              todos.map((todo, index) => (
                <TodoList
                  index={index}
                  todo={todo}
                  handleDelete={handleDelete}
                  handleCompleted={handleCompleted}
                  handleCompletedTask={handleCompletedTask}
                />
              ))}
          </>
        </div>
      </div>
    </div>
  );
};

export default Todos;
