import axios, { AxiosResponse } from "axios";
import { Data } from "../types/types";

const todosItems = axios.create({
  baseURL: "https://670bb5607e5a228ec1ce5b00.mockapi.io/",
});

export async function fetchTodoItems() {
  const { data }: AxiosResponse<Data[]> = await todosItems.get("todoitems/");
  return data;
}

export async function addTodo(text: string) {
  const { data }: AxiosResponse<Data> = await todosItems.post("todoitems/", {
    text,
  });
  return data;
}

export async function deleteTodo(id: number) {
  const { data }: AxiosResponse<Data> = await todosItems.delete(
    `todoitems/${id}`
  );
  return data;
}

export async function setCompleteTodo(item: Data) {
  const { data }: AxiosResponse<Data> = await todosItems.patch(
    `todoitems/${item.id}`,
    { ...item, completed: !item.completed }
  );
  return data;
}
