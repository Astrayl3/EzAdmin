import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigate, Link } from "react-router-dom";
import "../../index.css"; // Import global styles

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
<<<<<<< HEAD
      setError("Sai email hoặc mật khẩu!");
=======
      setError("Wrong email or password!");
>>>>>>> 9e713fe71311b4aa1de19fbaa962b3b7b5935dfb
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Log In</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email or Phone Number"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="auth-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="auth-input"
        />
        <button type="submit" className="btn-primary">
          Log In
        </button>
      </form>

      {error && <p className="auth-error">{error}</p>}

      <div className="auth-separator"></div>

      <Link to="/register" className="btn-secondary">
        Create New Account
      </Link>
    </div>
  );
};

export default Login;
