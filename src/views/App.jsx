import React from "react";
import { SideBar } from "../components/SideBar/SideBar";
import { Photos } from "../components/Photos";
import store from "../app/store";
import { Provider } from "react-redux";

export const App = () => {
  return (
    <Provider store={store}>
      <div id="app">
        <SideBar />
        <div className="line"></div>

        <Photos />
      </div>
    </Provider>
  );
};
