import "./navBar.scss";
import {
  HomeOutlined,
  DarkModeOutlined,
  GridViewOutlined,
  WbSunnyOutlined,
  NotificationsOutlined,
  EmailOutlined,
  PersonOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

function NavBar() {
  const { darkMode, toggle } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navBar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Hertz</span>
        </Link>
        <HomeOutlined style={{cursor:"pointer"}}/>
        {darkMode ? (
          <WbSunnyOutlined onClick={toggle} style={{cursor:"pointer"}}/>
        ) : (
          <DarkModeOutlined onClick={toggle} style={{cursor:"pointer"}}/>
        )}
        <GridViewOutlined style={{cursor:"pointer"}}/>
        <div className="search">
          <SearchOutlined />
          <input type="text" placeholder="Search here..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlined style={{cursor:"pointer"}}/>
        <EmailOutlined style={{cursor:"pointer"}}/>
        <NotificationsOutlined style={{cursor:"pointer"}}/>
        <div className="user">
          <img
            src={currentUser.profilePic}
            alt=""
          />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
