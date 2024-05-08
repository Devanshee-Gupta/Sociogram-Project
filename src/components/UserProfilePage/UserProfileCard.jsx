import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CardImage from "../ProfileCard/CardImage";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";

const UserProfileCard = ({ profileData, postsData }) => {

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
          title={profileData ? profileData.user_name : ""}
        />

        <div className="d-flex ms-5">
          <span className="text-white me-3">{profileData && profileData.no_of_posts} posts</span>
        </div>

        <div className="m-0 ms-5 mt-3 text-white">{profileData && profileData.name}</div>

        <div className="d-flex ms-5 mb-5 flex-column">
          <p className="m-0 text-white-50">{profileData && profileData.bio}</p>
        </div>

        <hr className="m-0" />
      </Card>
      <div className="w-100 mx-auto d-flex flex-column align-items-center mt-4">
        <h1 className="text-white mt-4 fs-6 d-flex align-items-center">
          <ViewCompactIcon />
          <span className="ms-2">POSTS</span>
        </h1>

        <div className="m-0 mt-4 row p-0 w-100">
          { postsData.map((post)=>(
              <div key={post.post_id} className="col-lg-6 col-sm-6 p-0">
                <CardImage imagesrc={post.image} />
              </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default UserProfileCard;
