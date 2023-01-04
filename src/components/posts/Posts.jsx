import Post from "../post/Post";
import "./posts.scss";

function Posts() {
  const posts = [
    {
      id: 1,
      name: "Manzer A",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "We dream in colors borrowed from the sea.",
      img: "https://images.pexels.com/photos/11987710/pexels-photo-11987710.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 2,
      name: "Alam M",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "You know you're getting old when you get that one candle on the cake.",
      img: "https://images.pexels.com/photos/6829488/pexels-photo-6829488.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 3,
      name: "Kumar A",
      userId: 3,
      profilePic:
        "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Writing in a diary is a really strange experience for someone like me.",
      img: "https://images.pexels.com/photos/14784846/pexels-photo-14784846.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
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
      profilePic: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Whoever fights monsters should see to it that in the process he does not become a monster. And if you gaze long enough into an abyss, the abyss will gaze back into you.",
      img: "https://images.pexels.com/photos/13802257/pexels-photo-13802257.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
  ];
  return <div className="posts">
    {posts.map((item,id)=>(
      <Post item = {item} key = {id}/>
    ))}
  </div>;
}

export default Posts;
