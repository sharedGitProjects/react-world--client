import React from "react";
import ReactDOM from "react-dom";
import store from "./store/configureStore";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import MainMenu from "./components/mainMenu";
import App from "./components/app/App";
import Profile from "./components/profile";

/* eslint-disable react/jsx-filename-extension */
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <MainMenu />
        <Route path="/" exact component={Profile} />
        <Route path="/world/" exact component={App} />
        <Route path="/profile/" component={Profile} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
