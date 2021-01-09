import React, { useState } from "react";
import { Redirect, useLocation, useHistory } from "react-router-dom";

function Login() {
  const location = useLocation();
  const history = useHistory();
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const updateState = (key, val) => {
    let temp = state;
    temp[key] = val;
    setState(temp);
  };

  const handleClick = () => {
    // axios
    setSuccess(true);
  };

  return (
    <div
      className="d-flex card flex-column mx-auto col-md-3 col-10 p-4 mb-4"
      style={{ marginTop: "100px" }}
    >
      {success ? <Redirect to={history.goBack()} /> : null}
      <h2>Login</h2>
      <div className="d-flex flex-column my-3">
        <h6 className="text-muted">Email</h6>
        <input
          onChange={(e) => updateState("username", e.target.value)}
          type="text"
          className="p-2"
        ></input>
      </div>
      <div className="d-flex flex-column my-3">
        <h6 className="text-muted">Password</h6>
        <input
          onChange={(e) => updateState("password", e.target.value)}
          type="password"
          className="p-2"
        ></input>
      </div>
      <button
        onClick={() => handleClick()}
        className="btn btn-md btn-primary fw-bold my-3"
      >
        Login
      </button>
    </div>
  );
}

export default Login;
