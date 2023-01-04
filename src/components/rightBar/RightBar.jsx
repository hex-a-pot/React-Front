import "./rightBar.scss";

function RightBar() {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <span>Alam M.</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <span>Manzer A.</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>
            Other Activities
          </span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <p>
              <span>Kumar A</span> Changed their profile picture.
              </p>
            </div>
            <span>+1 min Ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <p>
              <span>Rajat</span> updated his status.
              </p>
            </div>
            <span>+10 mins Ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <p>
              <span>Suman</span> transitioned carreer.
              </p>
            </div>
            <span>1 day Ago</span>
          </div>
        </div>
        <div className="item">
          <span>Friends Online</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online"></div>
              <span>Alam M.</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online"></div>
              <span>Manzer A.</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online"></div>
              <span>Rajat</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online"></div>
              <span>Kumar A</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online"></div>
              <span>Suman</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online"></div>
              <span>Abhishek</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
