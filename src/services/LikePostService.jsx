import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LikePostService = async (session,post_id) => {
  try {
    let session_key = session[1];
    await axios
      .post("http://127.0.0.1:8000/likepost/", {
        session_key: session_key,
        post_id: post_id,
      })
      .then((res) => {
        if (res.data.message) {
          toast.success(res.data.message);
        }
        if (res.data.error) {
          toast.error(res.data.error);
        }
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
    console.error("Error during adding to cart:", error);
    toast.error("Something went wrong. Please try again.");
  }
};

export default LikePostService;
