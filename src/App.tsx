import { FC, useState } from "react";
import InputFeild from "./components/InputFeild";
import TodoList from "./components/TodoList";
import { Todo } from "./TodoModel";
const App: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  console.log(todos);
  return (
    <div className="font-neucha w-full h-screen flex flex-col items-center bg-blue-500">
      <h1 className="uppercase text-4xl my-4 md:my-7 mx-0 text-white z-10 text-center">
        Taskify
      </h1>
      <InputFeild setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
