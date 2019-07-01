import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";
import store from "./store/";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Counter store={store} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
