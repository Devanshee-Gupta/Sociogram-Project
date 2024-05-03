import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddPostService = (session, formData) => {
  const navigate = useNavigate();
  try {
    let session_key = session[1];
    axios
      .post(
        "http://127.0.0.1:8000/addnewpost/",
        {
            session_key:session_key,
            formData:formData,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        navigate('/');
      });
  } catch (error) {
    console.log("Error:", error);
    toast.error("Something went wrong. Please try again.");
  }
};

export default AddPostService;
