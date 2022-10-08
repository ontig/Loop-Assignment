import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Autocomplete from "../components/Autocomplete";
import Card from "../components/Card";
import { suggestions } from "../constants";
import { Logout } from "../actions/auth";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(Logout());
    navigate("/auth");
  };
  return (
    <>
      <nav className="navbar navbar-light bg-light justify-content-between">
        <h1 style={{ padding: "0.5rem" }} className="navbar-brand">
          {" "}
          Restaurants
        </h1>
        <h1
          style={{ padding: "0.5rem", float: "right", cursor: "pointer" }}
          onClick={handleClick}
          className="navbar-brand"
        >
          {" "}
          Logout
        </h1>
      </nav>
      <form className="form-inline">
        <Autocomplete suggestions={suggestions} />
      </form>
      <center>
        <Card />
      </center>
    </>
  );
};

export default Home;
