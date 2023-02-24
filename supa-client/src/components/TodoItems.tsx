import React, { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { todoState } from "../states/todoState";
import { userState } from "../states/userState";
import { TodoContent, UserContext } from "../types";
import { TodoItem } from "./TodoItem";
import {
  deleteAllCompletedUserTodos,
  deleteAllUserTodos,
  getUserTodos,
} from "../services";
import { SlOptionsVertical } from "react-icons/sl";
import { ImBin, ImCheckmark } from "react-icons/im";

const TodoItems = () => {
  const setTodos = useSetRecoilState(todoState);
  const todos = useRecoilValue<TodoContent[]>(todoState);
  const [toggleOptions, setToggleOptions] = useState<boolean>(false);
  const { authUser, isLoggedIn } = useRecoilValue<UserContext>(userState);

  useEffect(() => {
    if (isLoggedIn) {
      (async () => {
        setTodos(await getUserTodos(authUser.userId));
      })();
    }
  }, [isLoggedIn, authUser.userId, setTodos]);

  const deleteAllTodos = async () => {
    try {
      setTodos([]);
      setToggleOptions(false)
      await deleteAllUserTodos(authUser.userId);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAllCompletedTodos = async () => {
    try {
      setTodos((todos) =>
        todos.filter((todo: TodoContent | any) => todo.isCompleted !== true)
      );
      setToggleOptions(false)
      await deleteAllCompletedUserTodos(authUser.userId);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-2 mt-10 w-full">
      {isLoggedIn ? (
        <div className="flex flex-col gap-2 mt-10 w-full">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">Tasks</h1>
            <div className="relative">
              <SlOptionsVertical
                className="cursor-pointer"
                onClick={() => setToggleOptions((prev) => !prev)}
              />
              {toggleOptions && (
                <ul className="z-10 absolute -bottom-30 left-0 bg-white shadow-md rounded py-4 text-md text-paragraph font-medium w-52">
                  <li
                    className="cursor-pointer flex items-center gap-1 hover:bg-gray-100 text-gray-500 py-2 px-4"
                    onClick={() => deleteAllTodos()}
                  >
                    <ImBin className="text-main" />
                    Clear all tasks
                  </li>
                  <li
                    className="cursor-pointer flex items-center gap-1 hover:bg-gray-100 text-gray-500 py-2 px-4"
                    onClick={() => deleteAllCompletedTodos()}
                  >
                    <ImCheckmark className="text-black" /> Clear finished tasks
                  </li>
                </ul>
              )}
            </div>
          </div>
          <hr className="divide-y divide-white-400 md:divide-y-8" />
          {todos?.length ? (
            todos?.map((todo: TodoContent | any) => (
              <TodoItem key={todo._id} {...todo} />
            ))
          ) : (
            <p className="flex justify-center items-center m-6 text-sm font-semibold">
              Start building your SupaFocus
            </p>
          )}
        </div>
      ) : (
        <p className="flex justify-center text-center items-center m-6 text-lg font-semibold">
          Login to build your SupaFocus
        </p>
      )}
    </div>
  );
};

export { TodoItems };
