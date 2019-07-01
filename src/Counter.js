import React from "react";
import { connect } from "react-redux";

function Counter(props) {
  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {props.count}</p>
      <button onClick={props.onIncrementClick}>INC</button>
      <button onClick={props.onDecrementClick}>DEC</button>
      <form onSubmit={props.submit}>
        <input type="text" value={props.text} onChange={props.onValueChange} />
      </form>

      <p>{props.text}</p>
      <ul>
        {props.items.map((item, index) => {
          return (
            <li key={index} onClick={() => props.deleteItem(index)}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  console.log("stating", state.items);
  return {
    count: state.count,
    text: state.text,
    items: state.items
  };
}

function mapDispatchToProps(dispatch) {
  console.log("dispacthing");
  return {
    onIncrementClick: () => {
      const action = { type: "INCREMENT" };
      dispatch(action);
    },
    onDecrementClick: () => {
      const action = { type: "DECREMENT" };
      dispatch(action);
    },
    onValueChange: event => {
      const action = { type: "VALUE_CHANGED", text: event.target.value };
      dispatch(action);
    },
    submit: event => {
      event.preventDefault();
      const action = { type: "ADD_ITEM" };
      dispatch(action);
    },
    deleteItem: index => {
      const action = { type: "DELETE_ITEM", index: index };
      dispatch(action);
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
