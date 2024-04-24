import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LogoutService = async (session, setAuthenticate) => {

  let temp = session[1];
  try {
    await axios
      .post("http://127.0.0.1:8000/logout/", {
        session_key: session[1],
      })
      .then((res) => {
        document.cookie = `session_key=${temp}; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/;`;
        toast.success("Logged out successfully!");
        setAuthenticate(false);
      });
  } catch (error) {
    toast.error("Something went wrong. Please try again.");
    // console.error("Error during login:", error);
  }

};

export default LogoutService;
