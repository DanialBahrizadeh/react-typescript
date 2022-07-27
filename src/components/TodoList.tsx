import { Todo } from "../TodoModel";
import SingleTodo from "./SingleTodo";
interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FunctionComponent<TodoListProps> = ({
  todos,
  setTodos,
}) => {
  const todosElements = todos.map((todo) => (
    <SingleTodo key={todo.id} todo={todo} setTodos={setTodos} />
  ));

  return (
    <div className="flex justify-evenly md:w-11/12 w-[95%] flex-wrap">
      {todosElements}
    </div>
  );
};

export default TodoList;
