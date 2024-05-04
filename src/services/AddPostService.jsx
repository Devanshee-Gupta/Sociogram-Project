import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddPostService = (session, formData,navigate) => {
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
        navigate('/home');
      }).catch((error) => {
        if (error.response) {
          let message = error.response.data;
          if (message.error) toast.error(message.error);
        } else if (error.request) {
          console.error("No response received from the server:", error.request);
          toast.error("No response received from the server");
        } else {
          console.error("Error during request setup:", error.message);
          toast.error("An error occurred during the request");
        }
      });
  } catch (error) {
    console.log("Error:", error);
    toast.error("Something went wrong. Please try again.");
  }
};

export default AddPostService;
