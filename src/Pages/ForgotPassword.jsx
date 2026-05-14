import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function ForgotPassword() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");

    const handleReset = () => {

        if (!email) {
            alert("Please enter your email");
            return;
        }

        const savedEmail = localStorage.getItem("email");

        if (email === savedEmail) {
            alert("Password reset link sent!");
        } else {
            alert("Email not found!")
        }
    };

    return (
        <div className="card">
            <h2>Forgot Password</h2>

            <div className="form">
                <input 
                type="email" 
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <button onClick={handleReset}>
                    Send Reset Link
                </button>

                <p className="signup-text">
                    Back to{" "}
                    <span onClick={() => navigate("/")}>
                        Login
                    </span>
                </p>
            </div>
            
            <div className="right-msg">
                <h1>Reset Password</h1>
                <p>
                    Enter your registered email to recover your account.
                </p>
            </div>
        </div>
    );

}

export default ForgotPassword;