import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {/* JS short circuiting to skip the rest if no todos*/}
      {todos.length === 0 && "No Todos"}

      {/* the map generates an array. it is between {} because JSX trasforms anything within {} into HTML elements */}
      {todos.map((todo) => {
        {
          /* we use the spreading {}...todo} instead of the more verbose:
            id={todo.id}
            completed={todo.completed}
            title={todo.title}*/
        }
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
