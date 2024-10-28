import { Field, Form, Formik } from "formik";
import { addTodo } from "../fetchTodoItems/fetchTodoItems";
import { Data } from "../types/types";
import toast from "react-hot-toast";
import s from "./TaskForm.module.css";

const initialValues = {
  taskText: "",
};

type InitialValues = {
  taskText: string;
};

type ResetForm = {
  resetForm: () => void;
};

type Props = {
  setTodos: (update: (prev: Data[]) => Data[]) => void;
};

const TaskForm = ({ setTodos }: Props) => {
  async function handleSubmit(values: InitialValues, actions: ResetForm) {
    if (values.taskText.trim() === "") {
      return toast.error("Enter some text first!");
    }

    actions.resetForm();

    try {
      const data: Data = await addTodo(values.taskText);

      setTodos((prev: Data[]) => [...prev, data]);
      toast.success("Successfully added!");
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={s.form}>
        <label>
          <Field type="text" name="taskText" className={s.input} />
        </label>

        <button type="submit" className={s.button}>
          Add task
        </button>
      </Form>
    </Formik>
  );
};

export default TaskForm;
