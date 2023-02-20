import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { todoState, userState } from "../states";
import { v4 as uuidv4 } from "uuid";
import { TodoContent, UserContext } from "../types";
import { createTodo } from "../services";

const TodoCreate = () => {
  const [toggleAddTask, setToggleAddTask] = useState(false);
  const initVals = {
    todoText: "",
    completed: false,
  };
  const [todoEssentials, setTodoEssentials] = useState(initVals);
  const { authUser } = useRecoilValue<UserContext>(userState);
  const todos = useRecoilValue<TodoContent[]>(todoState);
  const setTodos = useSetRecoilState(todoState);

  const handleCancelTask = () => {
    setTodoEssentials(initVals);
    setToggleAddTask(false);
  };

  const handleSaveTask = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const todoData = {
      _id: uuidv4(),
      todo: todoEssentials.todoText,
      isCompleted: todoEssentials.completed,
      createdBy: authUser.userId,
    };
    (async () => await createTodo(todoData))();
    setTodos([...todos, todoData]);
    setTodoEssentials(initVals);
  };
  return (
    <div className="w-full">
      {toggleAddTask ? (
        <div className="mb-6">
          <form
            className="flex flex-col bg-white text-black rounded gap-3 shadow shadow-lg "
            onSubmit={handleSaveTask}
          >
            <div className="px-6 py-3">
              <input
                placeholder="What are you working on?"
                type="text"
                className="focus:outline-none border-none w-full p-1 text-gray-700 text-xl"
                onChange={(e) =>
                  setTodoEssentials({
                    ...todoEssentials,
                    todoText: e.target.value,
                  })
                }
                value={todoEssentials.todoText}
              />
            </div>

            <div className="flex gap-2 items-center bg-gray-100 rounded justify-end p-2">
              <button
                className="text-gray-500 font-bold"
                type="button"
                onClick={handleCancelTask}
              >
                Cancel
              </button>
              <button
                className={`${
                  todoEssentials.todoText.length > 0
                    ? "bg-gray-800 text-white"
                    : "bg-gray-200 text-gray-400"
                } px-3 py-1 font-semibold rounded`}
                type={todoEssentials.todoText.length > 0 ? "submit" : "button"}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          className="border border-2 border-gray-200 px-6 py-3 rounded border-dashed w-full text-sm font-semibold bg-darkmain text-gray-200 mb-6"
          onClick={() => setToggleAddTask((prev) => !prev)}
        >
          Add Task
        </button>
      )}
    </div>
  );
};

export { TodoCreate };
