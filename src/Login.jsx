import React, { useState } from "react";

const Login = ({ state, setState, setPage, showNotification }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check credentials from users object in state
    if (state.users && state.users[username] && state.users[username] === password) {
      setState({ ...state, currentUser: username });
      setPage("dashboard");
      showNotification("Login successful!", "success");
      setError("");
    } else {
      setError("Invalid credentials");
      showNotification("Invalid credentials", "error");
    }
  };

  return (
    <div className="login-container">
      <h2>Applicant Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;