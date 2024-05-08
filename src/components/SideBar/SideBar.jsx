import SideBar1 from "./SideBar1";
import SideBar2 from "./SideBar2";
import LogoutService from "../../services/LogoutService";
import { useNavigate } from "react-router-dom";

const SideBar = ({openedWindow,setAuthenticate}) => {

  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    let session = document.cookie.match(/session_key=([^;]*)/);
    await LogoutService(session, setAuthenticate);
    navigate('/');
  };


  return (
    <div className="position-relative">
      {/* sidebar1   */}
      <SideBar1 openedWindow={openedWindow} handleLogout={handleLogout} />
      {/* sidebar2   */}
      <SideBar2 openedWindow={openedWindow} handleLogout={handleLogout}/>
    </div>
  );
};

export default SideBar;
