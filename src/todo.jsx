import React from "react";

export const Todo = (props) => {
  return (
    <ul>
      <div>
        {props.text}
        
        <button onClick={() => removetodo(props.id)}>remove</button>
      </div>
    </ul>
  );
};
