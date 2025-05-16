import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../redux/actions";

function TodoList() {
  const todoDisplay = useSelector((state) => state);
  let dispatch=useDispatch();


   let deletedata=(ind)=>{
       dispatch(deleteTodo(ind))
   }

   

  return (
    <>
      {todoDisplay &&
        todoDisplay.map((e,i) => {
          return(
            <div className="todo-list" key={i}>
              <div className="todo-item">
                <span className="task-text">{e}</span>
                <div className="">
                <button className="delete-btn" onClick={()=>deletedata(i)}>✕</button>
                {/* <button className="edit-btn" onClick={()=>editdata(i)}><i class="ri-pencil-line"></i></button> */}
                </div>
              </div>
            </div>

          )
        })}
    </>
  );
}

export default TodoList;
