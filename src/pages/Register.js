import React, { useState } from "react";

import "./Register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted!");
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

export default Register;
