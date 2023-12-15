import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { Todo } from "./todo";

function App() {
  let list = [
    { text: "do tis ", id: 1 },
    { text: "do tis ", id: 2 },
  ];
  const [todo, settodo] = useState(list);
  const [forminput, setinput] = useState("");
  function remove(id) {}
  function addtodo(e) {
    e.preventDefault();
    const newtodo = { text: forminput, id: Date.now() };
    settodo([...todo, newtodo]);
    console.log(todo);
  }

  return (
    <>
      <div>
        <form onSubmit={addtodo}>
          <input
            type="text"
            value={forminput}
            onChange={(e) => setinput(e.target.value)}
            placeholder="Enter a new todo here"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>hello</div>
      {todo.map((todo1) => (
        <Todo key={todo1.id} text={todo1.text} removeTodo={remove} />
      ))}
      <div>hello</div>
    </>
  );
}

export default App;
