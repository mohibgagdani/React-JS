export const addTodo = (todo) => {
  return {
    type: "ADD_TODO",
    payload: todo,
  };
};

export const deleteTodo=(index1)=>{
  return{
     type:"DELETE_TODO",
     payload:index1,
  };
};

