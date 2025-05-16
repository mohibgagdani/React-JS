export const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
        //  return state.concat(action.payload)
         return [...state,action.payload]
    case "DELETE_TODO":
      return state.filter((e,i) => i!= action.payload) 
    default:
      return state;
  }
};
