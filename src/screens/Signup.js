import React from "react";

function Signup() {
  return (
    <div className="container">
      <h3 className="text-center text-uppercase pt-4">Create an Account</h3>
      <div className="mx-auto contact-form-container text-muted shadow-sm rounded p-3 lh-2">
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Fullname
            </label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Contact no.
            </label>
            <input type="text" className="form-control" id="phone" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" id="email" required />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              required
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
