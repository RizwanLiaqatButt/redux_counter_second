import { createStore } from "redux";

const initialState = {
  count: 0,
  text: "",
  items: []
};

const reducer = (state = initialState, action) => {
  console.log("reducer running", state);
  switch (action.type) {
    case "INCREMENT":
      return Object.assign({}, state, { count: state.count + 1 });
    case "DECREMENT":
      return Object.assign({}, state, { count: state.count - 1 });
    case "VALUE_CHANGED":
      return Object.assign({}, state, { text: action.text });
    case "ADD_ITEM":
      return Object.assign({}, state, {
        items: state.items.concat(state.text),
        text: ""
      });
    case "DELETE_ITEM":
      let copyOfItems = state.items.slice();
      copyOfItems.splice(action.index, 1);
      return Object.assign({}, state, {
        items: copyOfItems,
        text: ""
      });
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
