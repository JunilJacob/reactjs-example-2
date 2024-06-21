import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
 
export default function FormDemo() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    console.log("Username: ", username);
    console.log("Password: ", password);
    navigate("/dashboard/home");
  }

  return (
    <div>
      <form onSubmit={submit} className="form">
        <label>
          Username:
          <input type="text" name="username" className="form-content" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" name="password" className="form-content" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button id="submit-btn" type="submit">Login</button>
      </form>
    </div>
  );
}