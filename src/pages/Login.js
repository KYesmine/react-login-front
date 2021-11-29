import React from "react";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted!");
  };

  return (
    <div className="login">
      <form className="border p-5 shadow" onSubmit={handleSubmit}>
        <h2 className="display-5 mb-4">Login</h2>
        <div className="form-group mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="mdp">Password</label>
          <input type="password" className="form-control" />
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

export default Login;
