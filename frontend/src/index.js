import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Register from "./pages/Register";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Login from "./pages/Login";
import React from "react";
import App from "./App";
import "./index.css";
import NewTicket from "./pages/NewTicket";
import PrivateRoute from "./components/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="container">
        <Header />
        <App />
        <ToastContainer />
      </div>
    ),
  },
  {
    path: "/login",
    element: (
      <div className="container">
        <Header />
        <Login />
        <ToastContainer />
      </div>
    ),
  },
  {
    path: "/register",
    element: (
      <div className="container">
        <Header />
        <Register />
        <ToastContainer />
      </div>
    ),
  },
  {
    path: "/new-ticket",
    element: (
      <div className="container">
        <Header />
        <PrivateRoute />
        <ToastContainer />
      </div>
    ),
    children: [
      {
        path: "/new-ticket",
        element: (
          <div className="container">
            <NewTicket />
          </div>
        ),
      },
    ],
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
