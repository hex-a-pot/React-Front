import "./leftBar.scss";
import Friends from "../../assets/friends.png"
import Groups from "../../assets/groups.png"
import Market  from "../../assets/marketplace.png"
import Watch  from "../../assets/watch.png"
import Memories  from "../../assets/memories.png"
import Events from "../../assets/event.png"
import Gaming from "../../assets/gaming.png"
import Gallery from "../../assets/gallery.png"
import Videos from "../../assets/video-player.png"
import Messages from "../../assets/message.png"
import FundRaisers from "../../assets/donation.png"
import Tutorials from "../../assets/video-tutorials.png"
import Courses from "../../assets/online-learning.png"
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";


function LeftBar() {
  const{currentUser} = useContext(AuthContext);
  return <div className="leftBar">
    <div className="container">
    <div className="menu">
      <div className="user">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
      </div>
      <div className="item">
        <img src={Friends} style = {{height:"30px",width:"30px"}}alt="" />
        <span>Friends</span>
      </div>
      <div className="item">
        <img src={Groups} style = {{height:"30px",width:"30px"}}alt="" />
        <span>Groups</span>
      </div>
      <div className="item">
        <img src={Market} style = {{height:"30px",width:"30px"}}alt="" />
        <span>Market</span>
      </div>
      <div className="item">
        <img src={Watch} style = {{height:"30px",width:"30px"}}alt="" />
        <span>Watch</span>
      </div>
      <div className="item">
        <img src={Memories} style = {{height:"30px",width:"30px"}}alt="" />
        <span>Memories</span>
      </div>
    </div>
    <hr />
    <div className="menu">
      <span>Your Shortcuts</span>
      <div className="item">
        <img src={Events} style = {{height:"30px",width:"30px"}}alt="" />
        <span>Events</span>
      </div>
      <div className="item">
        <img src={Gaming} style = {{height:"30px",width:"30px"}}alt="" />
        <span>Gaming</span>
      </div>
      <div className="item">
        <img src={Gallery} style = {{height:"30px",width:"30px"}}alt="" />
        <span>Gallery</span>
      </div>
      <div className="item">
        <img src={Videos} style = {{height:"30px",width:"30px"}}alt="" />
        <span>Videos</span>
      </div>
      <div className="item">
        <img src={Messages} style = {{height:"30px",width:"30px"}}alt="" />
        <span>Messages</span>
      </div>
    </div>
    <hr />
    <div className="menu">
      <span>Others</span>
      <div className="item">
        <img src={FundRaisers} style = {{height:"30px",width:"30px"}}alt="" />
        <span>Fund Raisers</span>
      </div>
      <div className="item">
        <img src={Tutorials} style = {{height:"30px",width:"30px"}}alt="" />
        <span>Tutorials</span>
      </div>
      <div className="item">
        <img src={Courses} style = {{height:"30px",width:"30px"}}alt="" />
        <span>Courses</span>
      </div>
    </div>
    </div>
  </div>;
}

export default LeftBar;