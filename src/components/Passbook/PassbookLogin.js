import React, { useState } from 'react';
import './PassbookLogin.css';
import { useNavigate } from 'react-router-dom';

const PassbookLogin = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();

  const justPhone = {
    customer_phone: phone
  }

  const sendOtp = async () => {
    // Make a POST request to the server to send OTP
    // Replace the URL with the actual API endpoint
    const response = await fetch('https://sapi.getplus.in/api/v1/get-otp/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(justPhone),
    });

    const data = await response.json();

    if (data.Status === 'OTP Sent') {
      setOtpSent(true);
    }
  };

  const loginVerify = {
    customer_phone: phone,
    customer_otp: otp
  }

  const login = async () => {
    // Make a POST request to the server to verify OTP and login
    // Replace the URL with the actual API endpoint
    const response = await fetch('https://sapi.getplus.in/api/v1/passbook/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginVerify),
    });

    if (response.status === 200) {
      const data = await response.json();
      // Redirect to passbook page with the data from the response
      // Replace "/passbook" with the actual route for the passbook page
      // and pass the required data as props or save it in a state management solution
      // like Redux or Context API
      navigate('/user-passbook');
      console.log(data); // Replace this line with the redirection logic
      sessionStorage.setItem("PassbookData", JSON.stringify(data));
    }
  };

  return (
    <div className="login-form-container">
      <h2>Login</h2>
      <form className="login-form">
        <input
          type="tel"
          pattern="[0-9]{10}"
          maxLength="10"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          disabled={otpSent}
        />
        {otpSent && (
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        )}
        <button
          type="button"
          onClick={otpSent ? login : sendOtp}
        >
          {otpSent ? 'Log In' : 'Get OTP'}
        </button>
      </form>
    </div>
  );
};

export default PassbookLogin;
