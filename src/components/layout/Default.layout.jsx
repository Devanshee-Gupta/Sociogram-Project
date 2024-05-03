import React, { useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";
import Authenticate from "../../services/Authenticate";

const DefaultLayoutHoc = (Component) => {
  const DefaultLayoutWrapper = (props) => {
    const [isAuthenticate, setAuthenticate] = useState(false);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
      const func = () => {
        setIsFetching(true);
        let session = document.cookie.match(/session_key=([^;]*)/);
        if (!session) {
          setAuthenticate(false);
        }
        Authenticate(session, setAuthenticate,setIsFetching);
      };
      func();
    }, []); 

    return (
      <>
        {isFetching ? (
          <div
            className="d-flex flex-column justify-content-center align-items-center text-white"
            style={{ minHeight: "100vh" }}
          >
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            {isAuthenticate ? (
              <div
                className="d-flex"
                style={{ maxHeight: "100svh", overflow: "hidden" }}
              >
                <SideBar
                  openedWindow={props.openedWindow}
                  setAuthenticate={setAuthenticate}
                />
                <Component
                  {...props}
                  isAuthenticate={isAuthenticate}
                  setAuthenticate={setAuthenticate}
                />
              </div>
            ):
            (
              <div
                className="d-flex flex-column justify-content-center align-items-center text-white"
                style={{ minHeight: "100vh" }}
              >
                <h1 style={{ fontSize: "1.5rem" }}>Sorry !</h1>
                <p>You are not authorized to access this page.</p>
                <a
                  href="/"
                  className="btn bg-white py-2 px-3 cursor-pointer nav-link text-black fw-bold"
                >
                  Login First
                </a>
              </div>
            )}
          </>
        )}
      </>
    );
  };

  return DefaultLayoutWrapper;
};

export default DefaultLayoutHoc;
