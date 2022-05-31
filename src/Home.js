import React from "react";
import logo from './img/logo.png';
import './Home.css';
import Search from './Search';


function Home() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <Search/>
      </header>
    </div>
  );
}

export default Home;
