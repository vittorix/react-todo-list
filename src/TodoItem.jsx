export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li>
      {/* the key is important. React uses the todo.id to render only a changed todo item, leaving the others alone for performance. do not use an index of the array because if you remove one it messes them */}
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>

      <button
        // () => deleteTodo returns the function deleteTodo.
        // onClick={deleteTodo(id)} wouldn't work because would return to onClick whatever the function deleteTodo returns
        onClick={() => deleteTodo(id)}
        className="btn btn-danger"
      >
        Delete
      </button>
    </li>
  );
}
