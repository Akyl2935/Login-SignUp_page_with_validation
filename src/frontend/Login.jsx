import React from "react";

function Login() {
  return (
    <div>
      <div>
        <form action=" ">

        <div className = "mb-3">

          <label htmlFor = "email">Email</label>
          <input type = "email" placeholder = "enter email"/>

        </div>

          <div className = "mb-3">
          <label htmlFor = "password">Email</label>
          <input type = "password" placeholder = "enter password"/>

        </div>

        <button className = "btn btn-success">Login</button>
        <p>You are agree to our terms and policy</p>
        <button className = "btn btn-default border">Create Account</button>

        </form>
      </div>
    </div>
  );
}

export default Login;
