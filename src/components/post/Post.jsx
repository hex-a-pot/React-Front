import "./post.scss";
import { FavoriteOutlined, FavoriteBorderOutlined, MoreHoriz, TextsmsOutlined, ShareOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";
import Comments from "../comments/Comments";

function Post({ item }) {
    //Temporary
    const liked = false;
    const [commentOpen,setCommentOpen] = useState(false)
  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={item.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${item.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{item.name}</span>
              </Link>
              <span className="date">1 min Ago</span>
            </div>
          </div>
          <MoreHoriz />
        </div>
        <div className="content">
            <p>
                {item.desc}
            </p>
            <img src={item.img} alt="" />
        </div>
        <div className="info">
            <div className="item">
                {liked?<FavoriteOutlined style={{color:"red"}}/>:<FavoriteBorderOutlined/>}
                <span>12 likes</span>
            </div>
            <div className="item">
                <TextsmsOutlined onClick = {()=>setCommentOpen(!commentOpen)}/>
                <span>Comments</span>
            </div>
            <div className="item">
                <ShareOutlined />
                <span>Share</span>
            </div>
        </div>
        {commentOpen&&<Comments/>}
      </div>
    </div>
  );
}

export default Post;
