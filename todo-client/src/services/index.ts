import axios from "axios";
import { TodoContent } from "../types";

export const getAllTodos = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_BACKEND_URL}/todos`,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteAllUserTodos = async (userId: string) => {
  try {
    await axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_BACKEND_URL}/todos/user/${userId}`,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteAllCompletedUserTodos = async (userId: string) => {
  try {
    await axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_BACKEND_URL}/todos/completed/user/${userId}`,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = async (todoId: string) => {
  try {
    console.log(todoId);
    await axios({
      url: `${process.env.REACT_APP_BACKEND_URL}/todos/${todoId}`,
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = async (todo: TodoContent | any) => {
  try {
    await axios({
      url: `${process.env.REACT_APP_BACKEND_URL}/todos/${todo._id}`,
      method: "PUT",
      data: todo,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUserTodos = async (userId: string) => {
  try {
    console.log("HEY: ", process.env.REACT_APP_BACKEND_URL);

    const res = await axios({
      url: `${process.env.REACT_APP_BACKEND_URL}/todos/${userId}`,
      method: "GET",
    });
    return res.data;
  } catch (error) {}
};

export const createTodo = async (todo: TodoContent) => {
  try {
    await axios({
      url: `${process.env.REACT_APP_BACKEND_URL}/todos/`,
      method: "POST",
      data: todo,
    });
  } catch (error) {
    console.log(error);
  }
};
