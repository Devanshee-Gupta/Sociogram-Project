import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/ExitToApp";
import AppLogo from "../AppData/AppLogo";
import { Avatar } from "@mui/material";
import styles from "./SideBar.module.css";
import { Link } from "react-router-dom";

const SideBar2 = ({ openedWindow, handleLogout }) => {
  
  return (
    <div
      className={`d-flex flex-column flex-shrink-0 p-3 text-bg-dark ${styles.SideBar2}`}
      style={{ width: "4.5rem", Height: "100svh" }}
      data-bs-theme="dark"
    >
      <Link
        to="/"
        className="d-block link-dark text-decoration-none"
        title=""
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        data-bs-original-title="Icon-only"
      >
        <span
          className="fs-4 d-flex flex-md-col align-items-center"
          style={{ fontFamily: "cursive" }}
        >
          <Avatar
            sx={{
              bgcolor: "transparent",
              width: "100%",
              margin: "auto",
            }}
          >
            <AppLogo />
          </Avatar>
        </span>
      </Link>
      <ul
        className="flex-column mb-auto text-center"
        style={{ listStyle: "none", padding: "0px", margin: "0 auto" }}
      >
        <li className="nav-item">
          <Link
            to="/home"
            className={`nav-link py-3 border-bottom rounded-0 ${
              openedWindow === "Home" ? styles.SideBar2Active : null
            }`}
            aria-current="page"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            aria-label="Home"
            data-bs-original-title="Home"
          >
            <svg
              className="bi pe-none"
              width="24"
              height="24"
              role="img"
              aria-label="Home"
            >
              <HomeIcon />
            </svg>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/addpost"
            className={`nav-link py-3 border-bottom rounded-0 ${
              openedWindow === "AddPost" && styles.SideBar2Active
            }`}
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            aria-label="AddPost"
            data-bs-original-title="AddPost"
          >
            <svg
              className="bi pe-none"
              width="24"
              height="24"
              role="img"
              aria-label="AddPost"
            >
              <AddCircleIcon />
            </svg>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/profile"
            className={`nav-link py-3 border-bottom rounded-0 ${
              openedWindow === "Profile" && styles.SideBar2Active
            }`}
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            aria-label="Profile"
            data-bs-original-title="Profile"
          >
            <svg
              className="bi pe-none"
              width="24"
              height="24"
              role="img"
              aria-label="Profile"
            >
              <AccountCircleIcon />
            </svg>
          </Link>
        </li>
      </ul>
      <li className="nav-item list-unstyled m-auto">
        <Link
          onClick={handleLogout}
          className={`nav-link py-3 border-bottom rounded-0 ${
            openedWindow === "Logout" && styles.SideBar2Active
          }`}
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          aria-label="Logout"
          data-bs-original-title="Logout"
        >
          <svg
            className="bi pe-none"
            width="24"
            height="24"
            role="img"
            aria-label="Logout"
          >
            <LogoutIcon />
          </svg>
        </Link>
      </li>
    </div>
  );
};

export default SideBar2;
