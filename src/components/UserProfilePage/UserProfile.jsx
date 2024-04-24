import React from "react";
import DefaultLayoutHoc from "../layout/Default.layout";
import UserProfileCard from "./UserProfileCard";

const UserProfile = ({ openedWindow, setAuthenticate }) => {
  return (
    <div className="row m-0 p-0 w-100 hide-scrollbar" style={{ overflow: "auto" }}>
      <div className="col-lg-12 d-flex justify-content-center pt-5 overflow-hidden">
        <UserProfileCard />
      </div>
    </div>
  );
};

export default DefaultLayoutHoc(UserProfile);
