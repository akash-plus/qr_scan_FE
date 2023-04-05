import React from 'react';
import './Passbook.css';
import data from './data.json';

const Passbook = () => {
  return (
    <div className="passbook-container">
      <header>
        <div className="brand-name">Plus</div>
        <div className="passbook-heading">Passbook</div>
        <div className="user-name">Hi, {data.Name}</div>
      </header>
      <div className="passbook-details">
        <div className="user-details">
          <div className="user-key">Name:</div>
          <div className="user-value">{data.Name}</div>
          <div className="user-key">UId:</div>
          <div className="user-value">{data.UId}</div>
          <div className="user-key">Scheme:</div>
          <div className="user-value">{data.Scheme}</div>
          <div className="user-key">Payments remaining:</div>
          <div className="user-value">{data.Payments_remaining}</div>     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        </div>
        <hr className="divider" />
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
