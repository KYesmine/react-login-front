import React, { useState } from "react";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    };

    try {
      const response = await fetch("http://localhost:5005/auth/login", options);
      const result = await response.json();

      // TODO save token in cookie
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="login">
      <form className="border p-5 shadow" onSubmit={handleSubmit}>
        <h2 className="display-5 mb-4">Login</h2>
        <div className="form-group mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="mdp">Password</label>
          <input
            type="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary" type="submit">
            Login
          </button>
          <button className="btn btn-secondary mx-2" type="reset">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signin;
