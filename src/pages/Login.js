import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Login } from "../actions/auth";
import bg from "../assets/bg.jpg";
const initialState = { username: "", password: "" };

const myStyle = {
  backgroundImage: `url(${bg})`,
  /* Full height */
  height: "250px",

  /* Center and scale the image nicely */
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = dispatch(Login(formData.username, formData.password));
    data ? navigate("/home") : setError("Invalid Credentials");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <section class="text-center">
        <div class="p-5 bg-image" style={myStyle}></div>

        <div class="card shadow-5-strong style2">
          <div class="card-body py-5 px-md-5">
            <div class="row d-flex justify-content-center">
              <div class="col-lg-4">
                <h2 class="fw-bold mb-5">Login</h2>
                <form>
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example3">
                      Username
                    </label>
                    <input
                      type="email"
                      id="form3Example3"
                      class="form-control"
                      name="username"
                      onChange={handleChange}
                    />
                  </div>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example4">
                      Password
                    </label>
                    <input
                      type="password"
                      id="form3Example4"
                      class="form-control"
                      name="password"
                      onChange={handleChange}
                    />
                  </div>

                  <p style={{ color: "red" }}>{error}</p>
                  <button
                    type="submit"
                    class="btn btn-primary btn-block mb-4  button"
                    onClick={handleSubmit}
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Auth;
