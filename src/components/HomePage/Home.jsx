import React, { useEffect, useState } from "react";
import PostCard from "../PostCard/PostCard";
import DefaultLayoutHoc from "../layout/Default.layout";
import { useNavigate } from "react-router-dom";
import GetAllPostsService from "../../services/GetAllPostsService";
import "../../App.css";
import LikePostService from "../../services/LikePostService";
import UnlikePostService from "../../services/UnlikePostService";
import { ToastContainer } from "react-toastify";
import AddToListService from "../../services/AddToListService";
import DeleteFromListService from "../../services/DeleteFromListService";

const Home = ({ setAuthenticate, isAuthenticate }) => {
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
  const [postData, setPostData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [reload, setReload] = useState(false);
  let session = document.cookie.match(/session_key=([^;]*)/);

  useEffect(
    () => {
      function func() {
        setIsFetching(true);
        if (!session) {
          setAuthenticate(false);
          navigate("/");
        } else {
          GetAllPostsService(session, setPostData, setIsFetching);
        }
      }
      func();
    },
    // eslint-disable-next-line
    [isAuthenticate, reload]
  );

  const handleLike = async (post_id) => {
    await LikePostService(session, post_id);
    setReload(!reload);
  }; 

  const handleUnlike = async (post_id) => {
    await UnlikePostService(session, post_id);
    setReload(!reload);
  };

  const handleSave = async (post_id) => {
    await AddToListService(session, post_id);
    setReload(!reload);
  }; 

  const handleUnsave = async (post_id) => {
    await DeleteFromListService(session, post_id);
    setReload(!reload);
  };

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
            {!isFetching ? (
              <>
                {postData.length > 0 ? (
                  postData.map((post) => (
                    <PostCard
                      key={post.post_id}
                      post={post}
                      handleLike={handleLike}
                      handleUnlike={handleUnlike}
                      handleSave={handleSave}
                      handleUnsave={handleUnsave}
                    />
                  ))
                ) : (
                  <div className="d-flex h-100 pb-5 w-100 justify-content-center align-items-center">
                    <h1
                      className="text-white-50"
                      style={{ fontFamily: "cursive" }}
                    >
                      Nothing to show
                    </h1>
                  </div>
                )}
              </>
            ) : (
              <div
                className="d-flex flex-column w-100 justify-content-center align-items-center text-white"
                style={{ minHeight: "100vh" }}
              >
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
          </div>
        </div>
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
    </>
  );
};

export default DefaultLayoutHoc(Home);
