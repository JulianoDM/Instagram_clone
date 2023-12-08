import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    createBrowserRouter,
    Link
  } from "react-router-dom";

import { App } from "../views/App";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
  ]);