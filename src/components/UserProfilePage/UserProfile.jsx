import React, { useEffect, useState } from "react";
import DefaultLayoutHoc from "../layout/Default.layout";
import UserProfileCard from "./UserProfileCard";
import { useLocation, useNavigate } from "react-router-dom";
import GetOthersPofileService from "../../services/GetOthersProfileService.jsx"; 

const UserProfile = ({ openedWindow, setAuthenticate }) => {

  const location = useLocation();
  const userid = String(location.state.userid);
  const [profileData, setProfileData] = useState([]);
  const [postsData, setPostsData] = useState([]);
  const navigate = useNavigate();
  let session = document.cookie.match(/session_key=([^;]*)/);

  useEffect(() => {
    if (!session) {
      setAuthenticate(false);
      navigate("/");
    } else {
      GetOthersPofileService(session,userid,setProfileData,setPostsData);
    }
  }, []);

  return (
    <div className="row m-0 p-0 w-100 hide-scrollbar" style={{ overflow: "auto" }}>
      <div className="col-lg-12 d-flex justify-content-center pt-5 overflow-hidden">
        <UserProfileCard profileData={profileData}  postsData={postsData}/>
      </div>
    </div>
  );
};

export default DefaultLayoutHoc(UserProfile);
