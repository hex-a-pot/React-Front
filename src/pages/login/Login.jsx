import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/authContext"
import "./login.scss"
function Login() {
  const {login} = useContext(AuthContext);
  
  return (
    <div className="login">
      <div className="card">
        <div className="left">
        <h1>Hello World.</h1>
        <p>Focus on talking about what you do. But more importantly, talk about how you are different from the pack.</p>
        <span>Don't you have an account?</span>
        <Link to = "/register">
        <button>Register</button>
        </Link>
        </div>
        <div className="right">
        <h1>Login</h1>
        <form>
          <input type="text" placeholder = "Username" />
          <input type="password" placeholder = "Password" />
          <button onClick={login}>Login</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Login