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

function toRad(Value) {
  return (Value * Math.PI) / 180;
}

function calcCrow(lat1, lon1, lat2, lon2) {
  var R = 6371; // km
  var dLat = toRad(lat2 - lat1);
  var dLon = toRad(lon2 - lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);

  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
}

function sort(list, location) {
  console.log(list);
  let tempList = [];
  list.forEach((element) => {
    console.log(element);
    let temp = element;
    let diff = calcCrow(
      element.latitude,
      element.longitude,
      location.lat,
      location.lng
    );
    temp["diff"] = diff;
    tempList.push(temp);
  });
  // console.log(tempList);
  let entries = Object.entries(tempList);
  let sorted = entries.sort((a, b) => a[1].diff - b[1].diff);
  sorted = Object.fromEntries(sorted);
  for (var prop in sorted) {
    tempList.push(sorted[prop]);
  }
  console.log(tempList);
  return tempList;
}

function App() {
  const [allAds, setAllAds] = useState([]);
  const [premium, setPremium] = useState([]);
  const [regular, setRegular] = useState([]);
  const [allNews, setAllNews] = useState([]);
  const [fetched, setFetched] = useState(false);
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentLocation, setCurrentLocation] = useState({
    lat: 55.748976622798736,
    lng: 37.62533632839606,
  });

  // setting current coordinates using the location services
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

  // fetch all ads and sort them between premium and regular ads
  useEffect(() => {
    axios
      .get(URL + "api/get-all-ads/")
      .then((res) => {
        setAllAds(res.data);
        let prem = res.data.filter((ad) => ad.isPremium);
        let reg = res.data.filter((ad) => !ad.isPremium);
        // prem = sort(prem, currentLocation);
        // reg = sort(reg, currentLocation);
        setPremium(prem);
        setRegular(reg);
        axios.get(URL + "api/news/").then((res) => {
          setAllNews(res.data);
        });
      })
      .then((res) => {
        setFetched(true);
      });
  }, []);

  // if allAds change then change the premium and regular too
  useEffect(() => {
    let ads = allAds;
    let prem = ads.filter((ad) => ad.isPremium);
    let reg = ads.filter((ad) => !ad.isPremium);
    // prem = sort(prem, currentLocation);
    // reg = sort(reg, currentLocation);
    setPremium(prem);
    setRegular(reg);
  }, [allAds]);

  // helper function for the Home component
  const searchAds = (ads) => {
    setAllAds(ads);
  };

  // helper to set location if an address is searched
  const setLocationHelper = (location) => {
    setCurrentLocation(location);
  };

  // log the user in
  const loginHelper = (data) => {
    setUser(data);
    setLoggedIn(true);
    var tomorrow = new Date();
    tomorrow.setDate(new Date().getDate() + 1);
    localStorage.setItem("expiry", tomorrow);
    localStorage.setItem("user", JSON.stringify(data));
  };

  // log the user out
  const logoutHelper = () => {
    setUser({});
    setLoggedIn(false);
    localStorage.removeItem("user");
    localStorage.removeItem("expiry");
  };

  // check if the token needs to be expired
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
        {fetched && (
          <Route exact path="/" component={Home}>
            <Home
              premium={premium}
              regular={regular}
              news={allNews}
              search={searchAds}
              setLocation={setLocationHelper}
            />
          </Route>
        )}

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

        <Route exact path="/post-ad" component={Ad}>
          <Ad loggedIn={loggedIn} user={user} />
        </Route>

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
