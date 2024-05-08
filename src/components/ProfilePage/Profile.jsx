import React from "react";
import DefaultLayoutHoc from "../layout/Default.layout";
import ProfileCard from "../ProfileCard/ProfileCard";

const Profile = ({ openedWindow, setAuthenticate }) => {
  return (
    <div className="row m-0 p-0 w-100 hide-scrollbar" style={{ overflow: "auto" }}>
      <div className="col-lg-12 d-flex justify-content-center pt-5 overflow-hidden">
        <ProfileCard setAuthenticate={setAuthenticate}/>
      </div>
    </div>
  );
};

export default DefaultLayoutHoc(Profile);
