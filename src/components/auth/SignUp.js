import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import styled from "styled-components";
import axios from "axios";
import { URL } from "../../URL";
import { Redirect } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

function onChange(value) {
  console.log("Captcha value:", value);
}

export default function SignUp() {
  const [state, setState] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    password2: "",
  });
  const [error, setError] = useState(false);
  const [registered, setRegistered] = useState(false);

  const updateState = (key, val) => {
    let temp = state;
    temp[key] = val;
    setState(temp);
  };

  const handleClick = () => {
    // axios if successful, redirect to login page
    axios
      .post(URL + "auth/register/", state)
      .then((res) => {
        setRegistered(true);
      })
      .catch((err) => {
        setError(true);
      });
  };

  return (
    <div
      className="d-flex card flex-column mx-auto col-md-4 col-10 p-4 fw-bold mb-4"
      style={{ marginTop: "100px" }}
    >
      <h2>Register</h2>
      {error && (
        <p className="text-danger">Please remove errors and try again</p>
      )}
      {registered && <Redirect to="/login" />}
      <div className="d-flex flex-column my-3">
        <h6 className="text-muted">Username</h6>
        <input
          onChange={(e) => updateState("username", e.target.value)}
          type="text"
          className="p-2"
        ></input>
      </div>
      <div className="d-flex flex-column my-3">
        <h6 className="text-muted">Email</h6>
        <input
          onChange={(e) => updateState("email", e.target.value)}
          type="email"
          className="p-2"
        ></input>
      </div>
      <div className="d-flex flex-column my-3">
        <h6 className="text-muted">First Name</h6>
        <input
          onChange={(e) => updateState("first_name", e.target.value)}
          type="text"
          className="p-2"
        ></input>
      </div>
      <div className="d-flex flex-column my-3">
        <h6 className="text-muted">Last Name</h6>
        <input
          onChange={(e) => updateState("last_name", e.target.value)}
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
      <div className="d-flex flex-column my-3">
        <h6 className="text-muted">Confirm Password</h6>
        <input
          onChange={(e) => updateState("password2", e.target.value)}
          type="password"
          className="p-2"
        ></input>
      </div>
      <Wrapper>
        <ReCAPTCHA
          sitekey="AIzaSyDYuHFLdk-1Yw9IfmS2dtogQj1vL4DkO2E"
          onChange={onChange}
        />
      </Wrapper>
      <button
        onClick={() => handleClick()}
        className="btn btn-md btn-primary fw-bold my-3"
      >
        Register
      </button>
    </div>
  );
}
