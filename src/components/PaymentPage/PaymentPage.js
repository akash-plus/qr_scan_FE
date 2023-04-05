import React from 'react'

const PaymentPage = () => {
  return (
    // <header>
    //     <div className="brand-name">Plus</div>
    //     <div className="passbook-heading">Passbook</div>
    //     <div className="user-name">Hi, {data.Name}</div>
    // </header>
    <header className="header-wrapper">
        <div>
        <span className='brand_names'>PLUS | JEWELSHOP </span>
        </div>
        <div>
        <span className="scheme-name">PASSBOOK</span>
        {/* <Link className="visit-link" to="https://google.com" target='_blank'>
            Visit xyz website
        </Link> */}
        <a className='visit-link' href='https://google.com' target='_blank' rel='noreferrer'>Explore the Jeweller Website</a>
        </div>
  </header>
  )
}

export default PaymentPage