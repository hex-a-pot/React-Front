import { useContext } from "react";
import "./comments.scss";
import {AuthContext}from "../../context/authContext"

function Comments() {
  const {currentUser} = useContext(AuthContext);
  const comments = [
    {
      id: 1,
      name: "Manzer A",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "We dream in colors borrowed from the sea.",
    },
    {
      id: 2,
      name: "Alam M",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "You know you're getting old when you get that one candle on the cake.",
    },
    {
      id: 3,
      name: "Kumar A",
      userId: 3,
      profilePic:
        "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Writing in a diary is a really strange experience for someone like me.",
    },
    {
      id: 4,
      name: "Rajat",
      userId: 4,
      profilePic:
        "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Sometimes we make the process more complicated than we need to. We will never make a journey of a thousand miles by fretting about how long it will take or how hard it will be. We make the journey by taking each day step by step and then repeating it again and again until we reach our destination.",
    },
    {
      id: 5,
      name: "Abhishek ",
      userId: 5,
      profilePic:
        "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Whoever fights monsters should see to it that in the process he does not become a monster. And if you gaze long enough into an abyss, the abyss will gaze back into you.",
    },
  ];
  return <div className="comments">
    <div className="write">
    <img src={currentUser.profilePic} alt="" />
    <input type="text" placeholder="Write to comment.."/>
    <button>submit</button>
    </div>
    {comments.map((item,id)=>(
      <div className="comment" key = {id}>
        <img src={item.profilePic} alt="" />
        <div className="info">
          <span>{item.name}</span>
          <p>{item.desc}</p>
        </div>
        <span className="date">1hr Ago</span>
      </div>
    ))}
  </div>;
}

export default Comments;