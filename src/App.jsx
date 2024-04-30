import { useEffect, useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import "./styles.css";
import { TodoList } from "./TodoList";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  // useEffect and useState are hooks. hooks need to be at the top of the code. they can't be inside if or for statements or after a return. it needs to run always the same number of hooks
  // usually the structure of the code or the funcion is:
  // hooks
  // helper functions
  // code
  // return statement

  // any time any of the todos changes, saves the ITEMS in local storage
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  // this function is added because the currentTodos cannot be accessed from the NewTodoForm component, so we will pass the whole funcion to it
  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos, // the ... is called spread out
        { id: crypto.randomUUID(), title, completed: false }
      ];
    });
  }

  console.log(todos);

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          // creating a brand new todo and changing a property of it
          // todo.completed = completed would work because immutable
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      {/* in the same way we can pass props (properties) to an HTML markup, e.g. <button onClick='doSomething()'>, we can pass properties to React components like our addTodo function. here we call it onSubmit but we can call it anything.
      we are passing the function addTodo as data */}
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
