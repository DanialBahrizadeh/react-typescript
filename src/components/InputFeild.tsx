import { nanoid } from "nanoid";
import React, { FC, useState } from "react";
import { Todo } from "../TodoModel";

interface InputFeildProps {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const InputFeild: FC<InputFeildProps> = ({ setTodos }) => {
  const [task, setTask] = useState<Todo>({
    id: nanoid(),
    todo: "",
    isDone: false,
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    target.task.value !== "" && setTodos((prevTodos) => [...prevTodos, task]);
    setTask({
      id: nanoid(),
      todo: "",
      isDone: false,
    });
    target.task.blur();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex md:w-11/12 relative items-center w-[95%]"
    >
      <input
        type="text"
        placeholder="Enter a task"
        name="task"
        value={task.todo}
        onChange={({ target }) =>
          setTask((preTask) => ({ ...preTask, todo: target.value }))
        }
        className="w-full rounded-full py-5 px-7 text-2xl border-none  duration-200 shadow-inner focus:outline-none focus:shadow-page"
      />
      <button
        type="submit"
        className="absolute w-12 h-12 m-3 rounded-full right-0 border-none text-sm bg-blue-500 text-white duration-200 shadow-lg hover:bg-blue-600 active:scale-80"
      >
        Go
      </button>
    </form>
  );
};

export default InputFeild;
