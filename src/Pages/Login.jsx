import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaMusic } from "react-icons/fa";
import "./Login.css";

function Login() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const handleLogin = () => {
        const savedUsername = localStorage.getItem("username");
        const savedPassword = localStorage.getItem("password");

        if (
            username === savedUsername &&
            password === savedPassword 
        ) {
            alert("Login successful");
        } else {
            alert("Invalid username or password");
        }
    };

    return (
        <div className="card">
            <h2><FaMusic className="music-icon" /> Song Quiz</h2>

                <p>Login to Continue</p>
                
                <div className="form">
                   <input 
                   type="text" 
                   placeholder="Username..." 
                   value={username}
                   onChange={(e) => setUsername(e.target.value)}
                   />

                   <input 
                   type="password" 
                   placeholder="Password..." 
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                   />
                
                   <div className="options">
                      <label className="remember">
                          <input type="checkbox" />
                          <span>Remember me</span>
                      </label>
                      <a href="#">Forgot password?</a>
                   </div>

                   <button onClick={handleLogin}>Login</button>

                   <p className="signup-text">
                       Don't have an account? {""} 
                       <span onClick={() => navigate("/register")}>
                         Create account
                       </span>
                   </p>
                </div>

                <div className="right-msg">
                    <h1>Welcome Back!</h1>
                    <p>Ready to test your music knowledge? Sign in and start the quiz!</p>
                </div>
        </div>
    )

}

export default Login;