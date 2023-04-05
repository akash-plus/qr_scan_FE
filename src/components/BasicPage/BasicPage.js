import React from 'react'
import { Link } from 'react-router-dom';


const BasicPage = () => {
    return (
        <header className="header-wrapper">
          <div>
            <span>abcd | gfhi</span>
          </div>
          <div>
            <span className="scheme-name">Scheme Name</span>
            <Link className="visit-link" to="/xyz-website">
              Visit xyz website
            </Link>
          </div>
        </header>
      );
}

export default BasicPage