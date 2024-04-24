import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import CardImage from "./CardImage";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import EditProfile from "./EditProfile";
import ChangePassword from "./ChangePassword";
import { Link } from "react-router-dom";

const ProfileCard = () => {
  const [editFormShow, setEditFormShow] = useState(false);
  const [changePassShow, setChangePassShow] = useState(false);

  return (
    <div className="w-75">
      <Card
        sx={{
          width: "100%",
          bgcolor: "transparent",
          color: "white",
          border: "0.5px solid #666363",
          borderRadius: "10px 10px 0 0",
          borderBottom: "none",
          marginBottom: "30px",
          // boxShadow: "-1px 2px 5px #666363, 1px -2px 5px #666363",
        }}
      >
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: "transparent", cursor: "pointer" }}
              aria-label="profile"
            >
              <AccountCircleIcon />
            </Avatar>
          }
          action={
            <span className="d-flex me-auto align-items-center flex-row-lg">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={(e) => setEditFormShow(true)}
                style={{ fontSize: "12px", padding: "0 10px", height: "26px" }}
              >
                Edit Profile
              </button>
                <div className="dropdown mx-2 outline-none">
                  <Link
                    className="btn p-0 px-1 text-light outline-none border-none shadow-none"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <SettingsIcon />
                  </Link>
                  <ul className="dropdown-menu mt-1">
                    <li>
                      <Link role="button" className="btn dropdown-item p-0 text-center" style={{fontSize:"14px"}} onClick={(e)=> setChangePassShow(true)}>
                        Change Password
                      </Link>
                    </li>
                  </ul>
                </div>
            </span>
          }
          title="__devansheegupta__"
        />

        <div className="d-flex ms-5">
          <span className="text-white me-3">3 posts</span>
          <span className="text-white me-3">38 followers</span>
          <span className="text-white me-3">45 following</span>
        </div>

        <div className="m-0 ms-5 mt-3 text-white">Devanshee Gupta</div>

        <div className="d-flex ms-5 mb-5 flex-column">
          <p className="m-0 text-white-50">Lorem ipsum dolor sit amet.</p>
          <p className="m-0 text-white-50">Lorem ipsum dolor sit amet.</p>
          <p className="m-0 text-white-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quo a
            quia quidem. Quisquam, in.
          </p>
        </div>

        <hr className="m-0" />
      </Card>
      <div className="w-100 mx-auto d-flex flex-column align-items-center mt-4">
        <h1 className="text-white mt-4 fs-6 d-flex align-items-center">
          <ViewCompactIcon />
          <span className="ms-2">POSTS</span>
        </h1>

        <div className="m-0 mt-4 row p-0">
          <div className="col-lg-4 col-sm-6 p-0">
            <CardImage imagesrc={"/demopic1.jpeg"} />
          </div>
          <div className="col-lg-4 col-sm-6 p-0">
            <CardImage imagesrc={"/demopic2.jpeg"} />
          </div>
          <div className="col-lg-4 col-sm-6 p-0">
            <CardImage imagesrc={"/demopic1.jpeg"} />
          </div>
          <div className="col-lg-4 col-sm-6 p-0">
            <CardImage imagesrc={"/demopic2.jpeg"} />
          </div>
        </div>
      </div>
      <EditProfile show={editFormShow} setShow={setEditFormShow} />
        <ChangePassword show={changePassShow} setShow={setChangePassShow}/>
    </div>
  );
};

export default ProfileCard;
