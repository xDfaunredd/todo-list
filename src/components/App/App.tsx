import { useEffect, useState } from "react";
import "./App.css";
import { fetchTodoItems } from "../fetchTodoItems/fetchTodoItems";
import { Data } from "../types/types";
import TaskForm from "../TaskForm/taskForm";
import TodoList from "../TodoList/TodoList";
import Filter from "../Filter/Filter";

function App() {
  const [todos, setTodos] = useState<Data[]>([]);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    async function fetchData(): Promise<void> {
      try {
        const data: Data[] = await fetchTodoItems();
        setTodos(data);
        console.log(data);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        }
      }
    }
    fetchData();
  }, []);

  const filteredList = todos.filter((item) => {
    switch (filter) {
      case "active":
        return !item.completed;
      case "completed":
        return item.completed;
      case "all":
        return item;
      default:
        return item;
    }
  });

  return (
    <div className="container">
      <TaskForm setTodos={setTodos} />
      <Filter setFilter={setFilter} filter={filter} />
      <TodoList todos={filteredList} setTodos={setTodos} />
    </div>
  );
}

export default App;
