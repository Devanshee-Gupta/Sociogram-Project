import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AppLogo from "../AppData/AppLogo";
import Avatar from "@mui/material/Avatar";
import AppName from "../AppData/AppName";
import { signup } from "../../services/SignupService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = ({ showSignUp }) => {
  const INITIAL_USER = {
    user_name: "",
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(INITIAL_USER);
  const [, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleReloadWithDelay = () => {
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();

    // Validation logic
    const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const PasswordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{5,}$/;

    let newErrors = {};
    const requiredFields = [
      "user_name",
      "email",
      "password",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors = { ...newErrors, [field]: "This field is required." };
      }
    });

    // Display "All fields are required" toast only if there is at least one empty field
    if (requiredFields.some((field) => !formData[field])) {
      toast.error("All fields are required.");
    }

    if (!newErrors.email && !EmailRegex.test(formData.email)) {
      newErrors = {
        ...newErrors,
        email: "Please enter a valid Email Address.",
      };
      toast.error("Please enter a valid Email Address.");
    }
  

    if (!newErrors.password && !PasswordRegex.test(formData.password)) {
      newErrors = {
        ...newErrors,
        password:
          "Password must contain at least 1 capital letter, 1 special character, and 1 number. Minimum length is 5 characters.",
      };
      toast.error(
        "Password must contain at least 1 capital letter, 1 special character, and 1 number. Minimum length is 5 characters."
      );
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      try {
      signup(formData)
        .then(() => {
          toast.success("User registered successfully!");
          handleReloadWithDelay();
          setFormData(INITIAL_USER);
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.data.error && error.response.data.error.email)
              toast.error(error.response.data.error.email[0]);
            if (error.response.data.message && error.response.data.message.email)
              toast.error(error.response.data.message.email[0]);
          } else if (error.request) {
            toast.error("No response received from the server");
          } else {
            toast.error("An error occurred during the request");
          }
        });
      // handleReloadWithDelay();
    }
    catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  }
  };

  const handleSignIn = () => {
    showSignUp(false);
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
        className="d-flex flex-column w-100 h-100 justify-content-center align-items-center"
        data-bs-theme="dark"
      >
        <Card className="bg-transparent w-25 h-100 w-md-50 w-s-75 w-xs-100">
          <CardContent>
            <form action="post" onSubmit={handleSubmit}>
              <h1 className="h3 mb-5 fw-bold text-white text-center">
                SIGN UP
              </h1>
              <div className="form-floating my-3 text-white-50">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput1"
                  placeholder="Name"
                  name="user_name"
                  onChange={handleChange}
                />
                <label htmlFor="floatingInput1">Name</label>
              </div>
              <div className="form-floating my-3 text-white-50">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput2"
                  placeholder="name@example.com"
                  name="email"
                  onChange={handleChange}
                />
                <label htmlFor="floatingInput2">Email address</label>
              </div>
              <div className="form-floating my-3 text-white-50">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>

              <button className="btn btn-primary w-100 py-2 mt-2" type="submit">
                Sign up
              </button>
              <p className="mt-5 text-center text-body-secondary">
                Already an existing User ?
                <Link
                  className="nav-link d-inline mx-2"
                  onClick={handleSignIn}
                  style={{ textDecoration: "underline" }}
                >
                  Sign In
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
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

export default SignUp;
