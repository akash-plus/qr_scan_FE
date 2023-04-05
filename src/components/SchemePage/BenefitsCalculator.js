import React, { useState, useEffect } from "react";
import "./BenefitsCalculator.css";

const BenefitsCalculator = () => {
  // State variables for slider1 and slider2 values
  const [amount, setAmount] = useState(1000);
  const [tenure, setTenure] = useState(3);

  // Interest rate calculation based on selected tenure
  const interestRate =
    tenure === 3 ? 7 : tenure === 6 ? 8 : tenure === 9 ? 9 : 10;

  // Calculated values for "You Pay" and "You Buy Jewellery For"
  const youPay = amount * tenure;
  const interestAmount = (youPay * interestRate) / 100;
  const youBuyJewelleryFor = youPay + interestAmount;

  // Logging the selected values to console on button click
  const handleButtonClick = () => {
    const data = {
      amount,
      tenure,
      interestRate,
      youPay,
      interestAmount,
      youBuyJewelleryFor,
      fullName: fullNameRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
    };
    console.log(JSON.stringify(data));
  };

  // Refs for input elements
  const fullNameRef = React.createRef();
  const phoneNumberRef = React.createRef();

  // Effects for updating font size of amount based on slider1 value
  // useEffect(() => {
  //   const amountElement = document.getElementById("amount");
  //   if (amountElement) {
  //     const fontSize = 28 + ((amount - 1000) / 1000) * 12;
  //     amountElement.style.fontSize = `${fontSize}px`;
  //   }
  // }, [amount]);

  // JSX for Benefits Calculator component
  return (

    <div className="benefits-calculator">
      <div className="slider1">
        <div className="slider-label">
          Select how much you want to save
          <span className="slider-subtext">
            Please select the amount you want to save per month
          </span>
        </div>
        <div className="slider-value">
          ₹ <span id="amount">{amount}</span>/Month
        </div>
        <input
          type="range"
          min={1000}
          max={15000}
          defaultValue={5000}
          step={1000}
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
          className="slider"
        />
        <div className="slider-range">
          ₹1000
          <span className="slider-max">₹15000</span>
        </div>
      </div>
      <hr className="divider" />
      <div className="slider2">
        <div className="slider-label">
        Please select the tenure
          <span className="slider-subtext">
            Please select the tenure for which you want to save
          </span>
        </div>
        <div className="slider-value">{tenure === 12 ? 11 : tenure} Months</div>
        <input
          type="range"
          min={3}
          max={12}
          step={3}
          value={tenure}
          onChange={(event) => setTenure(Number(event.target.value) === 12 ? 11 : Number(event.target.value))}
          className="slider"
        />
        <div className="slider-range">
          3 Months<span className="slider-max">11 Months</span>
        </div>
      </div>
      <hr className="divider" />
      <div className="interest">
        Interest: <span>{interestRate}%</span>
      </div>
      <hr className="divider" />
      <div className="purchase-plan">
        <div  className="purchase-plan-row">
      <div className="you-pay">You Pay</div>
      <div className="you-buy-jewellery-for">
        You Buy Jewellery For
        <span className="you-buy-jewellery-for-subtext">
          (including {interestRate}% interest)
        </span>
      </div>
    </div>
    <div className="purchase-plan-row">
      <div className="you-pay-value">₹ {youPay}</div>
      <div className="you-buy-jewellery-for-value">
        ₹ {youBuyJewelleryFor}
      </div>
    </div>
  </div>
  <hr className="divider" />
  <div className="input-container">
    <input
      type="text"
      placeholder="Full name"
      ref={fullNameRef}
      className="input"
    />
    <input
      type="tel"
      placeholder="Phone Number"
      ref={phoneNumberRef}
      className="input"
    />
  </div>
  <button className="button" onClick={handleButtonClick}>
    Go to Payments Page
  </button>
</div>
);
};

export default BenefitsCalculator;