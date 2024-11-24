
import './styles/App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ClientLoginPage from "./components/ClientLoginPage";
import AdminLoginPage from "./components/AdminLoginPage";
import SignupPage from "./components/SignupPage";
import OTPPage from "./components/OTPPage";
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';
import axios from 'axios'

axios.defaults.baseURL = "https://alphabiz-server.onrender.com/api"
axios.defaults.withCredentials = true
const App = () => {
  return (
    <Router>
      <div className='app'>
      < Toaster position='top-right' toastOptions={{duration: 10000}} /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/clientlogin" element={<ClientLoginPage />} />
        <Route path="/adminlogin" element={<AdminLoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/otp" element={<OTPPage />} />
      </Routes>
      <Footer />
      </div>
    </Router>
  );
};

export default App;
