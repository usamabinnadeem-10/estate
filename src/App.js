import Header from './components/header/Header'
import React, {useState} from 'react';
import Ad from './components/postAd/Ad'
import Map from './components/map/Map'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import Home from './components/home/Home'
import MapSearch from './components/mapSearch/MapSearch'
import {Switch, Route, Redirect} from 'react-router-dom';


const dummyAds = [
  {
    "id": 1,
    "name": "Park Slope",
    "price" : 90000,
    "img" : [
      "https://specials-images.forbesimg.com/imageserve/1026205392/960x0.jpg?fit=scale",
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/modern-house-2-1538579843.jpg?crop=1.00xw:0.731xh;0,0.264xh&resize=980:*",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Tiny_house%2C_Portland.jpg/800px-Tiny_house%2C_Portland.jpg"
    ],
    "latitude": "40.6710729",
    "longitude": "-73.9988001",
  },
  {
    "id": 2,
    "name": "Bushwick",
    "price" : 40000,
    "img" : [
      "https://specials-images.forbesimg.com/imageserve/1026205392/960x0.jpg?fit=scale",
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/modern-house-2-1538579843.jpg?crop=1.00xw:0.731xh;0,0.264xh&resize=980:*"
    ],
    "latitude": "40.6942861",
    "longitude": "-73.9389312",
  },
  {
    "id": 3,
    "name": "East New York",
    "price" : 70000,
    "img" : [
      "https://specials-images.forbesimg.com/imageserve/1026205392/960x0.jpg?fit=scale",
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/modern-house-2-1538579843.jpg?crop=1.00xw:0.731xh;0,0.264xh&resize=980:*"
    ],
    "latitude": "40.6577799",
    "longitude": "-73.9147716",
  }
]

function App() {

  return (
    <div className="container-fluid p-0">
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}>
          <Home/>
        </Route>
        <Route exact path='/login' component={Login}>
          <Login/>
        </Route>
        <Route exact path='/signup' component={SignUp}>
          <SignUp/>
        </Route>
        <Route exact path='/post-ad' component={Ad}>
          <Ad/>
        </Route>
        
      </Switch>
      
      {/* <div className="mb-4 d-flex flex-column" style={{marginTop : '120px'}}>
        <h2 className="col-10 mx-auto my-4">Map Search</h2>
        <MapSearch
          center={{ lat: 40.6451594, lng: -74.0850826 }}
          zoom={10}
          places={dummyAds}
        />
      </div> */}
      {/* <Ad/> */}
      {/* <Login/> */}
      {/* <SignUp/> */}
    </div>
  );
}

export default App;
