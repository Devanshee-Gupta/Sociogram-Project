import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChangePasswordService = (session,formData) => {
    try {
        let session_key = session[1];
        axios
          .post("http://127.0.0.1:8000/changepassword/", {
            session_key: session_key,
            formData:formData
          })
          .then((res) => {
            window.location.reload();
            toast.success(res.data.message);
          });
      } catch (error) {
        console.error("Error during login:", error);
        toast.error("Something went wrong. Please try again.");
      }
};

export default ChangePasswordService;
