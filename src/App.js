import Header from "./components/header/Header";
import React, { useState, useEffect } from "react";
import Ad from "./components/postAd/Ad";
import Map from "./components/map/Map";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Home from "./components/home/Home";
import MapSearch from "./components/mapSearch/MapSearch";
import AdPage from "./components/adPage/AdPage";
import NewsPage from "./components/home/NewsPage";
import NewsCreate from "./components/news/NewsCreate";
import NewsNew from "./components/news/NewsNew";
import NewsFinal from "./components/news/NewsFInal";
import Profile from "./components/userProfile/Profile";
import { URL } from "./URL";
import axios from "axios";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  const [allAds, setAllAds] = useState([]);
  const [allNews, setAllNews] = useState([]);
  const [fetched, setFetched] = useState(false);
  const [currentLocation, setCurrentLocation] = useState({
    lat: 55.748976622798736,
    lng: 37.62533632839606,
  });
  useEffect(() => {
    axios
      .get(URL + "api/get-all-ads/")
      .then((res) => {
        setAllAds(res.data);
        axios.get(URL + "api/news/").then((res) => {
          setAllNews(res.data);
        });
      })
      .then((res) => {
        setFetched(true);
      });
  }, []);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setCurrentLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      window.alert("Please allow location access");
    }
  }, []);

  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const searchAds = (ads) => {
    setAllAds(ads);
  };

  const loginHelper = (data) => {
    setUser(data);
    setLoggedIn(true);
    var tomorrow = new Date();
    tomorrow.setDate(new Date().getDate() + 1);
    localStorage.setItem("expiry", tomorrow);
    localStorage.setItem("user", JSON.stringify(data));
  };

  const logoutHelper = () => {
    setUser({});
    setLoggedIn(false);
    localStorage.removeItem("user");
    localStorage.removeItem("expiry");
  };

  useEffect(() => {
    if (new Date() > new Date(Date.parse(localStorage.getItem("expiry")))) {
      logoutHelper();
    } else {
      var dt = new Date();
      var exp = new Date(Date.parse(localStorage.getItem("expiry")));
      let duration = exp.getTime() - dt.getTime();
      if (duration > 0) {
        setUser(JSON.parse(localStorage.getItem("user")));
        setLoggedIn(true);
      }
      setTimeout(() => {
        logoutHelper();
      }, duration);
    }
  }, []);

  return (
    <div className="container-fluid p-0">
      <Header loggedIn={loggedIn} logout={logoutHelper} />
      <Switch>
        <Route exact path="/" component={Home}>
          <Home ads={allAds} news={allNews} search={searchAds} />
        </Route>
        {!loggedIn && (
          <Route exact path="/login" component={Login}>
            <Login loggedIn={loggedIn} login={loginHelper} />
          </Route>
        )}

        {!loggedIn && (
          <Route exact path="/signup" component={SignUp}>
            <SignUp loggedIn={loggedIn} />
          </Route>
        )}

        {loggedIn && (
          <Route exact path="/post-ad" component={Ad}>
            <Ad user={user} />
          </Route>
        )}

        <Route exact path="/Ad/:id" component={AdPage}>
          <AdPage loggedIn={loggedIn} />
        </Route>
        <Route exact path="/news-article/:id" component={NewsPage}>
          <NewsPage />
        </Route>

        {loggedIn && (
          // <Route exact path="/create-news" component={NewsCreate}>
          //   <NewsCreate loggedIn={loggedIn} />
          // </Route>
          // <Route exact path="/create-news" component={NewsNew}>
          //   <NewsNew loggedIn={loggedIn} />
          // </Route>
          <Route exact path="/create-news" component={NewsFinal}>
            <NewsFinal loggedIn={loggedIn} />
          </Route>
        )}

        {loggedIn && (
          <Route exact path="/my" component={Profile}>
            <Profile loggedIn={loggedIn} />
          </Route>
        )}
        <Route exact path="/map-search" component={MapSearch}>
          <div
            className="mb-4 d-flex flex-column"
            style={{ marginTop: "100px" }}
          >
            <h2 className="col-10 mx-auto my-4">Map Search</h2>
            {fetched && (
              <MapSearch center={currentLocation} zoom={10} places={allAds} />
            )}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
