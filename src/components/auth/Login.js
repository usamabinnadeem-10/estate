import React from 'react'

function Login() {
    return (
        <div className="d-flex card flex-column mx-auto col-3 p-4" style={{marginTop : '150px'}}>
            <h2>Login</h2>
            <div className="d-flex flex-column my-3">
                <h6 className="text-muted">Email</h6>
                <input type="text" className="p-2"></input>
            </div>
            <div className="d-flex flex-column my-3">
                <h6 className="text-muted">Password</h6>
                <input type="password" className="p-2"></input>
            </div>
            <button className="btn btn-md btn-primary fw-bold my-3">Login</button>
        </div>
    )
}

export default Login
