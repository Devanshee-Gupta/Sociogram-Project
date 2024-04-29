import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GetOwnProfileService = (session,setProfileData,setPostsData) => {
    try {
        let session_key = session[1];
        axios
          .post("http://127.0.0.1:8000/ownprofile/", {
            session_key: session_key,
          })
          .then((res) => {
            setProfileData(res.data.Data.profile_data);
            setPostsData(res.data.Data.posts_data);
          });
      } catch (error) {
        console.error("Error during login:", error);
        toast.error("Something went wrong. Please try again.");
      }
};

export default GetOwnProfileService;
