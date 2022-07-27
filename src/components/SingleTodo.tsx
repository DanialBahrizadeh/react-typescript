import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../TodoModel";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
interface SingleTodoProps {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FunctionComponent<SingleTodoProps> = ({
  todo,
  setTodos,
}) => {
  const [edit, setEdit] = useState<boolean>(false);
  const editInput = useRef<HTMLInputElement>(null);
  /* functions for icons */
  const todoDone = (): void => {
    setTodos((prevTodos) =>
      prevTodos.map((tdo) =>
        tdo.id === todo.id ? { ...tdo, isDone: !tdo.isDone } : tdo
      )
    );
  };

  const todoDelete = (): void => {
    setTodos((prevTodos) => prevTodos.filter((tdo) => tdo.id !== todo.id));
  };

  const todoEdit = (): void => {
    if (todo.todo === "") return;
    !todo.isDone && setEdit((prevEdit) => !prevEdit);
  };

  useEffect(() => {
    editInput?.current?.focus();
  }, [edit]);

  return (
    <form
      className="flex md:w-4/12 w-full rounded-md p-5 mt-4 justify-center items-center"
      style={{
        backgroundImage:
          'url("https://img.freepik.com/free-photo/crumpled-yellow-paper-background-close-up_60487-2390.jpg?size=626&ext=jpg")',
      }}
      onSubmit={(event: React.FormEvent) => {
        event.preventDefault();
        edit && todoEdit();
      }}
    >
      {edit ? (
        <input
          ref={editInput}
          className="flex-1 p-1 border-none text-xl focus:outline-none"
          type="text"
          value={todo.todo}
          onChange={({ target }) => {
            setTodos((prevTodos) =>
              prevTodos.map((tdo) =>
                tdo.id === todo.id ? { ...tdo, todo: target.value } : tdo
              )
            );
          }}
          placeholder="enter the new value"
        />
      ) : todo.isDone ? (
        <s className="flex-1 p-1 border-none text-xl focus:outline-none">
          {todo.todo}
        </s>
      ) : (
        <span className="flex-1 p-1 border-none text-xl focus:outline-none">
          {todo.todo}
        </span>
      )}
      <div className="flex">
        <span className="icon" onClick={todoEdit}>
          <AiFillEdit />
        </span>
        <span className="icon" onClick={todoDelete}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={edit ? todoEdit : todoDone}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
