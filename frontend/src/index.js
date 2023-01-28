import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Register from "./pages/Register";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Login from "./pages/Login";
import React from "react";
import App from "./App";
import "./index.css";
import Home from "./pages/Home";
import Header from "./components/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="container">
        <Header />
        <App />
      </div>
    ),
  },
  {
    path: "/login",
    element: (
      <div className="container">
        <Header />
        <Login />
      </div>
    ),
  },
  {
    path: "/register",
    element: (
      <div className="container">
        <Header />
        <Register />
      </div>
    ),
  },
]);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
