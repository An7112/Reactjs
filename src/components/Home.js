import React from "react";
import { Link } from "react-router-dom";
import './home.css';
import BannerImage from '../img/banner.jpg';
function Home () {
    return (
        <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
        <h1> AAAAA </h1>
        <p> AAAAAAAAAA</p>
        <Link to="/menu">
          <button> VIEW NOW </button>
        </Link>
      </div>
        </div>

    )
}

export default Home;