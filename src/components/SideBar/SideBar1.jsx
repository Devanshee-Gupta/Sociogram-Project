import React from "react";
import AppName from "../AppData/AppName";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/ExitToApp";
import AppLogo from "../AppData/AppLogo";
import { Avatar } from "@mui/material";
import styles from "./SideBar.module.css";
import { Link } from "react-router-dom";

const SideBar1 = ({ openedWindow, handleLogout }) => {
  return (
    <div
      className={`d-flex flex-column flex-shrink-0 p-3 text-bg-dark ${styles.SideBar1}`}
      style={{ width: "280px", height: "100svh" }}
    >
      <Link
        to="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span
          className="fs-4 d-flex flex-md-col align-items-center"
          style={{ fontFamily: "cursive" }}
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
        </span>
      </Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link
            to="/home"
            className={`nav-link text-white ${
              openedWindow === "Home" ? "active" : null
            }`}
            aria-current="page"
          >
            <HomeIcon className="mx-lg-4 mx-md-0" />
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/addpost"
            className={`nav-link text-white ${
              openedWindow === "AddPost" ? "active" : null
            }`}
          >
            <AddCircleIcon className="mx-lg-4 mx-md-0" />
            New Post
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/profile"
            className={`nav-link text-white ${
              openedWindow === "Profile" ? "active" : null
            }`}
          >
            <AccountCircleIcon className="mx-lg-4 mx-md-0" />
            Your Profile
          </Link>
        </li>
        <hr />
        <li className="nav-item">
          <Link
            onClick={handleLogout}
            className={`nav-link text-white ${
              openedWindow === "Logout" ? "active" : null
            }`}
          >
            <LogoutIcon className="mx-lg-4 mx-md-0" />
            Log Out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar1;
