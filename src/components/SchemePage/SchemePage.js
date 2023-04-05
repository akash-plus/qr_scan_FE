import React from 'react'
import { Link } from 'react-router-dom';
import './SchemePage.css';

const SchemePage = () => {
  return (
    <div>
        <header className="header-wrapper">
          <div>
            <span className='brand_names'>PLUS | JEWELSHOP </span>
          </div>
          <div>
            <span className="scheme-name">Particular Scheme</span>
            {/* <Link className="visit-link" to="https://google.com" target='_blank'>
              Visit xyz website
            </Link> */}
            <a className='visit-link' href='https://google.com' target='_blank' rel='noreferrer'>Visit the Jeweller Website</a>
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
        <body>
            <div className=''>

            </div>
        </body>
    </div>
  )
}

export default SchemePage