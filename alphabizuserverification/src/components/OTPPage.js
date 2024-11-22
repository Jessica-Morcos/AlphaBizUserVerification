import React from "react";
import "../styles/OTP.css"; // Link the CSS file
import "../styles/forms.css";
import axios from "axios";
import {useState} from "react";
import {toast} from "react-hot-toast";

const OTPPage = () => {
  
  const[otp,setOtp] = useState('')
  const handleOtpChange = async (e) => {
    e.preventDefault();
    try {
      // Post the OTP to the backend
      const response = await axios.post('/verify-user', { otpCode: otp });
  
      // Check the response from the backend
      if (response.data.error) {
        toast.error(response.data.error); // Display error message
      } else {
        setOtp(''); // Clear the OTP input field
        toast.success(response.data.message); // Display success message
      }
    } catch (err) {
      // Log and show error in case of a request failure
      console.error(err);
      toast.error('Something went wrong, please try again.');
    }
  };
  
  return (
    <div className="otp-page">
      <div className="otp-container">
        <h2 className="poppins-medium">Enter Your OTP </h2>
        <form className="otp-form" onSubmit={handleOtpChange}>

          
        <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} className="form-input" placeholder="One Time Pin" />
        <button type="submit" className="form-button">Login</button>

        </form>
      </div>
      <div className="background-image"></div>
    </div>
  );
};

export default OTPPage;
