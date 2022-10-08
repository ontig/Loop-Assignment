import "./App.css";
import React from "react";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Bookmark from "./pages/Bookmark";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import {CssBaseline,Grid} from '@material-ui/core';
const App = () => {
  const user = useSelector((state) => state.auth);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" exact element={user ? <Home /> : <Login />} />
        <Route path="/" element={<Navigate to="/home" replace={true} />} />
        <Route
          path="/auth"
          exact
          element={!user ? <Login /> : <Navigate to="/home" replace={true} />}
        />
        <Route path="/bookmarks" exact element={<Bookmark />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
