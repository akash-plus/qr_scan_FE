import React, { useState, useEffect } from 'react';
import './PassbookPage.css';
// import data from './data.json';

const PassbookPage = () => {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    const userData = sessionStorage.getItem("PassbookData");
    const parsedUserData = JSON.parse(userData);
    setData(parsedUserData);
  }, []);

  
  data.forEach((jsonObject) => {
    let dateStr = jsonObject.created_at;
    let dateOnly = dateStr.slice(0, 10);
    jsonObject.created_at = dateOnly;
  });
  
  console.log("dates in new format are :");
  console.log(data);
  
  return (
    <div className="passbook-container">
      <header className="header-wrapper">
        <div>
          <h1>
            <span 
              className="brand_names" 
              >+
            </span>Plus | <span className="brand_names2" 
           
          >Your Logo </span>
          </h1>
        </div>
        <div>
        </div>
        <div>
          <span className="scheme-name">Your Passbook</span>
          <a className='visit-link' href='#'  rel='noreferrer' 
        >Help & Support</a>
        </div>
      </header>
      <div className="passbook-details">
        <div className="user-details">
          <div className="user-key">Profile Number:</div>
          {/* <div className="user-value">{data && data[0].profile__phone_number}</div> */}
          <div className="user-key">Profile Email:</div>
        </div>
        {/* <hr className="divider" /> */}
        <table className="transaction-table">
          <thead>
            <tr>
              <th>Transaction Id</th>
              <th>Date</th>
              <th>Status</th>
              <th>Mode of Payment</th>
              {/* <th>Amount</th> */}
            </tr>
          </thead>
          <tbody>
            {data && data.map((transaction) => (
              <tr key={transaction.transaction_id}>
                <td>{transaction.transaction_id}</td>
                {/* <td>2023-04-07</td> */}
                <td>{transaction.created_at}</td>
                <td>{transaction.status}</td>
                <td>Online</td>
                {/* <td>{transaction.amount}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PassbookPage;


// const phone = sessionStorage.getItem('customer_phone');
  // const otp = sessionStorage.getItem('customer_otp');

  // const loginVerify = {
  //   customer_phone: phone,
  //   customer_otp: otp
  // }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('https://sapi.getplus.in/api/v1/passbook/', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(loginVerify)
  //     });
  //     const data = await response.json();
  //     setData(data);
  //   };
  //   fetchData();
  // }, []);
  // if (userData) {
  //   const parsedUserData = JSON.parse(userData);
  //   setData(parsedUserData);
  //   console.log("This is the user data");
  //   console.log(parsedUserData);
  //   console.log("First transaction data");
  //   console.log(parsedUserData[0]);
  // }