import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from 'react-hot-toast';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/logins.css"; // Link the CSS file
import "../styles/fonts.css";
const AdminLoginPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const handleLoginSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    const {email, password} = data;
    try {
      const {data} = await axios.post('/login/admin', {
        email,
        password
      })
      if(data.error) {
        toast.error(data.error)
      } else {
        setData({email: '', password:''})
        toast.success(data.message)
        navigate('/otp')
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="login-page">
      <div className="login-container ">
        <h2 className="login-title poppins-medium">Welcome back, admin!</h2>
        <form className="login-form" onSubmit={handleLoginSubmit}>
          <label className="form-label ">Email</label>
          <input
            type="email"
            className="form-input"
            onChange={(e) => setData({...data, email: e.target.value})}
            placeholder="Enter your email"
            required
          />
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-input"
            value={data.password}
            onChange={(e) => setData({...data, password: e.target.value})}
            placeholder="Enter your password"
            required
          />
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="signup-footer">
          <p className="or">Or</p>
          <p className="signup-text">
            Don't have an account?{" "}
            <a href="/signup" className="signup-link">
              Sign up
            </a>
          </p>
        </div>
      </div>
      <div className="background-image"></div>
    </div>
  );
};

export default AdminLoginPage;