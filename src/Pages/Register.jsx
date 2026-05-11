import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Register() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = () => {

        if (!username || !password || !email) {
            alert("Please fill all fields");
            return;
        }

        if (password.length < 8) {
            alert("Password must be at least 8 characters");
            return;
        }

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
                required
                />

                <input 
                type="email" 
                placeholder="Email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />

                <input 
                type="password"
                placeholder="Password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                required
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