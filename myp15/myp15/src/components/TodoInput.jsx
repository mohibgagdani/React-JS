import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

function TodoInput() {
  const [text, setText] = useState();
  const dispatch = useDispatch();

  let handleAdd = () => {
    if(text !== ""){
      dispatch(addTodo(text))
    }
  };

  return (
    <div className="todo-input-area">
      <input
        type="text"
        placeholder="Enter a task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TodoInput;
