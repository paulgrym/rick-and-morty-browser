import React from "react";
import ReactDOM from "react-dom";
import { App } from "./core/App";
import reportWebVitals from "./reportWebVitals";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./core/globalStyles";
import store from "./core/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Normalize />
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
