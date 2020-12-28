import Header from './components/header/Header'
import React, {useState} from 'react';
import Ad from './components/postAd/Ad'
import Map from './components/map/Map'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import Home from './components/home/Home'
function App() {

  return (
    <div className="container-fluid">
      <Header/>
      <Home/>
      {/* <Ad/> */}
      {/* <Login/> */}
      {/* <SignUp/> */}
    </div>
  );
}

export default App;
