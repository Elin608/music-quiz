import "./Login.css";
import { FaMusic } from "react-icons/fa";

function Login() {
    return (
        <div className="card">
            <h2><FaMusic className="music-icon"/> Song Quiz</h2>
            <p>Login to Continue</p>

            <div className="form">
                <input type="text" id="username" placeholder="Username..." />
                <input type="password" id="password" placeholder="Password..." />
                
                <div className="options">
                   <label className="remember">
                       <input type="checkbox" />
                       <span>Remember me</span>
                   </label>
                   <a href="#">Forgot password?</a>
                </div>
                <button>Login</button>

                <p className="signup-text">
                    Don't have an account? <span>Create</span>
                </p>
            </div>
        </div>
    )
}

export default Login;