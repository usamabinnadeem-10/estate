import React, { useEffect, useState } from "react";
import AdBox from "../home/AdBox";
import axios from "../../services/axios";
import { URL } from "../../URL";
import { config } from "../../URL";

function Profile() {
  const [user, setUser] = useState({
    id: "",
    email: "",
    username: "",
    first_name: "",
    last_name: "",
  });
  const [myAds, setMyAds] = useState([]);
  const [fetched, setFetched] = useState(false);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser({
      id: user.id,
      email: user.email,
      username: user.username,
      first_name: user.first_name,
      last_name: user.last_name,
    });

    axios
      .get(URL + "api/my-ads/?author=" + user.id, config)
      .then((res) => {
        setMyAds(res.data);
      })
      .then((res) => [setFetched(true)]);
  }, []);

  const disableAd = (id) => {
    axios
      .post(
        URL + "api/my-ad/disable/",
        {
          author: user.id,
          ad_id: id,
        },
        config
      )
      .then((res) => {
        setFetched(false);
        axios
          .get(URL + "api/my-ads/?author=" + user.id, config)
          .then((res) => {
            setMyAds(res.data);
          })
          .then((res) => [setFetched(true)]);
      });
  };

  const enableAd = (id) => {
    axios
      .post(
        URL + "api/my-ad/enable/",
        {
          author: user.id,
          ad_id: id,
        },
        config
      )
      .then((res) => {
        setFetched(false);
        axios
          .get(URL + "api/my-ads/?author=" + user.id, config)
          .then((res) => {
            setMyAds(res.data);
          })
          .then((res) => [setFetched(true)]);
      });
  };

  return (
    <div
      className="d-flex flex-column col-9 mx-auto"
      style={{ marginTop: "100px" }}
    >
      <div className="card p-3 my-3 col-12">
        <table className="table table-hover">
          <tbody>
            <tr>
              <th>First Name</th>
              <td>{user.first_name}</td>
            </tr>
            <tr>
              <th>Last Name</th>
              <td>{user.last_name}</td>
            </tr>
            <tr>
              <th>Username</th>
              <td>{user.username}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{user.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3>My Ads</h3>
      <div className="d-flex flex-row justify-content-between card p-3 my-3">
        {fetched &&
          myAds.map((ad) => {
            return (
              <div className="card d-flex flex-column">
                <AdBox
                  ad={ad}
                  price={ad.price}
                  images={ad.images}
                  rooms={ad.rooms}
                  area={ad.area}
                  location={ad.address}
                />
                {ad.isActive ? (
                  <button
                    id={ad.ad_id}
                    onClick={(e) => disableAd(e.target.id)}
                    className="btn-danger btn"
                  >
                    Disable Ad
                  </button>
                ) : (
                  <button
                    id={ad.ad_id}
                    onClick={(e) => enableAd(e.target.id)}
                    className="btn-success btn"
                  >
                    Enable Ad
                  </button>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Profile;
