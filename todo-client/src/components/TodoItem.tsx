import React, { useState } from "react";
import { TodoContent } from "../types";
import { todoState } from "../states/todoState";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { deleteTodo, updateTodo } from "../services";
import { AiFillCheckCircle } from "react-icons/ai";
import { IoIosOptions } from "react-icons/io";

const TodoItem = ({ _id, todo, isCompleted }: TodoContent | any) => {
  const todos = useRecoilValue(todoState);
  const setTodos = useSetRecoilState(todoState);
  const [toggleEdit, setToggleEdit] = useState<boolean>(false);
  const [selectedTodoData, setSelectedToDoData] = useState<any>();
  const [currentEditId, setCurrentEditId] = useState<string>("");

  const handleDeletionOfTask = (tid: string) => {
    setTodos((todos) =>
      todos.filter((todo: TodoContent | any) => todo._id !== tid)
    );
    (async () => await deleteTodo(tid))();
  };

  const handleEditionOfTask = () => {
    setTodos((todos: TodoContent[]) =>
      todos.map((todo: TodoContent | any) => {
        if (todo._id === currentEditId) {
          return { ...todo, selectedTodoData };
        }
        return todo;
      })
    );
    (async () => await updateTodo(selectedTodoData))();
    setToggleEdit(false);
  };

  const handleEditToggle = (tid: string) => {
    setToggleEdit(true);
    setSelectedToDoData(
      selectedTodoData ??
        todos.find((todo: TodoContent | any) => todo._id === tid)
    );
    setCurrentEditId(tid);
  };

  const handleCompletionOfTask = (tid: string) => {
    const todoToBeChecked = todos.find(
      (todo: TodoContent | any) => todo._id === tid
    );
    setTodos((todos) =>
      todos.map((todo: TodoContent | any) =>
        todo._id === tid ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
    (async () =>
      await updateTodo({
        ...todoToBeChecked,
        isCompleted: !todoToBeChecked?.isCompleted,
      }))();
  };
  return (
    <div className="flex gap-1 items-center justify-between bg-white text-gray-800 w-full mx-auto rounded shadow-md">
      {!toggleEdit ? (
        <div className="flex w-full gap-2 items-center py-3 px-2 w-full rounded text-lg">
          <AiFillCheckCircle
            onClick={() => handleCompletionOfTask(_id)}
            className={`flex-none w-12 cursor-pointer text-3xl ${
              isCompleted ? "text-main" : "text-gray-400"
            }`}
          />
          <p
            className={`grow text-gray-500 text-xl font-semibold ${
              isCompleted && "line-through"
            }`}
          >
            {selectedTodoData?.todo ?? todo}
          </p>
          <div className="flex-none justify-self-end flex gap-2 items-center">
            <IoIosOptions
              className="text-2xl text-gray-800 cursor-pointer"
              onClick={() => handleEditToggle(_id)}
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-2 w-full justify-items-end">
          <input
            type="text"
            className="bg-white text-gray-800 font-semibold text-xl p-1 m-2 focus:outline-none rounded"
            value={selectedTodoData?.todo}
            onChange={(e) =>
              setSelectedToDoData({ ...selectedTodoData, todo: e.target.value })
            }
          />
          <div className="flex gap-2 justify-end bg-gray-200 py-3 px-2">
            <button
              onClick={() => handleDeletionOfTask(_id)}
              className="text-gray-500 font-bold"
            >
              Delete
            </button>
            <button
              onClick={handleEditionOfTask}
              className="bg-gray-800 text-white px-3 py-1 font-semibold rounded"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export { TodoItem };
