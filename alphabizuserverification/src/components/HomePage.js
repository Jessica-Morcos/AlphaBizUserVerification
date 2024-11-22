import React from "react";
import { Link } from "react-router-dom";
import homePageImage from "../assets/HomePagePicture.svg";
import "../styles/App.css";
import "../styles/HomePage.css";
import "../styles/fonts.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="card">
        <div className="card-content">
          <div className="text-section">
            <div className="header">
              <h1 className="poppins-extrabold">BIZPOINTS</h1>
              <p className="poppins-medium">Rewards that mean business!</p>
            </div>
            <div className="buttons">
              <Link to="/signup">
                <button className="signup-btn poppins-bold">Signup</button>
              </Link>
              <p className="or poppins-medium">Or</p>
              <div className="logins">
                <Link to="/clientlogin">
                  <button className="login-btn poppins-bold">Client Login</button>
                </Link>
                <Link to="/adminlogin">
                  <button className="login-btn poppins-bold">Admin Login</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="image-section">
            <img src={homePageImage} alt="Celebration" className="home-image" />
          </div>
        </div>
      </div>
      <div className="footer">
        <p className="footer-text">
          Contact Us: <a href="tel:1234567890">123 456-7890</a> for troubleshooting.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
