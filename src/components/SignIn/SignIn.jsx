import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AppLogo from "../AppData/AppLogo";
import Avatar from "@mui/material/Avatar";
import AppName from "../AppData/AppName";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import signin from "../../services/SigninService";

const SignIn = ({ showSignUp }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      signin(formData)
      .then((res) => {
          toast.success(res.message);
          document.cookie = `session_key=${res.session_key}`;
          setFormData({
            email: "",
            password: "",
          });
          navigate("/home");
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.data.error)
              toast.error(error.response.data.error);
          } else if (error.request) {
            toast.error("No response received from the server");
          } else {
            toast.error("An error occurred during the request");
          }
        });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleSignUp = () => {
    showSignUp(true);
  };

  return (
    <div
      style={{ minHeight: "100svh" }}
      className="d-flex flex-column pt-5 align-items-center"
    >
      <div
        className="text-white fw-bolder text-center my-5"
        style={{ fontFamily: "cursive", fontSize: "3vw" }}
      >
        <Avatar
          sx={{
            bgcolor: "transparent",
            height: "60px",
            width: "60px",
            margin: "auto",
          }}
        >
          <AppLogo />
        </Avatar>
        <AppName />
      </div>
      <div
        className="d-flex flex-column w-100 justify-content-center align-items-center"
        data-bs-theme="dark"
      >
        <Card className="bg-transparent w-25 w-md-50 w-s-75 w-xs-100">
          <CardContent>
            <form onSubmit={handleSubmit}>
              <h1 className="h3 mb-5 fw-bold text-white text-center">
                SIGN IN
              </h1>
              <div className="form-floating my-3 text-white-50">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  name="email"
                  onChange={handleChange}
                />
                <label htmlFor="email">Email address</label>
              </div>
              <div className="form-floating my-3 text-white-50">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
                <label htmlFor="password">Password</label>
              </div>

              <button className="btn btn-primary w-100 py-2" type="submit">
                Sign in
              </button>
              <p className="mt-5 text-center text-body-secondary">
                Not an existing User ?
                <Link
                  className="nav-link d-inline mx-2"
                  onClick={handleSignUp}
                  style={{ textDecoration: "underline" }}
                >
                  Sign Up
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default SignIn;
