import React from "react";
import ReactDOM from "react-dom/client";
import routes from "./router";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={configureStore}>
    <RouterProvider router={router} />
  </Provider>
);
