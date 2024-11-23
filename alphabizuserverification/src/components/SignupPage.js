import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";
import "../styles/SignupPage.css";
import "../styles/fonts.css";

const SignupPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ name: "", email: "", password: "", age: "", gender: "", contactNumber: ""});
  const [isChecked, setIsChecked] = useState(false);

  const handleLoginSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    const { name, email, password, age, gender, contactNumber } = data;

    if (!isChecked) {
      toast.error("Please agree to the terms & policy before signing up.");
      return;
    }

    try {
      const { data } = await axios.post("/register/user", { name, email, password, age, gender, contactNumber});
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({name: "", email: "", password: "",age: "", gender: "", contactNumber: ""});
        toast.success(data.message);
        navigate("/clientlogin");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2 className="signup-title poppins-medium">Get Started Now</h2>
        <p className="signup-subtitle poppins-medium">
          Enter your Credentials to access your account
        </p>
        <form className="signup-form" onSubmit={handleLoginSubmit}>
          <label className="form-label" htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            className="form-input"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            placeholder="Enter your name"
            required
          />
          <label className="form-label" htmlFor="email">Email address</label>
          <input
            id="email"
            type="email"
            className="form-input"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            placeholder="Enter your email"
            required
          />
          
          <div className="age-gender-container">
          <div className="input-container">
            <label className="form-label" htmlFor="age">Age</label>
            <input
              id="age"
              type="number"
              className="form-input"
              value={data.age}
              onChange={(e) => setData({ ...data, age: parseInt(e.target.value, 10) || "" })}
              placeholder="Enter your age"
              min="0"
              required
            />
          </div>
          <div className="input-container">
            <label className="form-label" htmlFor="gender">Gender</label>
            <select
              id="gender"
              className="form-menu"
              value={data.gender}
              onChange={(e) => setData({ ...data, gender: e.target.value })}
              required
            >
              <option value="" disabled>Select your gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="nonbinary">Nonbinary</option>
            </select>
          </div>
        </div>


          <label className="form-label" htmlFor="contactNumber">Contact Number</label>
          <input
            id="contactNumber"
            type="tel"
            className="form-input"
            value={data.contactNumber}
            onChange={(e) => setData({ ...data, contactNumber: e.target.value })}
            placeholder="(123) 456-7890 or 1234567890"
            pattern="^(\(\d{3}\)\s?\d{3}-\d{4}|\d{10})$"
            required
          />

          <label className="form-label" htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className="form-input"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            placeholder="Enter your password"
            
            required
          />
          <label className="form-checkbox">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            I agree to the <a href="../assets/Terms&policy .txt">terms & policy</a>
          </label>
          <button type="submit" className="signup-button">Signup</button>
        </form>
        <div className="signup-footer">
          <p className="or">Or</p>
          <p className="signin-text">
            Have an account? <a href="/clientlogin" className="signin-link">Sign in</a>
          </p>
        </div>
      </div>
      <div className="background-image"></div>
    </div>
  );
};

export default SignupPage;
