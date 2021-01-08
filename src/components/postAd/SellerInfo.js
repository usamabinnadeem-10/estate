import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function SellerInfo(props) {
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <div className="d-flex flex-column card p-2 col-12 align-items-center my-3">
      <div className="d-flex flex-row justify-content-around col-12 p-3 flex-wrap">
        <div className="d-flex flex-column col-12 col-md-6 p-2">
          <h6 className="text-muted">
            <span className="text-danger">*</span> Name
          </h6>
          <input
            onChange={(e) => props.setState("name", e.target.value)}
            placeholder="Name"
            type="text"
          ></input>
        </div>
        <div className="d-flex flex-column col-12 col-md-6 p-2">
          <h6 className="text-muted">
            <span className="text-danger">*</span> Email
          </h6>
          <input
            onChange={(e) => props.setState("email", e.target.value)}
            placeholder="Email"
            type="email"
          ></input>
        </div>
      </div>
      <Wrapper>
        <ReCAPTCHA
          sitekey="AIzaSyDYuHFLdk-1Yw9IfmS2dtogQj1vL4DkO2E"
          onChange={onChange}
        />
      </Wrapper>
      <button className="btn m-3 p-2 btn-lg btn-success col-6">Publish</button>
    </div>
  );
}

export default SellerInfo;
