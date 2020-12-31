import React from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import styled from 'styled-components';

const Wrapper = styled.div`
    width : 100%;
    overflow : auto;
    display : flex;
    flex-direction : column;
    align-items : center;
    margin-top : 10px;
    margin-bottom : 10px;
`;

function onChange(value) {
    console.log("Captcha value:", value);
  }

export default function SignUp() {
    return (
        <div className="d-flex card flex-column mx-auto col-md-4 col-10 p-4 fw-bold mb-4" style={{marginTop : '250px'}}>
            <h2>Register</h2>
            <div className="d-flex flex-column my-3">
                <h6 className="text-muted">Name</h6>
                <input type="text" className="p-2"></input>
            </div>
            <div className="d-flex flex-column my-3">
                <h6 className="text-muted">Email</h6>
                <input type="text" className="p-2"></input>
            </div>
            <div className="d-flex flex-column my-3">
                <h6 className="text-muted">Password</h6>
                <input type="password" className="p-2"></input>
            </div>
            <div className="d-flex flex-column my-3">
                <h6 className="text-muted">Confirm Password</h6>
                <input type="password" className="p-2"></input>
            </div>
            <Wrapper>
                <ReCAPTCHA
                    sitekey="AIzaSyDYuHFLdk-1Yw9IfmS2dtogQj1vL4DkO2E"
                    onChange={onChange}
                />
            </Wrapper>
            <button className="btn btn-md btn-primary fw-bold my-3">Register</button>
        </div>
    )
}
