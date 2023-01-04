import "./stories.scss";

import { useContext } from "react";
import {AuthContext} from "../../context/authContext"

const stories = [
  {
    id: 1,
    name: "Kumar A",
    img:"https://images.pexels.com/photos/14520446/pexels-photo-14520446.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  },
  {
    id: 2,
    name: "Alam M",
    img:"https://images.pexels.com/photos/10924810/pexels-photo-10924810.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  },
  {
    id: 3,
    name: "Manzer A",
    img:"https://images.pexels.com/photos/13350113/pexels-photo-13350113.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  },
  {
    id: 4,
    name: "Abhishek",
    img:"https://images.pexels.com/photos/10515553/pexels-photo-10515553.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  },
  {
    id: 5,
    name: "Rajat",
    img:"https://images.pexels.com/photos/14857354/pexels-photo-14857354.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  }
  
];

function Stories() {

  const {currentUser} = useContext(AuthContext);

  return <div className="stories">
    <div className="story">
      <img src={currentUser.profilePic} alt="" />
      <span>{currentUser.name}</span>
      <button>+</button>
    </div>
    {stories.map((item,id) => (
      <div className="story" key={id}>
        <img src={item.img} alt="" />
        <span>{item.name}</span>
      </div>
    ))}
  </div>;
}

export default Stories;
