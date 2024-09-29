import { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

import { useAuth } from "../../context/AuthContext";

function LoginPopup({ setShowLogin }) {
  const [currentState, setCurrentState] = useState("Sign In"); // Start with "Sign In"
  const { user, signUp, signIn, signOut } = useAuth();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle the form submit logic
  const HandleOnSubmit = async (e) => {
    e.preventDefault();
    if (currentState === "Sign Up") {
      await signUp(email, password, username);
    } else if (currentState === "Sign In") {
      await signIn(email, password);
    }
    setShowLogin(false);
  };

  // Handle Sign Out
  const handleSignOutClick = () => {
    signOut(); // This triggers the sign out function from Firebase
    setCurrentState("Sign In"); // Reset to "Sign In" state after sign-out
  };

  return (
    <div className="login-popup">
      <div className="login-popup-container">
        <div className="login-popup-title">
          <h2>{user ? "Welcome" : currentState}</h2>
          <img src={assets.cross_icon} onClick={() => setShowLogin(false)} />
        </div>

        {/* If user is logged in, show Sign Out button */}
        {user ? (
          <div>
            <p>
              {user && user.email ? (
                <p>Welcome, {user.email}!</p>
              ) : (
                <p>Welcome, Guest</p>
              )}
            </p>
            <button onClick={handleSignOutClick}>Sign Out</button>
          </div>
        ) : (
          <form onSubmit={HandleOnSubmit}>
            <div className="login-popup-inputs">
              {/* Show username input only for Sign Up */}
              {currentState === "Sign Up" && (
                <input
                  type="text"
                  value={username}
                  placeholder="Enter your name"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
              )}
              <input
                type="email"
                value={email}
                placeholder="Enter your email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                value={password}
                placeholder="Enter your password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">
              {currentState === "Sign Up" ? "Create account" : "Sign In"}
            </button>

            {/* Show terms and conditions only on Sign Up */}
            {currentState === "Sign Up" && (
              <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>I agree to all the terms and conditions</p>
              </div>
            )}

            {/* Toggle between Sign Up and Sign In */}
            {currentState === "Sign In" ? (
              <p>
                Create a new account?{" "}
                <span onClick={() => setCurrentState("Sign Up")}>
                  Click here
                </span>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <span onClick={() => setCurrentState("Sign In")}>Sign In</span>
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}

export default LoginPopup;
