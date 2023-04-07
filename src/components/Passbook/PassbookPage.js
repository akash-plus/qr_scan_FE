import React, { useState, useEffect } from 'react';
import './PassbookPage.css';
// import data from './data.json';

const PassbookPage = () => {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    const userData = sessionStorage.getItem("PassbookData");
    const parsedUserData = JSON.parse(userData);
    setData(parsedUserData);
  }, [])
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

  


  
  
  return (
    <div className="passbook-container">
      <header className="header-wrapper">
        <div>
          <h1>
            <span 
              class="brand_names" 
              // style="color: #FFDF00;
              // font-size: 36px;
              // font-weight: bold;"
              >+
            </span>Plus | <span class="brand_names2" 
            // style="
            // color: #10E000;
            // font-size: 29px;
            // font-weight: 300;"
          >Your Logo </span>
          </h1>
        </div>
        <div>
          {/* <span className='brand_names'>PLUS | JEWELSHOP </span> */}
        </div>
        <div>
          <span className="scheme-name">Your Passbook</span>
          {/* <Link className="visit-link" to="https://google.com" target='_blank'>
            Visit xyz website
          </Link> */}
          <a className='visit-link' href='#'  rel='noreferrer' 
          // style=
          // "font-family: var(--font-primary);
          //   font-weight: 500;
          //   font-size: 15px;
          //   letter-spacing: 1px;
          //   display: inline-block;
          //   padding: 14px 40px;
          //   border-radius: 50px;
          //   transition: 0.3s;
          //   color: #fff;
          //   background: rgb(11 142 0 / 90%);
          //   text-decoration: none;"
        >Help & Support</a>
        </div>
      </header>
      {/* <hr /> */} 
      <div className="passbook-details">
        <div className="user-details">
          <div className="user-key">Profile Number:</div>
          {/* <div className="user-value">{data && data[0].profile__phone_number}</div> */}
          <div className="user-key">Profile Email:</div>
          {/* <div className="user-value">{data && data[0].profile__user__email}</div> */}
          {/* <div className="user-key">UId:</div>
          <div className="user-value">{data.UId}</div>
          <div className="user-key">Scheme:</div>
          <div className="user-value">{data.Scheme}</div> */}
          {/* <div className="user-key">Payments remaining:</div>
          <div className="user-value">{data.Payments_remaining}</div>      */}
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
                <td>2023-04-07</td>
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
