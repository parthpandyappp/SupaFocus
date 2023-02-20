import axios from "axios";
import { TodoContent } from "../types";

export const getAllTodos = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: "http://localhost:3001/todos",
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
      url: `http://localhost:3001/todos/user/${userId}`,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteAllCompletedUserTodos = async (userId: string) => {
  try {
    await axios({
      method: "DELETE",
      url: `http://localhost:3001/todos/completed/user/${userId}`,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = async (todoId: string) => {
  try {
    console.log(todoId);
    await axios({
      url: `http://localhost:3001/todos/${todoId}`,
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = async (todo: TodoContent | any) => {
  try {
    await axios({
      url: `http://localhost:3001/todos/${todo._id}`,
      method: "PUT",
      data: todo,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUserTodos = async (userId: string) => {
  try {
    const res = await axios({
      url: `http://localhost:3001/todos/${userId}`,
      method: "GET",
    });
    return res.data;
  } catch (error) {}
};

export const createTodo = async (todo: TodoContent) => {
  try {
    await axios({
      url: `http://localhost:3001/todos/`,
      method: "POST",
      data: todo,
    });
  } catch (error) {
    console.log(error);
  }
};

// http://localhost:3001/todos/
