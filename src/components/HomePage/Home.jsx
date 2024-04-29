import React, { useEffect, useState } from "react";
import PostCard from "../PostCard/PostCard";
import DefaultLayoutHoc from "../layout/Default.layout";
import { useNavigate } from "react-router-dom";
import GetAllPostsService from "../../services/GetAllPostsService";
import "../../App.css";

const Home = ({ openedWindow, setAuthenticate }) => {
  const navigate = useNavigate();
  // const INITIAL_POSTDATA = [
  //   {
  //     post_id: 4,
  //     image: "/demopic1.jpeg",
  //     create_time: "2024-04-17",
  //     caption: "frfrghfh",
  //     tags: "",
  //     no_of_likes: 0,
  //     no_of_comments: 0,
  //     user: 4,
  //     comments: [],
  //     post_username: "shad",
  //   },
  //   {
  //     post_id: 3,
  //     image: "/demopic2.jpeg",
  //     create_time: "2024-03-29",
  //     caption: "i am crazy",
  //     tags: "#TruthCanNeverBeChanged",
  //     no_of_likes: 0,
  //     no_of_comments: 0,
  //     user: 3,
  //     comments: [],
  //     post_username: "yashraj",
  //   },
  // ];
  const [postData,setPostData] = useState([]);
  let session = document.cookie.match(/session_key=([^;]*)/);

  useEffect(() => {
    if (!session) {
      setAuthenticate(false);
      navigate("/");
    } else {
      GetAllPostsService(session, setPostData);
    }
  }, []);


  
  return (
    <>
      <div className="row m-0 p-0 w-100">
        <div className="col-lg-12 d-flex justify-content-center pt-5 overflow-hidden">
          <div
            className="hide-scrollbar"
            style={{
              maxHeight: "100vh",
              overflow: "scroll",
            }}
          >
            {postData.length > 0 ? (
              postData.map((post) => (
                <PostCard key={post.post_id} post={post} />
              ))
            ) : (
              <div className="d-flex h-100 pb-5 w-100 justify-content-center align-items-center">
                <h1 className="text-white-50" style={{ fontFamily: "cursive" }}>
                  Nothing to show
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayoutHoc(Home);
