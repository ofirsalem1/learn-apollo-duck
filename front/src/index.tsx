import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

/* redux */
import { Provider } from "react-redux";
import { store } from "./store";
// import { createStore } from "redux";
// import { rootReducer } from "./reducers/rootReducer";
// // const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
