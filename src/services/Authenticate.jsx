import axios from "axios";

const Authenticate = async (session,setAuthenticate,setIsFetching) => {

  if(!session) return;
  try {
    let session_key = session[1];
    await axios
      .post("http://127.0.0.1:8000/authenticate/", {
        session_key: session_key,
      })
      .then((res) => {
        if (res.data.success) {
          setAuthenticate(true);
        }
      })
      .catch((error) => {
        if (error.response) {
          if(error.response.data.success==="False") setAuthenticate(false);
        } else if (error.request) {
          console.error("No response received from the server:", error.request);
        } else {
          console.error("Error during request setup:", error.message);
        }
      });

      setIsFetching(false);
  } catch (error) {
    console.error("Error :", error);
    setIsFetching(false);
  }

};

export default Authenticate;
