import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Register() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = () => {

        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        localStorage.setItem("email", email);

        alert("Registration successful!");
        
        navigate("/");
    };

    return (
        <div className="card">
            <h2>Create Account</h2>

            <div className="form">

                <input 
                type="text" 
                placeholder="Username..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />

                <input 
                type="email" 
                placeholder="Email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <input 
                type="password"
                placeholder="Password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                />

                <button onClick={handleRegister}>
                    Register
                </button>

                <p className="signup-text">
                    Already have an account? {""}
                    <span onClick={() => navigate("/")}>
                        Login
                    </span>
                </p>
            </div>

            <div className="right-msg">
                <h1>Join the Quiz</h1>
                <p>
                    Create your account and start playing your favorite music quiz game.
                </p>
            </div>

        </div>
    );
}

export default Register;