import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import Home from "./components/HomePage/Home";
import AddPost from "./components/AddPostPage/AddPost";
import Profile from "./components/ProfilePage/Profile";
import UserProfile from "./components/UserProfilePage/UserProfile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SplashScreen />} />
          <Route exact path="/home" element={<Home openedWindow={"Home"} />} />
          <Route
            exact
            path="/addpost"
            element={<AddPost openedWindow={"AddPost"} />}
          />
          <Route
            exact
            path="/profile"
            element={<Profile openedWindow={"Profile"} />}
          />
          <Route
            exact
            path="/:userid/profile"
            element={<UserProfile openedWindow={"UserProfile"} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
