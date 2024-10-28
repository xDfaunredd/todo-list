import clsx from "clsx";
import s from "./Filter.module.css";

type Props = {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};

const Filter = ({ filter, setFilter }: Props) => {
  function setStatus(status: string) {
    setFilter(status);
  }

  function setActive(status: string) {
    return clsx(s.button, status === filter && s.active);
  }

  return (
    <>
      <ul className={s.list}>
        <li>
          <button
            type="button"
            onClick={() => setStatus("all")}
            className={setActive("all")}
          >
            all
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => setStatus("completed")}
            className={setActive("completed")}
          >
            completed
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => setStatus("active")}
            className={setActive("active")}
          >
            active
          </button>
        </li>
      </ul>
    </>
  );
};

export default Filter;
