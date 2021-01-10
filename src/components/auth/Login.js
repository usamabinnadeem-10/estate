import React, { useState } from "react";
import { Redirect, useLocation, useHistory } from "react-router-dom";
import axios from "axios";
import { URL } from "../../URL";
import { config } from "../../URL";

function Login(props) {
  const location = useLocation();
  const history = useHistory();
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(false);

  const updateState = (key, val) => {
    let temp = state;
    temp[key] = val;
    setState(temp);
  };

  const handleClick = () => {
    // axios
    axios
      .post(URL + "auth/login/", state, config)
      .then((res) => {
        props.login(res.data);
        <Redirect to={history.goBack()} />;
      })
      .catch((err) => {
        setError(true);
        console.log(err.data);
      });
    // props.login({
    //   refresh:
    //     "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTYxMDMwMzQ1MiwianRpIjoiM2Q1YzE0OGJkN2FhNDJmY2E4NTlhMzllMzNlNDJlNjIiLCJ1c2VyX2lkIjoxfQ.3AGUbtXjIunoqDOhcinvk1PIephc6CGsym4IgTlPCdk",
    //   access:
    //     "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjEwMjE3MzUyLCJqdGkiOiJkZThkOTc3OWU1NGI0YTNhOTJmNzg2YTkxZTZiYmRkNCIsInVzZXJfaWQiOjF9.17aE4rjF-7BLhH-7gPyw-nEMPApFWyT9KFnqcdKbf5s",
    //   username: "usama",
    //   first_name: "",
    //   last_name: "",
    //   groups: [],
    // });
  };

  return (
    <div
      className="d-flex card flex-column mx-auto col-md-3 col-10 p-4 mb-4"
      style={{ marginTop: "100px" }}
    >
      {props.loggedIn && <Redirect to={"/"} />}
      <h2>Login</h2>
      {error && <p className="text-danger">Please enter correct credentials</p>}
      <div className="d-flex flex-column my-3">
        <h6 className="text-muted">Username</h6>
        <input
          onChange={(e) => {
            updateState("username", e.target.value);
            setError(false);
          }}
          type="text"
          className="p-2"
        ></input>
      </div>
      <div className="d-flex flex-column my-3">
        <h6 className="text-muted">Password</h6>
        <input
          onChange={(e) => {
            updateState("password", e.target.value);
            setError(false);
          }}
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
