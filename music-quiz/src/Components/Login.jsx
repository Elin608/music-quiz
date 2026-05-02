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
                <button>Login</button>
            </div>
        </div>
    )
}

export default Login;