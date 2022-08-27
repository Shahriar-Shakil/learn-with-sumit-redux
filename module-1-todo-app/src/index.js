import React from "react";
import {render} from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import App from "./components/App";
import reducer from "./reducers";
import "todomvc-app-css/index.css";

import {
  createStateSyncMiddleware,
  initStateWithPrevTab
} from "redux-state-sync";
const config = {};
const middlewares = [createStateSyncMiddleware(config)];
const store = createStore(reducer, {}, applyMiddleware(...middlewares));
initStateWithPrevTab(store);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
