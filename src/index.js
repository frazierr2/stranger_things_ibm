import React from "react";
import ReactDOM from "react-dom";

// CSS Import
import "bootstrap/dist/css/bootstrap.min.css";

// import Main from "./Components/Main";

import Header from "./Components/Header";
import App from "./Components/App";

import { Provider } from "react-redux";

import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App>
      <Header />
    </App>
  </Provider>,

  document.getElementById("root")
);
