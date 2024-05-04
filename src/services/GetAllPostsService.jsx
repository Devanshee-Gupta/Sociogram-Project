import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GetAllPostsService = (session, setPostData, setIsFetching) => {
  try {
    let session_key = session[1];
    axios
      .post("http://127.0.0.1:8000/getallposts/", {
        session_key: session_key,
      })
      .then((res) => {
        setPostData(res.data.Data);
        setIsFetching(false);
      })
      .catch((error) => {
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
    console.error("Error during login:", error);
    toast.error("Something went wrong. Please try again.");
    setIsFetching(false);
  }
};

export default GetAllPostsService;
