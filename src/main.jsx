import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";

import "./index.css";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <nav className="fixed top-0 left-0">
        <span className="pr-10 text-3xl">
          <Link to="/">home</Link>
        </span>
        <span className="pr-10 text-3xl">
          <Link to="login">login</Link>
        </span>
        <span className="pr-10 text-3xl">
          <Link to="register">register</Link>
        </span>
        <span className="pr-10 text-3xl">
          <Link to="profile">profile</Link>
        </span>
      </nav>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
