import React from "react";
import AdBox from "../home/AdBox";

function Profile() {
  return (
    <div
      className="d-flex flex-column col-9 mx-auto"
      style={{ marginTop: "100px" }}
    >
      <div className="card p-3 my-3 col-12">
        <table className="table table-hover">
          <tbody>
            <tr>
              <th>Name</th>
              <td>Mr. Shaw</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>abc@abc.com</td>
            </tr>
            <tr>
              <th>Username</th>
              <td>Shaw123</td>
            </tr>
            <tr>
              <th>Contact</th>
              <td>03000000000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3>My Ads</h3>
      <div className="d-flex flex-row justify-content-between card p-3 my-3">
        <div className="card d-flex flex-column">
          <div style={{ height: "100px", width: "100px" }}>My Awesome Ad</div>
          <button className="btn-danger btn">Disable Ad</button>
        </div>
        <div className="card d-flex flex-column">
          <div>My Awesome Ad</div>
          <button className="btn-danger btn">Disable Ad</button>
        </div>
        <div className="card d-flex flex-column">
          <div>My Awesome Ad</div>
          <button className="btn-danger btn">Disable Ad</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
