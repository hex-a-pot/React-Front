import { Link } from "react-router-dom"
import "./register.scss"
function Register() {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
        <h1>Hello World.</h1>
        <p>Focus on talking about what you do. But more importantly, talk about how you are different from the pack.</p>
        <span>Do you have an account?</span>
        <Link to = "/login">
        <button>Login</button>
        </Link>
        
        </div>
        <div className="right">
        <h1>Register</h1>
        <form>
          <input type="text" placeholder = "Username" />
          <input type="text" placeholder = "Email" />
          <input type="password" placeholder = "Password" />
          <input type="text" placeholder = "Name" />
          <button>Register</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Register