import React from 'react'
import { Link } from 'react-router-dom';
import './SliderPage.css';
import BenefitsCalculator from './BenefitsCalculator';

const SliderPage = () => {
  console.log("Minimum scheme amount" + sessionStorage.getItem('minAmount'));
  console.log("Plan duration" + sessionStorage.getItem('duration_of_plan'));
  console.log(sessionStorage.getItem('first_installment_discount'));
  const minSchemeAmount = sessionStorage.getItem('minAmount');
  const durationOfPlan = sessionStorage.getItem('duration_of_plan');
  const firstInstallmentDiscount = sessionStorage.getItem('first_installment_discount');
  const lastInstallmentDiscount = sessionStorage.getItem('last_installment_discount');
  console.log("type of duration is " + typeof durationOfPlan);
  
  return (
    <div>
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
          <span className="scheme-name">Select Amount</span>
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
        <section class="hero">
            <div class="hero-content">
            <h1 class="hero-title">
                JewelShop's Purchase Plan
            </h1>
            <h2 class="hero-subtitle">
                Pay for 11 months & get upto 10.0% benefits on purchase
            </h2>
            </div>
        </section>
        <h1>Jewellery purchase plan calculator</h1>
        <BenefitsCalculator 
          minSchemeAmount={minSchemeAmount}
          durationOfPlan = {durationOfPlan}
          firstInstallmentDiscount = {firstInstallmentDiscount}
          lastInstallmentDiscount = {lastInstallmentDiscount}
        />
        <body>
            <div className=''>

            </div>
        </body>
        
    </div>
  )
}

export default SliderPage