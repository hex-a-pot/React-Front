import { EmailOutlined, FacebookTwoTone, Instagram, Language, LinkedIn, MoreVert, Pinterest, Place, Twitter } from "@mui/icons-material"
import "./profile.scss"
import Posts from "../../components/posts/Posts"

function Profile() {
  return (
    <div className="profile">
      <div className="imgs">
        <img src="https://images.pexels.com/photos/3848760/pexels-photo-3848760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="cover" />
        <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="profilePic" />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com" ><FacebookTwoTone fontSize="large"/></a>
            <a href="http://instagram.com"><Instagram fontSize="large"/></a>
            <a href="http://twitter.com"><Twitter fontSize="large"/></a>
            <a href="http://linkedin.com"><LinkedIn fontSize="large"/></a>
            <a href="http://pinterest.com"><Pinterest fontSize="large"/></a>
          </div>
          <div className="center">
            <span>Manzer A</span>
            <div className="info">
              <div className="item">
                <Place/>
                <span>Purnea</span>
              </div>
              <div className="item">
                <Language/>
                <span>manzer.armaan</span>
              </div>
            </div>
              <button>Follow</button>
          </div>
          <div className="right">
            <EmailOutlined/>
            <MoreVert/>
          </div>
        </div>
        <Posts/>
      </div>
    </div>
  )
}

export default Profile