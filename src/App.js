import Header from "./components/header/Header";
import React, { useState } from "react";
import Ad from "./components/postAd/Ad";
import Map from "./components/map/Map";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Home from "./components/home/Home";
import MapSearch from "./components/mapSearch/MapSearch";
import AdPage from "./components/adPage/AdPage";
import NewsPage from "./components/home/NewsPage";
import NewsCreate from "./components/news/NewsCreate";
import Profile from "./components/userProfile/Profile";

import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const loginHelper = (data) => {
    setUser(data);
    setLoggedIn(true);
  };

  return (
    <div className="container-fluid p-0">
      <Header />
      <Switch>
        <Route exact path="/" component={Home}>
          <Home />
        </Route>
        {!loggedIn && (
          <Route exact path="/login" component={Login}>
            <Login login={loginHelper} />
          </Route>
        )}

        {!loggedIn && (
          <Route exact path="/signup" component={SignUp}>
            <SignUp />
          </Route>
        )}

        {loggedIn && (
          <Route exact path="/post-ad" component={Ad}>
            <Ad />
          </Route>
        )}

        <Route exact path="/Ad/:id" component={AdPage}>
          <AdPage />
        </Route>
        <Route exact path="/news-article/:id" component={NewsPage}>
          <NewsPage />
        </Route>

        {loggedIn && (
          <Route exact path="/create-news" component={NewsCreate}>
            <NewsCreate />
          </Route>
        )}

        {loggedIn && (
          <Route exact path="/my" component={Profile}>
            <Profile />
          </Route>
        )}

        <Route exact path="/map-search" component={MapSearch}>
          <div
            className="mb-4 d-flex flex-column"
            style={{ marginTop: "100px" }}
          >
            <h2 className="col-10 mx-auto my-4">Map Search</h2>
            {/* <MapSearch
              center={{ lat: 40.6451594, lng: -74.0850826 }}
              zoom={10}
              places={dummyAds}
            /> */}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
