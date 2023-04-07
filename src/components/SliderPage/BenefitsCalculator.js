import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./BenefitsCalculator.css";

const BenefitsCalculator = ({minSchemeAmount, durationOfPlan, firstInstallmentDiscount, lastInstallmentDiscount }) => {
  const navigate = useNavigate();

  console.log("chosen plan duration is " + durationOfPlan);

  // State variables for slider1 and slider2 values
  const [amount, setAmount] = useState(minSchemeAmount);
  const [tenure, setTenure] = useState(durationOfPlan);

  // Interest rate calculation based on selected tenure
  const interestRate =
    tenure === 3 ? 7 : tenure === 6 ? 8 : tenure === 9 ? 9 : 10;

  // Calculated values for "You Pay" and "You Buy Jewellery For"
  // const youPay = amount * tenure;
  // const interestAmount = (youPay * interestRate) / 100;
  // const youBuyJewelleryFor = youPay + interestAmount;
  
  const totalDiscount = (amount * firstInstallmentDiscount) / 100 ; 
  const lastMonthBonus = (amount * lastInstallmentDiscount) / 100;
  const youPay = amount * tenure - totalDiscount;
  const youBuyJewelleryFor = amount * tenure + lastMonthBonus;

  sessionStorage.setItem('auth_amount', JSON.stringify(amount));
  const auth_amount = sessionStorage.getItem('auth_amount');
  console.log("auth_amount in benefits calculator "  + auth_amount);
  console.log("Chosen plan id on the benefits calculator page is :" + sessionStorage.getItem('chosen_plan_id'));

  // Logging the selected values to console on button click
  const handleButtonClick = () => {

    const data = {
      amount,
      tenure,
      // interestRate,
      youPay,
      // interestAmount,
      youBuyJewelleryFor,
      // fullName: fullNameRef.current.value,
      // phoneNumber: phoneNumberRef.current.value,
    };

    console.log(JSON.stringify(data));
    navigate('/register');
  };

  // Refs for input elements
  const fullNameRef = React.createRef();
  const phoneNumberRef = React.createRef();

  // JSX for Benefits Calculator component
  return (
    <div>
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
            min={minSchemeAmount}
            max={15000}
            defaultValue={5000}
            step={1000}
            value={amount}
            onChange={(event) => setAmount(Number(event.target.value))}
            className="slider"
          />
          <div className="slider-range">
            ₹{minSchemeAmount}
            <span className="slider-max">₹15000</span>
          </div>
        </div>
        <hr className="divider" />
        <div className="slider2">
          <div className="slider-label">
            {/* Please select the tenure */}
            Tenure for the scheme
            <span className="slider-subtext">
              This is the tenure of the scheme you have chosen
            </span>
          </div>
          {/* <div className="slider-value">{tenure === 12 ? 11 : tenure} Months</div> */}
          <div className="slider-value">{durationOfPlan} Months</div>
            {/* <input
              type="range"
              min={3}
              readonly
              max={12}
              step={3}
              value={tenure}
              // onChange={(event) => setTenure(Number(event.target.value) === 12 ? 11 : Number(event.target.value))}
              className="slider"
            />
            <div className="slider-range">
              3 Months<span className="slider-max">11 Months</span>
            </div> */}
        </div>
        {/* <hr className="divider" />
        <div className="interest">
          Interest: <span>{interestRate}%</span>
        </div> */}
        <hr className="divider" />
        <div className="slider2">
          <div className="slider-label">
            {/* Please select the tenure */}
            These are your discounts
            <span className="slider-subtext">
              Discounts which would be applied on first and last installments
            </span>
          </div>
          <div className="slider-value">
            <span>1st installment discount - </span>{firstInstallmentDiscount} %
            <br />
            <span>last installment bonus - </span>{lastInstallmentDiscount} %
          </div>
        </div>
        
        <hr className="divider" />
        <div className="purchase-plan">
          <div  className="purchase-plan-row">
        <div className="you-pay">You Pay</div>
        <div className="you-buy-jewellery-for">
          You Buy Jewellery For
          <span className="you-buy-jewellery-for-subtext">
            (including bonus)
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
    {/* <div className="input-container">
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
    </div> */}
    <button className="button" onClick={handleButtonClick}>
      Continue to Register
    </button>
    <div className="just_some_space"></div>
  </div>
    <footer>
      <div class="footer-container">
        <p>© Copyright FinShakti Solutions Pvt. Ltd. All Rights Reserved</p>
      </div>
    </footer>
  </div>
);
};

export default BenefitsCalculator;


