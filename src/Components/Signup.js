import React, { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(
        "http://localhost:5005/auth/register",
        options
      );
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="register">
      <form className="border p-5 shadow" onSubmit={handleSubmit}>
        <h2 className="display-5 mb-4">Registration</h2>
        <div className="form-group mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="mdp">Password</label>
          <input
            type="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary" type="submit">
            Register
          </button>
          <button className="btn btn-secondary mx-2" type="reset">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
