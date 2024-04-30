import { useState } from "react";

// if it starts with capital letter React knows that it is a component
// the argument onSubmit contains the props that we pass from App.js
// the syntax { onSubmit } is called destructuring
export function NewTodoForm({ onSubmit }) {
  // useState is a hook
  const [newItem, setNewItem] = useState("");

  // on submit, this function uses the current value of todos array(currentTodos), creates a copy of the array, adds a new todo, sets this array as todos value, and re-renders the function App with this todos value containing all previous todos and the new one.
  // Every time we use the current value of a state we need to use a function. If we used setTodos directly and todos, at the re-rendering todos state would be re-initialized to an empty array and setTodos would set an array with only the new value.
  function handleSubmit(e) {
    // prevents the page from refreshing when submit is clicked
    e.preventDefault();
    if (newItem === "") return;
    onSubmit(newItem); // onSubmit is the function addTodo passed to this component when created in the Apps.js
    setNewItem(""); // clears the input after submit
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New thing to do</label>
        <input
          value={newItem}
          // ogni volta che si preme un tasto dentro l'input, onChange crea l'evento "e" contenente il nuovo valore dell'input. setNewItem aggiorna questo valore nello stato newItem. ogni aggiornamento di stato rifa' il render dell'intero component riaggiornando dovunque lo stato e' usato. questo render riesegue tutto questo codice e con value={newItem} assegna lo stato aggiornato newItem al value dell'input (senza questo evento o questa assegnazione non si vedrebbe niente nell'input perche' verrebbe ricreato col valore precedente non aggiornato)
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
