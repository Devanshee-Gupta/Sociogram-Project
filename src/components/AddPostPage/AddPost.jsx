import React, { useState } from "react";
import DefaultLayoutHoc from "../layout/Default.layout";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import addPostIcon from "../../assets/add-image.svg";
import { ToastContainer, toast } from "react-toastify";
// import AddPostService from "../../services/AddPostService";

const AddPost = ({ openedWindow }) => {
  const INITIAL_POST = {
    caption: "",
    image: null, // Change to null to properly handle file upload
    tags: "",
  };
  const [postData, setPostData] = useState(INITIAL_POST);
  // let session = document.cookie.match(/session_key=([^;]*)/);
  const [, setErrors] = useState({
    caption: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};
    const requiredFields = ["caption", "image"];

    requiredFields.forEach((field) => {
      if (!postData[field]) {
        newErrors = { ...newErrors, [field]: "This field is required." };
      }
    });

    // Display "All fields are required" toast only if there is at least one empty field
    if (requiredFields.some((field) => !postData[field])) {
      toast.error("All fields are required.");
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const fileInput = document.getElementById("image");

      if (fileInput && fileInput.files && fileInput.files.length > 0) {
        let formData = {};
        formData["caption"]=postData.caption;
        formData["tags"]=postData.tags;
        formData["image"]=fileInput.files[0];
        // Check if formData is non-empty before calling AddPostService
        if (
          formData &&
          Object.keys(formData).length>0
        ) {
          // AddPostService(session, formData);
          setPostData(INITIAL_POST);
        } else {
          console.error("FormData is empty or invalid.");
        }
      } else {
        console.error("No file selected or file input element not found.");
      }
    }
  };

  function displaySelectedImage(event, elementId, svgId) {
    const selectedImage = document.getElementById(elementId);
    const selectedSvg = document.getElementById(svgId);
    const fileInput = event.target;

    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();

      reader.onload = function (e) {
        selectedImage.src = e.target.result;
        selectedImage.style.display = "block";
        selectedSvg.style.display = "none";
        setPostData((prevData) => ({
          ...prevData,
          image: fileInput.files[0], // Update image value when file is selected
        }));
      };

      reader.readAsDataURL(fileInput.files[0]);
    }
  }

  return (
    <div className="d-flex flex-column w-100 mt-5 hide-scrollbar" style={{ overflow: "auto" }}>
      <div
        className="d-flex text-white flex-wrap justify-content-center align-items-center"
        style={{ height: "max-content" }}
      >
        <BorderColorIcon />
        <h2 className="ms-3 my-3" style={{ fontFamily: "cursive" }}>
          Create New Post
        </h2>
      </div>
      <form
        className="m-5 bg-transparent"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        {/* <!--Image--> */}
        <div className="form-group bg-transparent w-75 mx-auto text-white">
          <label htmlFor="caption" className="bg-transparent mb-1">
            Caption
          </label>
          <textarea
            type="text"
            rows="5"
            name="caption"
            className="form-control inputs bg-transparent h-100 text-white-50"
            id="caption"
            onChange={handleChange}
          />
        </div>

        <div className="my-4 w-75 mx-auto d-flex flex-column justify-content-between">
          <label
            htmlFor="floatingInput1"
            className="bg-transparent w-50 mb-1 text-white"
          >
            Image
          </label>
          <label
            className="form-control inputs py-4 bg-transparent d-flex flex-column justify-content-center align-items-center"
            htmlFor="image"
          >
            <img
              className="img w-50 h-auto"
              style={{ display: "none" }}
              id="selectedImage"
              src={addPostIcon}
              alt="example placeholder"
            />
            <svg
              className="svg-icon"
              id="svgId"
              style={{
                verticalAlign: "middle",
                fill: "rgb(255 255 255 / 40%)",
                overflow: "hidden",
                height: "100px",
                width: "100px",
                display: "static",
              }}
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M160 128A96 96 0 0 0 64 224v576A96 96 0 0 0 160 896h262.72a374.464 374.464 0 0 1-25.216-64H160a31.872 31.872 0 0 1-32-32v-59.264l227.52-256.512L430.016 562.56c10.752-19.008 23.232-36.992 37.248-53.504L353.92 389.76 128 644.224V224c0-17.728 14.272-32 32-32h704c17.728 0 32 14.272 32 32v198.72c22.72 11.776 44.48 25.536 64 41.792V224A96 96 0 0 0 864 128zM704 256c-35.2 0-64 28.8-64 64s28.8 64 64 64 64-28.8 64-64-28.8-64-64-64z m32 192C577.28 448 448 577.28 448 736S577.28 1024 736 1024s288-129.28 288-288S894.72 448 736 448z m0 64c124.032 0 224 100.032 224 224 0 124.032-100.032 224-224 224A223.616 223.616 0 0 1 512 736C512 611.968 612.032 512 736 512zM704 576v128H576v64h128v128h64v-128h128v-64h-128V576z"
                fill="rgb(255 255 255 / 40%)"
              />
            </svg>

            <input
              type="file"
              name="image"
              className="form-control d-none"
              id="image"
              onChange={(e) => {
                displaySelectedImage(e, "selectedImage", "svgId");
                handleChange(e);
              }}
            />
          </label>
        </div>

        <div className="form-group bg-transparent w-75 mx-auto text-white">
          <label htmlFor="tags" className="bg-transparent mb-1">
            Tags ( seperated by commas " , " )
          </label>
          <textarea
            name="tags"
            type="text"
            rows={"2"}
            className="form-control py-3 inputs bg-transparent h-100 text-white-50"
            id="tags"
            onChange={handleChange}
          />
        </div>

        <div className="w-75 mx-auto text-center">
          <button
            className={`btn btn-outline-secondary buttons mt-4`}
            type="submit"
            id="button-addon1"
          >
            Submit
          </button>
        </div>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default DefaultLayoutHoc(AddPost);
