import React from 'react'

const PaymentPage = () => {
  return (
    // <header>
    //     <div className="brand-name">Plus</div>
    //     <div className="passbook-heading">Passbook</div>
    //     <div className="user-name">Hi, {data.Name}</div>
    // </header>
    <div>
      <header className="header-wrapper">
          <div>
          <span className='brand_names'>PLUS | JEWELSHOP </span>
          </div>
          <div>
          <span className="scheme-name">Make Payment</span>
          {/* <Link className="visit-link" to="https://google.com" target='_blank'>
              Visit xyz website
          </Link> */}
          <a className='visit-link' href='https://google.com' target='_blank' rel='noreferrer'>Explore the Jeweller Website</a>
          </div>
      </header>
      <div className="container">
        <h1>Payment Page</h1>
      </div>
    
    </div>
    
  )
}

export default PaymentPage