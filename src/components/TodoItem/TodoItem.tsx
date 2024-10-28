import toast from "react-hot-toast";
import { deleteTodo, setCompleteTodo } from "../fetchTodoItems/fetchTodoItems";
import { Data } from "../types/types";
import s from "./TodoItem.module.css";
type Props = {
  item: Data;
  setTodos: (update: (prev: Data[]) => Data[]) => void;
};

const TodoItem = ({ item, setTodos }: Props) => {
  async function handleClick() {
    try {
      const data = await deleteTodo(item.id);
      setTodos((prev) => prev.filter((item) => item.id !== data.id));
      toast.success("Successfully deleted!");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  }

  async function handleChange() {
    try {
      const data = await setCompleteTodo(item);
      console.log(data);
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === data.id ? { ...todo, completed: data.completed } : todo
        )
      );
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }

  return (
    <li className={s.item}>
      <input type="checkbox" onChange={handleChange} checked={item.completed} />
      <p>{item.text}</p>
      <button onClick={handleClick} className={s.button}>
        delete
      </button>
    </li>
  );
};

export default TodoItem;
