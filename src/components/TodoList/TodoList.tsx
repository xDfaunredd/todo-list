import TodoItem from "../TodoItem/TodoItem";
import { Data } from "../types/types";
import s from "./TodoList.module.css";

type Props = {
  todos: Data[];
  setTodos: (prev: (prev: Data[]) => Data[]) => void;
};

const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <ul className={s.list}>
      {todos.map((item: Data) => (
        <TodoItem key={item.id} item={item} setTodos={setTodos} />
      ))}
    </ul>
  );
};

export default TodoList;
