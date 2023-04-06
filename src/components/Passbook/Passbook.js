import React from 'react';
import './Passbook.css';
import data from './data.json';

const Passbook = () => {
  return (
    <div className="passbook-container">
      {/* <header>
        <div className="brand-name">Plus</div>
        <div className="passbook-heading">Passbook</div>
        <div className="user-name">Hi, {data.Name}</div>
      </header> */}

      <header className="header-wrapper">
        <div>
          <span className='brand_names'>PLUS</span>
        </div>
        <div>
          <span className="scheme-name">Passbook</span>
          {/* <Link className="visit-link" to="https://google.com" target='_blank'>
            Visit xyz website
          </Link> */}
          <a className='visit-link' href='https://google.com' target='_blank' rel='noreferrer'>Visit the Jeweller Website</a>
        </div>
      </header>
      <hr />
      <div className="passbook-details">
        <div className="user-details">
          <div className="user-key">Name:</div>
          <div className="user-value">{data.Name}</div>
          <div className="user-key">UId:</div>
          <div className="user-value">{data.UId}</div>
          <div className="user-key">Scheme:</div>
          <div className="user-value">{data.Scheme}</div>
          <div className="user-key">Payments remaining:</div>
          <div className="user-value">{data.Payments_remaining}</div>     
        </div>
        {/* <hr className="divider" /> */}
        <table className="transaction-table">
          <thead>
            <tr>
              <th>Transaction Id</th>
              <th>Date</th>
              <th>Status</th>
              <th>Mode of Payment</th>
              <th>Benefits Accrued</th>
            </tr>
          </thead>
          <tbody>
            {data.transactions.map((transaction) => (
              <tr key={transaction.transaction_id}>
                <td>{transaction.transaction_id}</td>
                <td>{transaction.date}</td>
                <td>{transaction.status}</td>
                <td>{transaction.mode_of_payment}</td>
                <td>{transaction.benefits_accrued}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Passbook;
